import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: 'What exactly does Paban Studio do?', a: 'We operate two ventures: Paban Water, a packaged drinking water brand, and Paban Frames, a professional photography service. Both share the same commitment to quality and care.' },
  { q: 'Where are you based?', a: 'We are based in Burdwan, West Bengal, and serve surrounding communities with both our water distribution and photography services.' },
  { q: 'Can I book a photography session?', a: 'Absolutely. Paban Frames covers portraits, brand photography, and milestone events. Reach out through the contact section below and we will get back to you.' },
  { q: 'Do you offer water delivery for offices or events?', a: 'Yes. Paban Water supplies homes, offices, and events with reliable, quality-certified drinking water. Contact us to discuss your needs.' },
  { q: 'Are you open to partnerships?', a: 'Always. We are interested in distribution partners, creative collaborations, and community initiatives that align with our values.' },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq-section section-pad">
      <div className="section-kicker reveal-on-scroll">07 / Questions</div>
      <h2 className="section-title reveal-on-scroll">Things people<br /><span>often ask.</span></h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className="faq-item reveal-on-scroll" key={i}>
            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div className={open === i ? 'faq-answer is-open' : 'faq-answer'}><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
