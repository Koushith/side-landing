/**
 * Generates public/og.png — a single 1200×630 social image used for
 * OG (Facebook, LinkedIn, Slack, Discord) and Twitter cards.
 *
 * Run with: node scripts/gen-og.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const PAPER = '#f7f3ec';
const PAPER_2 = '#f1ece3';
const INK = '#1f1d1a';
const INK_2 = '#4a463f';
const INK_3 = '#7a7468';
const RULE_SOFT = '#ebe5d6';
const ACCENT = '#c4623a';
const TAG_SOFT = '#dde6d8';
const TAG = '#5a7b56';

const fonts = [
  { name: 'Source Serif 4', weight: 400, file: 'SourceSerif4-Regular.ttf' },
  { name: 'Source Serif 4', weight: 600, file: 'SourceSerif4-Semibold.ttf' },
  { name: 'Source Serif 4', weight: 700, file: 'SourceSerif4-Bold.ttf' },
].map((f) => ({
  name: f.name,
  weight: f.weight,
  style: 'normal',
  data: fs.readFileSync(path.join(root, 'app/fonts', f.file)),
}));

const tree = {
  type: 'div',
  props: {
    style: {
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
    },
    children: [
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: `1px solid ${RULE_SOFT}`,
            borderRadius: 24,
          },
        },
      },
      // Top row
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
          children: [
            {
              type: 'div',
              props: {
                style: { display: 'flex', alignItems: 'center', gap: 16 },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: 56,
                        height: 56,
                        borderRadius: 12,
                        background: INK,
                        color: PAPER,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontStyle: 'italic',
                        fontSize: 32,
                      },
                      children: 'S',
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: { fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em' },
                      children: 'SideNotes',
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
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
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { width: 8, height: 8, borderRadius: 999, background: TAG },
                    },
                  },
                  'v0.2 · macOS · Windows · Linux',
                ],
              },
            },
          ],
        },
      },
      // Headline + subtitle
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', maxWidth: 980 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  fontSize: 132,
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                  fontWeight: 700,
                  color: INK,
                  marginBottom: 24,
                },
                children: 'A quiet second brain.',
              },
            },
            {
              type: 'div',
              props: {
                style: { fontSize: 36, lineHeight: 1.4, color: INK_2, maxWidth: 880 },
                children:
                  'A friendly notes app for everyone. Notion-easy editing, plain markdown on your computer.',
              },
            },
          ],
        },
      },
      // Bottom row
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 22,
                  color: INK_3,
                  letterSpacing: '0.04em',
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { width: 10, height: 10, borderRadius: 999, background: ACCENT },
                    },
                  },
                  'sidenotes.me',
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  fontSize: 18,
                  color: INK_3,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                },
                children: [
                  { type: 'span', props: { children: 'Free' } },
                  { type: 'span', props: { style: { color: '#a8a294' }, children: '·' } },
                  { type: 'span', props: { children: 'Open source' } },
                  { type: 'span', props: { style: { color: '#a8a294' }, children: '·' } },
                  { type: 'span', props: { children: 'Local first' } },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

const svg = await satori(tree, { width: 1200, height: 630, fonts });
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

const out = path.join(root, 'public/og.png');
fs.writeFileSync(out, png);
console.log(`Wrote ${out} (${png.length} bytes)`);
