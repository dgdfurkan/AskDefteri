import { storyConfig } from '../config/storyConfig';
import { sifreDogruMu } from './sifre';

/** Şifre ekranı. Doğru şifrede 3B kalbin dağılmasını tetikler. */
export class LockScreen {
  readonly kok: HTMLElement;
  /** Doğru şifre girildiğinde çağrılır. */
  acildi: (() => void) | null = null;
  /** Yanlış denemede sahneye sarsıntı için. */
  hataOldu: (() => void) | null = null;
  /** Başarı animasyonunun ilerlemesini sahneye taşır (0-1). */
  basariIlerleme: ((t: number) => void) | null = null;

  private giris: HTMLInputElement;
  private hata: HTMLParagraphElement;
  private form: HTMLFormElement;
  private kart: HTMLElement;
  private kilitli = false;

  constructor() {
    const k = storyConfig.kilit;
    this.kok = document.createElement('section');
    this.kok.className = 'kilit';
    this.kok.innerHTML = `
      <div class="kilit-kart">
        <p class="kilit-ust">${storyConfig.acilis.ustBaslik}</p>
        <h1 class="kilit-baslik">${storyConfig.acilis.baslik}</h1>
        <p class="kilit-aciklama">${k.aciklama}</p>
        <form class="kilit-form" autocomplete="off" novalidate>
          <label class="kilit-etiket" for="sifre-girdi">${k.baslik}</label>
          <div class="kilit-satir">
            <input id="sifre-girdi" class="kilit-girdi" type="password" name="sifre"
              placeholder="${k.yerTutucu}" autocomplete="off" autocapitalize="off"
              autocorrect="off" spellcheck="false" enterkeyhint="go" />
            <button class="kilit-dugme" type="submit">${k.dugme}</button>
          </div>
        </form>
        <p class="kilit-hata" role="alert" aria-live="polite"></p>
        <button class="kilit-ipucu" type="button">${k.ipucuMetni}</button>
      </div>
    `;

    this.kart = this.kok.querySelector('.kilit-kart') as HTMLElement;
    this.giris = this.kok.querySelector('.kilit-girdi') as HTMLInputElement;
    this.hata = this.kok.querySelector('.kilit-hata') as HTMLParagraphElement;
    this.form = this.kok.querySelector('.kilit-form') as HTMLFormElement;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.dene();
    });
    // Bazı mobil klavyelerde formun örtük gönderimi çalışmıyor.
    this.giris.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.dene();
      }
    });
    this.giris.addEventListener('input', () => {
      this.kart.classList.remove('hatali');
      this.hata.textContent = '';
    });
    (this.kok.querySelector('.kilit-ipucu') as HTMLButtonElement).addEventListener('click', () => {
      this.hata.textContent = k.ipucu;
      this.hata.classList.add('ipucu');
    });
  }

  odaklan(): void {
    // Mobilde klavyenin hemen açılmaması için gecikmeli odak.
    window.setTimeout(() => this.giris.focus({ preventScroll: true }), 500);
  }

  private dene(): void {
    if (this.kilitli) return;
    const k = storyConfig.kilit;
    if (!sifreDogruMu(this.giris.value)) {
      this.hata.classList.remove('ipucu');
      this.hata.textContent = k.hataMetni;
      this.kart.classList.remove('hatali');
      // Yeniden tetiklenebilmesi için sınıfın kaldırılması gerekiyor.
      void this.kart.offsetWidth;
      this.kart.classList.add('hatali');
      this.hataOldu?.();
      return;
    }

    this.kilitli = true;
    this.giris.blur();
    this.hata.classList.remove('ipucu');
    this.hata.textContent = k.basariMetni;
    this.kart.classList.add('acildi');

    const sure = 2400;
    const bas = performance.now();
    let bitti = false;
    const bitir = (): void => {
      if (bitti) return;
      bitti = true;
      this.basariIlerleme?.(1);
      this.acildi?.();
    };
    const adim = (): void => {
      if (bitti) return;
      const t = Math.min(1, (performance.now() - bas) / sure);
      this.basariIlerleme?.(t);
      if (t < 1) requestAnimationFrame(adim);
      else bitir();
    };
    requestAnimationFrame(adim);
    // Sekme arka plandayken rAF durur; geçiş yine de tamamlansın.
    window.setTimeout(bitir, sure + 200);
  }

  goster(): void {
    this.kok.classList.add('gorunur');
  }

  gizle(): void {
    this.kok.classList.remove('gorunur');
  }
}
