import { Logo } from '../atoms/Logo';
import { Hairline } from '../atoms/Hairline';
import { NavLink } from '../molecules/NavLink';

const footerColumns = [
  {
    title: 'Lab',
    links: [
      { to: '/', label: 'Home' },
      { to: '/research', label: 'Research' },
      { to: '/people', label: 'People' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/publications', label: 'Publications' },
      { to: '/news', label: 'News' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'External',
    links: [
      { href: 'http://olgabaysal.com', label: 'PI Website' },
      { href: 'https://twitter.com/olgabaysal', label: 'Twitter' },
      { href: 'https://carleton.ca', label: 'Carleton University' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline px-6 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-body text-[16px] font-medium text-ink">
                SWAN Research Lab
              </span>
            </div>
            <p className="font-body text-[15px] leading-[1.47] tracking-[0.15px] text-body max-w-[320px]">
              Software Analytics Research Lab at Carleton University, Ottawa,
              Ontario, Canada.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-body text-[18px] font-medium leading-[1.44] tracking-[0.18px] text-ink mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'to' in link ? (
                      <NavLink
                        to={link.to}
                        className="font-body text-[15px] leading-[1.47]"
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-[15px] leading-[1.47] text-accent hover:text-ink no-underline transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Hairline className="my-10" />

        <p className="font-body text-[14px] leading-[1.5] text-muted-soft text-center">
          &copy; {new Date().getFullYear()} SWAN Research Lab, Carleton
          University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
