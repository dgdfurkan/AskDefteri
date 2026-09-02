import { clamp01, damp } from '../animation/easing';

/**
 * Sayfa kaydırmasını 0-1 aralığında tek bir ana ilerleme değerine çevirir.
 * Her kare scrollY doğrudan okunur; böylece momentum kaydırmasında bile
 * değer birikmez ve olay çoğaltması olmaz.
 */
export class ScrollController {
  /** Ham ilerleme: doğrudan kaydırma konumundan gelir. */
  ham = 0;
  /** Yumuşatılmış ilerleme: kare hızından bağımsız üstel takip. */
  yumusak = 0;
  /** Saniye başına ilerleme değişimi. Kamera sarsıntısı gibi etkiler için. */
  hiz = 0;

  private alan: HTMLElement;
  private kilitli = false;
  private takipHizi = 7.5;

  constructor(alan: HTMLElement) {
    this.alan = alan;
  }

  /** Kaydırma alanının yüksekliğini viewport katı olarak ayarlar. */
  uzunlukAyarla(vh: number): void {
    this.alan.style.height = `${vh}vh`;
  }

  /** Yeni bölüme geçerken kaydırmayı ve yumuşatmayı birlikte sıfırlar. */
  sifirla(): void {
    window.scrollTo(0, 0);
    this.ham = 0;
    this.yumusak = 0;
    this.hiz = 0;
  }

  kilitle(deger: boolean): void {
    this.kilitli = deger;
    // Sınıf kök öğede: sayfa kaydırması html üzerinden yapılıyor.
    document.documentElement.classList.toggle('kaydirma-kilitli', deger);
  }

  get kilitliMi(): boolean {
    return this.kilitli;
  }

  /** Takip hızını değiştirir. Düşük değer daha sinematik, yüksek değer daha çevik. */
  takipHiziAyarla(hiz: number): void {
    this.takipHizi = hiz;
  }

  guncelle(dt: number): void {
    if (!this.kilitli) {
      const menzil = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      this.ham = clamp01(window.scrollY / menzil);
    }
    const onceki = this.yumusak;
    this.yumusak = damp(this.yumusak, this.ham, this.takipHizi, dt);
    // Çok küçük farkları kapat, sonsuz mikro güncellemeyi engelle.
    if (Math.abs(this.yumusak - this.ham) < 0.00005) this.yumusak = this.ham;
    this.hiz = dt > 0 ? (this.yumusak - onceki) / dt : 0;
  }

  /** Yeni sahneye geçerken yumuşatmayı anlık olarak hedefe oturtur. */
  anindaOturt(): void {
    const menzil = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    this.ham = clamp01(window.scrollY / menzil);
    this.yumusak = this.ham;
    this.hiz = 0;
  }
}
