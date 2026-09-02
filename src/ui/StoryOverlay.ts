import { storyConfig } from '../config/storyConfig';
import { clamp01 } from '../animation/easing';

/** Metro hikâyesinin üzerine binen metin katmanı. Tümü kaydırma ilerlemesine bağlı. */
export class StoryOverlay {
  readonly kok: HTMLElement;
  defteriAc: (() => void) | null = null;

  private ipucu: HTMLElement;
  private altyaziKutu: HTMLElement;
  private altyaziParcalari: HTMLElement[] = [];
  private finalKutu: HTMLElement;
  private finalSatirlari: HTMLElement[] = [];
  private davet: HTMLButtonElement;
  private cizgi: HTMLElement;
  private sonAktif = -1;

  constructor() {
    const h = storyConfig.hikaye;
    this.kok = document.createElement('section');
    this.kok.className = 'hikaye-ui';
    this.kok.innerHTML = `
      <div class="kaydir-ipucu"><span>${h.kaydirmaIpucu}</span><i class="ok"></i></div>
      <div class="altyazi"></div>
      <div class="final">
        ${h.finalYazilari.map((t) => `<p class="final-satir">${t}</p>`).join('')}
        <button class="davet" type="button">${h.defterDavet}</button>
      </div>
      <div class="ilerleme"><i></i></div>
    `;

    this.ipucu = this.kok.querySelector('.kaydir-ipucu') as HTMLElement;
    this.altyaziKutu = this.kok.querySelector('.altyazi') as HTMLElement;
    this.finalKutu = this.kok.querySelector('.final') as HTMLElement;
    this.davet = this.kok.querySelector('.davet') as HTMLButtonElement;
    this.cizgi = this.kok.querySelector('.ilerleme i') as HTMLElement;

    for (const a of h.altyazilar) {
      const el = document.createElement('p');
      el.className = 'altyazi-satir';
      el.textContent = a.metin;
      this.altyaziKutu.appendChild(el);
      this.altyaziParcalari.push(el);
    }
    this.finalSatirlari = Array.from(this.kok.querySelectorAll('.final-satir'));
    this.davet.addEventListener('click', () => this.defteriAc?.());
  }

  guncelle(p: number): void {
    // Kaydırma ipucu ilk hareketle söner.
    this.ipucu.style.opacity = String(clamp01(1 - p / 0.035));
    this.ipucu.style.visibility = p > 0.04 ? 'hidden' : 'visible';
    this.cizgi.style.transform = `scaleX(${p})`;

    let aktif = -1;
    storyConfig.hikaye.altyazilar.forEach((a, i) => {
      const el = this.altyaziParcalari[i];
      const yerel = (p - a.p) / a.sure;
      // Girişte ve çıkışta yumuşak sönüm.
      const g = clamp01(yerel / 0.28);
      const c = clamp01((1 - yerel) / 0.28);
      const o = Math.min(g, c) * (yerel >= 0 && yerel <= 1 ? 1 : 0);
      el.style.opacity = String(o);
      el.style.transform = `translateY(${(1 - o) * 12}px)`;
      if (o > 0.5) aktif = i;
    });
    if (aktif !== this.sonAktif) this.sonAktif = aktif;

    // Final yazıları sırayla belirir.
    const f1 = clamp01((p - 0.952) / 0.02);
    const f2 = clamp01((p - 0.974) / 0.02);
    if (this.finalSatirlari[0]) {
      this.finalSatirlari[0].style.opacity = String(f1);
      this.finalSatirlari[0].style.transform = `translateY(${(1 - f1) * 14}px)`;
    }
    if (this.finalSatirlari[1]) {
      this.finalSatirlari[1].style.opacity = String(f2);
      this.finalSatirlari[1].style.transform = `translateY(${(1 - f2) * 14}px)`;
    }
    const d = clamp01((p - 0.972) / 0.013);
    this.davet.style.opacity = String(d);
    this.davet.style.pointerEvents = d > 0.8 ? 'auto' : 'none';
    this.finalKutu.style.visibility = p > 0.94 ? 'visible' : 'hidden';
  }

  goster(): void {
    this.kok.classList.add('gorunur');
  }

  gizle(): void {
    this.kok.classList.remove('gorunur');
  }
}
