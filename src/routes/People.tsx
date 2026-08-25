import { MemberGrid } from '../components/organisms/MemberGrid';
import { Display } from '../components/atoms/Typography';
import { Reveal } from '../components/atoms/Reveal';
import { memberGroups } from '../data/members';

export function PeoplePage() {
  return (
    <main>
      <section className="py-section px-6 bg-canvas">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <Reveal>
            <div>
              <Display as="h1" size="xl">
                People
              </Display>
              <p className="mt-6 font-body text-[16px] leading-[1.5] tracking-[0.16px] text-body">
                Our lab is composed of faculty, graduate students, and alumni who
                are passionate about software analytics and engineering.
              </p>
            </div>
          </Reveal>

          <MemberGrid groups={memberGroups} />
        </div>
      </section>
    </main>
  );
}
