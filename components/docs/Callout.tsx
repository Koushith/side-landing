export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-l-2 border-accent bg-accent-soft/40 px-5 py-4 rounded-r-md">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-1.5">
        Note
      </div>
      <div className="font-serif text-[15.5px] leading-[1.65] text-ink-2">
        {children}
      </div>
    </div>
  );
}
