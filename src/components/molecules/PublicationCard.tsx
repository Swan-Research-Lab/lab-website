import type { Publication } from '../../data/publications';

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="flex flex-col gap-2 py-5 border-b border-hairline last:border-b-0">
      <h3 className="font-body text-[16px] font-medium leading-[1.5] text-ink">
        {publication.title}
      </h3>
      <p className="font-body text-[15px] leading-[1.47] tracking-[0.15px] text-body">
        {publication.authors}
      </p>
      <p className="font-body text-[14px] leading-[1.5] text-muted italic">
        {publication.venue}
        {publication.year && `, ${publication.year}`}
      </p>
      {publication.award && (
        <span className="inline-block mt-1 font-body text-[12px] font-semibold tracking-[0.96px] uppercase text-body-strong bg-surface-strong rounded-pill px-2.5 py-1 self-start">
          {publication.award}
        </span>
      )}
    </article>
  );
}
