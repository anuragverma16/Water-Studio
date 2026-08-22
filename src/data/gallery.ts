export type GallerySize = 'md' | 'lg' | 'tall';

export type GalleryShot = {
  src: string;
  label: string;
  caption: string;
  size: GallerySize;
};

export const galleryShots: GalleryShot[] = [
  { src: '/images/water.jpg', label: 'Paban Water', caption: 'Purity you can trust', size: 'md' },
  { src: '/images/water-pour.jpg', label: 'Paban Water', caption: 'Everyday refreshment', size: 'lg' },
  { src: '/images/water-plant.png', label: 'Paban Water', caption: 'From plant to bottle', size: 'tall' },
  { src: '/images/water-bottles.jpg', label: 'Paban Water', caption: 'Homes, offices & events', size: 'md' },
  { src: '/images/water-glass-pour.jpg', label: 'Paban Water', caption: 'Poured fresh, every time', size: 'md' },
  { src: '/images/water-bottle-pour.jpg', label: 'Paban Water', caption: 'Clarity in every drop', size: 'lg' },
  { src: '/images/water-bottles-stack.jpg', label: 'Paban Water', caption: 'Reliable supply chain', size: 'md' },
  { src: '/images/water-bottle-hand.jpg', label: 'Paban Water', caption: 'Trusted on the go', size: 'md' },
  { src: '/images/water-splash.jpg', label: 'Paban Water', caption: 'Clean water, clear choice', size: 'md' },
  { src: '/images/water-glass-splash-blue.jpg', label: 'Paban Water', caption: 'Splash of everyday joy', size: 'tall' },
  { src: '/images/water-jug-5gallon.jpg', label: 'Paban Water', caption: 'Built for homes & offices', size: 'lg' },
  { src: '/images/water-pipe-industrial.jpg', label: 'Paban Water', caption: 'From source to supply', size: 'md' },
  { src: '/images/water-worker-cooling-off.jpg', label: 'Paban Water', caption: 'Relief in every drop', size: 'md' },
  { src: '/images/water-drink-more-poster.jpg', label: 'Paban Water', caption: 'A daily habit worth keeping', size: 'md' },
  { src: '/images/water-bottles-car-trunk.jpg', label: 'Paban Water', caption: 'Stocked up and ready', size: 'md' },
  { src: '/images/water-bottles-on-ice.jpg', label: 'Paban Water', caption: 'Chilled and ready to go', size: 'lg' },
  { src: '/images/water-glass-ice-drops.jpg', label: 'Paban Water', caption: 'Cool, crisp, refreshing', size: 'md' },
];
