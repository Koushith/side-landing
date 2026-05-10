import { FAQ_ITEMS } from '@/lib/seo';

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-4">
            Questions
          </div>
          <h2 className="font-serif text-[44px] md:text-[52px] leading-[1.05] tracking-[-0.025em] font-semibold mb-4">
            Honest Answers.
          </h2>
        </div>

        <div className="divide-y divide-rule">
          {FAQ_ITEMS.map((it, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="font-serif text-[18px] font-semibold text-ink leading-snug">
                  {it.q}
                </span>
                <span className="shrink-0 mt-1 text-ink-3 group-open:rotate-45 transition-transform">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 font-serif text-[16px] leading-[1.7] text-ink-2 max-w-prose">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
