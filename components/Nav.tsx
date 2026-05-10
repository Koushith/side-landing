'use client';

import { useEffect, useState } from 'react';
import { LATEST_RELEASE_URL, REPO_URL } from '@/lib/links';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#preview', label: 'Preview' },
  { href: '/docs', label: 'Docs' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/#download', label: 'Download' },
  { href: '/#faq', label: 'Questions' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className="sticky top-0 z-30 bg-paper/85 backdrop-blur border-b border-rule-soft">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-6">
        <a href="/" className="flex items-center gap-2.5">
          <span className="w-[26px] h-[26px] rounded-md bg-ink text-paper grid place-items-center font-serif font-semibold italic text-[15px]">
            S
          </span>
          <span className="font-serif text-[17px] font-semibold tracking-tight">SideNotes</span>
        </a>
        <div className="hidden md:flex items-center gap-6 ml-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-ink-3 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <a
            href={REPO_URL}
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-ink-3 hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="m7 17 10-10M9 7h8v8" />
            </svg>
          </a>
          <a
            href={LATEST_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-ink text-paper text-[13px] font-medium hover:bg-ink-2 transition-colors"
          >
            Get SideNotes
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-9 h-9 -mr-1 rounded-md text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule-soft bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-serif text-ink-2 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] font-serif text-ink-2 hover:text-ink inline-flex items-center gap-1.5"
            >
              GitHub
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="m7 17 10-10M9 7h8v8" />
              </svg>
            </a>
            <a
              href={LATEST_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-1.5 px-3 h-10 rounded-md bg-ink text-paper text-[14px] font-medium hover:bg-ink-2 transition-colors"
            >
              Get SideNotes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
