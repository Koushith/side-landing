import { REPO_URL, SITE_URL, TWITTER_URL } from './links';

export const SITE_NAME = 'SideNotes';
export const SITE_TAGLINE = 'A quiet second brain';
export const SITE_DESCRIPTION =
  'SideNotes is a friendly, free notes app for everyday writers, students, and journalers, on macOS, Windows, and Linux. A simple second brain for non-technical folks who just want clean writing, daily notes, and a way to connect ideas, without plugins, settings menus, or a learning curve. Your notes stay as plain markdown files on your computer.';
export const SITE_DESCRIPTION_SHORT =
  'A friendly second brain for the rest of us. Simple writing, daily notes, and connected ideas, without the tweaking. Your notes stay on your computer.';

export const KEYWORDS = [
  'SideNotes',
  'simple notes app',
  'friendly notes app',
  'easy markdown editor',
  'notes for non-technical users',
  'notes app for writers',
  'notes app for students',
  'beginner notes app',
  'second brain for everyone',
  'simple second brain',
  'minimal notes app',
  'distraction-free writing',
  'daily journal app',
  'connected notes without plugins',
  'easy wikilinks',
  'notes that just work',
  'local-first notes',
  'private notes app',
  'no cloud notes',
  'plain text notes',
  'open source notes app',
  'macOS notes app',
  'Windows notes app',
  'Linux notes app',
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'What Does It Cost?',
    a: 'Nothing. SideNotes is free and open source, MIT licensed. If you want to support it, star the repo or open a thoughtful issue.',
  },
  {
    q: 'Is There a Windows / Linux Build?',
    a: 'Yes, pick your platform from the Download section. macOS gets the most testing; Windows and Linux builds come from the same CI pipeline but have less mileage. Bug reports welcome.',
  },
  {
    q: 'How Do I Sync Notes Across Devices?',
    a: "SideNotes is local-first by design. Point your vault at any folder you already sync (iCloud Drive, Dropbox, Syncthing, a USB stick). The app doesn't run a sync service; we don't want to.",
  },
  {
    q: 'Will My Files Work in Obsidian?',
    a: "Yes. Notes are plain markdown with [[wikilinks]] and #tags. Canvas files use Obsidian's .canvas JSON format. You can switch in either direction without exporting anything.",
  },
  {
    q: 'Are There Plugins?',
    a: 'Not in v0.2. The roadmap leaves room for them, but the goal is to ship the right defaults first (slash menu, graph, canvas, daily notes), instead of pushing customisation onto you.',
  },
  {
    q: 'Is My Data Sent Anywhere?',
    a: 'No. There is no telemetry, no analytics, no auto-update phone-home. The app reads and writes files in the folder you picked. That is the entire surface area.',
  },
];

export const APP_FEATURES = [
  'Friendly block-based writing, no markdown syntax to memorise',
  'Type [[ to link notes, no setup',
  'A daily journal that opens to today',
  'See your notes as a visual map of ideas',
  'A simple whiteboard for arranging thoughts',
  'One keyboard shortcut to find anything',
  'Six calm themes, light and dark',
  'Save anywhere as PDF, HTML, or markdown',
  'Works on macOS, Windows, and Linux',
  'Free and open source, your notes stay on your computer',
];

type SchemaObject = Record<string, unknown>;

export function softwareAppSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    alternateName: 'SideNotes, a friendly notes app',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    applicationCategory: 'ProductivityApplication',
    applicationSubCategory: 'Note-taking',
    operatingSystem: 'macOS, Windows, Linux',
    softwareVersion: '0.2.0',
    downloadUrl: `${REPO_URL}/releases/latest`,
    license: 'https://opensource.org/licenses/MIT',
    isAccessibleForFree: true,
    featureList: APP_FEATURES,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Koushith Amin',
      url: TWITTER_URL,
      sameAs: [TWITTER_URL, 'https://github.com/Koushith'],
    },
    publisher: {
      '@type': 'Person',
      name: 'Koushith Amin',
      url: TWITTER_URL,
    },
    aggregateRating: undefined,
  };
}

export function faqSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function websiteSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'A friendly notes app for everyone',
    url: SITE_URL,
    description: SITE_DESCRIPTION_SHORT,
    publisher: {
      '@type': 'Person',
      name: 'Koushith Amin',
      url: TWITTER_URL,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
