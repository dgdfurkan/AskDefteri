// Kaynak fotoğrafları web için hazırlar: HEIC dönüşümü, boyutlandırma,
// blur placeholder üretimi ve TypeScript manifest'i.
// `fotolar/` altındaki tüm klasörler taranır.
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
  temmuz: 7, ağustos: 8, agustos: 8, eylül: 9, eylul: 9, ekim: 10, kasım: 11,
  kasim: 11, aralık: 12, aralik: 12
};

/** Rakam yerine yanlışlıkla yazılmış harfleri düzeltir: o->0, l->1 gibi. */
const RAKAM_DUZELT = { o: '0', ö: '0', l: '1', i: '1', ı: '1', ﬂ: '1', s: '5', b: '6', g: '9' };

function sayiyaCevir(parca) {
  return [...parca].map((c) => RAKAM_DUZELT[c] ?? c).join('');
}

function parseName(dosya) {
  // macOS dosya adlarını ayrışmış (NFD) verir; birleşik biçime çevir.
  const base = dosya.normalize('NFC').replace(/\.[^.]+$/, '').toLowerCase().trim();
  const duz = base.replace(/\s+/g, ' ');

  let m = duz.match(/^(\S+)\s+([a-zçğıöşü]+)\s+(\S+?)(?:_(\d+))?$/);
  if (!m) return null;

  const gun = Number(sayiyaCevir(m[1]));
  const ay = AYLAR[m[2]];
  const yil = Number(sayiyaCevir(m[3]));
  if (!ay || !Number.isInteger(gun) || !Number.isInteger(yil)) return null;
  if (gun < 1 || gun > 31 || yil < 1990 || yil > 2100) return null;

  return { gun, ay, yil, sira: m[4] ? Number(m[4]) : 1 };
}

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 1 << 26 });
}

/** fotolar/ altındaki tüm görselleri toplar. */
function gorselleriTara(dizin) {
  const bulunan = [];
  for (const giris of fs.readdirSync(dizin, { withFileTypes: true })) {
    const tam = path.join(dizin, giris.name);
    if (giris.isDirectory()) {
      bulunan.push(...gorselleriTara(tam));
    } else if (/\.(jpe?g|png|heic|heif)$/i.test(giris.name)) {
      bulunan.push(tam);
    }
  }
  return bulunan;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'anilar-'));

const dosyalar = gorselleriTara(SRC_DIR).sort();
const items = [];
const kullanilanId = new Set();
const atlanan = [];

for (const tamYol of dosyalar) {
  const dosya = path.basename(tamYol);
  const meta = parseName(dosya);
  if (!meta) {
    atlanan.push(path.relative(ROOT, tamYol));
    continue;
  }

  let id = `${meta.yil}-${String(meta.ay).padStart(2, '0')}-${String(meta.gun).padStart(2, '0')}`;
  if (meta.sira > 1) id += `-${meta.sira}`;
  // Aynı tarih farklı klasörlerde tekrar ederse sıradaki boş numarayı al.
  let ek = meta.sira;
  while (kullanilanId.has(id)) {
    ek += 1;
    id = `${meta.yil}-${String(meta.ay).padStart(2, '0')}-${String(meta.gun).padStart(2, '0')}-${ek}`;
  }
  kullanilanId.add(id);

  let input = tamYol;
  if (/\.(heic|heif)$/i.test(dosya)) {
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
  items.push({ id, gun: meta.gun, ay: meta.ay, yil: meta.yil, sira: ek, w: dim[0], h: dim[1], blur });
}

items.sort((a, b) => (a.yil - b.yil) || (a.ay - b.ay) || (a.gun - b.gun) || (a.sira - b.sira));

// Artık kaynağı olmayan çıktıları temizle.
const beklenen = new Set(items.flatMap((it) => [`${it.id}.jpg`, `${it.id}-s.jpg`]));
for (const f of fs.readdirSync(OUT_DIR)) {
  if (!beklenen.has(f)) fs.rmSync(path.join(OUT_DIR, f));
}

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
if (atlanan.length) {
  console.log('\nTarihi okunamayan dosyalar:');
  atlanan.forEach((a) => console.log('  ', a));
}
console.log(`\n${items.length} anı hazırlandı -> public/anilar`);
