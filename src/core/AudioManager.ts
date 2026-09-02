import { clamp01 } from '../animation/easing';
import { varlikYolu } from '../config/memories';

const ANAHTAR = 'ani-defteri-ses';
const HEDEF_SES = 0.34;

/**
 * Arka plan müziği. Tarayıcı kuralları gereği yalnızca kullanıcı
 * etkileşiminden sonra başlatılabilir; şifre doğrulandığında devreye girer.
 */
export class AudioManager {
  private ses = new Audio();
  private acik: boolean;
  private hedef = 0;
  private zamanlayici = 0;
  private baglam: AudioContext | null = null;

  constructor() {
    this.ses.src = varlikYolu('muzik/ani-defteri.mp3');
    this.ses.loop = true;
    this.ses.preload = 'auto';
    this.ses.volume = 0;
    // Ses dosyası yüklenemezse sayfa sessizce çalışmaya devam eder.
    this.ses.addEventListener('error', () => this.ses.pause());
    this.acik = localStorage.getItem(ANAHTAR) !== 'kapali';
  }

  get acikMi(): boolean {
    return this.acik;
  }

  /** Kullanıcı etkileşiminden sonra çağrılır. */
  baslat(): void {
    if (!this.acik) return;
    void this.calmayaBasla();
  }

  private async calmayaBasla(): Promise<void> {
    try {
      await this.ses.play();
      this.sesGecisi(HEDEF_SES, 2400);
    } catch {
      // Otomatik oynatma engellendiyse sessizce geç; kullanıcı düğmeden açabilir.
    }
  }

  degistir(): boolean {
    this.acik = !this.acik;
    localStorage.setItem(ANAHTAR, this.acik ? 'acik' : 'kapali');
    if (this.acik) void this.calmayaBasla();
    else this.sesGecisi(0, 700, () => this.ses.pause());
    return this.acik;
  }

  /** Ses düzeyini yumuşakça değiştirir; ani kesme olmaz. */
  private sesGecisi(hedef: number, sure: number, bitince?: () => void): void {
    window.clearInterval(this.zamanlayici);
    const bas = this.ses.volume;
    this.hedef = hedef;
    const t0 = performance.now();
    this.zamanlayici = window.setInterval(() => {
      const t = clamp01((performance.now() - t0) / sure);
      this.ses.volume = bas + (this.hedef - bas) * t;
      if (t >= 1) {
        window.clearInterval(this.zamanlayici);
        bitince?.();
      }
    }, 40);
  }

  /**
   * Kilit tıkırtısı. Dosya yerine Web Audio ile üretilir: kısa bir metalik
   * vuruş ve üstüne düşük frekanslı bir tok ses.
   */
  tik(guc = 1): void {
    try {
      const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return;
      if (!this.baglam) this.baglam = new Ctx();
      const ctx = this.baglam;
      if (ctx.state === 'suspended') void ctx.resume();
      const t = ctx.currentTime;

      // Metalik klik: kısa gürültü patlaması, dar bant süzgeçten geçer.
      const uzunluk = Math.floor(ctx.sampleRate * 0.05);
      const tampon = ctx.createBuffer(1, uzunluk, ctx.sampleRate);
      const veri = tampon.getChannelData(0);
      for (let i = 0; i < uzunluk; i++) {
        veri[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / uzunluk, 6);
      }
      const kaynak = ctx.createBufferSource();
      kaynak.buffer = tampon;
      const suzgec = ctx.createBiquadFilter();
      suzgec.type = 'bandpass';
      suzgec.frequency.value = 2600;
      suzgec.Q.value = 1.6;
      const kazanc = ctx.createGain();
      kazanc.gain.setValueAtTime(0.26 * guc, t);
      kazanc.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      kaynak.connect(suzgec).connect(kazanc).connect(ctx.destination);
      kaynak.start(t);

      // Tok vuruş
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(210, t);
      osc.frequency.exponentialRampToValueAtTime(90, t + 0.1);
      const oscKazanc = ctx.createGain();
      oscKazanc.gain.setValueAtTime(0.18 * guc, t);
      oscKazanc.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
      osc.connect(oscKazanc).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.15);
    } catch {
      // Ses üretilemezse görsel akış aynen sürer.
    }
  }

  durdur(): void {
    window.clearInterval(this.zamanlayici);
    this.ses.pause();
  }
}
