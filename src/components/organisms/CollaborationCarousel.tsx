import { collaborations } from '../../data/collaborations';
import { CollaborationCard } from '../molecules/CollaborationCard';

export function CollaborationCarousel() {
  const items = [...collaborations, ...collaborations];
  const duplicateStart = collaborations.length;

  return (
    <div
      className="carousel-container"
      role="region"
      aria-roledescription="carousel"
      aria-label="Student collaborations"
    >
      <ul className="carousel-track">
        {items.map((collab, i) => (
          <li
            key={`${collab.studentName}-${i}`}
            className="shrink-0 list-none"
            aria-hidden={i >= duplicateStart ? 'true' : undefined}
          >
            <CollaborationCard collaboration={collab} />
          </li>
        ))}
      </ul>
    </div>
  );
}
