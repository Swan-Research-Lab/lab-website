import { motion } from 'motion/react';
import { Display } from '../components/atoms/Typography';
import { Reveal } from '../components/atoms/Reveal';
import carletonImage from '../assets/carleton.jpg';

const contactDetails = [
  { label: 'Institution', value: 'Carleton University' },
  {
    label: 'Address',
    value: '1125 Colonel By Drive, Ottawa, ON K1S 5B6, Canada',
  },
  { label: 'Office', value: 'Herzberg Laboratories' },
  { label: 'Phone', value: '+1 (613) 520-2600' },
];

export function ContactPage() {
  return (
    <main>
      <section className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <Reveal>
            <div>
              <Display as="h1" size="xl">
                Contact
              </Display>
              <p className="mt-6 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                We are looking for excellent Master&apos;s and PhD students. Contact
                Dr. Olga Baysal with your CV and research agenda/interests.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <Display as="h2" size="md">
                  Get in Touch
                </Display>
                <dl className="flex flex-col gap-5 m-0">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex flex-col gap-1">
                      <dt className="font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-muted">
                        {detail.label}
                      </dt>
                      <dd className="m-0 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-ink">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                  <div className="flex flex-col gap-1">
                    <dt className="font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-muted">
                      Email
                    </dt>
                    <dd className="m-0">
                      <a
                        href="mailto:olga.baysal@carleton.ca"
                        className="font-body text-[18px] leading-[1.5] text-accent font-medium no-underline hover:text-ink transition-colors duration-150"
                      >
                        olga.baysal@carleton.ca
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={carletonImage}
                  alt="Carleton University campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-surface-dark/60" />
                <div className="relative p-8 flex flex-col gap-6">
                  <Display as="h2" size="md" className="text-on-dark">
                    Open Positions
                  </Display>
                  <p className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-on-dark-soft">
                    We are looking for excellent Master&apos;s and PhD students.
                    Contact Dr. Olga Baysal with your CV and research
                    agenda/interests.
                  </p>
                  <motion.a
                    href="mailto:olga.baysal@carleton.ca"
                    className="inline-flex items-center justify-center h-10 px-5 py-2.5 rounded-pill font-body text-[15px] font-medium leading-none no-underline border-0 cursor-pointer transition-colors duration-150 bg-primary text-on-primary hover:bg-primary-active self-start"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Email Dr. Baysal
                  </motion.a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
