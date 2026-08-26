interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: 'w-10 h-10 text-[13px]',
  md: 'w-14 h-14 text-[16px]',
  lg: 'w-20 h-20 text-[20px]',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({ name, src, size = 'md', className = '' }: AvatarProps) {
  const sizeClass = sizeClasses[size];

  if (src) {
    const resolvedSrc = `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;
    return (
      <img
        src={resolvedSrc}
        alt={`Photo of ${name}`}
        className={`rounded-full object-cover ${sizeClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-full bg-accent-soft flex items-center justify-center text-accent font-body font-medium ${sizeClass} ${className}`}
      role="img"
      aria-label={`Placeholder for ${name}`}
    >
      {getInitials(name)}
    </div>
  );
}
