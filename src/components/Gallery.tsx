import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryShots } from '../data/gallery';

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const shots = galleryShots;

  const close = () => setOpen(null);
  const show = (index: number) => setOpen(index);
  const prev = () => setOpen((i) => (i === null ? i : (i + shots.length - 1) % shots.length));
  const next = () => setOpen((i) => (i === null ? i : (i + 1) % shots.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, shots.length]);

  const active = open !== null ? shots[open] : null;

  return (
    <section className="gallery-section section-pad" id="gallery">
      <div className="section-kicker reveal-on-scroll">04 / Studio in motion</div>
      <div className="gallery-head">
        <div>
          <h2 className="section-title reveal-on-scroll">Water,<br /><span>in the real world.</span></h2>
          <p className="section-lede reveal-on-scroll">A look at Paban Water — from the plant to the bottle, made for homes, offices, and everyday thirst.</p>
        </div>
      </div>
      <div className="gallery-grid">
        {shots.map((shot, i) => (
          <figure
            className={`gallery-item size-${shot.size}`}
            key={shot.src}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <button type="button" onClick={() => show(i)} aria-label={`View ${shot.caption}`}>
              <img src={shot.src} alt={`${shot.label}: ${shot.caption}`} />
            </button>
            <figcaption>
              <em>{shot.label}</em>
              <strong>{shot.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      {active && open !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={active.caption} onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close gallery">
            <X size={22} />
          </button>
          <button className="lightbox-nav prev" type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
            <ChevronLeft size={26} />
          </button>
          <figure className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={`${active.label}: ${active.caption}`} />
            <figcaption>
              <em>{active.label}</em>
              <strong>{active.caption}</strong>
              <span>{open + 1} / {shots.length}</span>
            </figcaption>
          </figure>
          <button className="lightbox-nav next" type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
