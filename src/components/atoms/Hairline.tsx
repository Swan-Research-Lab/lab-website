interface HairlineProps {
  className?: string;
}

export function Hairline({ className = '' }: HairlineProps) {
  return (
    <hr
      className={`border-0 h-px bg-hairline w-full ${className}`}
      role="presentation"
    />
  );
}
