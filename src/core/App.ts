import * as THREE from 'three';
import { ResponsiveManager } from './ResponsiveManager';
import { RendererManager } from './RendererManager';
import { ScrollController } from './ScrollController';
import { LockScene } from '../scene/LockScene';
import { MetroStoryScene } from '../scene/MetroStoryScene';
import { MemoryGallery } from '../gallery/MemoryGallery';
import { LockScreen } from '../ui/LockScreen';
import { StoryOverlay } from '../ui/StoryOverlay';
import { GalleryUI } from '../ui/GalleryUI';
import { storyConfig } from '../config/storyConfig';
import { memories } from '../config/memories';
import { dokulariBirak } from '../objects/textures';
import { AudioManager } from './AudioManager';

type Asama = 'kilit' | 'hikaye' | 'defter';

const OTURUM_ANAHTAR = 'ani-defteri-asama';

export class App {
  private ekran = new ResponsiveManager();
  private cizer: RendererManager;
  private kaydirma: ScrollController;
  private uiKatman: HTMLElement;
  private perde: HTMLElement;
  private gecis: HTMLElement;

  private kilitSahne: LockScene;
  private hikayeSahne: MetroStoryScene | null = null;
  private defterSahne: MemoryGallery | null = null;

  private ses = new AudioManager();
  private sesDugmesi!: HTMLButtonElement;
  private gezinmeDugmesi!: HTMLButtonElement;
  private kilitUI = new LockScreen();
  private hikayeUI = new StoryOverlay();
  private defterUI = new GalleryUI();

  private asama: Asama = 'kilit';
  private zaman = 0;
  private sonKare = 0;
  private basladi = false;
  private dokunBaslangic = { x: 0, y: 0, t: 0 };
  private sonKayitP = -1;

  constructor(canvas: HTMLCanvasElement) {
    this.cizer = new RendererManager(canvas, this.ekran);
    this.kaydirma = new ScrollController(
      document.getElementById('kaydirma-alani') as HTMLElement
    );
    this.uiKatman = document.getElementById('ui-katmani') as HTMLElement;

    this.perde = document.createElement('div');
    this.perde.className = 'perde';
    this.perde.innerHTML = `<span class="perde-yazi">${storyConfig.acilis.baslik}</span>`;
    document.body.appendChild(this.perde);

    this.gecis = document.createElement('div');
    this.gecis.className = 'gecis';
    document.body.appendChild(this.gecis);

    this.kilitSahne = new LockScene(this.ekran, this.cizer.renderer);

    this.uiKatman.append(this.kilitUI.kok, this.hikayeUI.kok, this.defterUI.kok);
    this.sesDugmesiKur();
    this.gezinmeDugmesiKur();

    this.baglantilar();
    this.ekran.dinle(() => this.boyutlandir());

    if (history.scrollRestoration) history.scrollRestoration = 'manual';

    // Sayfa doğrudan hikâyeyle açıldıysa (yenileme) müzik ilk dokunuşta başlar.
    const ilkDokunus = (): void => {
      if (this.asama !== 'kilit') this.ses.baslat();
    };
    window.addEventListener('pointerdown', ilkDokunus, { once: true });
    window.addEventListener('keydown', ilkDokunus, { once: true });
    window.addEventListener('wheel', ilkDokunus, { once: true, passive: true });
    window.addEventListener('touchstart', ilkDokunus, { once: true, passive: true });

    const kayitli = sessionStorage.getItem(OTURUM_ANAHTAR) as Asama | null;
    if (kayitli === 'hikaye' || kayitli === 'defter') {
      this.asamaKur(kayitli, false);
    } else {
      this.asamaKur('kilit', false);
    }

    requestAnimationFrame(this.dongu);
    window.setTimeout(() => this.perdeyiAc(), 420);
  }

  private baglantilar(): void {
    this.kilitUI.hataOldu = () => this.kilitSahne.hataVer();
    this.kilitUI.basariIlerleme = (t) => this.kilitSahne.basariAyarla(t);
    this.kilitSahne.tikCagrisi = (guc) => this.ses.tik(guc);
    this.kilitUI.acildi = () => {
      // Müzik yalnızca kullanıcı etkileşiminden sonra başlatılabilir.
      this.ses.baslat();
      this.gecisYap('hikaye');
    };

    this.hikayeUI.defteriAc = () => this.gecisYap('defter');

    this.defterUI.kapatIstendi = () => this.defterSahne?.kapat();
    this.defterUI.hikayeTekrar = () => this.basaDon();

    // Karta dokunma: kaydırma ile karıştırmamak için kısa ve yerinde dokunuş şartı.
    const el = this.cizer.canvas;
    el.addEventListener(
      'pointerdown',
      (e) => {
        this.dokunBaslangic = { x: e.clientX, y: e.clientY, t: performance.now() };
      },
      { passive: true }
    );
    el.addEventListener(
      'pointerup',
      (e) => {
        if (this.asama !== 'defter' || !this.defterSahne) return;
        const dx = e.clientX - this.dokunBaslangic.x;
        const dy = e.clientY - this.dokunBaslangic.y;
        if (Math.hypot(dx, dy) > 12) return;
        if (performance.now() - this.dokunBaslangic.t > 600) return;
        const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
        const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
        if (this.defterSahne.dokunma(ndcX, ndcY)) {
          this.kaydirma.kilitle(this.defterSahne.acikMi);
        }
      },
      { passive: true }
    );

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.asama === 'defter' && this.defterSahne?.acikMi) {
        this.defterSahne.kapat();
        this.kaydirma.kilitle(false);
      }
    });
  }

  /** Küçük müzik düğmesi: hikâye ve defter boyunca köşede durur. */
  private sesDugmesiKur(): void {
    const d = document.createElement('button');
    d.className = 'ses-dugmesi';
    d.type = 'button';
    d.innerHTML = '<span class="ses-ikon"></span>';
    d.setAttribute('aria-label', storyConfig.ses.kapat);
    d.addEventListener('click', () => {
      const acik = this.ses.degistir();
      d.classList.toggle('kapali', !acik);
      d.setAttribute('aria-label', acik ? storyConfig.ses.kapat : storyConfig.ses.ac);
    });
    d.classList.toggle('kapali', !this.ses.acikMi);
    document.body.appendChild(d);
    this.sesDugmesi = d;
  }

  /** Hikâye ile defter arasında her an gidip gelmeyi sağlayan düğme. */
  private gezinmeDugmesiKur(): void {
    const d = document.createElement('button');
    d.className = 'gezinme-dugmesi';
    d.type = 'button';
    d.addEventListener('click', () => {
      if (this.asama === 'hikaye') this.gecisYap('defter');
      else if (this.asama === 'defter') this.gecisYap('hikaye');
    });
    document.body.appendChild(d);
    this.gezinmeDugmesi = d;
  }

  private perdeyiAc(): void {
    this.perde.classList.add('acik');
    window.setTimeout(() => this.perde.remove(), 1400);
    if (this.asama === 'kilit') this.kilitUI.odaklan();
  }

  /** Sahneyi ve kaydırma uzunluğunu asamaya göre kurar. */
  private asamaKur(asama: Asama, animasyonlu: boolean): void {
    this.asama = asama;
    sessionStorage.setItem(OTURUM_ANAHTAR, asama);

    this.kilitUI.gizle();
    this.hikayeUI.gizle();
    this.defterUI.gizle();
    document.body.dataset.asama = asama;
    this.sesDugmesi?.classList.toggle('gorunur', asama !== 'kilit');
    if (this.gezinmeDugmesi) {
      this.gezinmeDugmesi.classList.toggle('gorunur', asama !== 'kilit');
      this.gezinmeDugmesi.textContent =
        asama === 'hikaye' ? storyConfig.gezinme.deftereGit : storyConfig.gezinme.hikayeyeGit;
    }

    if (asama === 'kilit') {
      this.kaydirma.uzunlukAyarla(100);
      this.kaydirma.kilitle(true);
      this.kilitUI.goster();
      this.kilitSahne.basariAyarla(0);
    } else if (asama === 'hikaye') {
      if (!this.hikayeSahne) {
        this.hikayeSahne = new MetroStoryScene(this.ekran, this.cizer.renderer);
      }
      this.kaydirma.kilitle(false);
      this.kaydirma.uzunlukAyarla(storyConfig.kaydirma.hikayeVh);
      this.kaydirma.sifirla();
      this.kaydirma.takipHiziAyarla(6.5);
      this.hikayeUI.goster();
      this.hikayeUI.guncelle(0);
    } else {
      if (!this.defterSahne) {
        this.defterSahne = new MemoryGallery(this.ekran, this.cizer.renderer);
        this.defterSahne.kartDegisti = (bilgi) => {
          this.defterUI.detayGoster(bilgi);
          this.kaydirma.kilitle(bilgi !== null);
        };
        this.defterSahne.kalemSesi = () => this.ses.kalem();
      }
      this.kaydirma.kilitle(false);
      this.kaydirma.uzunlukAyarla(
        storyConfig.kaydirma.defterEkVh + memories.length * storyConfig.kaydirma.defterAniBasinaVh
      );
      this.kaydirma.sifirla();
      this.kaydirma.takipHiziAyarla(8);
      this.defterUI.goster();
    }

    this.sonKayitP = -1;
    if (asama !== 'kilit') {
      // Yenilemede aynı sahne noktasından devam et.
      const kayit = animasyonlu ? null : sessionStorage.getItem(`${OTURUM_ANAHTAR}-p-${asama}`);
      const oran = kayit === null ? 0 : Math.min(0.995, Math.max(0, Number(kayit)));
      if (oran > 0.001) {
        // Yükseklik uygulanana kadar bir kare bekle.
        window.requestAnimationFrame(() => {
          const menzil = document.documentElement.scrollHeight - window.innerHeight;
          window.scrollTo(0, menzil * oran);
          this.kaydirma.anindaOturt();
        });
        window.setTimeout(() => {
          const menzil = document.documentElement.scrollHeight - window.innerHeight;
          if (window.scrollY < 1 && menzil > 0) {
            window.scrollTo(0, menzil * oran);
            this.kaydirma.anindaOturt();
          }
        }, 120);
      }
      this.sonKayitP = oran;
    }
    if (!animasyonlu) this.kaydirma.anindaOturt();
  }

  /** Defterin başına kısa bir sönümle döner; uzun kaydırma beklenmez. */
  private basaDon(): void {
    this.gecis.classList.add('kapali');
    window.setTimeout(() => {
      window.scrollTo(0, 0);
      this.kaydirma.anindaOturt();
      this.sonKayitP = 0;
      window.setTimeout(() => this.gecis.classList.remove('kapali'), 80);
    }, 500);
  }

  /** İki asama arasında sıcak bir sönümle geçiş. */
  private gecisYap(hedef: Asama): void {
    this.gecis.classList.add('kapali');
    window.setTimeout(() => {
      this.asamaKur(hedef, true);
      // Sahne kurulduktan hemen sonra perdeyi aç. rAF'a bağlanmaz:
      // sekme arka plandayken rAF durur ve perde kapalı kalırdı.
      window.setTimeout(() => this.gecis.classList.remove('kapali'), 60);
    }, 620);
  }

  private boyutlandir(): void {
    this.cizer.boyutla();
    this.kilitSahne.boyutlandir();
    this.hikayeSahne?.boyutlandir();
    this.defterSahne?.boyutlandir();
  }

  private dongu = (simdi: number): void => {
    requestAnimationFrame(this.dongu);
    if (!this.basladi) {
      this.sonKare = simdi;
      this.basladi = true;
    }
    const dt = Math.min(0.05, (simdi - this.sonKare) / 1000);
    this.sonKare = simdi;
    this.zaman += dt;

    if (!this.cizer.cizilebilir) return;

    this.kaydirma.guncelle(dt);
    const p = this.kaydirma.yumusak;

    if (this.asama === 'kilit') {
      this.kilitSahne.guncelle(dt, this.zaman);
      this.cizer.ciz(this.kilitSahne.sahne, this.kilitSahne.kamera);
    } else if (this.asama === 'hikaye' && this.hikayeSahne) {
      this.hikayeSahne.guncelle(p, this.zaman);
      this.hikayeUI.guncelle(p);
      this.cizer.ciz(this.hikayeSahne.sahne, this.hikayeSahne.yonetmen.kamera);
    } else if (this.asama === 'defter' && this.defterSahne) {
      this.defterSahne.guncelle(p, dt, this.zaman);
      const aktif = this.defterSahne.aktifSira(p);
      this.defterUI.guncelle(p, aktif, memories[aktif]?.yilYazisi ?? '', this.defterSahne.kapanisSonrasi(p));
      this.cizer.ciz(this.defterSahne.sahne, this.defterSahne.kamera);
    }
    this.konumuKaydet(p);
  };

  /** Sayfa yenilenince aynı noktadan devam edebilmek için ilerlemeyi saklar. */
  private konumuKaydet(p: number): void {
    if (this.asama === 'kilit' || this.kaydirma.kilitliMi) return;
    if (Math.abs(p - this.sonKayitP) < 0.004) return;
    this.sonKayitP = p;
    sessionStorage.setItem(`${OTURUM_ANAHTAR}-p-${this.asama}`, p.toFixed(4));
  }

  /**
   * Geliştirme aracı: verilen asama ve ilerlemede tek bir kare çizer.
   * Kaydırmaya dokunmadan sahnenin belirli anlarını doğrulamak için.
   */
  testKare(asama: Asama, p: number, zaman = 4): void {
    this.zaman = zaman;
    if (asama !== this.asama) this.asamaKur(asama, false);
    if (asama === 'kilit') {
      this.kilitSahne.guncelle(0.016, zaman);
      this.cizer.ciz(this.kilitSahne.sahne, this.kilitSahne.kamera);
    } else if (asama === 'hikaye' && this.hikayeSahne) {
      this.hikayeSahne.guncelle(p, zaman);
      this.hikayeUI.guncelle(p);
      this.cizer.ciz(this.hikayeSahne.sahne, this.hikayeSahne.yonetmen.kamera);
    } else if (asama === 'defter' && this.defterSahne) {
      this.defterSahne.guncelle(p, 0.016, zaman);
      const aktif = this.defterSahne.aktifSira(p);
      this.defterUI.guncelle(p, aktif, memories[aktif]?.yilYazisi ?? '', this.defterSahne.kapanisSonrasi(p));
      this.cizer.ciz(this.defterSahne.sahne, this.defterSahne.kamera);
    }
  }

  birak(): void {
    this.ses.durdur();
    this.kilitSahne.birak();
    this.hikayeSahne?.birak();
    this.defterSahne?.birak();
    dokulariBirak();
    this.cizer.renderer.dispose();
  }
}

/** WebGL desteğini sessizce sınar. */
export function webglVarMi(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext('webgl2') || c.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

export { THREE };
