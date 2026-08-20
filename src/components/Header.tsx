import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/site';
import type { ScrollTo, SectionId } from '../types';
import { BrandLogo } from './BrandLogo';

type HeaderProps = {
  active: SectionId;
  scrollTo: ScrollTo;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({ active, scrollTo, menuOpen, setMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [bar, setBar] = useState({ left: 0, top: 0, width: 0, ready: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    const place = () => {
      const nav = navRef.current;
      if (!nav) return;
      const btn = nav.querySelector<HTMLButtonElement>('.nav-link.active');
      if (!btn) return;
      setBar({
        left: btn.offsetLeft,
        top: btn.offsetTop + btn.offsetHeight - 2,
        width: btn.offsetWidth,
        ready: true,
      });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [active, menuOpen, scrolled]);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
        <BrandLogo />
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation" ref={navRef}>
        {navItems.map((item) => (
          <button
            className={active === item.id ? 'nav-link active' : 'nav-link'}
            key={item.id}
            onClick={() => scrollTo(item.id)}
            aria-current={active === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
        <span
          className={bar.ready ? 'nav-underline is-ready' : 'nav-underline'}
          style={{ left: bar.left, top: bar.top, width: bar.width }}
          aria-hidden="true"
        />
        <button className="header-cta" onClick={() => scrollTo('contact')}>Start a conversation <ArrowRight size={16} /></button>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
