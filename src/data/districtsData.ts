import { DistrictInfo } from '../types';

export const BURSA_DISTRICTS: DistrictInfo[] = [
  { name: 'Nilüfer', activeCrews: 4, estimatedArrival: '20 - 35 dk' },
  { name: 'Osmangazi', activeCrews: 4, estimatedArrival: '20 - 35 dk' },
  { name: 'Yıldırım', activeCrews: 3, estimatedArrival: '25 - 40 dk' },
  { name: 'Mudanya', activeCrews: 3, estimatedArrival: '25 - 40 dk' },
  { name: 'Gürsu', activeCrews: 2, estimatedArrival: '30 - 45 dk' },
  { name: 'Kestel', activeCrews: 2, estimatedArrival: '30 - 45 dk' },
  { name: 'Gemlik', activeCrews: 2, estimatedArrival: '35 - 50 dk' },
  { name: 'İnegöl', activeCrews: 3, estimatedArrival: '35 - 50 dk' },
  { name: 'Karacabey', activeCrews: 2, estimatedArrival: '40 - 55 dk' },
  { name: 'Mustafakemalpaşa', activeCrews: 2, estimatedArrival: '45 - 60 dk' },
  { name: 'Orhangazi', activeCrews: 2, estimatedArrival: '35 - 50 dk' },
  { name: 'Yenişehir', activeCrews: 1, estimatedArrival: '40 - 55 dk' },
  { name: 'İznik', activeCrews: 1, estimatedArrival: '45 - 60 dk' },
  { name: 'Orhaneli', activeCrews: 1, estimatedArrival: '50 - 65 dk' },
  { name: 'Keles', activeCrews: 1, estimatedArrival: '50 - 65 dk' },
  { name: 'Büyükorhan', activeCrews: 1, estimatedArrival: '55 - 75 dk' },
  { name: 'Harmancık', activeCrews: 1, estimatedArrival: '55 - 75 dk' }
];

// Alias for backwards compatibility
export const ISTANBUL_DISTRICTS = BURSA_DISTRICTS;
