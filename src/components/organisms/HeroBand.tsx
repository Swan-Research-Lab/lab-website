import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../atoms/Button';
import { Display } from '../atoms/Typography';
import heroImage from '../../assets/posterEvent.jpg';

interface HeroBandProps {
  title: string;
  subtitle?: string;
  primaryCta?: string;
  primaryCtaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function HeroBand({
  title,
  subtitle,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
}: HeroBandProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.85]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] overflow-hidden bg-surface-dark"
      aria-label="Hero"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="SWAN Research Lab poster event"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Gradient overlay — strong dark fade for readability */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-canvas-deep via-canvas-deep/60 to-canvas-deep/20"
        style={{ opacity: overlayOpacity }}
      />

      {/* Extra radial scrim behind text area for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(12,10,9,0.7)_0%,_transparent_70%)]" />

      {/* Content — anchored to bottom-left */}
      <div className="relative h-full max-w-[1200px] mx-auto flex items-end px-6 pb-20 md:pb-24">
        <div className="max-w-[680px] flex flex-col gap-6 p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-canvas-deep/30">
          {/* Section label */}
          <motion.span
            className="font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-accent"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            Software Analytics Research Lab
          </motion.span>

          {/* Title */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Display as="h1" size="mega" className="text-on-dark">
              {title}
            </Display>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="font-body text-[18px] leading-[1.5] tracking-[0.16px] text-on-dark-soft max-w-[560px]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
            >
              {primaryCta && primaryCtaLink && (
                <Button to={primaryCtaLink}>{primaryCta}</Button>
              )}
              {secondaryCta && secondaryCtaLink && (
                <Button to={secondaryCtaLink} variant="inverse">
                  {secondaryCta}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-body text-[11px] font-semibold tracking-[0.96px] uppercase text-accent">
          Scroll
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <path
            d="M10 4L10 16M10 16L4 10M10 16L16 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
             className="text-accent"
           />
         </motion.svg>
       </motion.div>
    </section>
  );
}
