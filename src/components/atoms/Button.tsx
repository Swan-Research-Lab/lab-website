import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'outline' | 'inverse';

const baseStyles =
  'inline-flex items-center justify-center h-10 px-5 py-2.5 rounded-pill font-body text-[15px] font-medium leading-none cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent no-underline border-0';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 active:bg-accent/80',
  outline:
    'bg-transparent text-ink border border-hairline-strong hover:bg-hairline-soft',
  inverse:
    'bg-white/15 text-on-dark border border-white/25 backdrop-blur-sm hover:bg-white/25',
};

interface ButtonCommonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonElementProps extends ButtonCommonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

interface LinkButtonProps extends ButtonCommonProps {
  to: string;
}

interface AnchorButtonProps extends ButtonCommonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonElementProps | LinkButtonProps | AnchorButtonProps;

function isLink(props: ButtonProps): props is LinkButtonProps {
  return 'to' in props;
}

function isAnchor(props: ButtonProps): props is AnchorButtonProps {
  return 'href' in props;
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '' } = props;
  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (isLink(props)) {
    return (
      <Link to={props.to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  if (isAnchor(props)) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={combinedClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={combinedClass}
    >
      {children}
    </button>
  );
}
