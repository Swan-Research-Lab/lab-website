import type { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function FeatureCard({ title, children, className = '' }: FeatureCardProps) {
  return (
    <article
      className={`bg-surface-card rounded-xl border border-hairline p-6 ${className}`}
    >
      <h3 className="font-body text-[20px] font-medium leading-[1.35] text-ink mb-3">
        {title}
      </h3>
      <div className="font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
        {children}
      </div>
    </article>
  );
}
