import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { STUDIO_WHATSAPP } from '../data/site';

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = 'socials' }: SocialLinksProps) {
  return (
    <div className={className}>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={22} /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={22} /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={22} /></a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={22} /></a>
      <a href={STUDIO_WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 11.5A8.5 8.5 0 0 1 7.7 19.3L4 20.5l1.3-3.6A8.5 8.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9.2 8.8c.2-.5.3-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.3.5.8 1 1.3 1.4.2.1.4.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.6.8c.3.1.4.3.4.5v.5c0 .3 0 .4-.5.6A5.8 5.8 0 0 1 12 17a6 6 0 0 1-2.8-7.8Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
