import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Release notes for SideNotes. What is new, what got fixed, and what got cut, version by version, in plain English.',
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: 'Changelog · SideNotes',
    description:
      'What is new, what got fixed, and what got cut, version by version.',
    url: '/changelog',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog · SideNotes',
    description:
      'What is new, what got fixed, and what got cut, in plain English.',
  },
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
    version: '0.3.0',
    date: 'May 2026',
    highlight:
      'Mermaid diagrams, image + PDF viewer, todo notes with progress, virtual Year/Month grouping for daily notes, and a hard fix for an external-edit data-loss path.',
    sections: [
      {
        label: 'New',
        items: [
          'Mermaid diagrams, flowcharts, sequence, gantt and more render live inside ```mermaid code blocks, themed to the active palette',
          'Image + PDF viewer, click any .png/.jpg/.gif/.webp/.svg/.bmp/.avif/.pdf in the file tree to open it in a tab (PDFs use Chromium’s built-in viewer)',
          'Todo notes, files under any /todos/ folder (or named todos.md) get a dedicated header with live task counts, progress bar, and an Add task affordance',
          'Daily notes auto-group by Year / Month in the sidebar, purely visual, files stay flat on disk so iCloud, Dropbox, and git don’t see a thing',
          'Markdown variants, .markdown, .mdx, .mdown, .mkd, .mkdn, .mdwn all index and open in the editor',
          'Carbon · dark is now the default theme on fresh installs',
        ],
      },
      {
        label: 'Fixed',
        items: [
          'Critical data-loss path, editing a file outside SideNotes (iCloud, Dropbox, git checkout, another editor) no longer gets silently clobbered by the open tab’s stale buffer, the editor reloads on external change and preserves unsaved local edits on conflict',
          'Rename, new note, new folder, new canvas, and link dialogs no longer crash on Electron’s disabled window.prompt, replaced with a themed in-app dialog',
          'Native confirm() and alert() replaced with a styled confirmation modal and a non-blocking toast',
          'Right-click rename now preserves the original extension instead of forcing .md (canvas, mdx, markdown renames work correctly)',
          'Tab strip updates correctly after rename; stale tabs pointing at deleted files close themselves instead of looping read errors',
          'Task checkbox color follows the active theme accent (was a hardcoded blue)',
          'Daily-note and todo task counts no longer stuck at 0 on file load',
          'vault:// image resolver now finds attachments at common publish-site paths (blog/<slug>/foo.png resolves to blogs/images/<slug>/foo.png)',
          'Custom-styled checkboxes replace the heavy native OS chrome inside the task list',
        ],
      },
      {
        label: 'Removed',
        items: [
          'Placeholder "Add weather / Add meetings / Add reading" chips on daily notes, replaced with live Words / Tasks / Streak counters driven from the editor',
        ],
      },
    ],
  },
  {
    version: '0.2.0',
    date: 'May 2026',
    highlight:
      'Outline, smarter file-watching, and a cleaner editor, minor version, real polish.',
    sections: [
      {
        label: 'New',
        items: [
          'Outline panel, live table of contents alongside every markdown note',
          'Folder changes made outside SideNotes (addDir / unlinkDir) now sync to the sidebar instantly',
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
          'Connections panel, backlinks and outgoing links with inline excerpts',
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

const SECTION_STYLE: Record<Section['label'], { label: string }> = {
  New: { label: 'text-tag' },
  Fixed: { label: 'text-accent-ink' },
  Removed: { label: 'text-ink-3' },
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
              What Changed, When.
            </h1>
            <p className="font-serif text-[19px] leading-[1.6] text-ink-2">
              SideNotes ships small and often. Every release, top to bottom, what
              landed, what got fixed, what got cut. The newest version is at the
              top.
            </p>
          </header>

          <div className="divide-y divide-rule-soft">
            {RELEASES.map((release, ri) => (
              <article key={release.version} className="py-12 first:pt-0">
                <header className="mb-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h2 className="font-serif text-[28px] font-semibold tracking-tight">
                      v{release.version}
                    </h2>
                    <span className="font-mono text-[11.5px] text-ink-3">
                      {release.date}
                    </span>
                    {ri === 0 && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-[2px] rounded-full bg-accent text-paper">
                        Latest
                      </span>
                    )}
                  </div>
                  {release.highlight && (
                    <p className="font-serif text-[17px] leading-[1.55] text-ink-2 italic">
                      {release.highlight}
                    </p>
                  )}
                </header>

                <div className="space-y-7">
                  {release.sections.map((section) => {
                    const style = SECTION_STYLE[section.label];
                    return (
                      <div key={section.label}>
                        <div
                          className={`font-mono text-[10.5px] uppercase tracking-[0.12em] mb-3 ${style.label}`}
                        >
                          {section.label}
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 font-serif text-[15.5px] leading-[1.55] text-ink-2"
                            >
                              <span
                                aria-hidden
                                className="mt-[9px] w-1 h-1 rounded-full bg-ink-4 shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
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
