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

  /** Web Audio bağlamını ilk kullanımda açar. */
  private baglamAl(): AudioContext | null {
    try {
      const Ctx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return null;
      if (!this.baglam) this.baglam = new Ctx();
      if (this.baglam.state === 'suspended') void this.baglam.resume();
      return this.baglam;
    } catch {
      return null;
    }
  }

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
    const ctx = this.baglamAl();
    if (!ctx) return;
    try {
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

  /** Kalemin kâğıda sürtme sesi; her birkaç harfte bir çalınır. */
  kalem(): void {
    const ctx = this.baglamAl();
    if (!ctx) return;
    try {
      const t = ctx.currentTime;
      const uzunluk = Math.floor(ctx.sampleRate * 0.055);
      const tampon = ctx.createBuffer(1, uzunluk, ctx.sampleRate);
      const veri = tampon.getChannelData(0);
      for (let i = 0; i < uzunluk; i++) {
        const zarf = Math.sin((i / uzunluk) * Math.PI);
        veri[i] = (Math.random() * 2 - 1) * zarf * zarf;
      }
      const kaynak = ctx.createBufferSource();
      kaynak.buffer = tampon;
      kaynak.playbackRate.value = 0.85 + Math.random() * 0.4;

      const suzgec = ctx.createBiquadFilter();
      suzgec.type = 'bandpass';
      suzgec.frequency.value = 3800 + Math.random() * 2200;
      suzgec.Q.value = 0.9;

      const kazanc = ctx.createGain();
      kazanc.gain.setValueAtTime(0.055 + Math.random() * 0.03, t);
      kazanc.gain.exponentialRampToValueAtTime(0.0001, t + 0.075);

      kaynak.connect(suzgec).connect(kazanc).connect(ctx.destination);
      kaynak.start(t);
    } catch {
      // Ses üretilemezse yazı sessizce yazılır.
    }
  }

  durdur(): void {
    window.clearInterval(this.zamanlayici);
    this.ses.pause();
  }
}
