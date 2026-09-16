export type ServiceCategory = 'all' | 'ev' | 'ozel' | 'kurumsal';

export interface ServiceItem {
  id: string;
  category: 'ev' | 'ozel' | 'kurumsal';
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  icon: string;
  basePrice: number;
  priceFormatted: string;
  duration: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  location: string;
  service: string;
  rating: number;
  timeAgo: string;
  comment: string;
  colorClass: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DistrictInfo {
  name: string;
  activeCrews: number;
  estimatedArrival: string;
}
