import { MemberCard } from '../molecules/MemberCard';
import { Display } from '../atoms/Typography';
import type { MemberGroup } from '../../data/members';

interface MemberGridProps {
  groups: MemberGroup[];
}

export function MemberGrid({ groups }: MemberGridProps) {
  return (
    <div className="flex flex-col gap-section">
      {groups.map((group) => (
        <section key={group.label}>
          <Display as="h2" size="md" className="mb-6">
            {group.label}
          </Display>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
