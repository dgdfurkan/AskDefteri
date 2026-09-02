# Anı Defterimiz

Şifreyle açılan, tamamen 3B bir anı defteri. Üç bölüm:

1. **Kilit ekranı** — kalp biçimli bir asma kilit ve yanında süzülen anahtar. Doğru şifrede
   anahtar kilide girer, tıkırtıyla döner, kanca açılır ve kilit ışığa karışır.
2. **Metro hikâyesi** — Topkapı - Ulubatlı istasyonundan esinlenen iki hatlı bir peron. Karşı hattan
   bir tren ayrılırken tünelden bizimki gelir, kapılar açılır, buluşma yaşanır.
3. **Anı defteri** — gerçek bir defter: kapağı açılır, yaprakları tek tek çevrilir. Fotoğraflar
   sayfalara bantlanmış, tarihleri el yazısıyla yazılmıştır. Fotoğrafa dokununca tam boy açılır.

Şifre doğrulandığında arka planda piyano müziği başlar; sağ alttaki düğmeden kapatılabilir.
Yanındaki düğme hikâye ile defter arasında istediğin an gidip gelmeni sağlar.
Telefon dikey ve yatay tutulduğunda kadraj ayrı ayrı ayarlanır: yatayda peronun tamamı,
dikeyde defterin tek sayfası ekrana oturur.

Three.js + TypeScript + Vite. React yok, hazır 3B model yok, uzaktan yüklenen doku yok; sahnedeki her şey kodla üretiliyor.

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
```

## Müzik

`ses/` klasöründeki kaynak dosyadan `public/muzik/ani-defteri.mp3` üretildi: son 7 saniyedeki
sessizlik kesildi, başına ve sonuna kısa geçiş kondu, böylece kesintisiz döngüye giriyor.
Başka bir parçaya geçmek için:

```bash
ffmpeg -i ses/YENI.mp3 -t <sessizlikten_onceki_saniye> \
  -af "afade=t=in:st=0:d=0.9,afade=t=out:st=<bitis-0.8>:d=0.8" \
  -c:a libmp3lame -b:a 96k public/muzik/ani-defteri.mp3
```

## Fotoğraf ekleme

1. Fotoğrafı `fotolar/` klasörüne, adı tarih olacak şekilde koy: `24 mart 2022.jpeg`.
   Aynı güne birden fazla fotoğraf için `_2` ekle: `24 mart 2022_2.jpeg`.
   HEIC dosyalar otomatik dönüştürülür.
2. Şunu çalıştır:

```bash
npm run photos
```

Bu komut fotoğrafları web boyutuna indirir, `public/anilar/` altına yazar ve
`src/config/memories.generated.ts` dosyasını üretir. Fotoğraflar tarihe göre sıralanır.

Bir fotoğrafa başlık ve not eklemek için `src/config/memories.ts` içindeki `notlar`
sözlüğüne fotoğrafın id'sini yaz:

```ts
export const notlar: Record<string, MemoryNote> = {
  '2022-02-23': { baslik: 'İlk kare', not: 'Her şeyin başladığı gün.' }
};
```

## Ayarlar

Bütün metinler, renkler, şifreler ve zamanlamalar tek dosyada: **`src/config/storyConfig.ts`**

- `kilit.kabulEdilenler` — kabul edilen şifreler. Karşılaştırma büyük/küçük harf,
  boşluk, noktalama ve Türkçe karakter farkına duyarsız: `Aşk Pozitifi` = `askpozitifi` = `ASK POZITIFI`.
- `hikaye.istasyonAdi`, `hikaye.tarihYazisi` — perondaki tabelalarda yazan bilgiler.
- `hikaye.altyazilar` — sahne ilerledikçe beliren cümleler.
- `hikaye.finalYazilari` — kapanış cümleleri.
- `defter.*` — anı defterinin başlık ve kapanış metinleri.
- `renkler`, `isik` — sahne paleti ve ışık şiddetleri.
- `kaydirma` — bölümlerin kaydırma uzunlukları.
- `kalite` — masaüstü ve mobil için parçacık sayısı, gölge çözünürlüğü, piksel oranı.

## Yayın

Site şu adreste: **https://dgdfurkan.github.io/AskDefteri/**

Değişiklikleri yayına almak için tek komut:

```bash
npm run deploy
```

Bu komut projeyi derler ve `dist` klasörünü `gh-pages` dalına gönderir; GitHub Pages
o daldan yayın yapar. Kaynak kod `main` dalında durur, ikisi karışmaz.

Otomatik yayın (her `main` push'unda kendiliğinden derleme) istersen bir kez
`gh auth refresh -s workflow` çalıştırman yeterli; sonrasında GitHub Actions
akışını ekleyebiliriz.

## Klasörler

```
src/
  config/      storyConfig, anı listesi ve üretilen manifest
  core/        App, renderer, kaydırma, ekran yönetimi
  scene/       metro sahnesi, kilit sahnesi, ışık, kamera yönetmeni
  objects/     istasyon, metro, prosedürel karakter, parçacıklar, dokular
  gallery/     3B defter, sayfa fotoğrafı ve defter sahnesi
  animation/   hikâye yönetmeni ve yumuşatma fonksiyonları
  ui/          kilit ekranı, hikâye altyazıları, defter arayüzü
scripts/       fotoğraf hazırlama ve yayın betikleri
fotolar/       kaynak fotoğraflar (web sürümleri buradan üretilir)
ses/           kaynak müzik dosyası
public/        yayınlanan fotoğraflar ve müzik
```
