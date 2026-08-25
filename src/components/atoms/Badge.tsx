import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-pill bg-surface-strong text-ink font-body text-[12px] font-semibold leading-[1.4] tracking-[0.96px] uppercase px-2.5 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
