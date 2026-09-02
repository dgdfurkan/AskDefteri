import * as THREE from 'three';
import { clamp01 } from '../animation/easing';

export interface KarakterSecenek {
  /** Tişört rengi */
  ustRengi: number;
  /** Pantolon rengi */
  altRengi: number;
  sacRengi: number;
  tenRengi: number;
  /** Gövde oranları */
  siluet: 'ince' | 'genis';
  /** Sarılırken kollar üstten mi alttan mı dolanır. */
  sarilmaStili: 'ust' | 'alt';
  /** Fark etme anında başın döneceği yön. */
  tanimaYonu: 1 | -1;
  golgeler: boolean;
  sacTarzi: 'uzunDalgali' | 'atkuyrugu';
  gozluk?: boolean;
  kupe?: boolean;
  sakal?: boolean;
  /** Verilirse sırt çantası eklenir (renk). */
  sirtCantasi?: number;
  /** Verilirse omuzdan çapraz geçen bel çantası eklenir (renk). */
  omuzAskisi?: number;
}

/** Poz hesabında kullanılan tüm normalize edilmiş girdiler. */
export interface PozDurumu {
  yurumeFaz: number;
  yurumeSiddet: number;
  tanima: number;
  sarilma: number;
  zaman: number;
  bakisY: number;
  rahatlik: number;
}

const BACAK_UST = 0.45;
const BACAK_ALT = 0.43;
const KOL_UST = 0.27;
const KOL_ALT = 0.25;
const KALCA_Y = 0.93;
/** Bir adım uzunluğu. Yürüyüş fazı buna göre hesaplanır, ayaklar kaymaz. */
export const ADIM_BOYU = 0.74;

interface Eklem {
  grup: THREE.Group;
  temelX: number;
  temelY: number;
  temelZ: number;
}

function eklem(x = 0, y = 0, z = 0): Eklem {
  const grup = new THREE.Group();
  grup.rotation.set(x, y, z);
  return { grup, temelX: x, temelY: y, temelZ: z };
}

/**
 * Prosedürel, yumuşak hatlı bir insan figürü. Tüm pozlar normalize
 * girdilerden hesaplanır; hiçbir kare öncekine bağlı değildir.
 */
export class ProceduralCharacter {
  readonly kok = new THREE.Group();

  private kalca = new THREE.Group();
  private govde = eklem();
  private boyun = eklem();
  private kafa = eklem();
  private omuz: Record<'sol' | 'sag', { ust: Eklem; alt: Eklem; el: Eklem }>;
  private bacak: Record<'sol' | 'sag', { ust: Eklem; alt: Eklem; ayak: Eklem }>;
  private secenek: KarakterSecenek;
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  constructor(secenek: KarakterSecenek) {
    this.secenek = secenek;
    const ince = secenek.siluet === 'ince';
    const omuzGenislik = ince ? 0.163 : 0.188;
    const govdeYari = ince ? 0.145 : 0.17;

    const ust = new THREE.MeshStandardMaterial({
      color: secenek.ustRengi,
      roughness: 0.86,
      metalness: 0.0
    });
    const alt = new THREE.MeshStandardMaterial({ color: secenek.altRengi, roughness: 0.9 });
    const ten = new THREE.MeshStandardMaterial({ color: secenek.tenRengi, roughness: 0.72 });
    const sac = new THREE.MeshStandardMaterial({ color: secenek.sacRengi, roughness: 0.62 });
    const ayakkabi = new THREE.MeshStandardMaterial({ color: 0x1c1a1e, roughness: 0.6 });
    const siyah = new THREE.MeshStandardMaterial({ color: 0x14141a, roughness: 0.55, metalness: 0.1 });
    this.atilanlar.push(ust, alt, ten, sac, ayakkabi, siyah);

    this.kok.add(this.kalca);
    this.kalca.position.y = KALCA_Y;
    this.kalca.add(this.govde.grup);

    // --- Gövde: tişört ---
    const gogus = this.mesh(
      new THREE.CapsuleGeometry(govdeYari, 0.32, 6, 20),
      ust,
      0,
      0.26,
      0
    );
    gogus.scale.set(1, 1, ince ? 0.72 : 0.78);
    this.govde.grup.add(gogus);

    // Tişörtün eteği: kalçaya kadar iner
    const etek = this.mesh(
      new THREE.CylinderGeometry(govdeYari * 1.02, govdeYari * 1.12, 0.28, 20),
      ust,
      0,
      -0.02,
      0
    );
    etek.scale.set(1, 1, ince ? 0.74 : 0.8);
    this.govde.grup.add(etek);

    // Omuz yuvarlaklığı
    const omuzlar = this.mesh(
      new THREE.CapsuleGeometry(0.078, omuzGenislik * 2 - 0.03, 6, 16),
      ust,
      0,
      0.43,
      0
    );
    omuzlar.rotation.z = Math.PI / 2;
    omuzlar.scale.set(1, 1, 0.85);
    this.govde.grup.add(omuzlar);

    // Yaka
    const yaka = this.mesh(new THREE.CylinderGeometry(0.062, 0.082, 0.06, 16), ust, 0, 0.5, 0);
    this.govde.grup.add(yaka);

    // Kalça / pantolon üst kısmı
    const kalcaMesh = this.mesh(new THREE.CapsuleGeometry(govdeYari * 0.94, 0.1, 5, 18), alt, 0, -0.05, 0);
    kalcaMesh.scale.set(1, 1, 0.76);
    this.kalca.add(kalcaMesh);

    // --- Boyun ve kafa ---
    this.govde.grup.add(this.boyun.grup);
    this.boyun.grup.position.y = 0.5;
    this.boyun.grup.add(this.mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.1, 14), ten, 0, 0.05, 0));

    this.boyun.grup.add(this.kafa.grup);
    this.kafa.grup.position.y = 0.11;
    const kafaMesh = this.mesh(new THREE.SphereGeometry(0.112, 24, 18), ten, 0, 0.1, 0);
    kafaMesh.scale.set(0.94, 1.08, 1);
    this.kafa.grup.add(kafaMesh);

    this.gozYap();
    this.sacYap(sac);
    if (secenek.sakal) this.sakalYap(sac);
    if (secenek.gozluk) this.gozlukYap(siyah);
    if (secenek.kupe) this.kupeYap();

    // --- Kollar: kısa kollu tişört, alt kısmı ten ---
    this.omuz = {
      sol: this.kolYap(-omuzGenislik, ust, ten),
      sag: this.kolYap(omuzGenislik, ust, ten)
    };

    // --- Bacaklar ---
    this.bacak = {
      sol: this.bacakYap(-0.1, alt, ayakkabi),
      sag: this.bacakYap(0.1, alt, ayakkabi)
    };

    if (secenek.sirtCantasi !== undefined) this.cantaYap(secenek.sirtCantasi, govdeYari);
    if (secenek.omuzAskisi !== undefined) this.belCantasiYap(secenek.omuzAskisi, omuzGenislik, govdeYari);

    if (secenek.golgeler) {
      this.kok.traverse((o) => {
        if (o instanceof THREE.Mesh) o.castShadow = true;
      });
    }
  }

  private mesh(
    geo: THREE.BufferGeometry,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number
  ): THREE.Mesh {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    this.atilanlar.push(geo);
    return m;
  }

  /** Yüz hatları bilinçli olarak sade: yalnızca yumuşak iki göz. */
  private gozYap(): void {
    const ak = new THREE.MeshStandardMaterial({ color: 0xf3ece6, roughness: 0.35 });
    const bebek = new THREE.MeshStandardMaterial({ color: 0x2a1d1c, roughness: 0.3 });
    const kas = new THREE.MeshStandardMaterial({ color: this.secenek.sacRengi, roughness: 0.7 });
    this.atilanlar.push(ak, bebek, kas);
    for (const yon of [-1, 1]) {
      // Göz oyuğu: hafif çukur izlenimi veren açık küre
      const beyaz = this.mesh(new THREE.SphereGeometry(0.0195, 16, 12), ak, yon * 0.043, 0.109, 0.089);
      beyaz.scale.set(1.15, 0.78, 0.5);
      this.kafa.grup.add(beyaz);
      const g = this.mesh(new THREE.SphereGeometry(0.0105, 14, 12), bebek, yon * 0.043, 0.107, 0.098);
      g.scale.set(1, 1, 0.55);
      this.kafa.grup.add(g);
      // Kaş
      const k = this.mesh(new THREE.CapsuleGeometry(0.0075, 0.036, 4, 10), kas, yon * 0.044, 0.136, 0.094);
      k.rotation.z = Math.PI / 2 + yon * 0.14;
      k.scale.set(1, 1, 0.55);
      this.kafa.grup.add(k);
    }
  }

  /** Saç: uzun dalgalı ya da arkada toplanmış at kuyruğu. */
  private sacYap(sac: THREE.Material): void {
    if (this.secenek.sacTarzi === 'uzunDalgali') {
      const tepe = this.mesh(new THREE.SphereGeometry(0.126, 22, 16), sac, 0, 0.132, -0.016);
      tepe.scale.set(1.03, 0.98, 1.0);
      this.kafa.grup.add(tepe);
      // Yanlardan omuza inen hacimli kütleler
      for (const yon of [-1, 1]) {
        const yan = this.mesh(new THREE.CapsuleGeometry(0.062, 0.16, 5, 14), sac, yon * 0.093, 0.02, -0.018);
        yan.scale.set(0.95, 1.15, 1.05);
        yan.rotation.z = yon * 0.12;
        this.kafa.grup.add(yan);
      }
      // Ense ve sırt hacmi
      const arka = this.mesh(new THREE.CapsuleGeometry(0.088, 0.2, 6, 16), sac, 0, -0.01, -0.072);
      arka.scale.set(1.35, 1.05, 0.82);
      this.kafa.grup.add(arka);
      // Dalgayı belli eden küçük kütleler
      for (const [dx, dy, dz] of [
        [-0.085, -0.08, -0.055],
        [0.085, -0.08, -0.055],
        [0, -0.12, -0.06]
      ] as const) {
        const t = this.mesh(new THREE.SphereGeometry(0.055, 14, 12), sac, dx, dy, dz);
        t.scale.set(1.15, 0.95, 1);
        this.kafa.grup.add(t);
      }
    } else {
      // Uzun, geriye taranıp arkada toplanmış saç
      const tepe = this.mesh(new THREE.SphereGeometry(0.119, 24, 18), sac, 0, 0.138, -0.018);
      tepe.scale.set(1.02, 0.96, 1.04);
      this.kafa.grup.add(tepe);
      // Şakaklardan omuza inen saç
      for (const yon of [-1, 1]) {
        const yan = this.mesh(new THREE.CapsuleGeometry(0.05, 0.14, 5, 14), sac, yon * 0.093, 0.028, -0.035);
        yan.scale.set(0.85, 1.1, 1.05);
        yan.rotation.z = yon * 0.1;
        this.kafa.grup.add(yan);
      }
      // Ense ve sırt hacmi
      const ense = this.mesh(new THREE.CapsuleGeometry(0.082, 0.16, 6, 16), sac, 0, 0.005, -0.078);
      ense.scale.set(1.25, 1, 0.8);
      this.kafa.grup.add(ense);
      // Arkada toplanan kuyruk
      const bag = this.mesh(new THREE.TorusGeometry(0.048, 0.013, 8, 16), sac, 0, -0.055, -0.12);
      bag.rotation.x = Math.PI / 2;
      this.kafa.grup.add(bag);
      const kuyruk = this.mesh(new THREE.CapsuleGeometry(0.047, 0.22, 6, 16), sac, 0, -0.145, -0.145);
      kuyruk.rotation.x = -0.3;
      kuyruk.scale.set(1, 1, 0.88);
      this.kafa.grup.add(kuyruk);
      const uc = this.mesh(new THREE.CapsuleGeometry(0.032, 0.1, 5, 12), sac, 0, -0.27, -0.175);
      uc.rotation.x = -0.2;
      this.kafa.grup.add(uc);
    }
  }

  /** Çene hattını saran kısa sakal. */
  private sakalYap(sac: THREE.Material): void {
    // Yalnızca çene ve favori hattı: üst yüz açık kalır.
    const cene = this.mesh(new THREE.SphereGeometry(0.079, 18, 14), sac, 0, 0.032, 0.038);
    cene.scale.set(1.24, 0.82, 0.95);
    this.kafa.grup.add(cene);
    for (const yon of [-1, 1]) {
      const favori = this.mesh(new THREE.CapsuleGeometry(0.022, 0.05, 4, 10), sac, yon * 0.088, 0.072, 0.014);
      favori.scale.set(0.9, 1, 0.8);
      this.kafa.grup.add(favori);
    }
    const biyik = this.mesh(new THREE.CapsuleGeometry(0.014, 0.045, 4, 10), sac, 0, 0.077, 0.093);
    biyik.rotation.z = Math.PI / 2;
    biyik.scale.set(1, 1, 0.7);
    this.kafa.grup.add(biyik);
  }

  /** Yuvarlak çerçeveli siyah gözlük. */
  private gozlukYap(siyah: THREE.Material): void {
    for (const yon of [-1, 1]) {
      const cam = this.mesh(new THREE.TorusGeometry(0.034, 0.006, 8, 20), siyah, yon * 0.043, 0.108, 0.088);
      this.kafa.grup.add(cam);
      const sap = this.mesh(new THREE.BoxGeometry(0.008, 0.008, 0.09), siyah, yon * 0.076, 0.108, 0.04);
      this.kafa.grup.add(sap);
    }
    const kopru = this.mesh(new THREE.BoxGeometry(0.022, 0.007, 0.007), siyah, 0, 0.115, 0.09);
    this.kafa.grup.add(kopru);
  }

  /** Küçük halka küpeler. */
  private kupeYap(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0xd8c48a, roughness: 0.28, metalness: 0.85 });
    this.atilanlar.push(mat);
    for (const yon of [-1, 1]) {
      const kupe = this.mesh(new THREE.TorusGeometry(0.021, 0.0045, 6, 16), mat, yon * 0.101, 0.062, 0.004);
      kupe.rotation.y = Math.PI / 2;
      this.kafa.grup.add(kupe);
    }
  }

  /** Sırt çantası ve omuz askıları; gövdeye bağlıdır. */
  private cantaYap(renk: number, govdeYari: number): void {
    const mat = new THREE.MeshStandardMaterial({ color: renk, roughness: 0.78 });
    const kayisMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(renk).multiplyScalar(1.25),
      roughness: 0.8
    });
    this.atilanlar.push(mat, kayisMat);

    const govde = this.mesh(new THREE.CapsuleGeometry(0.128, 0.24, 8, 20), mat, 0, 0.23, -govdeYari - 0.115);
    govde.scale.set(1.1, 1.02, 0.78);
    this.govde.grup.add(govde);

    // Ön cep ve fermuar çizgisi
    const cep = this.mesh(new THREE.CapsuleGeometry(0.082, 0.11, 6, 16), mat, 0, 0.15, -govdeYari - 0.21);
    cep.scale.set(1.1, 1, 0.55);
    this.govde.grup.add(cep);
    const fermuar = this.mesh(new THREE.CapsuleGeometry(0.006, 0.15, 4, 8), kayisMat, 0, 0.255, -govdeYari - 0.215);
    fermuar.rotation.z = Math.PI / 2;
    this.govde.grup.add(fermuar);

    // Üst tutamak
    const tutamak = this.mesh(new THREE.TorusGeometry(0.042, 0.011, 8, 18, Math.PI), kayisMat, 0, 0.4, -govdeYari - 0.1);
    tutamak.rotation.x = Math.PI / 2;
    this.govde.grup.add(tutamak);

    // Omuz kayışları: yuvarlak kesitli, göğsün üst yarısında kalır.
    for (const yon of [-1, 1]) {
      const k = this.mesh(
        new THREE.CapsuleGeometry(0.026, 0.2, 6, 14),
        kayisMat,
        yon * 0.088,
        0.31,
        govdeYari * 0.82
      );
      k.rotation.z = yon * 0.2;
      k.rotation.x = -0.12;
      k.scale.set(1.1, 1, 0.55);
      this.govde.grup.add(k);
      // Omuz üstünden arkaya dönen kısım
      const omuzda = this.mesh(
        new THREE.CapsuleGeometry(0.026, 0.14, 6, 14),
        kayisMat,
        yon * 0.104,
        0.45,
        0.005
      );
      omuzda.rotation.x = Math.PI / 2 - 0.15;
      omuzda.scale.set(1.05, 1, 0.6);
      this.govde.grup.add(omuzda);
    }
  }

  /**
   * Omuzdan çapraz geçip belde duran küçük çanta.
   * Kayış ince ve gövdeye yatık; kalın bir levha gibi durmaz.
   */
  private belCantasiYap(renk: number, omuzGenislik: number, govdeYari: number): void {
    const mat = new THREE.MeshStandardMaterial({ color: renk, roughness: 0.72 });
    const kayisMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(renk).multiplyScalar(1.35),
      roughness: 0.8
    });
    this.atilanlar.push(mat, kayisMat);

    // Kayış: sağ omuzdan sol kalçaya; ince, yuvarlak ve gövdeye yatık.
    const onKayis = this.mesh(new THREE.CapsuleGeometry(0.021, 0.42, 6, 14), kayisMat, -0.015, 0.23, govdeYari * 0.88);
    onKayis.rotation.z = 0.5;
    onKayis.scale.set(1.05, 1, 0.5);
    this.govde.grup.add(onKayis);

    const arkaKayis = this.mesh(new THREE.CapsuleGeometry(0.021, 0.4, 6, 14), kayisMat, -0.015, 0.23, -govdeYari * 0.88);
    arkaKayis.rotation.z = -0.5;
    arkaKayis.scale.set(1.05, 1, 0.5);
    this.govde.grup.add(arkaKayis);

    const omuzda = this.mesh(new THREE.CapsuleGeometry(0.022, 0.16, 6, 14), kayisMat, omuzGenislik * 0.58, 0.44, 0);
    omuzda.rotation.x = Math.PI / 2;
    omuzda.scale.set(1.05, 1, 0.55);
    this.govde.grup.add(omuzda);

    // Çanta: sol kalçada duran yassı bir kese
    const canta = this.mesh(new THREE.CapsuleGeometry(0.055, 0.13, 7, 18), mat, -0.155, -0.06, govdeYari * 0.62);
    canta.rotation.z = Math.PI / 2;
    canta.scale.set(1, 1.15, 0.52);
    this.govde.grup.add(canta);

    // Kapak ve toka
    const kapak = this.mesh(new THREE.CapsuleGeometry(0.045, 0.12, 6, 16), kayisMat, -0.155, 0.015, govdeYari * 0.68);
    kapak.rotation.z = Math.PI / 2;
    kapak.scale.set(1, 1, 0.42);
    this.govde.grup.add(kapak);
    const toka = this.mesh(new THREE.BoxGeometry(0.03, 0.022, 0.014), kayisMat, -0.155, -0.045, govdeYari * 0.74);
    this.govde.grup.add(toka);
  }

  private kolYap(
    x: number,
    ustMat: THREE.Material,
    ten: THREE.Material
  ): { ust: Eklem; alt: Eklem; el: Eklem } {
    const ust = eklem();
    ust.grup.position.set(x, 0.42, 0);
    this.govde.grup.add(ust.grup);
    // Kısa kol: omuzdan pazuya kadar tişört, gerisi ten.
    const kolu = this.mesh(new THREE.CapsuleGeometry(0.063, 0.085, 6, 18), ustMat, 0, -0.062, 0);
    ust.grup.add(kolu);
    const ustMesh = this.mesh(new THREE.CapsuleGeometry(0.051, KOL_UST - 0.1, 6, 18), ten, 0, -KOL_UST / 2 - 0.005, 0);
    ust.grup.add(ustMesh);

    const alt = eklem();
    alt.grup.position.y = -KOL_UST;
    ust.grup.add(alt.grup);
    alt.grup.add(this.mesh(new THREE.CapsuleGeometry(0.045, KOL_ALT - 0.06, 6, 18), ten, 0, -KOL_ALT / 2 + 0.01, 0));

    const el = eklem();
    el.grup.position.y = -KOL_ALT;
    alt.grup.add(el.grup);
    const elMesh = this.mesh(new THREE.SphereGeometry(0.048, 14, 12), ten, 0, -0.03, 0);
    elMesh.scale.set(0.86, 1.12, 0.72);
    el.grup.add(elMesh);

    return { ust, alt, el };
  }

  private bacakYap(
    x: number,
    kiyafet: THREE.Material,
    ayakkabi: THREE.Material
  ): { ust: Eklem; alt: Eklem; ayak: Eklem } {
    const ust = eklem();
    ust.grup.position.set(x, 0, 0);
    this.kalca.add(ust.grup);
    ust.grup.add(this.mesh(new THREE.CapsuleGeometry(0.072, BACAK_UST - 0.1, 6, 18), kiyafet, 0, -BACAK_UST / 2 + 0.01, 0));

    const alt = eklem();
    alt.grup.position.y = -BACAK_UST;
    ust.grup.add(alt.grup);
    alt.grup.add(this.mesh(new THREE.CapsuleGeometry(0.059, BACAK_ALT - 0.09, 6, 18), kiyafet, 0, -BACAK_ALT / 2 + 0.005, 0));

    const ayak = eklem();
    ayak.grup.position.y = -BACAK_ALT;
    alt.grup.add(ayak.grup);

    // Ayakkabı: yuvarlak burunlu gövde, ince taban ve topuk.
    const govde = this.mesh(new THREE.CapsuleGeometry(0.056, 0.15, 6, 16), ayakkabi, 0, -0.035, 0.05);
    govde.rotation.x = Math.PI / 2;
    govde.scale.set(0.94, 1, 0.78);
    ayak.grup.add(govde);

    const taban = this.mesh(new THREE.CapsuleGeometry(0.05, 0.16, 4, 14), ayakkabi, 0, -0.068, 0.05);
    taban.rotation.x = Math.PI / 2;
    taban.scale.set(1.06, 1, 0.42);
    ayak.grup.add(taban);

    // Bilek: paçanın altından çıkan yumuşak geçiş
    const bilek = this.mesh(new THREE.CapsuleGeometry(0.048, 0.05, 5, 14), ayakkabi, 0, -0.008, -0.008);
    ayak.grup.add(bilek);

    return { ust, alt, ayak };
  }

  /** Tüm eklemleri temel duruşa döndürür. Her karede önce bu çağrılır. */
  private sifirla(): void {
    const e: Eklem[] = [
      this.govde, this.boyun, this.kafa,
      this.omuz.sol.ust, this.omuz.sol.alt, this.omuz.sol.el,
      this.omuz.sag.ust, this.omuz.sag.alt, this.omuz.sag.el,
      this.bacak.sol.ust, this.bacak.sol.alt, this.bacak.sol.ayak,
      this.bacak.sag.ust, this.bacak.sag.alt, this.bacak.sag.ayak
    ];
    for (const j of e) j.grup.rotation.set(j.temelX, j.temelY, j.temelZ);
    this.kalca.position.set(0, KALCA_Y, 0);
    this.kalca.rotation.set(0, 0, 0);
    this.govde.grup.position.set(0, 0, 0);
  }

  /** Hafif nefes ve ağırlık aktarma. Genlik bilerek çok küçük tutulur. */
  private nefes(zaman: number, guc: number): void {
    if (guc <= 0) return;
    const n = Math.sin(zaman * 1.35);
    this.govde.grup.rotation.x += n * 0.012 * guc;
    this.kalca.position.y += Math.sin(zaman * 1.35 + 0.4) * 0.006 * guc;
    this.kalca.rotation.z += Math.sin(zaman * 0.42) * 0.02 * guc;
    this.boyun.grup.rotation.y += Math.sin(zaman * 0.31) * 0.06 * guc;
  }

  /** Yürüyüş çevrimi. Ayak temas hızı gövde hızıyla eşleşecek genlikte. */
  private yuru(faz: number, s: number): void {
    if (s <= 0) return;
    const genlik = 0.44 * s;
    const sinF = Math.sin(faz);

    this.kalca.position.y += -Math.cos(faz * 2) * 0.022 * s - 0.012 * s;
    this.kalca.rotation.y += sinF * 0.055 * s;
    this.govde.grup.rotation.y += -sinF * 0.045 * s;
    this.govde.grup.rotation.x += 0.06 * s;

    for (const { b, f } of [
      { b: this.bacak.sol, f: faz },
      { b: this.bacak.sag, f: faz + Math.PI }
    ]) {
      const sf = Math.sin(f);
      b.ust.grup.rotation.x += -sf * genlik;
      const diz = Math.max(0, Math.sin(f - 0.9));
      b.alt.grup.rotation.x += diz * 1.05 * s;
      b.ayak.grup.rotation.x += (-sf * 0.22 - diz * 0.35) * s;
    }

    for (const { k, f } of [
      { k: this.omuz.sol, f: faz + Math.PI },
      { k: this.omuz.sag, f: faz }
    ]) {
      k.ust.grup.rotation.x += -Math.sin(f) * 0.38 * s;
      k.alt.grup.rotation.x += (0.25 + Math.max(0, Math.sin(f)) * 0.35) * s;
    }
    this.omuz.sol.ust.grup.rotation.z += -0.1 * s;
    this.omuz.sag.ust.grup.rotation.z += 0.1 * s;
  }

  /** Kolların yanda asılı durduğu sakin duruş. */
  private dinlenme(guc: number): void {
    if (guc <= 0) return;
    this.omuz.sol.ust.grup.rotation.z += -0.13 * guc;
    this.omuz.sag.ust.grup.rotation.z += 0.13 * guc;
    this.omuz.sol.ust.grup.rotation.x += 0.06 * guc;
    this.omuz.sag.ust.grup.rotation.x += 0.06 * guc;
    this.omuz.sol.alt.grup.rotation.x += 0.24 * guc;
    this.omuz.sag.alt.grup.rotation.x += 0.24 * guc;
  }

  /** Karşıdakini fark etme: baş döner, omuzlar açılır, gövde hafif yönelir. */
  private tanima(t: number): void {
    if (t <= 0) return;
    const y = this.secenek.tanimaYonu;
    this.kafa.grup.rotation.y += 0.34 * t * y;
    this.boyun.grup.rotation.y += 0.16 * t * y;
    this.govde.grup.rotation.y += 0.12 * t * y;
    this.kafa.grup.rotation.z += 0.05 * t * y;
    this.govde.grup.rotation.x += 0.03 * t;
    const kol = y > 0 ? this.omuz.sag : this.omuz.sol;
    kol.ust.grup.rotation.x += -0.2 * t;
    kol.alt.grup.rotation.x += 0.5 * t;
  }

  /**
   * Sarılma. 'ust' stilinde kollar omuz üstünden, 'alt' stilinde bele dolanır.
   * Kollar önce yükselir, sonra kapanır; gövdeler birbirine girmez.
   */
  private sarilmaPozu(t: number): void {
    if (t <= 0) return;
    const kalkis = clamp01(t / 0.5);
    const kapanis = clamp01((t - 0.35) / 0.65);
    const ust = this.secenek.sarilmaStili === 'ust';

    const omuzX = ust ? -1.88 : -1.18;
    const dirsekX = ust ? 1.05 : -0.5;
    const sarmaZ = ust ? 0.78 : 0.92;

    for (const [ad, k] of Object.entries(this.omuz) as Array<
      ['sol' | 'sag', { ust: Eklem; alt: Eklem; el: Eklem }]
    >) {
      const yon = ad === 'sol' ? -1 : 1;
      k.ust.grup.rotation.x += omuzX * kalkis;
      k.ust.grup.rotation.z += yon * (ust ? 0.3 : 0.16) * kalkis;
      k.alt.grup.rotation.x += dirsekX * kapanis;
      k.alt.grup.rotation.z += -yon * sarmaZ * kapanis;
      k.el.grup.rotation.x += -0.25 * kapanis;
    }

    this.govde.grup.rotation.x += 0.15 * kapanis;
    this.kafa.grup.rotation.z += (ust ? 0.22 : -0.19) * kapanis;
    this.kafa.grup.rotation.y += (ust ? -0.22 : 0.22) * kapanis;
    this.kafa.grup.rotation.x += 0.12 * kapanis;
    this.kalca.position.y += -0.022 * kapanis;
    this.govde.grup.position.y = -0.012 * kapanis;
  }

  /** Tüm durumu tek noktadan uygular. Çağrı sırası her karede aynıdır. */
  uygula(d: PozDurumu): void {
    this.sifirla();
    const yurume = clamp01(d.yurumeSiddet);
    this.dinlenme(1 - yurume);
    this.nefes(d.zaman, (1 - yurume) * (1 - clamp01(d.sarilma) * 0.7));
    this.yuru(d.yurumeFaz, yurume);
    this.tanima(clamp01(d.tanima) * (1 - clamp01(d.sarilma)));
    this.sarilmaPozu(clamp01(d.sarilma));
    this.boyun.grup.rotation.y += d.bakisY * 0.45;
    this.kafa.grup.rotation.y += d.bakisY * 0.55;
    const r = clamp01(d.rahatlik);
    this.omuz.sol.ust.grup.rotation.z += -0.04 * r;
    this.omuz.sag.ust.grup.rotation.z += 0.04 * r;
    this.govde.grup.rotation.x += 0.02 * r;
  }

  birak(): void {
    this.atilanlar.forEach((a) => a.dispose());
    this.atilanlar.length = 0;
  }
}
