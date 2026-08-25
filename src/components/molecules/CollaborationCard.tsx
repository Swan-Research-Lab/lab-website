import { Avatar } from '../atoms/Avatar';
import { CompanyLogo } from '../atoms/CompanyLogo';
import type { Collaboration } from '../../data/collaborations';

interface CollaborationCardProps {
  collaboration: Collaboration;
}

export function CollaborationCard({ collaboration }: CollaborationCardProps) {
  const { studentName, studentRole, studentImage, company, companyKey, subtitle } =
    collaboration;

  return (
    <article className="bg-surface-card rounded-xl border border-hairline p-6 w-[280px] shrink-0 h-full flex flex-col gap-4 shadow-card">
      <div className="flex gap-3 items-start">
        <Avatar
          name={studentName}
          src={studentImage}
          size="md"
          className="shrink-0"
        />
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3 className="font-body text-[16px] font-medium leading-[1.35] text-ink truncate">
            {studentName}
          </h3>
          <p className="font-body text-[13px] leading-[1.4] text-muted">
            {studentRole}
          </p>
        </div>
      </div>

      <div className="h-px bg-hairline" />

      <div className="flex flex-col gap-2">
        <span className="font-body text-[11px] font-semibold tracking-[0.96px] uppercase text-muted-soft">
          Collaborating with
        </span>
        <div className="flex items-center gap-2.5">
          <CompanyLogo company={companyKey} className="h-5 w-auto text-ink" />
          <span className="font-body text-[15px] font-medium text-body-strong">
            {company}
          </span>
        </div>
      </div>

      <p className="mt-auto font-body text-[14px] leading-[1.5] tracking-[0.14px] text-body">
        {subtitle}
      </p>
    </article>
  );
}
