import type { ReactNode } from 'react';

interface InterestTagProps {
  children: ReactNode;
  className?: string;
}

export function InterestTag({ children, className = '' }: InterestTagProps) {
  return (
    <span
      className={`inline-block rounded-pill bg-surface-strong text-ink font-body text-[12px] font-semibold tracking-[0.96px] uppercase px-2.5 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
