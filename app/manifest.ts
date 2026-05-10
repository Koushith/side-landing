import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION_SHORT, SITE_NAME } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME}, a friendly second brain`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION_SHORT,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f3ec',
    theme_color: '#f7f3ec',
    icons: [
      {
        src: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
