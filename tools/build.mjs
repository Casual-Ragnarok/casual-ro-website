import { cp, mkdir, readdir, writeFile, lstat, rm } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, 'dist');
const existing = await lstat(output).catch(error => {
  if (error.code === 'ENOENT') return null;
  throw error;
});
if (existing?.isSymbolicLink()) throw new Error('Refusing to remove a linked dist directory');
// output is the fixed absolute <repository>/dist path, never a caller-provided path.
await rm(output, { recursive: true, force: true });
await mkdir(join(output, 'assets'), { recursive: true });
for (const page of ['index.html', 'CNAME', 'ads.txt']) {
  await cp(join(root, page), join(output, page));
}
for (const asset of await readdir(join(root, 'assets'), { withFileTypes: true })) {
  if (asset.isFile() && ['.css', '.js', '.png', '.svg'].includes(extname(asset.name))) {
    await cp(join(root, 'assets', asset.name), join(output, 'assets', asset.name));
  }
}
await writeFile(join(output, '.nojekyll'), '');
console.log('Static site built: dist/');
