import { useEffect, useRef, useState } from 'react';
import { Sparkles, Target, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

function Principle({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="principle reveal-on-scroll">
      <div className="principle-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

const phases = [
  { num: '01', phase: 'Now', title: 'Foundation', text: 'Establish dependable operations and earn trust locally.' },
  { num: '02', phase: 'Next', title: 'Momentum', text: 'Grow our footprint through smart distribution and partnerships.' },
  { num: '03', phase: 'Then', title: 'Expression', text: 'Build a recognizable creative language across every touchpoint.' },
  { num: '04', phase: 'Future', title: 'Reach', text: 'Take the Paban standard to new communities and new occasions.' },
];

export function Roadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const line = lineRef.current;
      if (!line) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setProgress(1);
        setReached(phases.length - 1);
        return;
      }

      const lineRect = line.getBoundingClientRect();
      const trigger = window.innerHeight * 0.42;
      const raw = (trigger - lineRect.top) / Math.max(lineRect.height, 1);
      const nextProgress = Math.max(0, Math.min(1, raw));
      setProgress(nextProgress);

      let nextReached = -1;
      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (trigger >= center - 6) nextReached = i;
      });
      setReached(nextReached);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const drawing = progress > 0.01;

  return (
    <section className="roadmap-section section-pad" id="roadmap">
      <div className="section-kicker reveal-on-scroll">06 / Where we're going</div>
      <h2 className="section-title reveal-on-scroll">The blueprint for<br /><span>what comes next.</span></h2>
      <p className="section-lede reveal-on-scroll">A considered roadmap for growing our reach without losing the care that got us here.</p>
      <div className={drawing ? 'roadmap-track is-drawing' : 'roadmap-track'} ref={trackRef}>
        <div className="roadmap-line" ref={lineRef} aria-hidden="true">
          <div className="roadmap-line-fill" style={{ height: `${progress * 100}%` }} />
          <div className="roadmap-line-head" style={{ top: `${progress * 100}%` }} />
        </div>
        {phases.map((p, i) => (
          <div
            className={`roadmap-item ${i % 2 ? 'right' : ''} ${i <= reached ? 'is-reached' : ''}`}
            key={p.num}
          >
            <div
              className="roadmap-node"
              ref={(el) => { nodeRefs.current[i] = el; }}
            >
              {p.num}
            </div>
            <div className="roadmap-content">
              <span>{p.phase}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="principle-grid">
        <Principle icon={<Target />} title="Customer first" text="Make the experience simpler, warmer, and more reliable." />
        <Principle icon={<TrendingUp />} title="Built to last" text="Choose sustainable growth over quick wins." />
        <Principle icon={<Sparkles />} title="Always curious" text="Keep learning, testing, and looking at the world differently." />
      </div>
    </section>
  );
}
