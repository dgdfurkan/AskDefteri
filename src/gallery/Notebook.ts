import * as THREE from 'three';
import { storyConfig } from '../config/storyConfig';
import { memories, type Memory } from '../config/memories';
import { SayfaFotografi } from './SayfaFotografi';
import { YazanElYazisi, elYazisiDokusu, kagitDokusu, kapakDokusu } from '../objects/textures';
import { clamp01, easeInOutCubic, lerp, smootherstep } from '../animation/easing';

export const SAYFA_G = 2.15;
export const SAYFA_Y = 2.92;
/** Defterin toplam kâğıt kalınlığı; yaprak başına düşen pay bundan hesaplanır. */
const TOPLAM_KALINLIK = 0.16;
/** Arka kapağın defter açıkken durduğu derinlik */
const ARKA_KAPAK_Z = -0.03;
/** Yaprakların döndüğü ilerleme aralığı */
const BAS = 0.012;
const SON = 0.93;
/** Defterin kapandığı son bölüm */
const KAPANMA_BAS = SON;
const KAPANMA_SON = 0.985;

interface Yaprak {
  pivot: THREE.Group;
  onYuz: THREE.Group;
  arkaYuz: THREE.Group;
  /** Bu yaprağa ayrılan kaydırma aralığı */
  bas: number;
  son: number;
  /** Yaprağın çevrilme aralığı */
  p0: number;
  p1: number;
  index: number;
}

/**
 * Gerçek bir anı defteri: kapağı açılır, yaprakları tek tek çevrilir.
 * Fotoğraflar sayfaların üzerine bantlanmış, tarihleri el yazısıyla yazılmıştır.
 */
export class Notebook {
  readonly grup = new THREE.Group();
  readonly fotograflar: SayfaFotografi[] = [];
  readonly hedefMeshler: THREE.Mesh[] = [];
  readonly yaprakSayisi: number;

  private yapraklar: Yaprak[] = [];
  private kapakMat: THREE.MeshStandardMaterial;
  private sayfaMat: THREE.MeshStandardMaterial;
  private sirt: THREE.Mesh;
  private solYigin: THREE.Mesh;
  private sagYigin: THREE.Mesh;
  private fotoYaprak = new Map<SayfaFotografi, Yaprak>();
  private kapanisYazi: YazanElYazisi | null = null;
  private kapanisYaprak: Yaprak | null = null;
  private kapanisT = 0;
  private ortalamaAdim = 0.01;
  private arkaKapak = new THREE.Group();
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  constructor(golgeler: boolean) {
    const n = memories.length;
    // Yüz sırası: 0 kapak, 1 iç kapak, 2..n+1 fotoğraflar, sonuncusu kapanış.
    // 0 kapak, 1 iç kapak, 2..n+1 fotoğraflar, n+2 kapanış yazısı.
    const yuzSayisi = 2 + n + 1;
    this.yaprakSayisi = Math.ceil(yuzSayisi / 2);

    const kagit = kagitDokusu();
    this.sayfaMat = new THREE.MeshStandardMaterial({
      map: kagit,
      color: 0xf3ecda,
      roughness: 0.95,
      metalness: 0,
      side: THREE.FrontSide
    });
    this.kapakMat = new THREE.MeshStandardMaterial({
      map: kapakDokusu(storyConfig.defter.kapakBaslik, storyConfig.defter.kapakUstu),
      roughness: 0.72,
      metalness: 0.05,
      side: THREE.FrontSide
    });
    // Kapağın içi: koyu bordo astar
    const astarMat = new THREE.MeshStandardMaterial({ color: 0x7a3140, roughness: 0.88 });
    const kapakArkaMat = new THREE.MeshStandardMaterial({ color: 0x4d1c28, roughness: 0.8 });
    this.atilanlar.push(this.sayfaMat, this.kapakMat, kapakArkaMat, astarMat);

    const sayfaGeo = new THREE.PlaneGeometry(SAYFA_G, SAYFA_Y);
    this.atilanlar.push(sayfaGeo);

    // Yapraklara ağırlık verilir: kapanış sayfası, yazısı yazılabilsin diye
    // normal bir sayfadan çok daha uzun durur.
    const kapanisIndex = Math.floor((2 + n) / 2);
    const agirliklar = Array.from({ length: this.yaprakSayisi }, (_, i) =>
      i === kapanisIndex ? 5 : 1
    );
    const toplamAgirlik = agirliklar.reduce((t, a) => t + a, 0);
    this.ortalamaAdim = (SON - BAS) / toplamAgirlik;
    const sinirlar: number[] = [BAS];
    for (const a of agirliklar) sinirlar.push(sinirlar[sinirlar.length - 1] + a * this.ortalamaAdim);
    // Fazladan ağırlık, yaprak çevrilmeden önceki beklemeye eklenir:
    // kapanış yazısı sağ sayfada dururken yazılabilsin.
    const beklemeler = agirliklar.map((a) => Math.max(0, a - 1) * this.ortalamaAdim);

    for (let i = 0; i < this.yaprakSayisi; i++) {
      const pivot = new THREE.Group();
      const kapakMi = i === 0;

      const onYuz = new THREE.Group();
      onYuz.position.set(SAYFA_G / 2, 0, 0.0035);
      const arkaYuz = new THREE.Group();
      arkaYuz.position.set(SAYFA_G / 2, 0, -0.0035);
      arkaYuz.rotation.y = Math.PI;
      pivot.add(onYuz, arkaYuz);

      // Her yüzün kendi tek taraflı sayfası var; arkadan doku sızmaz.
      const onSayfa = new THREE.Mesh(sayfaGeo, kapakMi ? this.kapakMat : this.sayfaMat);
      onSayfa.position.z = -0.001;
      onSayfa.castShadow = golgeler && kapakMi;
      onYuz.add(onSayfa);
      const arkaSayfa = new THREE.Mesh(sayfaGeo, kapakMi ? astarMat : this.sayfaMat);
      arkaSayfa.position.z = -0.001;
      arkaYuz.add(arkaSayfa);

      const yaprak: Yaprak = {
        pivot,
        onYuz,
        arkaYuz,
        bas: sinirlar[i],
        son: sinirlar[i + 1],
        // Çevirme süresi her yaprakta aynı; uzun duraklar sayfada beklemeye ayrılır.
        p0: sinirlar[i] + beklemeler[i] + this.ortalamaAdim * 0.12,
        p1: sinirlar[i] + beklemeler[i] + this.ortalamaAdim * 0.62,
        index: i
      };
      this.yapraklar.push(yaprak);
      this.grup.add(pivot);

      this.yuzDoldur(yaprak, 2 * i, onYuz, kapakMi);
      this.yuzDoldur(yaprak, 2 * i + 1, arkaYuz, false);
    }

    // Sırt ve yığın gövdeleri
    const sirtGeo = new THREE.BoxGeometry(0.22, SAYFA_Y + 0.1, 0.2);
    this.sirt = new THREE.Mesh(sirtGeo, kapakArkaMat);
    this.sirt.position.set(0, 0, 0);
    this.grup.add(this.sirt);
    this.atilanlar.push(sirtGeo);

    const yiginGeo = new THREE.BoxGeometry(SAYFA_G - 0.05, SAYFA_Y - 0.05, 0.1);
    const yiginMat = new THREE.MeshStandardMaterial({ color: 0xe6dcc4, roughness: 0.95 });
    this.atilanlar.push(yiginGeo, yiginMat);
    this.solYigin = new THREE.Mesh(yiginGeo, yiginMat);
    this.solYigin.position.set(-SAYFA_G / 2, 0, -0.06);
    this.sagYigin = new THREE.Mesh(yiginGeo, yiginMat);
    this.sagYigin.position.set(SAYFA_G / 2, 0, -0.06);
    this.grup.add(this.solYigin, this.sagYigin);

    // Arka kapak: okurken en altta durur, defter bitince sırttan dönerek kapanır.
    // Kameraya bakan yüzü açıkken astar, kapanınca kapağın dış yüzüdür.
    const disKapakMat = new THREE.MeshStandardMaterial({
      map: kapakDokusu('', ''),
      roughness: 0.72,
      metalness: 0.05
    });
    this.atilanlar.push(disKapakMat);
    const arkaKapakGeo = new THREE.BoxGeometry(SAYFA_G + 0.06, SAYFA_Y + 0.06, 0.05);
    const arkaKapakMesh = new THREE.Mesh(arkaKapakGeo, [
      kapakArkaMat,
      kapakArkaMat,
      kapakArkaMat,
      kapakArkaMat,
      astarMat,
      disKapakMat
    ]);
    arkaKapakMesh.position.set(SAYFA_G / 2, 0, 0);
    arkaKapakMesh.receiveShadow = golgeler;
    this.arkaKapak.add(arkaKapakMesh);
    this.arkaKapak.position.z = ARKA_KAPAK_Z;
    this.grup.add(this.arkaKapak);
    this.atilanlar.push(arkaKapakGeo);

    this.setIlerleme(0);
  }

  /** Bir sayfa yüzünü içerikle doldurur. */
  private yuzDoldur(yaprak: Yaprak, yuzIndex: number, hedef: THREE.Group, kapakMi: boolean): void {
    if (kapakMi) return; // kapak dokusu sayfanın kendisinde

    const n = memories.length;
    if (yuzIndex === 1) {
      this.icKapak(hedef);
      return;
    }
    const fotoIndex = yuzIndex - 2;
    if (fotoIndex >= 0 && fotoIndex < n) {
      this.fotoSayfasi(yaprak, hedef, memories[fotoIndex]);
      return;
    }
    if (fotoIndex === n) this.kapanisSayfasi(yaprak, hedef);
  }

  /** Kapağın arkası: el yazısıyla başlık ve kısa bir not. */
  private icKapak(hedef: THREE.Group): void {
    const doku = elYazisiDokusu([storyConfig.defter.kapakBaslik], {
      genislik: 1024,
      yukseklik: 256,
      fontBoyu: 132,
      renk: 'rgba(238, 214, 172, 0.92)'
    });
    const mat = new THREE.MeshBasicMaterial({ map: doku, transparent: true, depthWrite: false });
    const geo = new THREE.PlaneGeometry(1.72, 0.43);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, 0.5, 0.002);
    hedef.add(mesh);
    this.atilanlar.push(geo, mat);

    const alt = elYazisiDokusu([storyConfig.defter.kapakUstu], {
      genislik: 1024,
      yukseklik: 190,
      fontBoyu: 76,
      renk: 'rgba(226, 194, 150, 0.78)'
    });
    const altMat = new THREE.MeshBasicMaterial({ map: alt, transparent: true, depthWrite: false });
    const altGeo = new THREE.PlaneGeometry(1.62, 0.3);
    const altMesh = new THREE.Mesh(altGeo, altMat);
    altMesh.position.set(0, 0.14, 0.002);
    hedef.add(altMesh);
    this.atilanlar.push(altGeo, altMat);

    // İnce ayraç çizgisi
    const cizgiMat = new THREE.MeshBasicMaterial({ color: 0xd9b487, transparent: true, opacity: 0.55 });
    const cizgiGeo = new THREE.PlaneGeometry(0.9, 0.006);
    const cizgi = new THREE.Mesh(cizgiGeo, cizgiMat);
    cizgi.position.set(0, -0.06, 0.002);
    hedef.add(cizgi);
    this.atilanlar.push(cizgiGeo, cizgiMat);
  }

  /** Fotoğraflı sayfa: bantlı kare ve altında yalnızca el yazısı tarih. */
  private fotoSayfasi(yaprak: Yaprak, hedef: THREE.Group, ani: Memory): void {
    const foto = new SayfaFotografi(ani);
    foto.grup.position.set(0, 0.24, 0.002);
    foto.grup.rotation.z = ((ani.sira % 5) - 2) * 0.014;
    hedef.add(foto.grup);
    this.fotograflar.push(foto);
    this.hedefMeshler.push(foto.hedefMesh);
    this.fotoYaprak.set(foto, yaprak);

    const doku = elYazisiDokusu([ani.tarihYazisi], {
      genislik: 900,
      yukseklik: 210,
      fontBoyu: 132
    });
    const mat = new THREE.MeshBasicMaterial({ map: doku, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.373), mat);
    mesh.position.set(0.02, -0.94, 0.002);
    mesh.rotation.z = -0.012;
    hedef.add(mesh);
    this.atilanlar.push(mesh.geometry, mat);
  }

  /** Son yazılı sayfa: metin kalemle yazılıyormuş gibi harf harf belirir. */
  private kapanisSayfasi(yaprak: Yaprak, hedef: THREE.Group): void {
    this.kapanisYaprak = yaprak;
    this.kapanisYazi = new YazanElYazisi(
      [
        { metin: storyConfig.defter.kapanisBaslik, fontBoyu: 108 },
        {
          metin: storyConfig.defter.kapanisMetin,
          fontBoyu: 78,
          renk: 'rgba(72, 64, 58, 0.88)',
          ustBosluk: 58
        }
      ],
      1320,
      520
    );
    const mat = new THREE.MeshBasicMaterial({
      map: this.kapanisYazi.doku,
      transparent: true,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.96, 0.772), mat);
    mesh.position.set(0, 0.16, 0.002);
    hedef.add(mesh);
    this.atilanlar.push(mesh.geometry, mat);
  }

  /**
   * Kapanış yazısının yazılışını sürer.
   * Sayfa görünürken zamanla ilerler, sayfadan çıkılınca başa döner.
   * Yeni açılan piksel miktarını döndürür; kalem sesi buna göre çalınır.
   */
  kapanisYaziyiSur(p: number, dt: number, aninda: boolean): number {
    if (!this.kapanisYazi || !this.kapanisYaprak) return 0;
    const y = this.kapanisYaprak;
    // Kapanış sayfası bu yaprağın ön yüzünde: yaprak çevrilene kadar sağ
    // sayfada durur. Kamera oraya yerleştiğinde yazılmaya başlar.
    const onceki = this.yapraklar[y.index - 1];
    const baslangic = onceki ? onceki.son - this.ortalamaAdim * 0.12 : y.bas;
    const gorunur = p >= baslangic && p <= y.p0 + 0.002;

    if (!gorunur) {
      if (this.kapanisT !== 0) {
        this.kapanisT = 0;
        this.kapanisYazi.ayarla(0);
      }
      return 0;
    }
    if (aninda) {
      const yeni = this.kapanisYazi.ayarla(1);
      this.kapanisT = 1;
      return yeni;
    }
    // Yaklaşık 4,5 saniyede tamamlanır.
    this.kapanisT = Math.min(1, this.kapanisT + dt / 3.8);
    return this.kapanisYazi.ayarla(this.kapanisT);
  }

  /**
   * Defterin tüm durumunu ilerlemeden kurar.
   * Her yaprağın açısı yalnızca kendi aralığındaki yerel ilerlemeye bağlıdır.
   */
  setIlerleme(p: number): void {
    const n = this.yaprakSayisi;
    const kapanma = this.kapanmaIlerlemesi(p);

    // Son bölüm: bütün yapraklar çevrilmiş durumda, sağda yalnızca arka kapak
    // kalmıştır. Arka kapak sırttan sola dönerek defteri kapatır; kapandığında
    // kameraya bakan yüz kapağın dış yüzüdür.
    if (kapanma > 0.001) {
      const son = this.yapraklar[n - 1];
      for (const y of this.yapraklar) y.pivot.visible = false;
      son.pivot.visible = kapanma < 0.6;
      son.pivot.rotation.set(0, -Math.PI, 0);
      son.pivot.position.z = TOPLAM_KALINLIK;
      son.onYuz.visible = false;
      son.arkaYuz.visible = true;

      this.arkaKapak.rotation.y = -Math.PI * kapanma;
      this.arkaKapak.position.z =
        lerp(ARKA_KAPAK_Z, TOPLAM_KALINLIK + 0.045, kapanma) + Math.sin(kapanma * Math.PI) * 0.07;

      this.solYigin.visible = true;
      this.solYigin.scale.z = TOPLAM_KALINLIK / 0.1;
      this.solYigin.position.z = TOPLAM_KALINLIK / 2 - 0.11;
      this.sagYigin.visible = false;
      this.sirt.visible = true;
      return;
    }

    this.arkaKapak.rotation.y = 0;
    this.arkaKapak.position.z = ARKA_KAPAK_Z;

    // Yalnızca açık sayfayı oluşturan birkaç yaprak çizilir; gerisini
    // sol ve sağ yığın blokları temsil eder. Çizim çağrısı böylece sabit kalır.
    const aktif = this.aktifYaprak(p).index;
    for (const y of this.yapraklar) {
      const yakin = y.index >= aktif - 1 && y.index <= aktif + 1;
      y.pivot.visible = yakin;
      if (!yakin) continue;
      const t = clamp01((p - y.p0) / (y.p1 - y.p0));
      const e = easeInOutCubic(t);
      y.pivot.rotation.y = -Math.PI * e;

      // Yığın kalınlığı: çevrilmiş yapraklar solda, çevrilmemişler sağda birikir.
      const kalinlik = TOPLAM_KALINLIK / n;
      const cevrilmemisZ = kalinlik * (n - y.index);
      const cevrilmisZ = kalinlik * (y.index + 1);
      // Çizilen üç yaprak birbirine girmesin diye aralarına küçük bir pay konur.
      const ayirma = -Math.abs(y.index - aktif) * 0.012;
      // Dönerken hafifçe yükselir: sayfanın kalkışını taklit eder.
      const kalkis = Math.sin(e * Math.PI) * 0.055;
      y.pivot.position.z = lerp(cevrilmemisZ, cevrilmisZ, e) + kalkis + ayirma;
      y.pivot.rotation.z = Math.sin(e * Math.PI) * 0.035;

      // Kapak biraz daha kalın durur.
      if (y.index === 0) y.pivot.position.z += 0.012;

      // Yüz değişimi tam dik açıda yapılır; o anda sayfa zaten görünmez.
      y.onYuz.visible = e < 0.5;
      y.arkaYuz.visible = e >= 0.5;
    }

    // Yığınların kalınlığı sayfa sayısına göre değişir.
    const cevrilen = this.yapraklar.filter((y) => p > (y.p0 + y.p1) / 2).length;
    const solKalinlik = Math.max(0.02, (cevrilen * TOPLAM_KALINLIK) / n);
    const sagKalinlik = Math.max(0.02, ((n - cevrilen) * TOPLAM_KALINLIK) / n);
    this.solYigin.scale.z = solKalinlik / 0.1;
    this.solYigin.position.z = solKalinlik / 2 - 0.11;
    this.sagYigin.scale.z = sagKalinlik / 0.1;
    this.sagYigin.position.z = sagKalinlik / 2 - 0.11;
    this.solYigin.visible = cevrilen > 0;

    // Kapak kapalıyken sırt görünmesin.
    this.sirt.visible = p > BAS * 0.4;


  }

  /** Defterin sonunda kapağın geri kapanma oranı. */
  kapanmaIlerlemesi(p: number): number {
    return smootherstep(clamp01((p - KAPANMA_BAS) / (KAPANMA_SON - KAPANMA_BAS)));
  }

  /** Ön kapağın açılma oranı. */
  kapakAcilmasi(p: number): number {
    const y = this.yapraklar[0];
    return easeInOutCubic(clamp01((p - y.p0) / (y.p1 - y.p0)));
  }

  /** Verilen ilerlemede sağ sayfadaki (odaktaki) fotoğrafın sırası. */
  odakSirasi(p: number): number {
    const n = memories.length;
    const y = this.aktifYaprak(p);
    // Yaprak 0 kapak; sonraki her yaprak iki fotoğraf yüzü taşır.
    const foto = (y.index - 1) * 2 + (p > y.p1 ? 1 : 0);
    return Math.max(0, Math.min(n - 1, foto));
  }

  /** Bir fotoğrafın sayfası görünür ya da görünmek üzere mi? */
  gorunurMu(foto: SayfaFotografi, p: number): boolean {
    const y = this.fotoYaprak.get(foto);
    if (!y) return false;
    // Yaprağın arka yüzü, bir sonraki yaprağın adımı boyunca sol sayfada durur.
    const pay = this.ortalamaAdim * 1.6;
    const sonraki = this.yapraklar[y.index + 1];
    const bitis = (sonraki ? sonraki.son : y.son) + pay;
    return p >= y.bas - pay && p <= bitis;
  }

  /** O anda hangi yaprağın adımındayız? */
  private aktifYaprak(p: number): Yaprak {
    for (const y of this.yapraklar) {
      if (p < y.son) return y;
    }
    return this.yapraklar[this.yapraklar.length - 1];
  }

  /**
   * Kameranın odaklanacağı yatay konum.
   * Sağ sayfada başlar, sayfa çevrilirken sola kayar, adımın sonunda yeni sağ
   * sayfaya yumuşakça döner. Uzun duraklarda sol sayfada bekler.
   */
  odakX(p: number): number {
    const y = this.aktifYaprak(p);
    const geri = this.ortalamaAdim * 0.18;
    let t: number;
    if (p < y.p0) t = 0;
    else if (p < y.p1) t = smootherstep((p - y.p0) / (y.p1 - y.p0));
    else {
      const geriBas = y.son - geri;
      t = p < geriBas ? 1 : 1 - smootherstep((p - geriBas) / geri);
    }
    return lerp(SAYFA_G / 2, -SAYFA_G / 2, t);
  }

  /** Sayfa çevrilirken kameranın geri çekilme miktarı. */
  cevirmeVurgusu(p: number): number {
    const y = this.aktifYaprak(p);
    if (p < y.p0 || p > y.p1) return 0;
    return Math.sin(((p - y.p0) / (y.p1 - y.p0)) * Math.PI);
  }

  /** Kapanış sayfası geçildikten sonra 0'dan 1'e çıkar; "başa dön" düğmesi için. */
  kapanisSonrasi(p: number): number {
    return clamp01((this.kapanmaIlerlemesi(p) - 0.55) / 0.35);
  }

  birak(): void {
    this.fotograflar.forEach((f) => f.birak());
    this.atilanlar.forEach((a) => a.dispose());
    this.atilanlar.length = 0;
  }
}
