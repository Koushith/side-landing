import { Kbd } from './Kbd';

interface Row {
  keys: string[];
  desc: string;
}

export function ShortcutTable({ rows }: { rows: Row[] }) {
  return (
    <div className="my-5 border border-rule rounded-md overflow-hidden">
      {rows.map((r, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 px-4 py-2.5 ${
            i !== rows.length - 1 ? 'border-b border-rule-soft' : ''
          }`}
        >
          <span className="font-serif text-[14.5px] text-ink-2 flex-1 leading-snug">
            {r.desc}
          </span>
          <span className="flex items-center gap-[3px] shrink-0">
            {r.keys.map((k, ki) => (
              <Kbd key={ki}>{k}</Kbd>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
