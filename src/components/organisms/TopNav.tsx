import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { NavLink } from '../molecules/NavLink';

const navItems = [
  { to: '/research', label: 'Research' },
  { to: '/people', label: 'People' },
  { to: '/publications', label: 'Publications' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-hairline"
      animate={{
        backgroundColor: scrolled ? 'rgba(245, 245, 245, 0.92)' : 'rgba(245, 245, 245, 0)',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <nav
        className="max-w-[1200px] mx-auto h-16 px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-3 no-underline">
          <Logo />
          <span className="font-body text-[16px] font-medium text-ink tracking-wide">
            SWAN Research Lab
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact">Join Us</Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-hairline bg-canvas px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-4 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="block py-1">
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button to="/contact">Join Us</Button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
