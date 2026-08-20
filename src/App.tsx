import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  About,
  Approach,
  Contact,
  Faq,
  Footer,
  Gallery,
  Header,
  Hero,
  Marquee,
  QuoteSection,
  Roadmap,
  Stats,
  Ventures,
  WaterLoader,
} from './components';
import { useActiveSection } from './hooks/useActiveSection';
import { useReveal } from './hooks/useReveal';
import { useScrollProgress } from './hooks/useScrollProgress';
import type { SectionId } from './types';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [booting, setBooting] = useState(true);
  useReveal();
  const progress = useScrollProgress();
  const { active, select } = useActiveSection();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = booting ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [booting]);

  const scrollTo = (id: SectionId) => {
    setMenuOpen(false);
    select(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      {booting && <WaterLoader onDone={() => setBooting(false)} />}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Header active={active} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Marquee />
        <About />
        <Stats />
        <Ventures scrollTo={scrollTo} />
        <Gallery />
        <Approach />
        <Roadmap />
        <QuoteSection />
        <Faq />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
