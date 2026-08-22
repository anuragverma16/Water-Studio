import { Aperture, ArrowRight, Check, Droplets } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ScrollTo } from '../types';

type VentureCardProps = {
  number: string;
  type: string;
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  color: 'blue' | 'pink';
  features: string[];
  image: string;
};

function VentureCard({ number, type, title, description, icon, tags, color, features, image }: VentureCardProps) {
  return (
    <article className={`venture-card ${color} reveal-on-scroll`}>
      <div className="venture-photo"><img src={image} alt={title} /></div>
      <div className="venture-top"><span>{number} / {type}</span><div className="venture-arrow"><ArrowRight size={21} /></div></div>
      <div className="venture-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="venture-features">{features.map((f) => <li key={f}><Check size={15} /> {f}</li>)}</ul>
      <div className="venture-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

type VenturesProps = {
  scrollTo: ScrollTo;
};

export function Ventures({ scrollTo }: VenturesProps) {
  return (
    <section className="ventures-section section-pad" id="ventures">
      <div className="section-kicker reveal-on-scroll">03 / What we build</div>
      <h2 className="section-title reveal-on-scroll">Two ventures.<br /><span>One heartbeat.</span></h2>
      <p className="section-lede reveal-on-scroll">Practical nourishment and creative memory — our businesses live in different moments, but they share the same attention to quality.</p>
      <div className="ventures-list">
        <VentureCard number="01" type="Daily essential" title="Paban Water" description="Clean, quality-certified packaged drinking water for the people, places, and routines that keep life moving." icon={<Droplets />} tags={['Purity', 'Availability', 'Trust']} color="blue" image="/images/water-pour.jpg" features={['Quality-certified purity', 'Reliable supply chain', 'For homes, offices & events']} />
        <VentureCard number="02" type="Creative studio" title="Paban Frames" description="Professional photography for people, brands, and milestone moments that deserve to be remembered beautifully." icon={<Aperture />} tags={['Perspective', 'Craft', 'Feeling']} color="pink" image="/images/water-bottles.jpg" features={['Portrait & brand photography', 'Milestone coverage', 'Edited, print-ready delivery']} />
      </div>
      <div className="ventures-cta reveal-on-scroll">
        <p>Want to partner, stock, or book a session?</p>
        <button className="button button-dark" onClick={() => scrollTo('contact')}>Get in touch <ArrowRight size={18} /></button>
      </div>
    </section>
  );
}
