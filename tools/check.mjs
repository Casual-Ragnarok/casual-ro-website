import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
for (const page of ['index.html']) {
  const html = await readFile(join(root, page), 'utf8');
  for (const [, resource] of html.matchAll(/(?:href|src)="(assets\/[^"?]+)(?:\?[^\"]*)?"/g)) await access(join(root, resource));
  assert(html.includes('assets/sakura.css'), `${page}: theme missing`);
}
for (const file of ['hero-sakura.png', 'npc-shop.png', 'npc-guide.png', 'npc-adventure.png']) await access(join(root, 'assets', file));
const script = await readFile(join(root, 'assets/site.js'), 'utf8');
for (const host of ['npc.casualro.top', 'docs.casualro.top', 'grf.casualro.top']) assert(script.includes(`https://${host}/`), `${host}: missing navigation`);
assert(!/catalog\.json|fetch\(|npcs\.html|docs\.html|downloads\.html/.test(script), 'Homepage must not serve catalog copies');
console.log('Homepage assets and independent site links are valid.');
