import type { SectionId } from '../types';

export const STUDIO_EMAIL = 'taxpoint2049@gmail.com';
export const STUDIO_PHONE = '+91-8972799710';
export const STUDIO_PHONE_HREF = 'tel:+918972799710';
export const STUDIO_WHATSAPP = 'https://wa.me/918972799710';
export const STUDIO_ADDRESS =
  'PO-Joteram, Village Nandur, Block Burdwan-II, City Burdwan, District Purba Bardhaman, West Bengal – 713104.';

export const STUDIO_ADDRESS_LINES = [
  'PO-Joteram, Village Nandur',
  'Block Burdwan-II, City Burdwan',
  'District Purba Bardhaman',
  'West Bengal – 713104',
];

export const STUDIO_MAPS =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('PO-Joteram, Village Nandur, Block Burdwan-II, Burdwan, Purba Bardhaman, West Bengal 713104');

export const STUDIO_HOURS = ['Monday – Saturday', '9:00 AM – 7:00 PM', 'Sunday closed'];

export const navItems: { label: string; id: SectionId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Approach', id: 'approach' },
  { label: 'Roadmap', id: 'roadmap' },
  { label: 'Contact', id: 'contact' },
];
