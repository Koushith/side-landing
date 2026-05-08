'use client';

import { useEffect, useState } from 'react';

const items = [
  { id: 'install', label: 'Install' },
  { id: 'vault', label: 'Vault' },
  { id: 'interface', label: 'Interface' },
  { id: 'editor', label: 'Writing' },
  { id: 'linking', label: 'Linking' },
  { id: 'canvas', label: 'Canvas' },
  { id: 'graph', label: 'Graph' },
  { id: 'daily', label: 'Daily Notes' },
  { id: 'templates', label: 'Templates' },
  { id: 'search', label: 'Search' },
  { id: 'files', label: 'Files' },
  { id: 'export', label: 'Export' },
  { id: 'themes', label: 'Themes' },
  { id: 'sync', label: 'Sync' },
  { id: 'format', label: 'File Format' },
  { id: 'shortcuts', label: 'Shortcuts' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'contribute', label: 'Contribute' },
];

export function DocsToc() {
  const [activeId, setActiveId] = useState<string>(items[0].id);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      // The "active" section is the last one whose top edge has crossed
      // a trigger line ~25% down the viewport. If no section has crossed
      // it yet (we're at the very top of the page), the first section is
      // active. If we've scrolled to the bottom of the page, snap to the
      // last section so the TOC matches what the eye actually sees.
      const scrollY = window.scrollY;
      const trigger = scrollY + window.innerHeight * 0.25;

      const atBottom =
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const s of sections) {
        const top = s.getBoundingClientRect().top + scrollY;
        if (top <= trigger) current = s.id;
        else break;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <aside className="hidden md:block">
      <div className="sticky top-20">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3 mb-3">
          Contents
        </div>
        <nav className="flex flex-col gap-[2px] -ml-3">
          {items.map((it, i) => {
            const active = activeId === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                aria-current={active ? 'true' : undefined}
                className={`group relative flex items-baseline gap-2 pl-3 pr-2 py-1 rounded-md font-serif text-[14px] leading-snug transition-colors ${
                  active
                    ? 'text-accent-ink bg-accent-soft/50'
                    : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full transition-colors ${
                    active ? 'bg-accent' : 'bg-transparent'
                  }`}
                  aria-hidden
                />
                <span
                  className={`font-mono text-[10.5px] shrink-0 transition-colors ${
                    active ? 'text-accent-ink' : 'text-ink-4'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{it.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
