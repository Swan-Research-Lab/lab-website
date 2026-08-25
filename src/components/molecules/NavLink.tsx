import { motion } from 'motion/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import type { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `relative font-body text-[15px] font-medium leading-[1.4] no-underline transition-colors duration-150 ${
          isActive ? 'text-ink' : 'text-muted hover:text-ink'
        } ${className}`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <motion.div
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </>
      )}
    </RouterNavLink>
  );
}
