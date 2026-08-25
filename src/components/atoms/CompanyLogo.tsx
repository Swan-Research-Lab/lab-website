import type { CompanyKey } from '../../data/collaborations';

interface CompanyLogoProps {
  company: CompanyKey;
  className?: string;
}

const ericssonPath =
  'M20.76 1.593A2.36 2.36 0 0 0 19.572.225c-.54-.27-1.188-.336-2.256.02L5.187 4.29c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.021l12.129-4.044c1.068-.354 1.548-.795 1.818-1.338a2.35 2.35 0 0 0 .13-1.806zm0 7.485a2.36 2.36 0 0 0-1.188-1.368c-.54-.27-1.188-.336-2.256.021L5.187 11.775c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.021l12.129-4.041c1.068-.357 1.548-.795 1.818-1.341a2.35 2.35 0 0 0 .13-1.806zm0 7.488a2.36 2.36 0 0 0-1.188-1.368c-.54-.27-1.188-.336-2.256.021L5.187 19.263c-1.068.357-1.548.795-1.818 1.338a2.36 2.36 0 0 0 1.059 3.174c.54.27 1.188.336 2.256-.02l12.129-4.045c1.068-.354 1.548-.795 1.818-1.338a2.35 2.35 0 0 0 .13-1.806z';

export function CompanyLogo({ company, className = '' }: CompanyLogoProps) {
  if (company === 'ericsson') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        role="img"
        aria-label="Ericsson"
      >
        <path d={ericssonPath} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 44 24"
      className={className}
      role="img"
      aria-label="IFS"
    >
      <text
        x="2"
        y="20"
        fontFamily="'Inter', sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        IFS
      </text>
    </svg>
  );
}
