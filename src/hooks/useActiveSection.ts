import { useEffect, useRef, useState } from 'react';
import { navItems } from '../data/site';
import type { SectionId } from '../types';

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home');
  const lockRef = useRef<SectionId | null>(null);
  const lockTimer = useRef(0);

  const select = (id: SectionId) => {
    lockRef.current = id;
    setActive(id);
    window.clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    let frame = 0;

    const update = () => {
      if (lockRef.current) return;

      const header = document.querySelector('.site-header') as HTMLElement | null;
      const offset = (header?.offsetHeight ?? 88) + 16;
      let current: SectionId = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }

      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 12;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
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
      window.clearTimeout(lockTimer.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { active, select };
}
