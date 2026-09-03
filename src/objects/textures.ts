import * as THREE from 'three';
import { clamp01 } from '../animation/easing';

/** Üretilen tüm dokular burada tutulur, sahne kapanırken toplu bırakılır. */
const havuz: THREE.Texture[] = [];

export function dokuKaydet<T extends THREE.Texture>(t: T): T {
  havuz.push(t);
  return t;
}

export function dokulariBirak(): void {
  havuz.forEach((t) => t.dispose());
  havuz.length = 0;
}

function tuval(g: number, y: number): { c: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const c = document.createElement('canvas');
  c.width = g;
  c.height = y;
  const ctx = c.getContext('2d');
  if (!ctx) throw new Error('2D bağlamı alınamadı');
  return { c, ctx };
}

export interface YaziDokuSecenek {
  genislik?: number;
  yukseklik?: number;
  arkaPlan?: string;
  renk?: string;
  fontAilesi?: string;
  fontBoyu?: number;
  kalinlik?: number | string;
  hizala?: CanvasTextAlign;
  harfAraligi?: number;
  cerceve?: string;
}

/** Tabela ve yön yazıları için CanvasTexture üretir. Uzak görsel yüklenmez. */
export function yaziDokusu(satirlar: string[], secenek: YaziDokuSecenek = {}): THREE.CanvasTexture {
  const g = secenek.genislik ?? 1024;
  const y = secenek.yukseklik ?? 256;
  const { c, ctx } = tuval(g, y);

  ctx.fillStyle = secenek.arkaPlan ?? '#0f1620';
  ctx.fillRect(0, 0, g, y);

  if (secenek.cerceve) {
    ctx.strokeStyle = secenek.cerceve;
    ctx.lineWidth = Math.max(3, y * 0.03);
    ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, g - ctx.lineWidth, y - ctx.lineWidth);
  }

  const boy = secenek.fontBoyu ?? y * 0.42;
  ctx.fillStyle = secenek.renk ?? '#e9f1f7';
  ctx.font = `${secenek.kalinlik ?? 500} ${boy}px ${secenek.fontAilesi ?? 'Helvetica, Arial, sans-serif'}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = secenek.hizala ?? 'center';

  const aralik = secenek.harfAraligi ?? 0;
  const satirYuksekligi = boy * 1.25;
  const baslangic = y / 2 - ((satirlar.length - 1) * satirYuksekligi) / 2;

  satirlar.forEach((satir, i) => {
    const yy = baslangic + i * satirYuksekligi;
    if (aralik === 0) {
      const x = secenek.hizala === 'left' ? g * 0.06 : secenek.hizala === 'right' ? g * 0.94 : g / 2;
      ctx.fillText(satir, x, yy);
    } else {
      // Harf aralığı manuel: karakterleri tek tek yerleştir.
      const harfler = [...satir];
      const toplam = harfler.reduce((t, h) => t + ctx.measureText(h).width + aralik, -aralik);
      let x = g / 2 - toplam / 2;
      ctx.textAlign = 'left';
      for (const h of harfler) {
        ctx.fillText(h, x, yy);
        x += ctx.measureText(h).width + aralik;
      }
      ctx.textAlign = secenek.hizala ?? 'center';
    }
  });

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 4;
  doku.needsUpdate = true;
  return dokuKaydet(doku);
}

/** İstasyon duvarı için karo dokusu: hafif ton farkı ve derz çizgileri. */
export function karoDokusu(taban = '#c9d3da', derz = '#8c99a3', satir = 8, sutun = 8): THREE.CanvasTexture {
  const g = 512;
  const { c, ctx } = tuval(g, g);
  ctx.fillStyle = taban;
  ctx.fillRect(0, 0, g, g);

  const kw = g / sutun;
  const kh = g / satir;
  for (let i = 0; i < satir; i++) {
    for (let j = 0; j < sutun; j++) {
      const ton = 0.94 + ((i * 7 + j * 13) % 11) * 0.011;
      ctx.fillStyle = `rgba(255,255,255,${(ton - 0.94) * 3})`;
      ctx.fillRect(j * kw, i * kh, kw - 2, kh - 2);
      ctx.fillStyle = `rgba(0,0,0,${0.02 + ((i * 5 + j * 3) % 7) * 0.006})`;
      ctx.fillRect(j * kw, i * kh, kw - 2, kh - 2);
    }
  }
  ctx.strokeStyle = derz;
  ctx.lineWidth = 2;
  for (let i = 0; i <= satir; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * kh);
    ctx.lineTo(g, i * kh);
    ctx.stroke();
  }
  for (let j = 0; j <= sutun; j++) {
    ctx.beginPath();
    ctx.moveTo(j * kw, 0);
    ctx.lineTo(j * kw, g);
    ctx.stroke();
  }

  // Hafif kirlenme lekeleri: yıllanmış ama temiz yüzey hissi.
  for (let n = 0; n < 90; n++) {
    const x = Math.random() * g;
    const yy = Math.random() * g;
    const r = 8 + Math.random() * 40;
    const grad = ctx.createRadialGradient(x, yy, 0, x, yy, r);
    grad.addColorStop(0, 'rgba(60,70,80,0.05)');
    grad.addColorStop(1, 'rgba(60,70,80,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(x - r, yy - r, r * 2, r * 2);
  }

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.wrapS = THREE.RepeatWrapping;
  doku.wrapT = THREE.RepeatWrapping;
  doku.anisotropy = 4;
  return dokuKaydet(doku);
}

/** Peron zemini: granit benzeri ince benekli yüzey. */
export function zeminDokusu(): THREE.CanvasTexture {
  const g = 512;
  const { c, ctx } = tuval(g, g);
  ctx.fillStyle = '#6f757c';
  ctx.fillRect(0, 0, g, g);
  const img = ctx.getImageData(0, 0, g, g);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 46;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n * 1.1));
  }
  ctx.putImageData(img, 0, 0);
  ctx.strokeStyle = 'rgba(0,0,0,0.16)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (i * g) / 4);
    ctx.lineTo(g, (i * g) / 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((i * g) / 4, 0);
    ctx.lineTo((i * g) / 4, g);
    ctx.stroke();
  }
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.wrapS = THREE.RepeatWrapping;
  doku.wrapT = THREE.RepeatWrapping;
  doku.anisotropy = 4;
  return dokuKaydet(doku);
}

/** Işık parıltısı ve bokeh için yumuşak radyal doku. */
export function parlaklikDokusu(iciBeyaz = 1): THREE.CanvasTexture {
  const g = 128;
  const { c, ctx } = tuval(g, g);
  const grad = ctx.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
  grad.addColorStop(0, `rgba(255,255,255,${iciBeyaz})`);
  grad.addColorStop(0.25, `rgba(255,255,255,${0.45 * iciBeyaz})`);
  grad.addColorStop(0.6, `rgba(255,255,255,${0.09 * iciBeyaz})`);
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, g, g);
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  return dokuKaydet(doku);
}

/** İçi boş halka: defter sahnesindeki bokeh daireleri için. */
export function bokehDokusu(): THREE.CanvasTexture {
  const g = 128;
  const { c, ctx } = tuval(g, g);
  const grad = ctx.createRadialGradient(g / 2, g / 2, g * 0.1, g / 2, g / 2, g / 2);
  grad.addColorStop(0, 'rgba(255,255,255,0.16)');
  grad.addColorStop(0.72, 'rgba(255,255,255,0.26)');
  grad.addColorStop(0.88, 'rgba(255,255,255,0.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(g / 2, g / 2, g / 2, 0, Math.PI * 2);
  ctx.fill();
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  return dokuKaydet(doku);
}

/** Tarih yazısı için şeffaf zeminli etiket dokusu. */
export function etiketDokusu(ustSatir: string, altSatir: string): THREE.CanvasTexture {
  const g = 768;
  const y = 256;
  const { c, ctx } = tuval(g, y);
  ctx.clearRect(0, 0, g, y);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = 'rgba(28,22,26,0.92)';
  ctx.font = `400 ${y * 0.34}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillText(ustSatir, g / 2, y * 0.42);

  ctx.fillStyle = 'rgba(70,58,62,0.78)';
  ctx.font = `300 ${y * 0.15}px Manrope, Helvetica, Arial, sans-serif`;
  const harfler = [...altSatir];
  const aralik = y * 0.05;
  const toplam = harfler.reduce((t, h) => t + ctx.measureText(h).width + aralik, -aralik);
  let x = g / 2 - toplam / 2;
  ctx.textAlign = 'left';
  for (const h of harfler) {
    ctx.fillText(h, x, y * 0.72);
    x += ctx.measureText(h).width + aralik;
  }

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 4;
  return dokuKaydet(doku);
}

/** İstasyon duvarı: ince uzun bej tuğlalar, hafif ton farkıyla. */
export function tuglaDokusu(): THREE.CanvasTexture {
  const g = 512;
  const y = 512;
  const { c, ctx } = tuval(g, y);
  ctx.fillStyle = '#8e8471';
  ctx.fillRect(0, 0, g, y);

  const satir = 26;
  const th = y / satir;
  const tw = g / 6;
  for (let i = 0; i < satir; i++) {
    const kaydir = i % 2 === 0 ? 0 : tw / 2;
    for (let j = -1; j < 7; j++) {
      const x = j * tw + kaydir;
      const ton = 0.86 + ((i * 7 + j * 13) % 13) * 0.021;
      ctx.fillStyle = `rgb(${Math.round(178 * ton)},${Math.round(166 * ton)},${Math.round(144 * ton)})`;
      ctx.fillRect(x + 1, i * th + 1, tw - 2, th - 2);
    }
  }
  // Yüzeye ince gren
  const img = ctx.getImageData(0, 0, g, y);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.wrapS = THREE.RepeatWrapping;
  doku.wrapT = THREE.RepeatWrapping;
  doku.anisotropy = 8;
  return dokuKaydet(doku);
}

/** Peron zemini: açık gri-bej kareler üzerine koyu baklava deseni. */
export function peronZeminDokusu(): THREE.CanvasTexture {
  const g = 512;
  const { c, ctx } = tuval(g, g);
  ctx.fillStyle = '#a9a396';
  ctx.fillRect(0, 0, g, g);

  const n = 4;
  const k = g / n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const ton = 0.94 + ((i * 5 + j * 11) % 7) * 0.017;
      ctx.fillStyle = `rgba(255,255,255,${(ton - 0.94) * 2.6})`;
      ctx.fillRect(j * k, i * k, k, k);
      // Karenin ortasında koyu baklava
      ctx.fillStyle = (i + j) % 2 === 0 ? 'rgba(70,66,60,0.5)' : 'rgba(90,86,78,0.34)';
      ctx.beginPath();
      ctx.moveTo(j * k + k / 2, i * k + k * 0.16);
      ctx.lineTo(j * k + k * 0.84, i * k + k / 2);
      ctx.lineTo(j * k + k / 2, i * k + k * 0.84);
      ctx.lineTo(j * k + k * 0.16, i * k + k / 2);
      ctx.closePath();
      ctx.fill();
    }
  }
  ctx.strokeStyle = 'rgba(50,46,42,0.32)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= n; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * k);
    ctx.lineTo(g, i * k);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i * k, 0);
    ctx.lineTo(i * k, g);
    ctx.stroke();
  }

  const img = ctx.getImageData(0, 0, g, g);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const nz = (Math.random() - 0.5) * 20;
    d[i] += nz;
    d[i + 1] += nz;
    d[i + 2] += nz;
  }
  ctx.putImageData(img, 0, 0);

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.wrapS = THREE.RepeatWrapping;
  doku.wrapT = THREE.RepeatWrapping;
  doku.anisotropy = 8;
  return dokuKaydet(doku);
}

/** Tavan: koyu gri lambri çıtaları. */
export function tavanCitaDokusu(): THREE.CanvasTexture {
  const g = 256;
  const { c, ctx } = tuval(g, g);
  ctx.fillStyle = '#4b4842';
  ctx.fillRect(0, 0, g, g);
  for (let i = 0; i < 16; i++) {
    const ton = 0.86 + (i % 3) * 0.05;
    ctx.fillStyle = `rgba(255,255,255,${0.05 * ton})`;
    ctx.fillRect(0, i * 16, g, 13);
    ctx.fillStyle = 'rgba(0,0,0,0.32)';
    ctx.fillRect(0, i * 16 + 13, g, 3);
  }
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.wrapS = THREE.RepeatWrapping;
  doku.wrapT = THREE.RepeatWrapping;
  doku.anisotropy = 4;
  return dokuKaydet(doku);
}

/** Peron tabelası: üstte kırmızı bant, altında istasyon adı. */
export function istasyonTabelasi(ad: string): THREE.CanvasTexture {
  const g = 1024;
  const y = 288;
  const { c, ctx } = tuval(g, y);
  ctx.fillStyle = '#f2f1ee';
  ctx.fillRect(0, 0, g, y);
  ctx.fillStyle = '#c0392b';
  ctx.fillRect(0, 0, g, y * 0.3);
  ctx.strokeStyle = '#b9b6ae';
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, g - 6, y - 6);

  ctx.fillStyle = '#23272b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const boy = y * 0.34;
  ctx.font = `600 ${boy}px Helvetica, Arial, sans-serif`;
  const harfler = [...ad];
  const aralik = boy * 0.06;
  const toplam = harfler.reduce((t, h) => t + ctx.measureText(h).width + aralik, -aralik);
  let x = g / 2 - toplam / 2;
  ctx.textAlign = 'left';
  for (const h of harfler) {
    ctx.fillText(h, x, y * 0.66);
    x += ctx.measureText(h).width + aralik;
  }

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 8;
  return dokuKaydet(doku);
}

/** Karşı perondaki afişler: soyut renkli panolar. */
export function afisDokusu(tohum: number): THREE.CanvasTexture {
  const g = 256;
  const y = 384;
  const { c, ctx } = tuval(g, y);
  const renkler = [
    ['#2b4a6f', '#7fa8c9'],
    ['#6d2b3a', '#d99a86'],
    ['#2f5c4a', '#9fc9a8'],
    ['#5a4a2b', '#d8c08a']
  ];
  const [a, b] = renkler[tohum % renkler.length];
  const grad = ctx.createLinearGradient(0, 0, g, y);
  grad.addColorStop(0, a);
  grad.addColorStop(1, b);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, g, y);
  ctx.fillStyle = 'rgba(255,255,255,0.22)';
  ctx.fillRect(g * 0.12, y * 0.62, g * 0.76, y * 0.05);
  ctx.fillRect(g * 0.12, y * 0.72, g * 0.5, y * 0.035);
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, g, y * 0.06);
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  return dokuKaydet(doku);
}

/** El yazısı fontu yüklenene kadar bekleyen söz. Dokular yüklenince tazelenir. */
export const elYazisiHazir: Promise<void> = (async () => {
  if (!('fonts' in document)) return;
  try {
    await Promise.all([
      document.fonts.load('400 64px Caveat'),
      document.fonts.load('600 64px Caveat')
    ]);
    await document.fonts.ready;
  } catch {
    // Font gelmezse yedek el yazısı fontu kullanılır.
  }
})();

export interface ElYazisiSecenek {
  genislik?: number;
  yukseklik?: number;
  fontBoyu?: number;
  renk?: string;
  hizala?: CanvasTextAlign;
  egim?: number;
}

/**
 * Kalemle yazılmış izlenimi veren yazı dokusu: hafif eğim, satır başına
 * küçük kaymalar ve mürekkep yoğunluğu değişimi.
 */
export function elYazisiDokusu(satirlar: string[], secenek: ElYazisiSecenek = {}): THREE.CanvasTexture {
  const g = secenek.genislik ?? 768;
  const y = secenek.yukseklik ?? 256;
  const { c, ctx } = tuval(g, y);

  const ciz = (): void => {
    ctx.clearRect(0, 0, g, y);
    const boy = secenek.fontBoyu ?? y * 0.5;
    ctx.font = `500 ${boy}px Caveat, "Segoe Script", "Bradley Hand", cursive`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = secenek.hizala ?? 'center';

    // Uzun satırları tuvale sığacak şekilde böl.
    const enFazla = g * 0.92;
    const bolunmus: string[] = [];
    for (const kaynak of satirlar) {
      if (ctx.measureText(kaynak).width <= enFazla) {
        bolunmus.push(kaynak);
        continue;
      }
      let mevcut = '';
      for (const kelime of kaynak.split(' ')) {
        const deneme = mevcut ? `${mevcut} ${kelime}` : kelime;
        if (ctx.measureText(deneme).width > enFazla && mevcut) {
          bolunmus.push(mevcut);
          mevcut = kelime;
        } else {
          mevcut = deneme;
        }
      }
      if (mevcut) bolunmus.push(mevcut);
    }

    const satirYuksekligi = boy * 1.12;
    const bas = y / 2 - ((bolunmus.length - 1) * satirYuksekligi) / 2;

    bolunmus.forEach((satir, i) => {
      const x = secenek.hizala === 'left' ? g * 0.04 : g / 2;
      const yy = bas + i * satirYuksekligi;
      ctx.save();
      ctx.translate(x, yy);
      ctx.rotate(secenek.egim ?? -0.018);
      // Mürekkebin kâğıda oturmasını taklit eden iki geçiş
      ctx.fillStyle = secenek.renk ?? 'rgba(41, 52, 78, 0.34)';
      ctx.fillText(satir, 1.5, 1.5);
      ctx.fillStyle = secenek.renk ?? 'rgba(31, 42, 68, 0.92)';
      ctx.fillText(satir, 0, 0);
      ctx.restore();
    });
  };

  ciz();
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 8;
  // Font geç yüklenirse yazıyı yeniden çiz.
  void elYazisiHazir.then(() => {
    ciz();
    doku.needsUpdate = true;
  });
  return dokuKaydet(doku);
}

/** Defter sayfası: krem kâğıt, ince lif dokusu ve kenarlarda hafif yaşlanma. */
export function kagitDokusu(tohum = 0): THREE.CanvasTexture {
  const g = 512;
  const y = 700;
  const { c, ctx } = tuval(g, y);
  ctx.fillStyle = '#f2ead8';
  ctx.fillRect(0, 0, g, y);

  // Lif dokusu
  const img = ctx.getImageData(0, 0, g, y);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 15;
    d[i] += n;
    d[i + 1] += n * 0.95;
    d[i + 2] += n * 0.8;
  }
  ctx.putImageData(img, 0, 0);

  // Yer yer soluk lekeler
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * g;
    const yy = Math.random() * y;
    const r = 20 + Math.random() * 80;
    const grad = ctx.createRadialGradient(x, yy, 0, x, yy, r);
    grad.addColorStop(0, `rgba(196,170,124,${0.03 + Math.random() * 0.04})`);
    grad.addColorStop(1, 'rgba(196,170,124,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(x - r, yy - r, r * 2, r * 2);
  }

  // Kenarlarda hafif kararma
  const kenar = ctx.createLinearGradient(0, 0, g, 0);
  kenar.addColorStop(0, 'rgba(150,124,88,0.16)');
  kenar.addColorStop(0.12, 'rgba(150,124,88,0)');
  kenar.addColorStop(0.88, 'rgba(150,124,88,0)');
  kenar.addColorStop(1, 'rgba(150,124,88,0.16)');
  ctx.fillStyle = kenar;
  ctx.fillRect(0, 0, g, y);
  const kenar2 = ctx.createLinearGradient(0, 0, 0, y);
  kenar2.addColorStop(0, 'rgba(150,124,88,0.14)');
  kenar2.addColorStop(0.1, 'rgba(150,124,88,0)');
  kenar2.addColorStop(0.9, 'rgba(150,124,88,0)');
  kenar2.addColorStop(1, 'rgba(150,124,88,0.14)');
  ctx.fillStyle = kenar2;
  ctx.fillRect(0, 0, g, y);

  void tohum;
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 8;
  return dokuKaydet(doku);
}

/** Sayfayı tutan bant parçası: yarı saydam, hafif buruşuk. */
export function bantDokusu(): THREE.CanvasTexture {
  const g = 128;
  const y = 64;
  const { c, ctx } = tuval(g, y);
  ctx.fillStyle = 'rgba(226, 210, 176, 0.62)';
  ctx.fillRect(0, 0, g, y);
  for (let i = 0; i < 9; i++) {
    ctx.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.09})`;
    ctx.fillRect(Math.random() * g, 0, 2 + Math.random() * 5, y);
  }
  ctx.fillStyle = 'rgba(160,140,104,0.28)';
  ctx.fillRect(0, 0, g, 2);
  ctx.fillRect(0, y - 2, g, 2);
  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  return dokuKaydet(doku);
}

/** Defter kapağı: bez/deri dokusu, kabartma çerçeve ve el yazısı başlık. */
export function kapakDokusu(baslik: string, altBaslik: string): THREE.CanvasTexture {
  const g = 700;
  const y = 950;
  const { c, ctx } = tuval(g, y);

  ctx.fillStyle = '#5d2130';
  ctx.fillRect(0, 0, g, y);

  // Bez dokusu: çapraz ince örgü
  ctx.globalAlpha = 0.16;
  for (let i = -y; i < g; i += 3) {
    ctx.strokeStyle = i % 6 === 0 ? '#000000' : '#ffffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + y, y);
    ctx.stroke();
  }
  for (let i = 0; i < g + y; i += 3) {
    ctx.strokeStyle = i % 6 === 0 ? '#ffffff' : '#000000';
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i - y, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Gren ve yıpranma
  const img = ctx.getImageData(0, 0, g, y);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 22;
    d[i] += n;
    d[i + 1] += n * 0.8;
    d[i + 2] += n * 0.8;
  }
  ctx.putImageData(img, 0, 0);

  // Köşelerde açılma
  for (const [cx, cy] of [
    [0, 0],
    [g, 0],
    [0, y],
    [g, y]
  ] as const) {
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 210);
    grad.addColorStop(0, 'rgba(255,220,190,0.16)');
    grad.addColorStop(1, 'rgba(255,220,190,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(cx - 210, cy - 210, 420, 420);
  }

  // Kabartma çerçeve
  const m = g * 0.075;
  ctx.strokeStyle = 'rgba(214, 178, 122, 0.72)';
  ctx.lineWidth = 3;
  ctx.strokeRect(m, m, g - m * 2, y - m * 2);
  ctx.strokeStyle = 'rgba(214, 178, 122, 0.34)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(m + 9, m + 9, g - (m + 9) * 2, y - (m + 9) * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(m + 2.5, m + 2.5, g - m * 2, y - m * 2);

  // Font geç yüklenince yazı yeniden çizilecek; zemini saklayıp geri koyarız,
  // yoksa yazı üst üste binip bulanıklaşır.
  const zemin = ctx.getImageData(0, 0, g, y);

  // Başlık: el yazısı, altın yaldız
  const yaz = (): void => {
    ctx.putImageData(zemin, 0, 0);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.translate(g / 2, y * 0.44);
    ctx.rotate(-0.02);
    ctx.font = `600 ${g * 0.155}px Caveat, "Segoe Script", cursive`;
    ctx.fillStyle = 'rgba(0,0,0,0.42)';
    ctx.fillText(baslik, 3, 4);
    const grad = ctx.createLinearGradient(-g / 2, -40, g / 2, 40);
    grad.addColorStop(0, '#c79a5c');
    grad.addColorStop(0.45, '#f0d59a');
    grad.addColorStop(0.6, '#e3c286');
    grad.addColorStop(1, '#b98d52');
    ctx.fillStyle = grad;
    ctx.fillText(baslik, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `400 ${g * 0.052}px Caveat, "Segoe Script", cursive`;
    ctx.fillStyle = 'rgba(226, 196, 148, 0.72)';
    ctx.fillText(altBaslik, g / 2, y * 0.56);
    ctx.restore();
  };
  yaz();

  const doku = new THREE.CanvasTexture(c);
  doku.colorSpace = THREE.SRGBColorSpace;
  doku.anisotropy = 8;
  void elYazisiHazir.then(() => {
    yaz();
    doku.needsUpdate = true;
  });
  return dokuKaydet(doku);
}

export interface YazanSatir {
  metin: string;
  fontBoyu: number;
  renk?: string;
  /** Bir önceki satırdan sonra bırakılacak ek boşluk (piksel) */
  ustBosluk?: number;
}

/**
 * Kalemle yazılıyormuş gibi harf harf beliren el yazısı dokusu.
 * Yalnızca görünen harf sayısı değiştiğinde yeniden çizer; kare başına iş yapmaz.
 */
export class YazanElYazisi {
  readonly doku: THREE.CanvasTexture;
  private ctx: CanvasRenderingContext2D;
  private g: number;
  private y: number;
  private satirlar: YazanSatir[];
  private duzenCache: Array<{
    metin: string;
    x: number;
    y: number;
    genislik: number;
    satir: YazanSatir;
  }> | null = null;
  private toplamGenislik = 0;
  private cizilenPiksel = -1;
  private sonOran = 0;

  constructor(satirlar: YazanSatir[], genislik = 1320, yukseklik = 520) {
    this.satirlar = satirlar;
    this.g = genislik;
    this.y = yukseklik;
    const { c, ctx } = tuval(genislik, yukseklik);
    this.ctx = ctx;
    this.doku = new THREE.CanvasTexture(c);
    this.doku.colorSpace = THREE.SRGBColorSpace;
    this.doku.anisotropy = 8;
    dokuKaydet(this.doku);
    this.ciz(0);
    void elYazisiHazir.then(() => {
      this.duzenCache = null;
      this.cizilenPiksel = -1;
      this.ciz(this.sonOran);
    });
  }

  private font(s: YazanSatir): string {
    return `500 ${s.fontBoyu}px Caveat, "Segoe Script", "Bradley Hand", cursive`;
  }

  /**
   * Satırları böler ve her satırın sabit konumunu hesaplar.
   * Konumlar önceden belirlendiği için yazı yazılırken harfler kaymaz.
   */
  private duzen(): NonNullable<typeof this.duzenCache> {
    if (this.duzenCache) return this.duzenCache;
    const enFazla = this.g * 0.94;
    const parcalar: Array<{ metin: string; satir: YazanSatir; ilk: boolean }> = [];

    for (const s of this.satirlar) {
      this.ctx.font = this.font(s);
      if (this.ctx.measureText(s.metin).width <= enFazla) {
        parcalar.push({ metin: s.metin, satir: s, ilk: true });
        continue;
      }
      let mevcut = '';
      let ilk = true;
      for (const kelime of s.metin.split(' ')) {
        const deneme = mevcut ? `${mevcut} ${kelime}` : kelime;
        if (this.ctx.measureText(deneme).width > enFazla && mevcut) {
          parcalar.push({ metin: mevcut, satir: s, ilk });
          ilk = false;
          mevcut = kelime;
        } else {
          mevcut = deneme;
        }
      }
      if (mevcut) parcalar.push({ metin: mevcut, satir: s, ilk });
    }

    let toplamYukseklik = 0;
    parcalar.forEach((p2, i) => {
      toplamYukseklik += p2.satir.fontBoyu * 1.2;
      if (i > 0 && p2.ilk) toplamYukseklik += p2.satir.ustBosluk ?? 0;
    });

    let imlec = this.y / 2 - toplamYukseklik / 2;
    const sonuc = parcalar.map((p2, i) => {
      if (i > 0 && p2.ilk) imlec += p2.satir.ustBosluk ?? 0;
      imlec += p2.satir.fontBoyu * 1.2;
      this.ctx.font = this.font(p2.satir);
      const genislik = this.ctx.measureText(p2.metin).width;
      return {
        metin: p2.metin,
        x: (this.g - genislik) / 2,
        y: imlec - p2.satir.fontBoyu * 0.34,
        genislik,
        satir: p2.satir
      };
    });

    this.toplamGenislik = sonuc.reduce((t, p2) => t + p2.genislik, 0);
    this.duzenCache = sonuc;
    return sonuc;
  }

  get toplamUzunluk(): number {
    this.duzen();
    return this.toplamGenislik;
  }

  /**
   * Yazıyı kalem ucu gibi soldan sağa açar.
   * Harfler yerinde durur; yalnızca görünen kısım genişler.
   */
  private ciz(oran: number): void {
    const satirlar = this.duzen();
    const hedef = clamp01(oran) * this.toplamGenislik;
    if (this.cizilenPiksel >= 0 && Math.abs(hedef - this.cizilenPiksel) < 1.2 && oran < 1) return;
    this.cizilenPiksel = hedef;

    this.ctx.clearRect(0, 0, this.g, this.y);
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'alphabetic';

    let biriken = 0;
    for (const s of satirlar) {
      if (biriken >= hedef) break;
      const acik = Math.min(s.genislik, hedef - biriken);
      const tam = acik >= s.genislik - 0.01;

      this.ctx.save();
      if (!tam) {
        // Kalem ucunun geçtiği yere kadar açılan pencere
        this.ctx.beginPath();
        this.ctx.rect(
          s.x - 4,
          s.y - s.satir.fontBoyu * 1.05,
          acik + 1.5,
          s.satir.fontBoyu * 1.6
        );
        this.ctx.clip();
      }
      this.ctx.translate(s.x, s.y);
      this.ctx.rotate(-0.014);
      this.ctx.font = this.font(s.satir);
      // Mürekkebin kâğıda oturması: soluk bir alt geçiş, üstüne asıl yazı
      this.ctx.fillStyle = 'rgba(41, 52, 78, 0.28)';
      this.ctx.fillText(s.metin, 1.4, 1.4);
      this.ctx.fillStyle = s.satir.renk ?? 'rgba(31, 42, 68, 0.92)';
      this.ctx.fillText(s.metin, 0, 0);
      this.ctx.restore();

      // Kalem ucu: yalnızca yazılmakta olan satırda
      if (!tam && acik > 1) {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(31, 42, 68, 0.5)';
        this.ctx.beginPath();
        this.ctx.arc(
          s.x + acik,
          s.y - s.satir.fontBoyu * 0.16,
          s.satir.fontBoyu * 0.028,
          0,
          Math.PI * 2
        );
        this.ctx.fill();
        this.ctx.restore();
      }
      biriken += s.genislik;
    }
    this.doku.needsUpdate = true;
  }

  /**
   * Yazının ne kadarının açıldığını ayarlar.
   * Yeni açılan piksel miktarını döndürür; kalem sesi buna göre tetiklenir.
   */
  ayarla(oran: number): number {
    const onceki = this.cizilenPiksel < 0 ? 0 : this.cizilenPiksel;
    this.sonOran = clamp01(oran);
    this.ciz(this.sonOran);
    return Math.max(0, this.cizilenPiksel - onceki);
  }
}


