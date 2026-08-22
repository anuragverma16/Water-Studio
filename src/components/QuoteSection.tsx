import { Quote as QuoteIcon } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="quote-section">
      <img className="quote-bg" src="/images/water.jpg" alt="" />
      <QuoteIcon size={48} className="quote-icon" />
      <blockquote className="reveal-on-scroll">The best businesses don't just sell a product. They become part of someone's story.</blockquote>
      <span className="reveal-on-scroll">— Paban Studio</span>
    </section>
  );
}
