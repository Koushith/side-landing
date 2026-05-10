import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SideNotes, a friendly second brain for everyone';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

async function loadFont(weight: 400 | 600 | 700) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,${weight}&display=swap`,
    { headers: { 'User-Agent': UA } },
  ).then((r) => r.text());

  const url = css.match(/url\((https:\/\/[^)]+\.woff2?)\)/)?.[1];
  if (!url) throw new Error('Source Serif 4 font URL not found');
  return fetch(url).then((r) => r.arrayBuffer());
}

const PAPER = '#f7f3ec';
const PAPER_2 = '#f1ece3';
const INK = '#1f1d1a';
const INK_2 = '#4a463f';
const INK_3 = '#7a7468';
const RULE_SOFT = '#ebe5d6';
const ACCENT = '#c4623a';
const TAG_SOFT = '#dde6d8';
const TAG = '#5a7b56';

export default async function OG() {
  const [serif, semibold, bold] = await Promise.all([
    loadFont(400),
    loadFont(600),
    loadFont(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: PAPER,
          backgroundImage: `radial-gradient(${PAPER_2} 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px',
          fontFamily: 'Source Serif 4',
          color: INK,
          position: 'relative',
        }}
      >
        {/* paper edge */}
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: `1px solid ${RULE_SOFT}`,
            borderRadius: 24,
            pointerEvents: 'none',
          }}
        />

        {/* Top row: brand mark + version chip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: INK,
                color: PAPER,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Source Serif 4',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: 32,
              }}
            >
              S
            </div>
            <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em' }}>
              SideNotes
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              borderRadius: 999,
              background: TAG_SOFT,
              color: TAG,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 999, background: TAG }} />
            v0.2 · macOS · Windows · Linux
          </div>
        </div>

        {/* Middle: headline + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              fontWeight: 700,
              color: INK,
              marginBottom: 24,
            }}
          >
            A quiet second brain.
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.4,
              color: INK_2,
              maxWidth: 880,
            }}
          >
            A friendly notes app for everyone. Notion-easy editing, plain markdown on your computer.
          </div>
        </div>

        {/* Bottom row: domain + tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 22,
              color: INK_3,
              letterSpacing: '0.04em',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: ACCENT }} />
            sidenotes.me
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              fontSize: 18,
              color: INK_3,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span>Free</span>
            <span style={{ color: '#a8a294' }}>·</span>
            <span>Open source</span>
            <span style={{ color: '#a8a294' }}>·</span>
            <span>Local first</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Source Serif 4', data: serif, weight: 400, style: 'normal' },
        { name: 'Source Serif 4', data: semibold, weight: 600, style: 'normal' },
        { name: 'Source Serif 4', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );
}
