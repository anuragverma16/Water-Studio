import { Aperture, ArrowRight, ChevronDown, Droplets, Sparkles } from 'lucide-react';
import type { ScrollTo } from '../types';

type HeroProps = {
  scrollTo: ScrollTo;
};

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-bg-orbs"><div className="orb orb-blue" /><div className="orb orb-pink" /></div>
      <div className="hero-copy">
        <div className="eyebrow reveal-on-scroll"><span className="eyebrow-dot" /> Connecting journeys, empowering communities</div>
        <h1 className="reveal-on-scroll">Where <span>everyday</span><br />meets <i>extraordinary.</i></h1>
        <p className="hero-lede reveal-on-scroll">Paban Studio is a twin-engine venture building a more thoughtful everyday — one bottle, one frame, one lasting connection at a time.</p>
        <div className="hero-actions reveal-on-scroll">
          <button className="button button-dark" onClick={() => scrollTo('ventures')}>Explore our ventures <ArrowRight size={18} /></button>
          <button className="play-link" onClick={() => scrollTo('about')}><span className="play-icon"><ChevronDown size={16} /></span> Discover the studio</button>
        </div>
        <div className="hero-pills reveal-on-scroll">
          <span className="pill"><Droplets size={14} /> Paban Water</span>
          <span className="pill"><Aperture size={14} /> Paban Frames</span>
          <span className="pill"><Sparkles size={14} /> One standard</span>
        </div>
      </div>
      <div className="hero-visual reveal-on-scroll">
        <figure className="hero-photo photo-water">
          <img src="/images/water.jpg" alt="Pure packaged drinking water from Paban Water" />
          <figcaption>01 / Paban Water</figcaption>
        </figure>
        <figure className="hero-photo photo-frames">
          <img src="/images/photographer.jpg" alt="Professional photography by Paban Frames" />
          <figcaption>02 / Paban Frames</figcaption>
        </figure>
        <div className="floating-note"><Sparkles size={16} /><span>Two ideas.<br /><strong>One vision.</strong></span></div>
      </div>
      <div className="scroll-cue"><span>Scroll to discover</span><div className="scroll-line" /></div>
    </section>
  );
}
