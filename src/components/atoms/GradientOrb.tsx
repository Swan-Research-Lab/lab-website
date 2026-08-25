type GradientColor =
  | 'mint'
  | 'peach'
  | 'lavender'
  | 'sky'
  | 'rose';

interface GradientOrbProps {
  color: GradientColor;
  size?: number;
  className?: string;
}

const colorMap: Record<GradientColor, string> = {
  mint: 'bg-gradient-mint',
  peach: 'bg-gradient-peach',
  lavender: 'bg-gradient-lavender',
  sky: 'bg-gradient-sky',
  rose: 'bg-gradient-rose',
};

export function GradientOrb({
  color,
  size = 300,
  className = '',
}: GradientOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-full opacity-40 blur-3xl ${colorMap[color]} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
