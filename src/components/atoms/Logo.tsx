import logoImage from '../../assets/logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="SWAN Research Lab logo"
      className={`w-10 h-10 object-contain ${className}`}
    />
  );
}
