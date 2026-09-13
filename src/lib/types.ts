export interface Scripture {
  verse: string;
  reference: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  title: string;
  description: string;
}

export interface Ministry {
  name: string;
  description: string;
}

export interface Belief {
  title: string;
  verse: string;
  text: string;
}

export interface ChurchEvent {
  title: string;
  date: string;
  time: string;
  description: string;
}

export interface GivingItem {
  name: string;
  description: string;
  verse: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Sermon {
  title: string;
  speaker: string;
  date: string;
  passage?: string;
  description?: string;
  audioUrl?: string;
  videoUrl?: string;
  youtubeId?: string;
}

export interface Leader {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

export interface Branch {
  id: string;
  name: string;
  isHeadquarters: boolean;
  address: string;
  phone?: string;
  serviceTimes?: string;
  mapUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  scripture: Scripture;
  scriptures: Scripture[];
  address: {
    street: string;
    landmark: string;
    city: string;
    googleMapsQuery: string;
  };
  phone: string;
  email: string;
  url: string;
  founded: string;
  services: ServiceTime[];
  ministries: Ministry[];
  beliefs: Belief[];
  events: ChurchEvent[];
  giving: GivingItem[];
  navigation: NavLink[];
  socialLinks: SocialLink[];
  gallery: GalleryItem[];
  sermons: Sermon[];
  leaders: Leader[];
  branches: Branch[];
}