'use client';

import { useState } from 'react';
import { ENS_NAME, ETH_ADDRESS, REPO_URL, TWITTER_URL } from '@/lib/links';

export function BuiltBy() {
  const [copied, setCopied] = useState<'ens' | 'address' | null>(null);

  const copy = async (value: string, kind: 'ens' | 'address') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const truncated = `${ETH_ADDRESS.slice(0, 6)}…${ETH_ADDRESS.slice(-4)}`;

  return (
    <section className="px-6 py-24 border-t border-rule-soft">
      <div className="mx-auto max-w-3xl text-center">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-4">
          Built by one person
        </div>
        <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.025em] font-semibold mb-5">
          Made by{' '}
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-ink underline decoration-accent-soft decoration-2 underline-offset-[6px] hover:decoration-accent transition-colors"
          >
            Koushith Amin
          </a>
          .
        </h2>
        <p className="font-serif text-[17px] leading-[1.6] text-ink-2 max-w-xl mx-auto mb-8">
          A solo project, built in evenings and weekends. SideNotes is free
          and open source, no team, no funding, no roadmap pressure. If it
          saves you time, the kindest thing you can do is star the repo or
          send a coffee onchain.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mb-6">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 h-11 px-5 rounded-md bg-ink text-paper font-medium text-[14px] hover:bg-ink-2 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2 9.2 8.6 2 9.2l5.5 4.8L5.8 22 12 18.3 18.2 22l-1.7-8 5.5-4.8-7.2-.6L12 2Z" />
            </svg>
            Star on GitHub
          </a>
          <button
            type="button"
            onClick={() => copy(ENS_NAME, 'ens')}
            className="inline-flex justify-center items-center gap-2 h-11 px-5 rounded-md border border-rule text-ink hover:bg-paper-2 transition-colors text-[14px]"
          >
            {copied === 'ens' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12.5 10 17.5 19 7.5" />
                </svg>
                Copied {ENS_NAME}
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4" />
                  <rect x="3" y="9" width="12" height="12" rx="2" />
                </svg>
                Send ETH · {ENS_NAME}
              </>
            )}
          </button>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 h-11 px-5 rounded-md text-ink-2 hover:text-ink transition-colors text-[14px]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
            @koushithamin
          </a>
        </div>

        <button
          type="button"
          onClick={() => copy(ETH_ADDRESS, 'address')}
          title={ETH_ADDRESS}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3 hover:text-ink transition-colors"
        >
          {copied === 'address' ? (
            <>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12.5 10 17.5 19 7.5" />
              </svg>
              Address copied
            </>
          ) : (
            <>or copy raw address {truncated}</>
          )}
        </button>
      </div>
    </section>
  );
}
