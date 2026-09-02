import * as THREE from 'three';
import { storyConfig } from '../config/storyConfig';
import { IST } from './Station';
import { parlaklikDokusu } from './textures';
import { clamp01 } from '../animation/easing';

const VAGON_UZUNLUK = 17.6;
const VAGON_ARALIK = 18.2;
const YARI_GENISLIK = 1.4;
/** Vagon zemini ve tavanı: kapı boşluğunun alt ve üst sınırı. */
const ZEMIN_Y = 1.05;
const TAVAN_IC_Y = 3.05;
const GOVDE_ALT_Y = 0.75;
const GOVDE_UST_Y = 3.55;
const TEKER_YARICAP = 0.42;
/** Peron tarafındaki kapı çiftinin vagon içindeki X konumları */
const KAPI_OFSET = [-5.5, 5.5];
const KAPI_GENISLIK = 0.76;
const KAPI_ACIKLIK = 0.76;
const BOSLUK_YARI = 0.75;
/** Kapı boşluklarının arasında kalan yan duvar parçaları: [merkez, genişlik] */
const DUVAR_PARCALARI: Array<[number, number]> = [
  [-7.525, 2.55],
  [0, 9.5],
  [7.525, 2.55]
];
/** Duvar parçalarının üzerindeki cam yerleşimi: [x, genişlik] */
const CAMLAR: Array<[number, number]> = [
  [-7.525, 1.9],
  [-3.1, 2.5],
  [0, 2.5],
  [3.1, 2.5],
  [7.525, 1.9]
];

interface KapiPanel {
  mesh: THREE.Mesh;
  kapaliX: number;
  yon: 1 | -1;
}

interface TrenSecenek {
  vagonSayisi?: number;
  yolcuSayisi: number;
  golgeler: boolean;
}

/**
 * Prosedürel metro seti. Gövde, kapı boşlukları gerçekten açık kalacak şekilde
 * parçalardan kurulur; kapılar açılınca sıcak iç mekân görünür.
 * Tüm parçalar tek gruba bağlı olduğu için tren hareket ederken ayrışmaz.
 */
export class MetroTrain {
  readonly grup = new THREE.Group();
  readonly anaKapiYerel = KAPI_OFSET[0];

  private paneller: KapiPanel[] = [];
  private tekerlekler: THREE.Mesh[] = [];
  private icIsik: THREE.PointLight;
  private farIsik: THREE.SpotLight;
  private farMesh: THREE.Mesh[] = [];
  private farParlak: THREE.Mesh[] = [];
  private icMat: THREE.MeshStandardMaterial;
  private camMat: THREE.MeshStandardMaterial;
  private govdeGrup = new THREE.Group();
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  constructor(secenek: TrenSecenek) {
    const vagonSayisi = secenek.vagonSayisi ?? 3;
    this.grup.name = 'metro';
    this.grup.position.set(0, IST.rayUstY, 0);
    this.grup.add(this.govdeGrup);

    const govdeMat = new THREE.MeshStandardMaterial({
      color: storyConfig.renkler.metroGovde,
      roughness: 0.36,
      metalness: 0.72
    });
    const koyuMat = new THREE.MeshStandardMaterial({ color: 0x1b1f24, roughness: 0.5, metalness: 0.4 });
    // Camlar koyu ama arkasındaki sıcak ışığı hafifçe sızdırır.
    this.camMat = new THREE.MeshStandardMaterial({
      color: 0x0f151c,
      roughness: 0.18,
      metalness: 0.9,
      emissive: new THREE.Color(storyConfig.renkler.metroIc),
      emissiveIntensity: 0.012
    });
    const seritMat = new THREE.MeshStandardMaterial({
      color: storyConfig.renkler.hatVurgusu,
      roughness: 0.42,
      metalness: 0.3
    });
    this.icMat = new THREE.MeshStandardMaterial({
      color: 0xd6bd95,
      roughness: 0.9,
      emissive: new THREE.Color(storyConfig.renkler.metroIc),
      emissiveIntensity: 0.13,
      side: THREE.BackSide
    });
    const kapiMat = new THREE.MeshStandardMaterial({
      color: 0x9fa8b1,
      roughness: 0.32,
      metalness: 0.68
    });
    const kapiCamMat = new THREE.MeshStandardMaterial({
      color: 0x121820,
      roughness: 0.16,
      metalness: 0.5,
      emissive: new THREE.Color(storyConfig.renkler.metroIc),
      emissiveIntensity: 0.05
    });
    this.atilanlar.push(govdeMat, koyuMat, this.camMat, seritMat, this.icMat, kapiMat, kapiCamMat);

    // Paylaşılan geometriler
    const altBantGeo = new THREE.BoxGeometry(VAGON_UZUNLUK, ZEMIN_Y - GOVDE_ALT_Y, YARI_GENISLIK * 2);
    const ustBantGeo = new THREE.BoxGeometry(VAGON_UZUNLUK, GOVDE_UST_Y - TAVAN_IC_Y, YARI_GENISLIK * 2);
    const catiGeo = new THREE.BoxGeometry(VAGON_UZUNLUK - 0.5, 0.22, YARI_GENISLIK * 2 - 0.28);
    const etekGeo = new THREE.BoxGeometry(VAGON_UZUNLUK - 0.4, 0.45, YARI_GENISLIK * 2 - 0.2);
    const icGeo = new THREE.BoxGeometry(VAGON_UZUNLUK - 0.4, TAVAN_IC_Y - ZEMIN_Y, 2.5);
    const tekerGeo = new THREE.CylinderGeometry(TEKER_YARICAP, TEKER_YARICAP, 0.2, 14);
    const bojiGeo = new THREE.BoxGeometry(3.0, 0.42, 2.0);
    const kapiGeo = new THREE.BoxGeometry(KAPI_GENISLIK, TAVAN_IC_Y - ZEMIN_Y, 0.07);
    const kapiCamGeo = new THREE.BoxGeometry(KAPI_GENISLIK - 0.24, 0.95, 0.02);
    const ucGeo = new THREE.BoxGeometry(0.16, TAVAN_IC_Y - ZEMIN_Y, YARI_GENISLIK * 2);
    this.atilanlar.push(
      altBantGeo, ustBantGeo, catiGeo, etekGeo, icGeo, tekerGeo, bojiGeo, kapiGeo, kapiCamGeo, ucGeo
    );

    const duvarGeo = DUVAR_PARCALARI.map(
      ([, g]) => new THREE.BoxGeometry(g, TAVAN_IC_Y - ZEMIN_Y, 0.14)
    );
    const camGeo = CAMLAR.map(([, g]) => new THREE.BoxGeometry(g, 0.95, 0.05));
    const seritGeo = DUVAR_PARCALARI.map(
      ([, g]) => new THREE.BoxGeometry(g - 0.08, 0.18, 0.04)
    );
    this.atilanlar.push(...duvarGeo, ...camGeo, ...seritGeo);

    const yolcuGeo = new THREE.CapsuleGeometry(0.2, 0.75, 4, 8);
    const yolcuMat = new THREE.MeshStandardMaterial({ color: 0x33282c, roughness: 0.95 });
    this.atilanlar.push(yolcuGeo, yolcuMat);

    for (let v = 0; v < vagonSayisi; v++) {
      const vagon = new THREE.Group();
      vagon.position.x = v * VAGON_ARALIK;

      // İç hacim: kapı açılınca buradaki sıcak ışık görünür.
      const ic = new THREE.Mesh(icGeo, this.icMat);
      ic.position.y = (ZEMIN_Y + TAVAN_IC_Y) / 2;
      vagon.add(ic);

      // Zemin bandı, tavan bandı, çatı ve etek
      const alt = new THREE.Mesh(altBantGeo, govdeMat);
      alt.position.y = (GOVDE_ALT_Y + ZEMIN_Y) / 2;
      alt.castShadow = secenek.golgeler;
      const ust = new THREE.Mesh(ustBantGeo, govdeMat);
      ust.position.y = (TAVAN_IC_Y + GOVDE_UST_Y) / 2;
      ust.castShadow = secenek.golgeler;
      const cati = new THREE.Mesh(catiGeo, koyuMat);
      cati.position.y = GOVDE_UST_Y + 0.1;
      const etek = new THREE.Mesh(etekGeo, koyuMat);
      etek.position.y = GOVDE_ALT_Y - 0.2;
      vagon.add(alt, ust, cati, etek);

      // Uç kapaklar
      for (const ux of [-VAGON_UZUNLUK / 2 + 0.08, VAGON_UZUNLUK / 2 - 0.08]) {
        const uc = new THREE.Mesh(ucGeo, koyuMat);
        uc.position.set(ux, (ZEMIN_Y + TAVAN_IC_Y) / 2, 0);
        vagon.add(uc);
      }

      // Yan duvarlar: kapı boşlukları gerçekten boş kalır.
      DUVAR_PARCALARI.forEach(([cx], i) => {
        for (const cz of [YARI_GENISLIK - 0.07, -YARI_GENISLIK + 0.07]) {
          const duvar = new THREE.Mesh(duvarGeo[i], govdeMat);
          duvar.position.set(cx, (ZEMIN_Y + TAVAN_IC_Y) / 2, cz);
          duvar.castShadow = secenek.golgeler;
          vagon.add(duvar);

          const serit = new THREE.Mesh(seritGeo[i], seritMat);
          serit.position.set(cx, 1.52, cz + Math.sign(cz) * 0.09);
          vagon.add(serit);
        }
      });

      // Camlar duvar parçalarının üzerinde
      CAMLAR.forEach(([cx], i) => {
        for (const cz of [YARI_GENISLIK + 0.03, -YARI_GENISLIK - 0.03]) {
          const cam = new THREE.Mesh(camGeo[i], this.camMat);
          cam.position.set(cx, 2.55, cz);
          vagon.add(cam);
        }
      });

      // Kapılar: her boşlukta iki bağımsız panel, vagona bağlı.
      for (const ko of KAPI_OFSET) {
        for (const cz of [YARI_GENISLIK + 0.04, -YARI_GENISLIK - 0.04]) {
          // Söveler ve lento: boşluk açık kalsın diye ince çubuklardan kurulur.
          const soveGeo = new THREE.BoxGeometry(0.09, TAVAN_IC_Y - ZEMIN_Y, 0.1);
          for (const sx of [ko - BOSLUK_YARI - 0.045, ko + BOSLUK_YARI + 0.045]) {
            const sove = new THREE.Mesh(soveGeo, koyuMat);
            sove.position.set(sx, (ZEMIN_Y + TAVAN_IC_Y) / 2, cz - Math.sign(cz) * 0.05);
            vagon.add(sove);
          }
          const lentoGeo = new THREE.BoxGeometry(BOSLUK_YARI * 2 + 0.18, 0.09, 0.1);
          const lento = new THREE.Mesh(lentoGeo, koyuMat);
          lento.position.set(ko, TAVAN_IC_Y - 0.045, cz - Math.sign(cz) * 0.05);
          const esik = new THREE.Mesh(lentoGeo, koyuMat);
          esik.position.set(ko, ZEMIN_Y + 0.045, cz - Math.sign(cz) * 0.05);
          vagon.add(lento, esik);
          this.atilanlar.push(soveGeo, lentoGeo);

          for (const yon of [-1, 1] as const) {
            const panel = new THREE.Mesh(kapiGeo, kapiMat);
            const kapaliX = ko + (yon * KAPI_GENISLIK) / 2;
            panel.position.set(kapaliX, (ZEMIN_Y + TAVAN_IC_Y) / 2, cz);
            const cam = new THREE.Mesh(kapiCamGeo, kapiCamMat);
            cam.position.set(0, 0.5, Math.sign(cz) * 0.045);
            panel.add(cam);
            vagon.add(panel);
            this.paneller.push({ mesh: panel, kapaliX, yon });
          }
        }
      }

      // Bojiler ve tekerlekler
      for (const bx of [-6.2, 6.2]) {
        const boji = new THREE.Mesh(bojiGeo, koyuMat);
        boji.position.set(bx, 0.62, 0);
        vagon.add(boji);
        for (const tx of [bx - 1.1, bx + 1.1]) {
          for (const tz of [-0.78, 0.78]) {
            const teker = new THREE.Mesh(tekerGeo, koyuMat);
            teker.position.set(tx, TEKER_YARICAP, tz);
            teker.rotation.x = Math.PI / 2;
            vagon.add(teker);
            this.tekerlekler.push(teker);
          }
        }
      }

      // Yolcu siluetleri: yalnızca birkaç koyu gölge.
      for (let i = 0; i < secenek.yolcuSayisi; i++) {
        const y = new THREE.Mesh(yolcuGeo, yolcuMat);
        const t = (i + 0.5) / secenek.yolcuSayisi;
        let yx = -7.6 + t * 15.2 + ((i * 37) % 5) * 0.28;
        // Kapı boşluğunun önünü kapatmasınlar.
        for (const ko of KAPI_OFSET) {
          if (Math.abs(yx - ko) < 1.9) yx = ko + (yx > ko ? 2.1 : -2.1);
        }
        y.position.set(yx, ZEMIN_Y + 0.95, ((i % 3) - 1) * 0.62 - 0.25);
        vagon.add(y);
      }

      // Vagonlar arası körük
      if (v > 0) {
        const korukGeo = new THREE.BoxGeometry(
          VAGON_ARALIK - VAGON_UZUNLUK + 0.2,
          2.2,
          YARI_GENISLIK * 2 - 0.5
        );
        const koruk = new THREE.Mesh(korukGeo, koyuMat);
        koruk.position.set(-VAGON_ARALIK / 2, 2.2, 0);
        vagon.add(koruk);
        this.atilanlar.push(korukGeo);
      }

      this.govdeGrup.add(vagon);
    }

    // --- Ön kısım: burun, ön cam, farlar ---
    const burunX = -VAGON_UZUNLUK / 2;
    const onCamGeo = new THREE.BoxGeometry(0.12, 1.3, 2.3);
    const onCam = new THREE.Mesh(onCamGeo, this.camMat);
    onCam.position.set(burunX - 0.08, 2.6, 0);
    onCam.rotation.z = -0.13;
    this.govdeGrup.add(onCam);
    this.atilanlar.push(onCamGeo);

    const burunGeo = new THREE.BoxGeometry(0.5, 1.5, YARI_GENISLIK * 2);
    const burun = new THREE.Mesh(burunGeo, govdeMat);
    burun.position.set(burunX - 0.22, 1.55, 0);
    this.govdeGrup.add(burun);
    this.atilanlar.push(burunGeo);

    const farMat = new THREE.MeshBasicMaterial({ color: 0xfff4dd });
    const farGeo = new THREE.SphereGeometry(0.16, 10, 8);
    const parlaklik = parlaklikDokusu(0.95);
    const farParlakMat = new THREE.MeshBasicMaterial({
      map: parlaklik,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffeecc
    });
    const farParlakGeo = new THREE.PlaneGeometry(1.5, 1.5);
    this.atilanlar.push(farMat, farGeo, farParlakMat, farParlakGeo);
    for (const fz of [-0.92, 0.92]) {
      const far = new THREE.Mesh(farGeo, farMat);
      far.position.set(burunX - 0.4, 1.55, fz);
      this.govdeGrup.add(far);
      this.farMesh.push(far);

      const p = new THREE.Mesh(farParlakGeo, farParlakMat);
      p.position.set(burunX - 0.55, 1.55, fz);
      p.rotation.y = -Math.PI / 2;
      p.renderOrder = 4;
      this.govdeGrup.add(p);
      this.farParlak.push(p);
    }

    this.farIsik = new THREE.SpotLight(0xfff0d8, 0, 90, Math.PI / 7, 0.55, 1.1);
    this.farIsik.position.set(burunX - 0.5, 1.6, 0);
    this.farIsik.target.position.set(burunX - 40, 0.2, 0);
    this.govdeGrup.add(this.farIsik, this.farIsik.target);

    this.icIsik = new THREE.PointLight(storyConfig.renkler.metroIc, 0, 12, 1.65);
    this.icIsik.position.set(KAPI_OFSET[0], ZEMIN_Y + 1.3, 0.4);
    this.govdeGrup.add(this.icIsik);

    this.setDoorOpenProgress(0);
  }

  /** Kapı panellerini 0 (kapalı) - 1 (açık) arasında deterministik yerleştirir. */
  setDoorOpenProgress(deger: number): void {
    const v = clamp01(deger);
    for (const p of this.paneller) {
      p.mesh.position.x = p.kapaliX + p.yon * KAPI_ACIKLIK * v;
    }
    this.icIsik.intensity = storyConfig.isik.metroIc * v;
    this.icMat.emissiveIntensity = 0.13 + v * 0.22;
    this.camMat.emissiveIntensity = 0.012 + v * 0.06;
  }

  /**
   * Treni X ekseninde konumlar ve tekerlekleri kat edilen mesafeye göre döndürür.
   * Böylece tekerlek dönüşü hız ile her zaman uyumlu kalır.
   */
  setPozisyon(x: number): void {
    this.grup.position.x = x;
    const donme = -x / TEKER_YARICAP;
    for (const t of this.tekerlekler) t.rotation.y = donme;
  }

  anaKapiDunyaX(): number {
    return this.grup.position.x + this.anaKapiYerel;
  }

  /** İkincil hareketler: süspansiyon oturması, far şiddeti, hafif titreşim. */
  guncelle(hiz: number, zaman: number, azHareket: boolean, oturma = 0): void {
    const h = Math.min(1, Math.abs(hiz) / 22);
    const titresim = azHareket ? 0 : h * 0.012;
    this.govdeGrup.position.y = Math.sin(zaman * 24) * titresim - 0.035 * clamp01(oturma);
    this.govdeGrup.position.z = Math.sin(zaman * 17.3) * titresim * 0.6;
    this.govdeGrup.rotation.z = Math.sin(zaman * 9.1) * titresim * 0.35;

    const farGuc = clamp01(0.25 + h);
    this.farIsik.intensity = storyConfig.isik.farlar * farGuc;
    const parlaklik = 0.55 + farGuc * 0.45;
    for (const p of this.farParlak) p.scale.setScalar(parlaklik);
    for (const f of this.farMesh) {
      (f.material as THREE.MeshBasicMaterial).color.setScalar(0.7 + farGuc * 0.3);
    }
  }

  birak(): void {
    this.atilanlar.forEach((a) => a.dispose());
    this.atilanlar.length = 0;
  }
}

export const METRO_OLCU = { VAGON_UZUNLUK, VAGON_ARALIK, YARI_GENISLIK, ZEMIN_Y, KAPI_OFSET };
