// Üretim derlemesini gh-pages dalına gönderir.
// GitHub Actions kullanılmıyor; gh CLI belirteci `workflow` yetkisi istemesin diye.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const KOK = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(KOK, 'dist');

function calistir(komut, secenek = {}) {
  execSync(komut, { stdio: 'inherit', cwd: KOK, ...secenek });
}

const uzak = execSync('git remote get-url origin', { cwd: KOK, encoding: 'utf8' }).trim();
if (!uzak) {
  console.error('origin uzak deposu bulunamadı.');
  process.exit(1);
}

console.log('> derleniyor');
calistir('npm run build');

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('dist/index.html yok, derleme başarısız.');
  process.exit(1);
}

// GitHub Pages, alt çizgiyle başlayan klasörleri gizlemesin.
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');

console.log('> gh-pages dalına gönderiliyor');
fs.rmSync(path.join(DIST, '.git'), { recursive: true, force: true });
const icinde = { cwd: DIST, stdio: 'inherit' };
execSync('git init -q -b gh-pages', icinde);
execSync('git add -A', icinde);
execSync(
  'git -c user.name="Anı Defteri" -c user.email="noreply@localhost" commit -q -m "yayın"',
  icinde
);
execSync(`git push -q --force ${uzak} gh-pages`, icinde);
fs.rmSync(path.join(DIST, '.git'), { recursive: true, force: true });

console.log('> tamam');
