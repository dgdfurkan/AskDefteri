// Kaynak fotoğrafları web için hazırlar: HEIC dönüşümü, boyutlandırma,
// blur placeholder üretimi ve TypeScript manifest'i.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC_DIR = path.join(ROOT, 'fotolar');
const OUT_DIR = path.join(ROOT, 'public', 'anilar');
const MANIFEST = path.join(ROOT, 'src', 'config', 'memories.generated.ts');

const AYLAR = {
  ocak: 1, şubat: 2, subat: 2, mart: 3, nisan: 4, mayıs: 5, mayis: 5, haziran: 6,
  temmuz: 7, ağustos: 8, agustos: 8, eylül: 9, eylul: 9, ekim: 10, kasım: 11, kasim: 11, aralık: 12, aralik: 12
};

function parseName(file) {
  const base = file.replace(/\.[^.]+$/, '').toLowerCase();
  const m = base.match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})(?:_(\d+))?$/);
  if (!m) return null;
  const ay = AYLAR[m[2]];
  if (!ay) return null;
  return { gun: +m[1], ay, yil: +m[3], sira: m[4] ? +m[4] : 1 };
}

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 1 << 26 });
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'anilar-'));

const files = fs.readdirSync(SRC_DIR).filter((f) => /\.(jpe?g|png|heic|heif)$/i.test(f));
const items = [];

for (const file of files) {
  const meta = parseName(file);
  if (!meta) {
    console.warn(`[atlandı] tarih okunamadı: ${file}`);
    continue;
  }
  const id = `${meta.yil}-${String(meta.ay).padStart(2, '0')}-${String(meta.gun).padStart(2, '0')}${meta.sira > 1 ? `-${meta.sira}` : ''}`;
  let input = path.join(SRC_DIR, file);

  if (/\.(heic|heif)$/i.test(file)) {
    const conv = path.join(tmp, `${id}.jpg`);
    run('sips', ['-s', 'format', 'jpeg', input, '--out', conv]);
    input = conv;
  }

  const full = path.join(OUT_DIR, `${id}.jpg`);
  const thumb = path.join(OUT_DIR, `${id}-s.jpg`);
  run('magick', [input, '-auto-orient', '-resize', '1600x1600>', '-quality', '82', '-strip', '-interlace', 'Plane', full]);
  run('magick', [input, '-auto-orient', '-resize', '640x640>', '-quality', '74', '-strip', thumb]);

  const blurFile = path.join(tmp, `${id}-b.jpg`);
  run('magick', [input, '-auto-orient', '-resize', '24x24>', '-quality', '40', '-strip', blurFile]);
  const blur = `data:image/jpeg;base64,${fs.readFileSync(blurFile).toString('base64')}`;

  const dim = run('magick', ['identify', '-format', '%w %h', full]).trim().split(' ').map(Number);

  items.push({ id, gun: meta.gun, ay: meta.ay, yil: meta.yil, sira: meta.sira, w: dim[0], h: dim[1], blur });
  console.log(`[ok] ${file} -> ${id}.jpg (${dim[0]}x${dim[1]})`);
}

items.sort((a, b) => (a.yil - b.yil) || (a.ay - b.ay) || (a.gun - b.gun) || (a.sira - b.sira));

const body = items
  .map((it) => `  {
    id: '${it.id}',
    src: 'anilar/${it.id}.jpg',
    thumb: 'anilar/${it.id}-s.jpg',
    date: { gun: ${it.gun}, ay: ${it.ay}, yil: ${it.yil} },
    width: ${it.w},
    height: ${it.h},
    blur: '${it.blur}'
  }`)
  .join(',\n');

fs.writeFileSync(
  MANIFEST,
  `// Bu dosya \`npm run photos\` tarafından üretilir. Elle düzenleme.\n` +
    `import type { RawMemory } from './memoryTypes';\n\n` +
    `export const generatedMemories: RawMemory[] = [\n${body}\n];\n`
);

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`\n${items.length} anı hazırlandı -> public/anilar, manifest: src/config/memories.generated.ts`);
