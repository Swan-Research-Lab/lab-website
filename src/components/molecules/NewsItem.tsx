import type { NewsItem } from '../../data/news';

interface NewsItemProps {
  item: NewsItem;
}

export function NewsItemCard({ item }: NewsItemProps) {
  return (
    <article className="flex flex-col gap-2 py-4 border-b border-hairline last:border-b-0">
      <time className="font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-muted">
        {item.date}
      </time>
      <p className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
        {item.description}
      </p>
    </article>
  );
}
