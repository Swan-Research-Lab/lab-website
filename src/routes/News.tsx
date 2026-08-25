import { NewsItemCard } from '../components/molecules/NewsItem';
import { Display } from '../components/atoms/Typography';
import { Reveal } from '../components/atoms/Reveal';
import { news } from '../data/news';

export function NewsPage() {
  return (
    <main>
      <section className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Reveal>
            <div>
              <Display as="h1" size="xl">
                News
              </Display>
              <p className="mt-6 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                Recent highlights and announcements from the lab.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-surface-card rounded-xl border border-hairline p-6">
              {news.map((item) => (
                <NewsItemCard key={item.date + item.description} item={item} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
