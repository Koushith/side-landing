import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Changelog — Side',
  description:
    'Release notes for Side. New features, fixes, and removed cruft, version by version.',
};

type Section = { label: 'New' | 'Fixed' | 'Removed'; items: string[] };
type Release = {
  version: string;
  date: string;
  highlight?: string;
  sections: Section[];
};

const RELEASES: Release[] = [
  {
    version: '0.2.0',
    date: 'May 2026',
    highlight:
      'Outline, smarter file-watching, and a cleaner editor — minor version, real polish.',
    sections: [
      {
        label: 'New',
        items: [
          'Outline panel — live table of contents alongside every markdown note',
          'Folder changes made outside Side (addDir / unlinkDir) now sync to the sidebar instantly',
          'Deleting a file externally now closes its tab and focuses the next one',
        ],
      },
      {
        label: 'Fixed',
        items: [
          '⌘N, daily note, and "new from template" now open a tab immediately',
          'Canvas edge handles now render the correct colour (bg-link was being purged by Tailwind)',
          'Daily note header no longer double-reads energy mood from localStorage on mount',
        ],
      },
      {
        label: 'Removed',
        items: [
          'Redundant BacklinksPanel (superseded by Connections panel)',
          'Dead dirname / slugify utilities and unused fsWatch import',
          'Placeholder "Pinned" nav item with no action',
          'Unused exports: WikilinkCandidate, SlashCommand interface, dismissMention()',
        ],
      },
    ],
  },
  {
    version: '0.1.0',
    date: 'Apr 2026',
    highlight: 'First public release. The whole second brain, in one box.',
    sections: [
      {
        label: 'New',
        items: [
          'Vault-based markdown editor with TipTap + live markdown serialisation',
          'Wikilinks [[note]], #tags, daily notes with mood + streak tracking',
          'Graph view (Sigma.js + ForceAtlas2), Canvas view (React Flow)',
          'Connections panel — backlinks and outgoing links with inline excerpts',
          'Multi-theme picker: Paper, Ink, Forest, Dusk, Carbon, Rose',
          'Focus mode, command palette (⌘K), slash menu (/), keyboard shortcuts (⌘/)',
          'Export as PDF, HTML, Markdown',
          'Templates folder support',
          'Drag-and-drop file moves, inline image paste/drop, context menus',
        ],
      },
    ],
  },
];

const SECTION_STYLE: Record<
  Section['label'],
  { dot: string; label: string; chip: string }
> = {
  New: {
    dot: 'bg-tag',
    label: 'text-tag',
    chip: 'bg-tag-soft text-tag',
  },
  Fixed: {
    dot: 'bg-accent',
    label: 'text-accent-ink',
    chip: 'bg-accent-soft text-accent-ink',
  },
  Removed: {
    dot: 'bg-ink-3',
    label: 'text-ink-3',
    chip: 'bg-paper-3 text-ink-3',
  },
};

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <div className="px-6 pt-12 pb-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-16 max-w-3xl">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-4">
              Changelog · v{RELEASES[0].version}
            </div>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.02] tracking-[-0.025em] font-semibold mb-5">
              What changed, when.
            </h1>
            <p className="font-serif text-[19px] leading-[1.6] text-ink-2">
              Side ships small and often. Every release, top to bottom — what
              landed, what got fixed, what got cut. The newest version is at the
              top.
            </p>
          </header>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-rule-soft md:left-[calc(180px+7px)]"
            />

            <div className="space-y-16">
              {RELEASES.map((release, ri) => (
                <article
                  key={release.version}
                  className="relative md:grid md:grid-cols-[180px_1fr] md:gap-10"
                >
                  <div className="md:sticky md:top-20 md:self-start mb-5 md:mb-0 flex items-center gap-3 md:block">
                    <span
                      aria-hidden
                      className="relative z-10 grid place-items-center w-[15px] h-[15px] rounded-full bg-paper border-2 border-accent md:absolute md:left-[180px] md:-translate-x-1/2 md:top-[10px]"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-accent" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-[24px] font-semibold tracking-tight">
                          v{release.version}
                        </span>
                        {ri === 0 && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-[2px] rounded-full bg-accent text-paper">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-[11.5px] text-ink-3 mt-1">
                        {release.date}
                      </div>
                    </div>
                  </div>

                  <div className="md:pl-10">
                    {release.highlight && (
                      <p className="font-serif text-[17px] leading-[1.55] text-ink-2 mb-7 italic">
                        {release.highlight}
                      </p>
                    )}

                    <div className="space-y-7">
                      {release.sections.map((section) => {
                        const style = SECTION_STYLE[section.label];
                        return (
                          <div key={section.label}>
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                aria-hidden
                                className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
                              />
                              <span
                                className={`font-mono text-[10.5px] uppercase tracking-[0.12em] ${style.label}`}
                              >
                                {section.label}
                              </span>
                            </div>
                            <ul className="space-y-2 border-l border-rule-soft pl-4">
                              {section.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="font-serif text-[15.5px] leading-[1.55] text-ink-2"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-rule-soft flex flex-wrap items-center justify-between gap-4">
            <p className="font-serif text-[15px] text-ink-3">
              Following along? Star the repo for release pings.
            </p>
            <a
              href="https://github.com/Koushith/side-deck/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-ink-2 hover:text-ink"
            >
              All releases on GitHub
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="m7 17 10-10M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
