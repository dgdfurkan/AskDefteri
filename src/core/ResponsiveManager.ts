import { storyConfig } from '../config/storyConfig';

export interface KaliteAyari {
  pixelRatio: number;
  golgeler: boolean;
  golgeCozunurluk: number;
  tozParcacik: number;
  bokehParcacik: number;
  trenYolcu: number;
  antialias: boolean;
}

export interface EkranDurumu {
  genislik: number;
  yukseklik: number;
  enBoy: number;
  mobil: boolean;
  yatay: boolean;
  dar: boolean;
  /**
   * Kadraj kararı: dikey telefonda dar, yatay telefonda ve masaüstünde geniş.
   * Kamera çerçevelemesi bu değere bakar, cihaz türüne değil.
   */
  darKadraj: boolean;
}

type Dinleyici = (durum: EkranDurumu) => void;

/**
 * Ekran ölçülerini ve kalite kademesini tek yerden yönetir.
 * Resize ve orientationchange olaylarını birleştirip tek bildirime indirir.
 */
export class ResponsiveManager {
  durum: EkranDurumu;
  kalite: KaliteAyari;
  readonly azHareket: boolean;

  private dinleyiciler = new Set<Dinleyici>();
  private zamanlayici = 0;

  constructor() {
    this.azHareket = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.durum = this.olc();
    this.kalite = this.kaliteSec();

    window.addEventListener('resize', this.planla, { passive: true });
    window.addEventListener('orientationchange', this.planla, { passive: true });
    // Gömülü bağlamlarda resize olayı gelmeden ölçü değişebiliyor.
    if ('ResizeObserver' in window) {
      new ResizeObserver(this.planla).observe(document.documentElement);
    }
  }

  private olc(): EkranDurumu {
    // Bazı gömülü bağlamlarda ölçü 0 gelebiliyor; en az 1 tutulur ki
    // en-boy oranı NaN olmasın.
    const genislik = Math.max(1, window.innerWidth);
    const yukseklik = Math.max(1, window.innerHeight);
    const kabaIsaret = window.matchMedia('(pointer: coarse)').matches;
    const enBoy = genislik / Math.max(1, yukseklik);
    return {
      genislik,
      yukseklik,
      enBoy,
      mobil: kabaIsaret || genislik < 820,
      yatay: genislik > yukseklik,
      dar: genislik < 560,
      darKadraj: enBoy < 1.15
    };
  }

  private kaliteSec(): KaliteAyari {
    const temel = this.durum.mobil ? storyConfig.kalite.mobil : storyConfig.kalite.masaustu;
    const cekirdek = navigator.hardwareConcurrency ?? 4;
    if (cekirdek <= 4 && !this.durum.mobil) {
      // Zayıf masaüstü: mobil kademesine düş.
      return { ...storyConfig.kalite.mobil };
    }
    return { ...temel };
  }

  private planla = (): void => {
    window.clearTimeout(this.zamanlayici);
    this.zamanlayici = window.setTimeout(() => {
      const yeni = this.olc();
      const kademeDegisti = yeni.mobil !== this.durum.mobil;
      this.durum = yeni;
      if (kademeDegisti) this.kalite = this.kaliteSec();
      this.dinleyiciler.forEach((d) => d(this.durum));
    }, 120);
  };

  dinle(fn: Dinleyici): () => void {
    this.dinleyiciler.add(fn);
    return () => this.dinleyiciler.delete(fn);
  }

  /** Cihaz piksel oranını kalite kademesine göre sınırlar. */
  pikselOrani(): number {
    return Math.min(window.devicePixelRatio || 1, this.kalite.pixelRatio);
  }
}
