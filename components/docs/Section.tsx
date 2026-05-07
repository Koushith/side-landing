interface Props {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-ink mb-3">
        {eyebrow}
      </div>
      <h2 className="font-serif text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] font-semibold mb-7">
        {title}
      </h2>
      <div className="docs-prose">{children}</div>
    </section>
  );
}
