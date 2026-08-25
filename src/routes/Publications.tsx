import { PublicationCard } from '../components/molecules/PublicationCard';
import { Display } from '../components/atoms/Typography';
import { Reveal } from '../components/atoms/Reveal';
import { allPublications } from '../data/publications';

export function PublicationsPage() {
  return (
    <main>
      <section className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Reveal>
            <div>
              <Display as="h1" size="xl">
                Publications
              </Display>
              <p className="mt-6 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                A collection of our research papers, journal articles, book
                chapters, and invited talks.
              </p>
            </div>
          </Reveal>

          {allPublications.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <section>
                <Display as="h2" size="md" className="mb-4">
                  {group.label}
                </Display>
                <div className="bg-surface-card rounded-xl border border-hairline p-6">
                  {group.items.map((pub) => (
                    <PublicationCard key={pub.title} publication={pub} />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
