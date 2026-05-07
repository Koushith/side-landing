export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[20px] h-[22px] px-1.5 rounded border border-rule bg-paper-2 font-mono text-[11px] text-ink mx-[1px] align-baseline">
      {children}
    </kbd>
  );
}
