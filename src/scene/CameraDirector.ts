import * as THREE from 'three';
import { clamp, clamp01, inverseLerp, lerp } from '../animation/easing';

export interface KameraAnahtar {
  p: number;
  konum: [number, number, number];
  hedef: [number, number, number];
  fov: number;
  /** Mobilde uygulanan ek konum kayması ve fov artışı */
  mobilKonum?: [number, number, number];
  mobilFov?: number;
}

/**
 * Kamerayı yalnızca kaydırma ilerlemesinden sürer.
 * Konum ve hedef Catmull-Rom eğrileriyle interpolasyonlanır; böylece
 * anahtar karelerde durma ya da ani kesme olmaz.
 */
export class CameraDirector {
  readonly kamera: THREE.PerspectiveCamera;

  private anahtarlar: KameraAnahtar[];
  private konumEgri: THREE.CatmullRomCurve3;
  private hedefEgri: THREE.CatmullRomCurve3;
  private mobilKonumEgri: THREE.CatmullRomCurve3;
  private mobilHedefEgri: THREE.CatmullRomCurve3;
  private gecici = new THREE.Vector3();
  private geciciHedef = new THREE.Vector3();
  private mobilGecici = new THREE.Vector3();
  private mobilHedefGecici = new THREE.Vector3();

  constructor(anahtarlar: KameraAnahtar[], enBoy: number) {
    this.anahtarlar = [...anahtarlar].sort((a, b) => a.p - b.p);
    this.kamera = new THREE.PerspectiveCamera(45, enBoy, 0.1, 400);

    const kon = this.anahtarlar.map((a) => new THREE.Vector3(...a.konum));
    const hed = this.anahtarlar.map((a) => new THREE.Vector3(...a.hedef));
    const mkon = this.anahtarlar.map((a) =>
      new THREE.Vector3(...(a.mobilKonum ?? a.konum))
    );
    const mhed = this.anahtarlar.map((a) => new THREE.Vector3(...a.hedef));

    this.konumEgri = new THREE.CatmullRomCurve3(kon, false, 'catmullrom', 0.35);
    this.hedefEgri = new THREE.CatmullRomCurve3(hed, false, 'catmullrom', 0.35);
    this.mobilKonumEgri = new THREE.CatmullRomCurve3(mkon, false, 'catmullrom', 0.35);
    this.mobilHedefEgri = new THREE.CatmullRomCurve3(mhed, false, 'catmullrom', 0.35);
  }

  /** İlerlemeyi anahtar kare dizisindeki tekdüze eğri parametresine çevirir. */
  private egriParametresi(p: number): number {
    const n = this.anahtarlar.length;
    if (p <= this.anahtarlar[0].p) return 0;
    if (p >= this.anahtarlar[n - 1].p) return 1;
    for (let i = 0; i < n - 1; i++) {
      const a = this.anahtarlar[i];
      const b = this.anahtarlar[i + 1];
      if (p >= a.p && p <= b.p) {
        const yerel = inverseLerp(a.p, b.p, p);
        return (i + yerel) / (n - 1);
      }
    }
    return 1;
  }

  private fovHesapla(p: number, mobil: boolean): number {
    const n = this.anahtarlar.length;
    const fovDeger = (a: KameraAnahtar): number => (mobil ? a.mobilFov ?? a.fov : a.fov);
    if (p <= this.anahtarlar[0].p) return fovDeger(this.anahtarlar[0]);
    if (p >= this.anahtarlar[n - 1].p) return fovDeger(this.anahtarlar[n - 1]);
    for (let i = 0; i < n - 1; i++) {
      const a = this.anahtarlar[i];
      const b = this.anahtarlar[i + 1];
      if (p >= a.p && p <= b.p) {
        return lerp(fovDeger(a), fovDeger(b), inverseLerp(a.p, b.p, p));
      }
    }
    return fovDeger(this.anahtarlar[n - 1]);
  }

  /**
   * Kamerayı güvenli bölgede tutar: peronun altına inmez, tavanı delmez,
   * trenin ve duvarların içine girmez.
   */
  private guvenliyeAl(v: THREE.Vector3): void {
    v.y = clamp(v.y, 0.85, 3.7);
    v.z = clamp(v.z, 2.6, 9.8);
    // Tren gövdesi z < 1.9 bandında; kamera peron tarafında kalsın.
    if (v.z < 2.55) v.z = 2.55;
  }

  guncelle(p: number, darKadraj: boolean, sarsintiGucu: number, zaman: number): void {
    const mobil = darKadraj;
    const t = this.egriParametresi(clamp01(p));
    if (mobil) {
      this.mobilKonumEgri.getPoint(t, this.mobilGecici);
      this.mobilHedefEgri.getPoint(t, this.mobilHedefGecici);
      this.gecici.copy(this.mobilGecici);
      this.geciciHedef.copy(this.mobilHedefGecici);
    } else {
      this.konumEgri.getPoint(t, this.gecici);
      this.hedefEgri.getPoint(t, this.geciciHedef);
    }

    // Mobilde dikey görüş açısı geniş; hedefi yukarı alarak boş zemin payını kısar.
    if (mobil) this.geciciHedef.y += 0.32;

    // Çok hafif elde tutma hissi; azaltılmış harekette tamamen kapanır.
    if (sarsintiGucu > 0) {
      this.gecici.x += Math.sin(zaman * 0.7) * 0.035 * sarsintiGucu;
      this.gecici.y += Math.sin(zaman * 0.93 + 1.2) * 0.028 * sarsintiGucu;
      this.gecici.z += Math.cos(zaman * 0.61) * 0.03 * sarsintiGucu;
    }

    this.guvenliyeAl(this.gecici);
    this.kamera.position.copy(this.gecici);
    this.kamera.lookAt(this.geciciHedef);

    const fov = this.fovHesapla(clamp01(p), mobil);
    if (Math.abs(this.kamera.fov - fov) > 0.01) {
      this.kamera.fov = fov;
      this.kamera.updateProjectionMatrix();
    }
  }

  enBoyAyarla(enBoy: number): void {
    this.kamera.aspect = enBoy;
    this.kamera.updateProjectionMatrix();
  }
}
