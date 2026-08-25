import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../atoms/Button';
import { Display } from '../atoms/Typography';
import carletonImage from '../../assets/carleton.jpg';

interface CtaBandProps {
  title: string;
  ctaLabel: string;
  ctaLink: string;
}

export function CtaBand({ title, ctaLabel, ctaLink }: CtaBandProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.section
      ref={ref}
      className="relative py-section px-6 overflow-hidden bg-surface-dark"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Parallax background image */}
      <motion.img
        src={carletonImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y: imageY }}
      />

      {/* Gradient overlay — dark at edges, lighter center for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/80 via-surface-dark/60 to-surface-dark/80" />

      <div className="relative max-w-[720px] mx-auto flex flex-col items-center text-center gap-6">
        <Display as="h2" size="lg" className="text-on-dark">
          {title}
        </Display>
        <Button to={ctaLink}>{ctaLabel}</Button>
      </div>
    </motion.section>
  );
}
