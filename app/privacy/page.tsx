import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'SideNotes is local-first. The desktop app collects nothing, transmits nothing, and makes no network calls. This page explains exactly what does and does not happen with your data.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy · SideNotes',
    description:
      'The desktop app collects nothing. The website uses anonymous Vercel Analytics. That is the entire story.',
    url: '/privacy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy · SideNotes',
    description:
      'Local-first, no telemetry. Read the full policy.',
  },
};

const LAST_UPDATED = 'May 14, 2026';

interface Bullet {
  title: string;
  body: string;
}

const APP_DOES_NOT: Bullet[] = [
  {
    title: 'Send telemetry, analytics, or usage data.',
    body: 'There is no first-party or third-party tracking inside the desktop app. No crash reporters, no session replays, no SDKs.',
  },
  {
    title: 'Require an account.',
    body: 'You install SideNotes, pick a folder, and start writing. There is no sign-up, no login, no server to authenticate against.',
  },
  {
    title: 'Make outbound network calls.',
    body: 'Fonts and assets are bundled into the binary. The Electron auto-updater is disabled. The Content Security Policy permits zero remote origins.',
  },
  {
    title: 'Touch files outside your vault.',
    body: 'SideNotes reads and writes only inside the folder you explicitly pick as your vault. Permissions are scoped to that folder.',
  },
];

const APP_STORES: Bullet[] = [
  {
    title: 'Your notes, on your disk.',
    body: 'Every note is a plain .md file in the vault folder you chose. Canvases save as .canvas JSON. Attachments stay where you put them.',
  },
  {
    title: 'A small index file.',
    body: 'Alongside your vault, SideNotes maintains a tiny JSON index for fast search and graph links. It is safe to delete at any time.',
  },
  {
    title: 'App preferences locally.',
    body: 'Theme, recent vaults, pinned items, and similar choices live in the operating system\'s standard application-support directory for SideNotes.',
  },
];

const SITE_USES: Bullet[] = [
  {
    title: 'Vercel Analytics.',
    body: 'This marketing site (sidenotes.me) records anonymous, aggregate visit counts and country-level geography for pages you load. No cookies, no fingerprinting, no personal identifiers. Vercel Analytics is GDPR / CCPA compliant by design and the data is not shared.',
  },
  {
    title: 'No remarketing pixels, no third-party trackers.',
    body: 'There is no Google Analytics, no Meta pixel, no Hotjar, no Mixpanel, no Segment. Just the static pages you are looking at.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <div className="px-6 pt-12 pb-24">
        <div className="mx-auto max-w-3xl">
          <header className="mb-14">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-4">
              Privacy · updated {LAST_UPDATED}
            </div>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.02] tracking-[-0.025em] font-semibold mb-5">
              Local-First, By Design.
            </h1>
            <p className="font-serif text-[19px] leading-[1.6] text-ink-2">
              SideNotes is built around a single rule: your notes never leave
              your device unless you move them yourself. There is no cloud, no
              account, no telemetry, and no ad network. This page spells out
              exactly what that means in practice.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="font-serif text-[28px] font-semibold tracking-tight mb-6">
              The short version
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2 mb-3">
              The SideNotes desktop app collects nothing about you, transmits
              nothing about you, and stores nothing about you on any server we
              run. We do not run any servers.
            </p>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2">
              This marketing website uses Vercel&apos;s privacy-respecting
              Analytics for anonymous visit counts. That is the entire
              outbound-data footprint of the project.
            </p>
          </section>

          <section className="mb-16">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3 mb-4">
              The desktop app does <em>not</em>…
            </div>
            <ul className="space-y-7">
              {APP_DOES_NOT.map((b) => (
                <li key={b.title}>
                  <div className="font-serif text-[19px] font-semibold tracking-tight mb-1.5">
                    {b.title}
                  </div>
                  <p className="font-serif text-[16px] leading-[1.6] text-ink-2">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3 mb-4">
              What the app keeps on your device
            </div>
            <ul className="space-y-7">
              {APP_STORES.map((b) => (
                <li key={b.title}>
                  <div className="font-serif text-[19px] font-semibold tracking-tight mb-1.5">
                    {b.title}
                  </div>
                  <p className="font-serif text-[16px] leading-[1.6] text-ink-2">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3 mb-4">
              What this website (sidenotes.me) does
            </div>
            <ul className="space-y-7">
              {SITE_USES.map((b) => (
                <li key={b.title}>
                  <div className="font-serif text-[19px] font-semibold tracking-tight mb-1.5">
                    {b.title}
                  </div>
                  <p className="font-serif text-[16px] leading-[1.6] text-ink-2">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-[28px] font-semibold tracking-tight mb-6">
              Your rights
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2 mb-3">
              Because the desktop app collects nothing, there is no data of
              yours to access, export, or delete on our side. Your vault is
              already in your possession; deleting the folder deletes the data.
            </p>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2">
              For the anonymous analytics on this website, we do not collect
              identifiable information in the first place, so there is no
              individual record to look up. If you would prefer not to count at
              all, any standard tracker-blocker (uBlock Origin, etc.) blocks
              Vercel Analytics, and the site continues to work normally.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-[28px] font-semibold tracking-tight mb-6">
              Children
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2">
              SideNotes does not knowingly collect any information from anyone,
              including children under 13. The app is rated 4+ / Everyone in
              the Mac App Store and Microsoft Store.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-[28px] font-semibold tracking-tight mb-6">
              Changes to this policy
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2">
              If this policy ever changes, the new version will replace this
              page with an updated &ldquo;updated&rdquo; date at the top. There
              is no email list — release notes on the{' '}
              <a
                href="/changelog"
                className="text-ink hover:underline"
              >
                changelog page
              </a>{' '}
              are the canonical heads-up.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[28px] font-semibold tracking-tight mb-6">
              Contact
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-ink-2">
              Privacy questions, security reports, or anything else →{' '}
              <a
                href="mailto:hello@sidenotes.me"
                className="text-ink hover:underline"
              >
                hello@sidenotes.me
              </a>
              .
            </p>
          </section>

          <div className="mt-20 pt-10 border-t border-rule-soft">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
              SideNotes · MIT licensed · v0.2.0
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
