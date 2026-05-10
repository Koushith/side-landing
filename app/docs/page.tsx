import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { DocsToc } from '@/components/docs/DocsToc';
import { Kbd } from '@/components/docs/Kbd';
import { Section } from '@/components/docs/Section';
import { Callout } from '@/components/docs/Callout';
import { ShortcutTable } from '@/components/docs/ShortcutTable';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'A friendly walkthrough of SideNotes. How to set up your vault, write notes, link ideas with [[wikilinks]], use the canvas and graph, keep a daily journal, and customise the app, written for non-technical users.',
  alternates: { canonical: '/docs' },
  openGraph: {
    title: 'Docs · SideNotes',
    description:
      'A friendly walkthrough of SideNotes, vaults, writing, wikilinks, canvas, graph, daily notes, themes, and shortcuts.',
    url: '/docs',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Docs · SideNotes',
    description:
      'A friendly walkthrough of SideNotes, written for non-technical users.',
  },
};

export default function DocsPage() {
  return (
    <>
      <Nav />
      <div className="px-6 pt-12 pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14 max-w-3xl">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-4">
              Documentation · v0.2
            </div>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.02] tracking-[-0.025em] font-semibold mb-5">
              How SideNotes Works.
            </h1>
            <p className="font-serif text-[19px] leading-[1.6] text-ink-2">
              A complete tour of the app, every view, every shortcut, every file
              format. Read top to bottom on day one, then jump back here when
              something is unclear.
            </p>
          </header>

          <div className="grid md:grid-cols-[220px_1fr] gap-12">
            <DocsToc />

            <main className="min-w-0 max-w-3xl">
              <Section
                id="install"
                eyebrow="01 · Install"
                title="Download and First Launch."
              >
                <p>
                  SideNotes is a desktop app built on Electron. Builds for macOS
                  (Apple Silicon and Intel), Windows, and Linux are published on
                  GitHub Releases. macOS gets the most testing; the other
                  platforms come from the same CI pipeline but have less mileage
                 , bug reports welcome.
                </p>
                <h3>macOS</h3>
                <ol>
                  <li>
                    Download the <code>.dmg</code> for Apple Silicon or Intel
                    from the <a href="#download">Download</a> section on the
                    landing page.
                  </li>
                  <li>
                    Open the <code>.dmg</code> and drag SideNotes into{' '}
                    <code>/Applications</code>.
                  </li>
                  <li>
                    First launch is unsigned in v0.2, right-click the app and
                    pick <em>Open</em> the first time so Gatekeeper lets it
                    through.
                  </li>
                </ol>
                <h3>Windows</h3>
                <p>
                  Run <code>SideNotes-Setup-x.y.z-x64.exe</code> (or the{' '}
                  <code>arm64</code> build on Surface devices). NSIS installs
                  per-user; no admin rights needed.
                </p>
                <h3>Linux</h3>
                <p>
                  Download the <code>.AppImage</code>,{' '}
                  <code>chmod +x SideNotes-*.AppImage</code>, and run it. AppImages
                  are self-contained, no install step.
                </p>
                <h3>Build from Source</h3>
                <pre>
                  <code>{`git clone https://github.com/Koushith/side-deck
cd side-deck
npm install
npm run dev`}</code>
                </pre>
                <p>
                  That launches Vite + Electron in development mode.{' '}
                  <code>npm run build</code> produces a packaged binary in{' '}
                  <code>release/</code>.
                </p>
              </Section>

              <Section
                id="vault"
                eyebrow="02 · Vault"
                title="Pick a Folder. That Is Your Vault."
              >
                <p>
                  SideNotes does not store your notes in a database or in the cloud.
                  Your <strong>vault</strong> is just a folder on disk full of{' '}
                  <code>.md</code> and <code>.canvas</code> files. You own
                  every byte.
                </p>
                <h3>First Launch</h3>
                <p>
                  The onboarding tour opens automatically. Step four asks you
                  to <em>Pick a vault</em>: choose any folder on your computer
                 , empty or full of existing markdown, and SideNotes indexes it.
                </p>
                <h3>Switching Vaults</h3>
                <p>
                  Click the <strong>S</strong> chip at the top of the sidebar
                  to close the current vault and pick another. You can also run{' '}
                  <em>Switch vault</em> from the command palette (<Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>).
                </p>
                <h3>What Lives in the Vault Folder</h3>
                <ul>
                  <li>
                    <code>*.md</code>: your notes. Plain markdown with
                    optional <code>---</code> frontmatter.
                  </li>
                  <li>
                    <code>*.canvas</code>: whiteboard files. JSON, compatible
                    with Obsidian's canvas format.
                  </li>
                  <li>
                    <code>assets/</code>: created automatically when you paste
                    or drop an image. Files are stored relative to the vault.
                  </li>
                  <li>
                    <code>Daily Notes/</code>: created the first time you
                    press <Kbd>⌘</Kbd>
                    <Kbd>D</Kbd>. One file per day, named{' '}
                    <code>YYYY-MM-DD.md</code>.
                  </li>
                  <li>
                    <code>templates/</code>: drop any <code>.md</code> file
                    here and it shows up as a "New from template" option.
                  </li>
                </ul>
                <Callout>
                  SideNotes watches the vault folder. Edit a file in another editor
                  and the change shows up live, no reload, no merge dialog.
                </Callout>
              </Section>

              <Section
                id="interface"
                eyebrow="03 · Interface"
                title="The Three Views, the Sidebar, the Tabs."
              >
                <p>
                  The window has three top-level views, switched from the
                  sidebar or with a keyboard shortcut. Each view shares the
                  same vault index, so opening a note from any of them lands
                  you in the editor.
                </p>
                <h3>Editor</h3>
                <p>
                  The default. Block-style writing surface for one note at a
                  time, with a left rail for the file tree and a right rail for
                  backlinks and the outline. Press <Kbd>⌘</Kbd>
                  <Kbd>1</Kbd> to return here from anywhere.
                </p>
                <h3>Graph</h3>
                <p>
                  A WebGL force-directed map of every wikilink in your vault.
                  Press <Kbd>⌘</Kbd>
                  <Kbd>2</Kbd>. Hover any node to highlight its neighbours;
                  click to open. The graph colours notes by their top-level
                  folder so structure is readable at a glance.
                </p>
                <h3>Canvas</h3>
                <p>
                  An infinite whiteboard. Open from <em>New canvas</em> in the
                  command palette, or click any <code>.canvas</code> file in
                  the sidebar. Drag notes onto the canvas to embed them as live
                  cards.
                </p>
                <h3>Sidebar</h3>
                <p>The left rail, top to bottom:</p>
                <ul>
                  <li>
                    <strong>Vault chip</strong>: click to switch vaults.
                  </li>
                  <li>
                    <strong>Search</strong>: opens the command palette.
                  </li>
                  <li>
                    <strong>Today</strong>: jumps to today's daily note,
                    creating it if needed.
                  </li>
                  <li>
                    <strong>All notes</strong>: flat, sortable list of every
                    note.
                  </li>
                  <li>
                    <strong>Pinned</strong>: filters the file tree to your
                    pinned notes.
                  </li>
                  <li>
                    <strong>Connections</strong>: opens the graph view.
                  </li>
                  <li>
                    <strong>File tree</strong>: folders + files. Drag to
                    reorder, right-click for the context menu.
                  </li>
                  <li>
                    <strong>Tags</strong>: every tag in your vault, sorted by
                    count. Click one to filter the tree.
                  </li>
                </ul>
                <h3>Tabs</h3>
                <p>
                  Open files appear as tabs at the top of the editor. Drag to
                  reorder. <Kbd>⌘</Kbd>
                  <Kbd>W</Kbd> closes the active tab.
                </p>
                <h3>Focus Mode</h3>
                <p>
                  Press <Kbd>⌘</Kbd>
                  <Kbd>.</Kbd> and the sidebar slides away, just the page.{' '}
                  <Kbd>Esc</Kbd> brings it back.
                </p>
              </Section>

              <Section
                id="editor"
                eyebrow="04 · Writing"
                title="The Editor: Slash, Markdown, Paste."
              >
                <p>
                  The editor is built on TipTap, with a markdown round-trip on
                  every keystroke. What you see is rendered HTML; what is on
                  disk is plain markdown. You never have to leave one for the
                  other.
                </p>
                <h3>The Slash Menu</h3>
                <p>
                  Press <Kbd>/</Kbd> on a new line and a menu opens with every
                  block you can insert: headings, bullet and numbered lists,
                  task lists, quotes, code blocks, tables, images, dividers.
                  Filter by typing, <code>/h2</code> jumps straight to a
                  heading.
                </p>
                <h3>Markdown Shortcuts</h3>
                <p>
                  Type these at the start of a line and the editor transforms
                  them in place. Nothing to memorize beyond muscle memory you
                  may already have.
                </p>
                <ul>
                  <li>
                    <code># </code>: Heading 1. <code>## </code>, <code>### </code>{' '}
                    work too.
                  </li>
                  <li>
                    <code>- </code>: Bullet list.{' '}
                    <code>1. </code>: Numbered list.
                  </li>
                  <li>
                    <code>&gt; </code>: Quote.
                  </li>
                  <li>
                    <code>```</code>: Code block. Add a language after the
                    backticks for syntax highlighting.
                  </li>
                  <li>
                    <code>---</code>: Horizontal divider.
                  </li>
                  <li>
                    <code>[ ] </code>: Task list item.
                  </li>
                </ul>
                <h3>Inline Formatting</h3>
                <p>
                  Select text and a bubble menu floats above it. Or use the
                  shortcuts: <Kbd>⌘</Kbd>
                  <Kbd>B</Kbd> bold, <Kbd>⌘</Kbd>
                  <Kbd>I</Kbd> italic, <Kbd>⌘</Kbd>
                  <Kbd>E</Kbd> inline code. Markdown like <code>**bold**</code>{' '}
                  and <code>`code`</code> works too.
                </p>
                <h3>Drag Handles</h3>
                <p>
                  Hover the left margin of any block, a handle appears. Drag
                  to reorder, or click for a block menu (delete, duplicate,
                  turn into).
                </p>
                <h3>Images</h3>
                <p>
                  Paste from the clipboard or drop a file into the editor.
                  Images are saved into <code>&lt;vault&gt;/assets/</code> and
                  referenced relatively, so the vault stays portable.
                </p>
                <h3>Code Highlighting</h3>
                <p>
                  Code blocks render with syntax highlighting via lowlight (a
                  light wrapper around highlight.js). Most common languages are
                  detected automatically; you can also annotate the fence:{' '}
                  <code>```ts</code>.
                </p>
                <h3>Tables</h3>
                <p>
                  Insert from the slash menu. Add columns and rows from the
                  block menu, or use Tab/Shift-Tab to navigate cells.
                </p>
              </Section>

              <Section
                id="linking"
                eyebrow="05 · Linking"
                title="Wikilinks, Mentions, and Tags."
              >
                <p>
                  Linking is the difference between a notes app and a second
                  brain. SideNotes gives you three light syntaxes, pick whichever
                  fits the moment.
                </p>
                <h3>Wikilinks: [[</h3>
                <p>
                  Type <code>[[</code> anywhere and an autocomplete pops up.
                  Pick an existing note, or type a new name and press{' '}
                  <Kbd>↵</Kbd> to create it. Aliased links work too:{' '}
                  <code>[[Database indexing|the indexing post]]</code> renders
                  as <em>the indexing post</em> but links to{' '}
                  <em>Database indexing</em>.
                </p>
                <h3>Mentions: @</h3>
                <p>
                  Type <code>@</code> for a unified picker:
                </p>
                <ul>
                  <li>
                    Note titles:{' '}
                    <code>@Atomic Habits</code> inserts a wikilink.
                  </li>
                  <li>
                    Tags, <code>@meeting</code> inserts <code>#meeting</code>.
                  </li>
                  <li>
                    Dates, <code>@today</code>, <code>@yesterday</code>,{' '}
                    <code>@monday</code>, <code>@2026-05-08</code> all link to
                    the matching daily note.
                  </li>
                </ul>
                <h3>Tags: #</h3>
                <p>
                  Type <code>#</code> followed by letters and an autocomplete
                  shows existing tags. Tags appear in the sidebar's Tags
                  section, sorted by count. Click any tag in the sidebar to
                  filter the file tree to notes that contain it.
                </p>
                <h3>Backlinks</h3>
                <p>
                  The right rail of the editor shows every note that links to
                  the one you have open, with a snippet of the surrounding
                  text. Backlinks update as you type, in either direction.
                </p>
                <h3>Connections Panel</h3>
                <p>
                  Below backlinks, the Connections panel shows the immediate
                  neighbourhood of the current note as a tiny graph, a
                  fast-loading preview of the same data you see in the full
                  graph view.
                </p>
              </Section>

              <Section
                id="canvas"
                eyebrow="06 · Canvas"
                title="Whiteboards for Spatial Thinking."
              >
                <p>
                  Canvas is built on React Flow. It is for the parts of
                  thinking that resist a linear page, sequencing, clustering,
                  mind-mapping, mood boards.
                </p>
                <h3>Creating a Canvas</h3>
                <p>
                  Open the command palette (<Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>) and run <em>New canvas</em>. Give it a name and
                  it appears in the sidebar with a grid icon.
                </p>
                <h3>Adding Cards</h3>
                <ul>
                  <li>
                    <strong>Drag a note</strong> from the sidebar onto the
                    canvas, it embeds as a live card that reflects the note's
                    current contents.
                  </li>
                  <li>
                    <strong>Double-click empty space</strong> for a free-form
                    text card.
                  </li>
                  <li>
                    Drop an image onto the canvas to add an image card.
                  </li>
                </ul>
                <h3>Connecting Cards</h3>
                <p>
                  Hover a card edge, small handles appear. Drag from one
                  handle to another card to draw an arrow.
                </p>
                <h3>File Format</h3>
                <p>
                  Canvases save as <code>.canvas</code> files in your vault
                  using the same JSON schema Obsidian uses. You can hand-edit
                  them, version-control them, and switch between SideNotes and
                  Obsidian without converting anything.
                </p>
              </Section>

              <Section
                id="graph"
                eyebrow="07 · Graph"
                title="See the Shape of Your Thinking."
              >
                <p>
                  The graph is a Sigma + Graphology view of every wikilink in
                  your vault. Press <Kbd>⌘</Kbd>
                  <Kbd>2</Kbd> to open it.
                </p>
                <h3>Reading the Map</h3>
                <ul>
                  <li>
                    <strong>Node colour</strong>: derived from the note's
                    top-level folder. Move a note between folders and the
                    colour follows.
                  </li>
                  <li>
                    <strong>Node size</strong>: scaled by the number of links
                    in and out.
                  </li>
                  <li>
                    <strong>Hover</strong>: neighbours stay bright; everything
                    else fades. The note title pins to the cursor.
                  </li>
                  <li>
                    <strong>Click</strong>: opens the note in the editor.
                  </li>
                  <li>
                    <strong>Drag</strong>: repositions the node. Layout is
                    physics-based, so other nodes adjust around it.
                  </li>
                </ul>
                <h3>Local-Graph Mode</h3>
                <p>
                  Toggle local mode to focus on the active note plus one or two
                  hops out, useful when the global graph gets noisy.
                </p>
              </Section>

              <Section
                id="daily"
                eyebrow="08 · Daily notes"
                title="A Page for Each Day."
              >
                <p>
                  Press <Kbd>⌘</Kbd>
                  <Kbd>D</Kbd> any time to open today's daily note (created on
                  the spot if it does not exist). Files live under{' '}
                  <code>Daily Notes/YYYY-MM-DD.md</code>.
                </p>
                <h3>The Masthead</h3>
                <p>
                  Daily notes open with a header that shows the date in long
                  form, a mood strip you can click to set the day's tone, a
                  streak chip, and a "Yesterday's loose ends" panel that pulls
                  unchecked task-list items from the previous day's note.
                </p>
                <h3>Templates for Daily Notes</h3>
                <p>
                  Drop a markdown file at <code>templates/daily.md</code> and
                  SideNotes uses it as the body for new daily notes. The template
                  can include <code>{'{{date}}'}</code> tokens.
                </p>
              </Section>

              <Section
                id="templates"
                eyebrow="09 · Templates"
                title="Reusable Scaffolds for New Notes."
              >
                <p>
                  Any markdown file inside a top-level <code>templates/</code>{' '}
                  folder is treated as a template. They show up in the command
                  palette as "New from template: {'<name>'}".
                </p>
                <h3>Tokens</h3>
                <ul>
                  <li>
                    <code>{'{{title}}'}</code>: the name you typed in the
                    prompt.
                  </li>
                  <li>
                    <code>{'{{date}}'}</code>: today's date, ISO format.
                  </li>
                  <li>
                    <code>{'{{time}}'}</code>: current time, 24-hour.
                  </li>
                </ul>
                <h3>Example</h3>
                <pre>
                  <code>{`---
title: {{title}}
created: {{date}}
---

# {{title}}

## Notes

## Action items

`}</code>
                </pre>
              </Section>

              <Section
                id="search"
                eyebrow="10 · Search"
                title="The Command Palette."
              >
                <p>
                  Press <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd> from anywhere in the app. The palette is one
                  surface for three jobs:
                </p>
                <ul>
                  <li>
                    <strong>Jump to a note</strong>: fuzzy match on title.
                    With no query it shows your eight most recently edited
                    notes.
                  </li>
                  <li>
                    <strong>Search note bodies</strong>: type two or more
                    characters and SideNotes searches inside file contents,
                    returning matched snippets.
                  </li>
                  <li>
                    <strong>Run a command</strong>: new note, new canvas,
                    today's daily note, switch vault, open graph view, show
                    keyboard shortcuts, replay the onboarding tour, create from
                    any template.
                  </li>
                </ul>
                <p>
                  Use <Kbd>↑</Kbd>/<Kbd>↓</Kbd> to move, <Kbd>↵</Kbd> to run,{' '}
                  <Kbd>Esc</Kbd> to close.
                </p>
              </Section>

              <Section
                id="files"
                eyebrow="11 · Files"
                title="Organising and Managing Notes."
              >
                <h3>Creating</h3>
                <ul>
                  <li>
                    <Kbd>⌘</Kbd>
                    <Kbd>N</Kbd> creates an untitled note in the vault root.
                  </li>
                  <li>
                    Right-click a folder for <em>New note</em> /{' '}
                    <em>New folder</em> in that location.
                  </li>
                  <li>
                    The plus icon next to a folder name in the file tree does
                    the same.
                  </li>
                </ul>
                <h3>Moving</h3>
                <p>
                  Drag a note onto a folder to move it. Drop it on the empty
                  space at the bottom of the tree to move it to the vault
                  root. SideNotes updates the underlying file path; wikilinks that
                  resolved to it keep working because they match by basename.
                </p>
                <h3>Renaming and Deleting</h3>
                <p>
                  Right-click any note for <em>Rename</em>, <em>Duplicate</em>,{' '}
                  <em>Reveal in Finder</em>, and <em>Delete</em>. Rename
                  changes the file on disk; references that pointed at the old
                  basename keep resolving by title where possible.
                </p>
                <h3>Pinning</h3>
                <p>
                  Right-click a note → <em>Pin</em>. Pinned notes appear above
                  the tree, and clicking the Pinned nav item filters the tree
                  to just those.
                </p>
                <h3>Tabs</h3>
                <p>
                  Click any note to open it in a tab; the previous tab stays
                  open. Drag tabs to reorder. <Kbd>⌘</Kbd>
                  <Kbd>W</Kbd> closes the current tab. Tabs persist across
                  launches.
                </p>
              </Section>

              <Section
                id="export"
                eyebrow="12 · Export"
                title="Markdown, HTML, or PDF."
              >
                <p>
                  Right-click a note (or use the editor's title menu) →{' '}
                  <em>Export</em>. Three formats:
                </p>
                <ul>
                  <li>
                    <strong>Markdown</strong>: copies the raw <code>.md</code>{' '}
                    file. Useful for sharing a single note out of context.
                  </li>
                  <li>
                    <strong>HTML</strong>: renders to a self-contained HTML
                    file with embedded styling.
                  </li>
                  <li>
                    <strong>PDF</strong>: uses Electron's print engine, so the
                    PDF matches what you see on screen, including images.
                  </li>
                </ul>
              </Section>

              <Section
                id="themes"
                eyebrow="13 · Themes"
                title="Six Palettes, Light + Dark."
              >
                <p>
                  Open the theme picker from the sidebar (the sun icon in the
                  bottom row). Each theme ships in a light and a dark mode.
                </p>
                <ul>
                  <li>
                    <strong>Paper</strong>: warm cream and terracotta. The
                    default.
                  </li>
                  <li>
                    <strong>Ink</strong>: neutral white and blue. The
                    cleanest, most professional.
                  </li>
                  <li>
                    <strong>Forest</strong>: green and amber. Calm.
                  </li>
                  <li>
                    <strong>Dusk</strong>: desaturated brown and rust.
                  </li>
                  <li>
                    <strong>Carbon</strong>: minimal charcoal with violet
                    accents. Lower contrast for long sessions.
                  </li>
                  <li>
                    <strong>Rose</strong>: light pink with crimson accents.
                  </li>
                </ul>
                <p>
                  Themes are CSS-variable driven, so the editor, the graph, and
                  the canvas all change at once.
                </p>
              </Section>

              <Section
                id="sync"
                eyebrow="14 · Sync"
                title="Bring Your Own."
              >
                <p>
                  SideNotes does not run a sync service and never will. Your vault
                  is a folder, so anything that syncs folders works:
                </p>
                <ul>
                  <li>
                    <strong>iCloud Drive</strong>: point your vault at{' '}
                    <code>~/Library/Mobile Documents/com~apple~CloudDocs/SideNotes</code>
                    .
                  </li>
                  <li>
                    <strong>Dropbox / Google Drive / OneDrive</strong>:
                    anything that mounts as a normal folder is fine.
                  </li>
                  <li>
                    <strong>Syncthing</strong>: peer-to-peer, no third party.
                    Recommended if you care about privacy.
                  </li>
                  <li>
                    <strong>Git</strong>: version control your notes. Add an{' '}
                    <code>assets/.gitattributes</code> with{' '}
                    <code>* binary</code> if image diffs get noisy.
                  </li>
                </ul>
                <Callout>
                  SideNotes' file-watcher debounces external writes, so a sync
                  client overwriting a note while you have it open is
                  reflected in the editor without losing your unsaved changes
                 , but the safer bet is to close the note before pulling.
                </Callout>
              </Section>

              <Section
                id="format"
                eyebrow="15 · File format"
                title="What Is on Disk."
              >
                <p>
                  SideNotes reads and writes plain markdown, no proprietary
                  extensions. A note looks like this:
                </p>
                <pre>
                  <code>{`---
title: Database indexing
created: 2026-05-08
---

# Database indexing

The slow query was a sequential scan on a billion-row table.
[[Postgres performance]] would have caught it in review.

Related: [[Query planning|the planner]], #database, #performance.

- [ ] Add covering index for the hot path
- [x] Backfill metric for sequential scans
`}</code>
                </pre>
                <ul>
                  <li>
                    <strong>Frontmatter</strong>: optional YAML between{' '}
                    <code>---</code> fences. SideNotes reads <code>title</code> as
                    the canonical title; everything else is preserved
                    untouched.
                  </li>
                  <li>
                    <strong>Wikilinks</strong>: <code>[[Target]]</code> or{' '}
                    <code>[[Target|Display]]</code>. Resolved by basename, so
                    moving the file does not break the link.
                  </li>
                  <li>
                    <strong>Tags</strong>: <code>#tag</code> in body text
                    (not in headings, code, or URLs).
                  </li>
                  <li>
                    <strong>Tasks</strong>: standard markdown task lists.
                    Unchecked items from yesterday surface in the daily-note
                    masthead.
                  </li>
                </ul>
                <p>
                  Canvas files use the JSON schema Obsidian publishes for{' '}
                  <code>.canvas</code>. Open them anywhere; they round-trip
                  cleanly.
                </p>
              </Section>

              <Section
                id="shortcuts"
                eyebrow="16 · Shortcuts"
                title="Every Keyboard Shortcut."
              >
                <p>
                  Open this panel inside the app any time with <Kbd>⌘</Kbd>
                  <Kbd>/</Kbd>. On Windows and Linux, <Kbd>⌘</Kbd> means{' '}
                  <Kbd>Ctrl</Kbd>.
                </p>

                <h3>Navigation</h3>
                <ShortcutTable
                  rows={[
                    { keys: ['⌘', 'K'], desc: 'Search notes & run commands' },
                    { keys: ['⌘', '1'], desc: 'Open the editor' },
                    { keys: ['⌘', '2'], desc: 'Open the connections graph' },
                    { keys: ['⌘', '.'], desc: 'Toggle focus mode' },
                    { keys: ['Esc'], desc: 'Close menus or exit focus' },
                  ]}
                />

                <h3>Files</h3>
                <ShortcutTable
                  rows={[
                    { keys: ['⌘', 'N'], desc: 'New note' },
                    { keys: ['⌘', 'D'], desc: "Today's daily note" },
                    { keys: ['⌘', 'W'], desc: 'Close current tab' },
                    { keys: ['↵'], desc: 'Open the focused row' },
                  ]}
                />

                <h3>In the Editor</h3>
                <ShortcutTable
                  rows={[
                    { keys: ['/'], desc: 'Slash menu, insert blocks' },
                    { keys: ['[', '['], desc: 'Link to a note (autocomplete)' },
                    { keys: ['@'], desc: 'Mention a note, tag, or date' },
                    { keys: ['#'], desc: 'Add a tag (autocompletes after letters)' },
                    { keys: ['⌘', 'B'], desc: 'Bold' },
                    { keys: ['⌘', 'I'], desc: 'Italic' },
                    { keys: ['⌘', 'E'], desc: 'Inline code' },
                    { keys: ['⌘', 'Z'], desc: 'Undo' },
                    { keys: ['⌘', '⇧', 'Z'], desc: 'Redo' },
                  ]}
                />

                <h3>Markdown Shortcuts (Just Type)</h3>
                <ShortcutTable
                  rows={[
                    { keys: ['#', '␣'], desc: 'Heading 1 (## for H2, ### for H3)' },
                    { keys: ['-', '␣'], desc: 'Bullet list' },
                    { keys: ['1', '.', '␣'], desc: 'Numbered list' },
                    { keys: ['>', '␣'], desc: 'Quote' },
                    { keys: ['`', '`', '`'], desc: 'Code block' },
                    { keys: ['-', '-', '-'], desc: 'Divider' },
                    { keys: ['[', ' ', ']'], desc: 'Task list item' },
                  ]}
                />

                <h3>Help</h3>
                <ShortcutTable
                  rows={[{ keys: ['⌘', '/'], desc: 'Show every shortcut' }]}
                />
              </Section>

              <Section
                id="troubleshooting"
                eyebrow="17 · Troubleshooting"
                title="When Things Misbehave."
              >
                <h3>Notes from Another Editor Are Not Showing Up</h3>
                <p>
                  SideNotes watches the vault folder using the OS file events. If
                  you are syncing through a service that writes files in odd
                  orders (some cloud drives), close and reopen the vault from
                  the sidebar to force a re-index.
                </p>
                <h3>The Graph Is Empty</h3>
                <p>
                  The graph only renders edges for resolved wikilinks. If your
                  notes are connected by markdown links (<code>[text](url)</code>
                  ) instead of <code>[[wikilinks]]</code>, the graph stays
                  sparse. Convert with a find-and-replace, or just start using{' '}
                  <code>[[</code> from now on.
                </p>
                <h3>Image Paste Creates a Broken Link</h3>
                <p>
                  Check that <code>&lt;vault&gt;/assets/</code> exists and is
                  writable. If you renamed the vault folder while SideNotes was
                  open, restart the app.
                </p>
                <h3>The App Feels Slow on a Huge Vault</h3>
                <p>
                  v0.2 indexes the whole vault on launch. 10k+ notes is fine on
                  modern hardware, but the initial scan can take a few seconds.
                  Subsequent launches are fast, the index is in memory and
                  updated incrementally as files change.
                </p>
                <h3>I Want to Start Over</h3>
                <p>
                  Quit SideNotes. Pick a different folder as your vault on next
                  launch (or the same folder, after moving files out). SideNotes
                  has no global database to reset, there is no state outside
                  the vault.
                </p>
              </Section>

              <Section
                id="contribute"
                eyebrow="18 · Contribute"
                title="SideNotes Is Open Source."
              >
                <p>
                  The repo is at{' '}
                  <a
                    href="https://github.com/Koushith/side-deck"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Koushith/side-deck
                  </a>
                  . Issues, discussions, and PRs are welcome.
                </p>
                <ul>
                  <li>
                    <strong>Bug reports</strong>: please include the OS, the
                    SideNotes version (sidebar bottom row), and reproduction steps.
                  </li>
                  <li>
                    <strong>Feature ideas</strong>: open a discussion before
                    a PR for anything bigger than a polish fix; the v0.2 scope
                    is intentionally small.
                  </li>
                  <li>
                    <strong>Themes</strong>: themes are pure CSS-variable
                    palettes. Adding one is a single object in{' '}
                    <code>src/stores/theme.ts</code>.
                  </li>
                </ul>
                <p>
                  SideNotes is MIT-licensed. Use it however you want.
                </p>
              </Section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
