import * as THREE from 'three';
import {
  clamp01,
  easeInCubic,
  easeInOutSine,
  easeOutCubic,
  inverseLerp,
  lerp,
  segment,
  smootherstep,
  smoothstep
} from './easing';
import { ADIM_BOYU } from '../objects/ProceduralCharacter';

/** Trenin tünelde başladığı ve peronda durduğu X konumları. */
const TREN_BASLANGIC = 168;
const TREN_DURUS = 5.5;
const TREN_ARALIK: [number, number] = [0.11, 0.47];

/** Karakterlerin peron üzerindeki yürüyüş rotaları (x, z). */
interface Ayak {
  p0: number;
  p1: number;
  bas: [number, number];
  son: [number, number];
  yumusatma: (t: number) => number;
}

const KADIN_ROTA: Ayak[] = [
  // Kapıdan ilk adım: vagon içinden peron kenarına
  { p0: 0.6, p1: 0.672, bas: [0.0, -0.25], son: [0.06, 2.2], yumusatma: easeInOutSine },
  // İkinci adım: perona tam basar
  { p0: 0.672, p1: 0.708, bas: [0.06, 2.2], son: [0.16, 3.0], yumusatma: easeInOutSine },
  // Ona doğru yürüyüş
  { p0: 0.748, p1: 0.885, bas: [0.16, 3.0], son: [-1.42, 4.62], yumusatma: easeInOutSine }
];

const ERKEK_ROTA: Ayak[] = [
  { p0: 0.778, p1: 0.885, bas: [-3.6, 5.6], son: [-1.98, 4.62], yumusatma: easeInOutSine }
];

/** Dönme açısı anahtarları (ilerleme, radyan). Aralarda yumuşak geçiş. */
const KADIN_DONME: Array<[number, number]> = [
  [0.0, 0.0],
  [0.71, 0.0],
  [0.748, -0.34],
  [0.8, -0.78],
  [0.868, -1.35],
  [0.9, -Math.PI / 2]
];

const ERKEK_DONME: Array<[number, number]> = [
  [0.0, Math.PI / 2],
  [0.72, Math.PI / 2],
  [0.782, 2.13],
  [0.84, 2.13],
  [0.878, 1.72],
  [0.9, Math.PI / 2]
];

export interface KarakterDurumu {
  x: number;
  z: number;
  y: number;
  donme: number;
  yurumeFaz: number;
  yurumeSiddet: number;
  tanima: number;
  sarilma: number;
  bakisY: number;
  rahatlik: number;
  gorunur: boolean;
}

export interface HikayeDurumu {
  trenX: number;
  /** Karşı hattan ayrılan trenin X konumu */
  kalkanX: number;
  /** Birim/ilerleme cinsinden tren hız büyüklüğü */
  trenHizP: number;
  kapiAcik: number;
  oturma: number;
  tunelYakinlik: number;
  finalGuc: number;
  kadin: KarakterDurumu;
  erkek: KarakterDurumu;
}

function aciAnahtarlari(anahtarlar: Array<[number, number]>, p: number): number {
  if (p <= anahtarlar[0][0]) return anahtarlar[0][1];
  const son = anahtarlar[anahtarlar.length - 1];
  if (p >= son[0]) return son[1];
  for (let i = 0; i < anahtarlar.length - 1; i++) {
    const a = anahtarlar[i];
    const b = anahtarlar[i + 1];
    if (p >= a[0] && p <= b[0]) {
      return lerp(a[1], b[1], smootherstep(inverseLerp(a[0], b[0], p)));
    }
  }
  return son[1];
}

/** Rota üzerindeki konumu ve o ana kadar kat edilen toplam mesafeyi verir. */
function rotaDurumu(rota: Ayak[], p: number): { x: number; z: number; mesafe: number; hiz: number } {
  let mesafe = 0;
  let x = rota[0].bas[0];
  let z = rota[0].bas[1];
  let hiz = 0;

  for (const ayak of rota) {
    const uzunluk = Math.hypot(ayak.son[0] - ayak.bas[0], ayak.son[1] - ayak.bas[1]);
    if (p <= ayak.p0) {
      if (mesafe === 0 && p <= rota[0].p0) {
        x = rota[0].bas[0];
        z = rota[0].bas[1];
      }
      break;
    }
    if (p >= ayak.p1) {
      mesafe += uzunluk;
      x = ayak.son[0];
      z = ayak.son[1];
      continue;
    }
    const ham = inverseLerp(ayak.p0, ayak.p1, p);
    const t = ayak.yumusatma(ham);
    x = lerp(ayak.bas[0], ayak.son[0], t);
    z = lerp(ayak.bas[1], ayak.son[1], t);
    mesafe += uzunluk * t;
    // Türev: ilerleme başına kat edilen mesafe. Yürüyüş şiddetini belirler.
    const eps = 0.004;
    const t2 = ayak.yumusatma(clamp01(ham + eps));
    hiz = (uzunluk * (t2 - t)) / (eps * (ayak.p1 - ayak.p0));
    break;
  }
  return { x, z, mesafe, hiz };
}

/** Tren konumu: yalnızca ilerlemeye bağlı, her zaman aynı yerde durur. */
export function trenKonumu(p: number): number {
  const t = easeOutCubic(segment(p, TREN_ARALIK[0], TREN_ARALIK[1]));
  return lerp(TREN_BASLANGIC, TREN_DURUS, t);
}

/** Karşı hattaki trenin konumu: hikâye başlarken istasyondan ayrılır. */
export function kalkanTrenKonumu(p: number): number {
  const t = easeInCubic(segment(p, 0.005, 0.17));
  return lerp(-2, 210, t);
}

/**
 * Tüm hikâye durumunu tek bir ilerleme değerinden hesaplar.
 * Hiçbir değer önceki kareye bağlı değildir; geri kaydırma kendiliğinden çalışır.
 */
export function hikayeDurumu(p: number): HikayeDurumu {
  const trenX = trenKonumu(p);
  const kalkanX = kalkanTrenKonumu(p);
  const eps = 0.002;
  const trenHizP = Math.abs(trenKonumu(Math.min(1, p + eps)) - trenX) / eps;

  const kapiAcik = smootherstep(segment(p, 0.5, 0.6));
  const oturma = smoothstep(segment(p, 0.42, 0.53));
  const tunelYakinlik = clamp01(inverseLerp(140, 18, trenX));
  const finalGuc = smootherstep(segment(p, 0.9, 1.0));

  const sarilma = smootherstep(segment(p, 0.872, 0.955));

  // --- Kadın ---
  const kRota = rotaDurumu(KADIN_ROTA, p);
  const kadinTanima =
    smootherstep(segment(p, 0.706, 0.744)) * (1 - smootherstep(segment(p, 0.79, 0.86)));
  const kadin: KarakterDurumu = {
    x: kRota.x,
    z: kRota.z,
    // Vagon zemini peron seviyesinden 5 cm yukarıda; ilk adımda iner.
    y: lerp(0.05, 0, clamp01(inverseLerp(0.6, 0.664, p))),
    donme: aciAnahtarlari(KADIN_DONME, p),
    yurumeFaz: (kRota.mesafe / ADIM_BOYU) * Math.PI,
    yurumeSiddet: clamp01(kRota.hiz / 15) * (1 - sarilma),
    tanima: kadinTanima * (1 - sarilma),
    sarilma,
    bakisY: 0,
    rahatlik: sarilma,
    gorunur: p > 0.465
  };

  // --- Erkek ---
  const eRota = rotaDurumu(ERKEK_ROTA, p);
  const erkekTanima =
    smootherstep(segment(p, 0.722, 0.78)) * (1 - smootherstep(segment(p, 0.8, 0.87)));
  const erkek: KarakterDurumu = {
    x: eRota.x,
    z: eRota.z,
    y: 0,
    donme: aciAnahtarlari(ERKEK_DONME, p),
    yurumeFaz: (eRota.mesafe / ADIM_BOYU) * Math.PI,
    yurumeSiddet: clamp01(eRota.hiz / 15) * (1 - sarilma),
    tanima: erkekTanima * (1 - sarilma),
    sarilma,
    // Tren yaklaşırken başını hafifçe tünele çevirir.
    bakisY: smoothstep(segment(p, 0.1, 0.22)) * 0.18 * (1 - smoothstep(segment(p, 0.6, 0.72))),
    rahatlik: sarilma,
    gorunur: true
  };

  return { trenX, kalkanX, trenHizP, kapiAcik, oturma, tunelYakinlik, finalGuc, kadin, erkek };
}

/** Kadının vagon içindeki başlangıç konumu (dünya koordinatı için yardımcı). */
export const KADIN_BASLANGIC = new THREE.Vector2(KADIN_ROTA[0].bas[0], KADIN_ROTA[0].bas[1]);
