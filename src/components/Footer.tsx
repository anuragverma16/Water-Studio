import { navItems, STUDIO_ADDRESS, STUDIO_EMAIL, STUDIO_PHONE, STUDIO_PHONE_HREF } from '../data/site';
import type { ScrollTo } from '../types';
import { BrandLogo } from './BrandLogo';
import { SocialLinks } from './SocialLinks';

type FooterProps = {
  scrollTo: ScrollTo;
};

export function Footer({ scrollTo }: FooterProps) {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-main">
        <div className="footer-brand-block">
          <button className="brand footer-brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <BrandLogo className="brand-logo footer-logo" />
          </button>
          <p>Useful things. Meaningful moments.<br />Made with intention in Burdwan.</p>
          <SocialLinks className="socials footer-socials" />
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <div className="footer-links">{navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}</div>
        </div>
        <div className="footer-col">
          <h3>Ventures</h3>
          <div className="footer-links">
            <button onClick={() => scrollTo('ventures')}>Paban Water</button>
            <button onClick={() => scrollTo('ventures')}>Paban Frames</button>
            <button onClick={() => scrollTo('gallery')}>Studio gallery</button>
            <button onClick={() => scrollTo('contact')}>Partnerships</button>
            <button onClick={() => scrollTo('contact')}>Book a session</button>
          </div>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <a href={STUDIO_PHONE_HREF}>{STUDIO_PHONE}</a>
          <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
          <p>{STUDIO_ADDRESS}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© 2026 Paban Studio · Burdwan, West Bengal</small>
        <small>Connecting journeys, empowering communities</small>
      </div>
    </footer>
  );
}
