import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HeroBand } from '../components/organisms/HeroBand';
import { GradientOrbCard } from '../components/organisms/GradientOrbCard';
import { CtaBand } from '../components/organisms/CtaBand';
import { Reveal } from '../components/atoms/Reveal';
import { Display } from '../components/atoms/Typography';
import { researchInterests } from '../data/research';
import { news } from '../data/news';
import dataScienceImage from '../assets/dataScienceWing.jpg';

const gradientColors: Array<'mint' | 'peach' | 'lavender' | 'sky' | 'rose'> = [
  'mint',
  'peach',
  'lavender',
  'sky',
  'rose',
];

export function HomePage() {
  return (
    <main>
      <HeroBand
        title="Making software development decisions driven by data."
        subtitle="The SWAN Research Lab applies AI, ML, and NLP techniques to tackle software engineering problems. We develop novel techniques and tools to synthesize knowledge from development artifacts and support practitioners' decision-making."
        primaryCta="Explore Our Research"
        primaryCtaLink="/research"
        secondaryCta="Meet the Team"
        secondaryCtaLink="/people"
      />

      {/* About the Lab — with parallax image */}
      <AboutWithParallax />

      {/* Research Interests */}
      <Reveal as="section" className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Display as="h2" size="lg">
            Research Interests
          </Display>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {researchInterests.slice(0, 6).map((interest, i) => (
              <motion.div
                key={interest.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <GradientOrbCard
                  title={interest.title}
                  variant={gradientColors[i % gradientColors.length]}
                >
                  {interest.description}
                </GradientOrbCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* Recent News */}
      <Reveal as="section" className="py-section px-6 bg-canvas-soft">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <Display as="h2" size="lg">
              Recent News
            </Display>
            <a
              href="/news"
              className="font-body text-[15px] font-medium text-accent hover:text-ink no-underline transition-colors duration-150"
            >
              View all news &rarr;
            </a>
          </div>
          <motion.div
            className="bg-surface-card rounded-xl border border-hairline p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {news.slice(0, 3).map((item) => (
              <motion.div
                key={item.date}
                className="py-4 border-b border-hairline last:border-b-0 first:pt-0 last:pb-0"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <time className="font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-accent">
                  {item.date}
                </time>
                <p className="mt-2 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <CtaBand
        title="Interested in joining the lab?"
        ctaLabel="Contact Dr. Baysal"
        ctaLink="/contact"
      />
    </main>
  );
}

function AboutWithParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={ref}
      className="relative py-section px-6 bg-canvas-soft overflow-hidden"
    >
      <div className="relative max-w-[1200px] mx-auto flex flex-col gap-12">
        <Reveal>
          <div>
            <Display as="h2" size="lg">
              About the Lab
            </Display>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Parallax image */}
          <motion.div
            className="lg:col-span-5 relative h-[300px] md:h-[400px] rounded-xxl overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.img
              src={dataScienceImage}
              alt="Carleton University Data Science Wing"
              className="absolute w-full h-[110%] object-cover"
              style={{ y: imageY }}
            />
          </motion.div>

          {/* Text columns */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 md:gap-12">
            <Reveal className="flex-1" delay={0.1}>
              <p className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body m-0">
                Software practitioners make technical and business decisions based
                on their understanding of software projects. This understanding is
                grounded in their own experiences, but can be augmented by
                studying various kinds of software development artifacts, including
                source code, bug reports, version control meta-data, test cases,
                usage logs, etc.
              </p>
            </Reveal>
            <Reveal className="flex-1" delay={0.2}>
              <p className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body m-0 md:border-l md:border-hairline md:pl-12">
                The software development knowledge contained in these artifacts is
                typically not organized in the way that is immediately accessible
                from and useful to developers and stakeholders&apos; decision
                making needs. Software analytics has emerged as a field of modern
                data analysis to address this challenge.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
