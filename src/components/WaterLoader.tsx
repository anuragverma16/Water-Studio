import { useEffect, useRef, useState } from 'react';
import { BrandLogo } from './BrandLogo';

type WaterLoaderProps = {
  onDone: () => void;
};

export function WaterLoader({ onDone }: WaterLoaderProps) {
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(onDone, 700);
  };

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(finish, reduced ? 300 : 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={leaving ? 'water-loader is-leaving' : 'water-loader'} aria-live="polite" aria-label="Loading Paban Studio">
      <div className="loader-rain" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => <span key={i} />)}
      </div>
      <span className="ripple" />
      <span className="ripple delay-1" />
      <span className="ripple delay-2" />
      <div className="loader-mark">
        <svg className="loader-ring" viewBox="0 0 120 120" aria-hidden="true">
          <circle className="ring-track" cx="60" cy="60" r="54" />
          <circle className="ring-fill" cx="60" cy="60" r="54" onAnimationEnd={finish} />
        </svg>
        <BrandLogo className="loader-logo" />
      </div>
    </div>
  );
}
