import type { ReactNode } from 'react';

type DisplaySize = 'mega' | 'xl' | 'lg' | 'md' | 'sm';
type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface TypographyProps {
  as?: TextElement;
  display?: DisplaySize;
  className?: string;
  children: ReactNode;
}

const displaySizes: Record<DisplaySize, string> = {
  mega: 'text-[clamp(32px,6vw,64px)] leading-[1.05] tracking-[-1.92px]',
  xl: 'text-[clamp(32px,4.5vw,48px)] leading-[1.08] tracking-[-0.96px]',
  lg: 'text-[clamp(28px,3.5vw,36px)] leading-[1.17] tracking-[-0.36px]',
  md: 'text-[28px] md:text-[32px] leading-[1.13] tracking-[-0.32px]',
  sm: 'text-[24px] leading-[1.2] tracking-normal',
};

export function Typography({
  as: Element = 'p',
  display,
  className = '',
  children,
}: TypographyProps) {
  const displayClass = display
    ? `font-display font-light text-ink ${displaySizes[display]}`
    : '';

  return (
    <Element className={`${displayClass} ${className}`.trim()}>
      {children}
    </Element>
  );
}

export function Display({
  as,
  size,
  className,
  children,
}: Omit<TypographyProps, 'display'> & { size: DisplaySize }) {
  return (
    <Typography as={as} display={size} className={className}>
      {children}
    </Typography>
  );
}
