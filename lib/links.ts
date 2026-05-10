// Single source of truth for download links and external URLs the landing
// page references. Bump VERSION when a new release ships — every download
// button updates automatically.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sidenotes.app');

export const REPO_URL = 'https://github.com/Koushith/side-deck';
export const ISSUES_URL = `${REPO_URL}/issues`;
export const RELEASES_URL = `${REPO_URL}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;
export const TWITTER_URL = 'https://x.com/koushithamin';
export const ENS_NAME = 'koushith.eth';
export const ETH_ADDRESS = '0x9ccCA0a968A9bc5916E0de43Ea2D68321655ae67';

export const VERSION = '0.2.0';

/** GitHub auto-redirects `/releases/latest/download/<asset>` to whichever
 *  asset under the latest tag has that exact filename. Names match the
 *  electron-builder `artifactName` template in the app's package.json:
 *  `SideNotes-${version}-${os}-${arch}.${ext}` (NSIS uses SideNotes-Setup-…). */
const BASE = `${RELEASES_URL}/latest/download`;

export const DOWNLOADS = {
  macArm: `${BASE}/SideNotes-${VERSION}-mac-arm64.dmg`,
  macIntel: `${BASE}/SideNotes-${VERSION}-mac-x64.dmg`,
  windows: `${BASE}/SideNotes-Setup-${VERSION}-x64.exe`,
  windowsArm: `${BASE}/SideNotes-Setup-${VERSION}-arm64.exe`,
  linux: `${BASE}/SideNotes-${VERSION}-linux-x86_64.AppImage`,
  linuxArm: `${BASE}/SideNotes-${VERSION}-linux-arm64.AppImage`,
};
