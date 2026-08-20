export type GalleryTag = 'water' | 'frames' | 'studio';
export type GallerySize = 'md' | 'lg' | 'tall';

export type GalleryShot = {
  src: string;
  label: string;
  caption: string;
  tag: GalleryTag;
  size: GallerySize;
};

export const galleryShots: GalleryShot[] = [
  { src: '/images/water.jpg', label: 'Paban Water', caption: 'Purity you can trust', tag: 'water', size: 'md' },
  { src: '/images/photographer.jpg', label: 'Paban Frames', caption: 'On set, in the moment', tag: 'frames', size: 'lg' },
  { src: '/images/water-plant.png', label: 'Paban Water', caption: 'From plant to bottle', tag: 'water', size: 'tall' },
  { src: '/images/water-pour.jpg', label: 'Paban Water', caption: 'Everyday refreshment', tag: 'water', size: 'md' },
  { src: '/images/portrait.jpg', label: 'Paban Frames', caption: 'Portraits that stay', tag: 'frames', size: 'md' },
  { src: '/images/wedding.jpg', label: 'Paban Frames', caption: 'Milestone moments', tag: 'frames', size: 'lg' },
  { src: '/images/water-bottles.jpg', label: 'Paban Water', caption: 'Homes, offices & events', tag: 'water', size: 'md' },
  { src: '/images/camera.jpg', label: 'Paban Frames', caption: 'Craft behind the lens', tag: 'frames', size: 'md' },
  { src: '/images/community.jpg', label: 'Paban Studio', caption: 'People and community', tag: 'studio', size: 'md' },
];
