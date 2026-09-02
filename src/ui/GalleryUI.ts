import { storyConfig } from '../config/storyConfig';
import { memories } from '../config/memories';
import { clamp01 } from '../animation/easing';
import type { AcikKartBilgisi } from '../gallery/MemoryGallery';

/** Anı defterinin metin katmanı: sayaç, detay paneli ve kapanış. */
export class GalleryUI {
  readonly kok: HTMLElement;
  kapatIstendi: (() => void) | null = null;
  hikayeTekrar: (() => void) | null = null;

  private kapak: HTMLElement;
  private sayac: HTMLElement;
  private yil: HTMLElement;
  private ipucu: HTMLElement;
  private detay: HTMLElement;
  private detayTarih: HTMLElement;
  private detayBaslik: HTMLElement;
  private detayNot: HTMLElement;
  private detaySayac: HTMLElement;
  private kapanis: HTMLElement;
  private ipucuGoruldu = false;

  constructor() {
    const d = storyConfig.defter;
    this.kok = document.createElement('section');
    this.kok.className = 'defter-ui';
    this.kok.innerHTML = `
      <div class="kaydir-ipucu defter-kaydir"><span>${d.kaydirmaIpucu}</span><i class="ok"></i></div>
      <div class="defter-bar">
        <span class="defter-sayac">1 / ${memories.length}</span>
        <span class="defter-yil"></span>
      </div>
      <p class="defter-ipucu">${d.detayIpucu}</p>
      <div class="detay" aria-hidden="true">
        <div class="detay-ic">
          <p class="detay-tarih"></p>
          <h2 class="detay-baslik"></h2>
          <p class="detay-not"></p>
          <p class="detay-sayac"></p>
        </div>
        <button class="detay-kapat" type="button" aria-label="Kapat">×</button>
      </div>
      <div class="kapanis">
        <h2>${d.kapanisBaslik}</h2>
        <p>${d.kapanisMetin}</p>
        <button class="tekrar" type="button">${d.tekrarIzle}</button>
      </div>
    `;

    this.kapak = this.kok.querySelector('.defter-kaydir') as HTMLElement;
    this.sayac = this.kok.querySelector('.defter-sayac') as HTMLElement;
    this.yil = this.kok.querySelector('.defter-yil') as HTMLElement;
    this.ipucu = this.kok.querySelector('.defter-ipucu') as HTMLElement;
    this.detay = this.kok.querySelector('.detay') as HTMLElement;
    this.detayTarih = this.kok.querySelector('.detay-tarih') as HTMLElement;
    this.detayBaslik = this.kok.querySelector('.detay-baslik') as HTMLElement;
    this.detayNot = this.kok.querySelector('.detay-not') as HTMLElement;
    this.detaySayac = this.kok.querySelector('.detay-sayac') as HTMLElement;
    this.kapanis = this.kok.querySelector('.kapanis') as HTMLElement;

    (this.kok.querySelector('.detay-kapat') as HTMLButtonElement).addEventListener('click', () =>
      this.kapatIstendi?.()
    );
    (this.kok.querySelector('.tekrar') as HTMLButtonElement).addEventListener('click', () =>
      this.hikayeTekrar?.()
    );
  }

  guncelle(p: number, aktifSira: number, aktifYil: string): void {
    const ipucuOpaklik = clamp01(1 - p / 0.02);
    this.kapak.style.opacity = String(ipucuOpaklik);
    this.kapak.style.visibility = ipucuOpaklik > 0.01 ? 'visible' : 'hidden';

    this.sayac.textContent = `${Math.min(memories.length, aktifSira + 1)} / ${memories.length}`;
    this.yil.textContent = aktifYil;

    if (!this.ipucuGoruldu) {
      const o = clamp01((p - 0.09) / 0.03) * clamp01(1 - (p - 0.2) / 0.05);
      this.ipucu.style.opacity = String(o);
    }

    const k = clamp01((p - 0.965) / 0.025);
    this.kapanis.style.opacity = String(k);
    this.kapanis.style.visibility = k > 0.01 ? 'visible' : 'hidden';
    this.kapanis.style.pointerEvents = k > 0.7 ? 'auto' : 'none';
  }

  detayGoster(bilgi: AcikKartBilgisi | null): void {
    if (!bilgi) {
      this.detay.classList.remove('acik');
      this.detay.setAttribute('aria-hidden', 'true');
      return;
    }
    this.ipucuGoruldu = true;
    this.ipucu.style.opacity = '0';
    this.detayTarih.textContent = bilgi.tarih;
    this.detayBaslik.textContent = bilgi.baslik ?? '';
    this.detayBaslik.style.display = bilgi.baslik ? '' : 'none';
    this.detayNot.textContent = bilgi.not ?? '';
    this.detayNot.style.display = bilgi.not ? '' : 'none';
    this.detaySayac.textContent = `${bilgi.sira} / ${bilgi.toplam}`;
    this.detay.classList.add('acik');
    this.detay.setAttribute('aria-hidden', 'false');
  }

  goster(): void {
    this.kok.classList.add('gorunur');
  }

  gizle(): void {
    this.kok.classList.remove('gorunur');
  }
}
