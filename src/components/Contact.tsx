import { FormEvent, useState } from 'react';
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { STUDIO_ADDRESS, STUDIO_EMAIL, STUDIO_PHONE, STUDIO_PHONE_HREF, STUDIO_WHATSAPP } from '../data/site';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
    const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement).checked;
    const body = encodeURIComponent(
      `Name: ${value('name')}\nPhone: ${value('phone')}\nEmail: ${value('email')}\nCompany: ${value('company')}\nInterest: ${value('interest')}\nPreferred date: ${value('date')}\nCity: ${value('city')}\nWhatsApp: ${whatsapp ? 'Yes' : 'No'}\n\n${value('message')}`
    );
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent('Paban Studio enquiry — ' + value('interest'))}&body=${body}`;
    setSent(true);
  };
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-head reveal-on-scroll">
        <div className="section-kicker">08 / Start a conversation</div>
        <h2>Let's make <span>something</span> <i>matter.</i></h2>
        <p>Tell us about water supply, a photography booking, or a partnership. We reply within one working day.</p>
      </div>
      <div className="contact-shell">
        <aside className="contact-panel reveal-on-scroll">
          <h3>Get in touch</h3>
          <p>Call, mail, or send a note — we are in Burdwan and happy to help.</p>
          <a className="panel-row" href={STUDIO_PHONE_HREF}>
            <span className="contact-icon"><Phone size={18} /></span>
            <span><em>Phone us</em><strong>{STUDIO_PHONE}</strong></span>
          </a>
          <a className="panel-row" href={`mailto:${STUDIO_EMAIL}`}>
            <span className="contact-icon"><Mail size={18} /></span>
            <span><em>Email us</em><strong>{STUDIO_EMAIL}</strong></span>
          </a>
          <div className="panel-row">
            <span className="contact-icon"><MapPin size={18} /></span>
            <span><em>Address</em><strong>{STUDIO_ADDRESS}</strong></span>
          </div>
          <div className="panel-row">
            <span className="contact-icon"><Clock size={18} /></span>
            <span><em>Hours</em><strong>Mon–Sat, 9:00 AM – 7:00 PM</strong></span>
          </div>
          <a className="whatsapp-cta" href={STUDIO_WHATSAPP} target="_blank" rel="noreferrer">
            Chat on WhatsApp <ArrowRight size={18} />
          </a>
          <SocialLinks className="socials panel-socials" />
        </aside>
        <form className="contact-form reveal-on-scroll" onSubmit={submit}>
          {sent ? (
            <div className="success-state">
              <span><Check size={22} /></span>
              <h3>Message received.</h3>
              <p>Thanks for writing in. We'll get back to you at {STUDIO_EMAIL}.</p>
              <button type="button" className="text-link" onClick={() => setSent(false)}>Send another message <ArrowRight size={16} /></button>
            </div>
          ) : (
            <>
              <div className="form-intro">
                <h3>Send a message</h3>
                <p>Fill in the details and we'll take it from there.</p>
              </div>
              <div className="form-grid">
                <label>Full name<input name="name" required placeholder="Your full name" autoComplete="name" /></label>
                <label>Phone<input name="phone" required type="tel" placeholder="+91 " autoComplete="tel" /></label>
                <label>Email address<input name="email" required type="email" placeholder="you@company.com" autoComplete="email" /></label>
                <label>Company / organisation<input name="company" placeholder="Optional" autoComplete="organization" /></label>
                <label className="span-2">I'm interested in
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>Choose an option</option>
                    <option>Paban Water — home / office supply</option>
                    <option>Paban Water — event or bulk order</option>
                    <option>Paban Water — distribution partnership</option>
                    <option>Paban Frames — portrait session</option>
                    <option>Paban Frames — wedding / milestone</option>
                    <option>Paban Frames — brand photography</option>
                    <option>General collaboration</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>Preferred date<input name="date" type="date" /></label>
                <label>City / location<input name="city" placeholder="Burdwan" /></label>
                <label className="span-2">Your message<textarea name="message" required rows={5} placeholder="Tell us what you need, when you need it, and any other details..." /></label>
              </div>
              <label className="check-row">
                <input name="whatsapp" type="checkbox" />
                <span>Also reach me on WhatsApp</span>
              </label>
              <button className="button button-dark" type="submit">Send message <ArrowRight size={18} /></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
