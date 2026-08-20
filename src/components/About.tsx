import { Heart, Shield, Target } from 'lucide-react';
import type { ReactNode } from 'react';

function Value({ number, title, text, icon }: { number: string; title: string; text: string; icon: ReactNode }) {
  return (
    <article className="value reveal-on-scroll">
      <span className="value-icon">{icon}</span>
      <span className="value-num">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-kicker reveal-on-scroll">01 / The big picture</div>
      <div className="split-heading">
        <h2 className="reveal-on-scroll">Building <span>useful</span> things<br />with <i>meaning.</i></h2>
        <div className="intro-note reveal-on-scroll">
          <p>We believe a business can be commercially sharp and deeply human. Paban Studio brings together practical utility and creative expression to make daily life a little better.</p>
          <p>From Burdwan, West Bengal, we're building an enterprise that treats everyday essentials and milestone moments with the same level of care.</p>
        </div>
      </div>
      <div className="founder-block">
        <figure className="founder-photo reveal-on-scroll">
          <img src="/images/water-plant.png" alt="Paban Water bottling line — packaged drinking water on the production line" />
          <figcaption>
            <span>Paban Water</span>
            <strong>From plant to bottle.</strong>
          </figcaption>
        </figure>
        <div className="story-copy reveal-on-scroll">
          <div className="section-kicker">A note from the founder</div>
          <h2>Good work starts with <span>a clear why.</span></h2>
          <p>Paban Studio began with a practical observation: the things we use every day deserve the same attention as the moments we celebrate.</p>
          <p>So we built a studio around both. One side brings pure, dependable packaged drinking water to homes, offices, and communities. The other turns milestones into images that stay with you.</p>
          <p>Different outputs, same promise — thoughtful work, consistently delivered.</p>
        </div>
      </div>
      <div className="values-grid">
        <Value number="01" title="Stay useful" text="Solve real needs before chasing novelty. Utility is our first creative constraint." icon={<Target size={22} />} />
        <Value number="02" title="Make it human" text="Every interaction is a chance to create trust, ease, and a little delight." icon={<Heart size={22} />} />
        <Value number="03" title="Keep the bar high" text="From the first bottle to the final frame, consistency is the quiet superpower." icon={<Shield size={22} />} />
      </div>
    </section>
  );
}
