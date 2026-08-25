import { motion } from 'motion/react';
import { GradientOrbCard } from '../components/organisms/GradientOrbCard';
import { CollaborationCarousel } from '../components/organisms/CollaborationCarousel';
import { Display } from '../components/atoms/Typography';
import { Reveal } from '../components/atoms/Reveal';
import { researchInterests } from '../data/research';

const gradientColors: Array<'mint' | 'peach' | 'lavender' | 'sky' | 'rose'> = [
  'mint',
  'peach',
  'lavender',
  'sky',
  'rose',
];

export function ResearchPage() {
  return (
    <main>
      <section className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Reveal>
            <div>
              <Display as="h1" size="xl">
                Research
              </Display>
              <p className="mt-6 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                The SWAN research group applies AI, ML, and NLP techniques to tackle
                software engineering problems. Together with our students, we develop
                novel techniques and tools to synthesize knowledge from development
                artifacts and to support practitioners&apos; decision-making.
              </p>
            </div>
          </Reveal>

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
            {researchInterests.map((interest, i) => (
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
      </section>

      <Reveal as="section" className="py-section px-6 bg-canvas-soft">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          <Display as="h2" size="lg">
            Collaborations
          </Display>
          <p className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
            We often collaborate with tech companies such as IFS Canada, Ericsson
            Canada, Shopify, Mozilla, Google, etc. to ensure our research programs
            effectively address issues of industrial relevance.
          </p>
          <CollaborationCarousel />
        </div>
      </Reveal>
    </main>
  );
}
