import { Avatar } from '../atoms/Avatar';
import type { Member } from '../../data/members';

interface MemberCardProps {
  member: Member;
}

function LinkIcon({ type }: { type: 'website' | 'email' | 'twitter' | 'github' }) {
  const paths: Record<string, string> = {
    website:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    email:
      'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    twitter:
      'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
    github:
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z',
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-hidden="true"
    >
      <path d={paths[type]} />
    </svg>
  );
}

const linkLabels: Record<string, string> = {
  website: 'Website',
  email: 'Email',
  twitter: 'Twitter',
  github: 'GitHub',
};

export function MemberCard({ member }: MemberCardProps) {
  const { links } = member;
  const hasLinks = links && Object.keys(links).length > 0;

  return (
    <article className="bg-surface-card rounded-xl border border-hairline p-6 flex gap-4">
      <Avatar name={member.name} src={member.image} size="lg" className="shrink-0" />
      <div className="flex flex-col gap-1.5 min-w-0">
        <h3 className="font-body text-[18px] font-medium leading-[1.35] text-ink truncate">
          {member.name}
        </h3>
        <p className="font-body text-[15px] leading-[1.47] text-body">
          {member.role}
        </p>
        <p className="font-body text-[14px] leading-[1.5] text-muted">
          {member.period}
        </p>
        {member.notes && (
          <p className="font-body text-[14px] leading-[1.5] text-muted italic">
            {member.notes}
          </p>
        )}
        {member.placement && (
          <p className="font-body text-[14px] leading-[1.5] text-body">
            {member.placement}
          </p>
        )}
        {hasLinks && (
          <div className="flex gap-3 mt-2">
            {Object.entries(links!).map(([type, url]) =>
              url ? (
                <a
                  key={type}
                  href={url}
                  target={type === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-150"
                  aria-label={`${linkLabels[type] ?? type} for ${member.name}`}
                >
                  <LinkIcon type={type as 'website' | 'email' | 'twitter' | 'github'} />
                </a>
              ) : null,
            )}
          </div>
        )}
      </div>
    </article>
  );
}
