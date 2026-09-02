import * as THREE from 'three';
import { storyConfig } from '../config/storyConfig';
import {
  afisDokusu,
  istasyonTabelasi,
  parlaklikDokusu,
  peronZeminDokusu,
  tavanCitaDokusu,
  tuglaDokusu,
  yaziDokusu
} from './textures';
import { clamp01 } from '../animation/easing';

/**
 * Sahnenin ortak ölçüleri. Topkapı - Ulubatlı istasyonundan esinlenen,
 * iki hatlı bir yerleşim: bizim peron, geliş hattı, orta kolon dizisi,
 * gidiş hattı ve karşı peron.
 */
export const IST = {
  rayZ: 0.7175,
  balastY: -1.15,
  rayUstY: -1.0,
  peronY: 0,
  peronKenarZ: 1.8,
  peronArkaZ: 11.0,
  tavanY: 4.4,

  /** Geliş hattının merkezi (hikâyedeki tren buraya gelir) */
  hatAZ: 0,
  /** Orta kolon dizisinin merkezi */
  ortaKolonZ: -2.9,
  /** Gidiş hattının merkezi */
  hatBZ: -5.8,
  /** Karşı peronun kenarı ve arkası */
  karsiPeronOnZ: -7.7,
  karsiPeronArkaZ: -14.6,
  karsiTavanY: 3.25,

  xBas: -46,
  xSon: 78,
  tunelAgziX: 78,
  tunelSonX: 250,
  arkaTunelX: -46,
  arkaTunelSonX: -200,
  tunelYaricap: 2.55,
  tunelMerkezY: 0.75,
  /** Trenin duracağı kapının dünya X'i */
  kapiX: 0
} as const;

interface StationSecenek {
  golgeler: boolean;
}

export class Station {
  readonly grup = new THREE.Group();

  private tunelIsikMesh: THREE.Mesh[] = [];
  private tunelIsikMat: THREE.MeshBasicMaterial;
  private tabelaMat: THREE.MeshStandardMaterial[] = [];
  private rayMat: THREE.MeshStandardMaterial;
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];
  private gecici = new THREE.Object3D();

  constructor(secenek: StationSecenek) {
    this.grup.name = 'istasyon';

    const uzunluk = IST.xSon - IST.xBas;
    const merkezX = (IST.xSon + IST.xBas) / 2;
    const rayUzunluk = IST.tunelSonX - IST.arkaTunelSonX;
    const rayMerkezX = (IST.tunelSonX + IST.arkaTunelSonX) / 2;

    // --- Ortak malzemeler ---
    const duvarDoku = tuglaDokusu();
    duvarDoku.repeat.set(22, 1.6);
    const duvarMat = new THREE.MeshStandardMaterial({
      map: duvarDoku,
      color: 0xf6f0e4,
      roughness: 0.82,
      metalness: 0.02
    });

    const zeminDoku = peronZeminDokusu();
    zeminDoku.repeat.set(34, 3);
    const zeminMat = new THREE.MeshStandardMaterial({
      map: zeminDoku,
      color: 0xf2ecdf,
      roughness: 0.66,
      metalness: 0.03
    });

    const tavanDoku = tavanCitaDokusu();
    tavanDoku.repeat.set(1, 40);
    const tavanMat = new THREE.MeshStandardMaterial({
      map: tavanDoku,
      color: 0xd8d2c4,
      roughness: 0.9,
      metalness: 0.05,
      // Tavan hiçbir zaman tamamen karanlığa düşmesin.
      emissive: 0x1c1a16,
      emissiveIntensity: 1
    });

    const betonMat = new THREE.MeshStandardMaterial({ color: 0xb5ae9f, roughness: 0.86 });
    const koyuMat = new THREE.MeshStandardMaterial({ color: 0x33322e, roughness: 0.88 });
    this.atilanlar.push(duvarMat, zeminMat, tavanMat, betonMat, koyuMat);

    // --- Bizim peron ---
    const peronDerinlik = IST.peronArkaZ - IST.peronKenarZ;
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 1.2, peronDerinlik),
      zeminMat,
      merkezX,
      -0.6,
      IST.peronKenarZ + peronDerinlik / 2,
      { golgeAl: secenek.golgeler }
    );
    this.serit(uzunluk, merkezX, IST.peronKenarZ + 0.26);
    this.kutu(new THREE.BoxGeometry(uzunluk, 1.2, 0.06), koyuMat, merkezX, -0.6, IST.peronKenarZ - 0.03);

    // --- Karşı peron ---
    const karsiDerinlik = IST.karsiPeronArkaZ - IST.karsiPeronOnZ;
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 1.2, Math.abs(karsiDerinlik)),
      zeminMat,
      merkezX,
      -0.6,
      IST.karsiPeronOnZ + karsiDerinlik / 2
    );
    this.serit(uzunluk, merkezX, IST.karsiPeronOnZ - 0.26);
    this.kutu(new THREE.BoxGeometry(uzunluk, 1.2, 0.06), koyuMat, merkezX, -0.6, IST.karsiPeronOnZ + 0.03);

    // --- Ray yatakları ve raylar ---
    this.rayMat = new THREE.MeshStandardMaterial({ color: 0x8d949a, roughness: 0.24, metalness: 0.9 });
    this.atilanlar.push(this.rayMat);
    const balastMat = new THREE.MeshStandardMaterial({ color: 0x2c2b28, roughness: 0.96 });
    this.atilanlar.push(balastMat);
    const traversMat = new THREE.MeshStandardMaterial({ color: 0x4a4239, roughness: 0.92 });
    const traversGeo = new THREE.BoxGeometry(0.26, 0.14, 2.5);
    this.atilanlar.push(traversMat, traversGeo);

    for (const hz of [IST.hatAZ, IST.hatBZ]) {
      this.kutu(new THREE.BoxGeometry(rayUzunluk, 0.5, 4.2), balastMat, rayMerkezX, IST.balastY - 0.25, hz);

      const adim = 0.68;
      const sayi = Math.floor(rayUzunluk / adim);
      const travers = new THREE.InstancedMesh(traversGeo, traversMat, sayi);
      for (let i = 0; i < sayi; i++) {
        this.gecici.position.set(IST.arkaTunelSonX + i * adim, IST.balastY + 0.07, hz);
        this.gecici.rotation.set(0, 0, 0);
        this.gecici.updateMatrix();
        travers.setMatrixAt(i, this.gecici.matrix);
      }
      travers.instanceMatrix.needsUpdate = true;
      this.grup.add(travers);

      for (const dz of [-IST.rayZ, IST.rayZ]) {
        this.kutu(
          new THREE.BoxGeometry(rayUzunluk, 0.15, 0.09),
          this.rayMat,
          rayMerkezX,
          IST.rayUstY - 0.075,
          hz + dz
        );
      }
    }

    // --- Duvarlar ---
    // Bizim peronun arkası: tabelanın olduğu tuğla duvar
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 5.6, 0.4),
      duvarMat,
      merkezX,
      2.2,
      IST.peronArkaZ,
      { golgeAl: secenek.golgeler }
    );
    // Karşı peronun arkası
    this.kutu(new THREE.BoxGeometry(uzunluk, 5.6, 0.4), duvarMat, merkezX, 2.2, IST.karsiPeronArkaZ);

    // Duvarlardaki turkuaz düşey bantlar
    const turkuazMat = new THREE.MeshStandardMaterial({ color: 0x2f7c86, roughness: 0.5, metalness: 0.15 });
    this.atilanlar.push(turkuazMat);
    const bantGeo = new THREE.BoxGeometry(0.16, 4.0, 0.06);
    this.atilanlar.push(bantGeo);
    const bantSayi = Math.floor(uzunluk / 9);
    const bant = new THREE.InstancedMesh(bantGeo, turkuazMat, bantSayi * 2);
    let bi = 0;
    for (let i = 0; i < bantSayi; i++) {
      for (const bz of [IST.peronArkaZ - 0.23, IST.karsiPeronArkaZ + 0.23]) {
        this.gecici.position.set(IST.xBas + 4 + i * 9, 2.0, bz);
        this.gecici.rotation.set(0, 0, 0);
        this.gecici.updateMatrix();
        bant.setMatrixAt(bi++, this.gecici.matrix);
      }
    }
    bant.instanceMatrix.needsUpdate = true;
    this.grup.add(bant);

    // Peron altındaki koyu bant (fotoğraftaki gibi duvarın dibi)
    this.kutu(new THREE.BoxGeometry(uzunluk, 0.5, 0.1), koyuMat, merkezX, 0.25, IST.peronArkaZ - 0.22);

    // --- Ana tavan ---
    const tavanDerinlik = IST.peronArkaZ - IST.ortaKolonZ + 1;
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 0.5, tavanDerinlik),
      tavanMat,
      merkezX,
      IST.tavanY + 0.25,
      (IST.peronArkaZ + IST.ortaKolonZ - 1) / 2
    );
    // Karşı taraf üstündeki alçak saçak
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 0.4, Math.abs(IST.karsiPeronArkaZ - IST.ortaKolonZ)),
      tavanMat,
      merkezX,
      IST.karsiTavanY + 0.2,
      (IST.karsiPeronArkaZ + IST.ortaKolonZ) / 2
    );
    // Alçak saçağın ön kenarındaki kiriş
    this.kutu(
      new THREE.BoxGeometry(uzunluk, 0.55, 0.35),
      betonMat,
      merkezX,
      IST.karsiTavanY - 0.05,
      IST.ortaKolonZ + 0.2
    );

    // --- Orta kolon dizisi (iki hattın arasında) ---
    const kolonGeo = new THREE.BoxGeometry(0.62, IST.karsiTavanY + 1.2, 0.62);
    this.atilanlar.push(kolonGeo);
    const kolonSayi = Math.floor(uzunluk / 6);
    const kolon = new THREE.InstancedMesh(kolonGeo, betonMat, kolonSayi);
    for (let i = 0; i < kolonSayi; i++) {
      this.gecici.position.set(IST.xBas + 4 + i * 6, (IST.karsiTavanY + 1.2) / 2 - 1.2, IST.ortaKolonZ);
      this.gecici.rotation.set(0, 0, 0);
      this.gecici.updateMatrix();
      kolon.setMatrixAt(i, this.gecici.matrix);
    }
    kolon.instanceMatrix.needsUpdate = true;
    kolon.castShadow = secenek.golgeler;
    this.grup.add(kolon);
    // Kolonların oturduğu alçak duvar
    this.kutu(new THREE.BoxGeometry(uzunluk, 0.85, 1.1), betonMat, merkezX, -0.72, IST.ortaKolonZ);

    // Kolonlardaki ince kırmızı hat vurgusu
    const vurguGeo = new THREE.BoxGeometry(0.66, 0.09, 0.66);
    const vurguMat = new THREE.MeshStandardMaterial({
      color: storyConfig.renkler.hatVurgusu,
      roughness: 0.55,
      emissive: new THREE.Color(storyConfig.renkler.hatVurgusu).multiplyScalar(0.1)
    });
    this.atilanlar.push(vurguGeo, vurguMat);
    const vurgu = new THREE.InstancedMesh(vurguGeo, vurguMat, kolonSayi);
    for (let i = 0; i < kolonSayi; i++) {
      this.gecici.position.set(IST.xBas + 4 + i * 6, 2.25, IST.ortaKolonZ);
      this.gecici.updateMatrix();
      vurgu.setMatrixAt(i, this.gecici.matrix);
    }
    vurgu.instanceMatrix.needsUpdate = true;
    this.grup.add(vurgu);

    // --- Aydınlatma: peron kenarı boyunca uzanan sürekli şeritler ---
    const isikMat = new THREE.MeshBasicMaterial({ color: 0xd9cdb0 });
    this.atilanlar.push(isikMat);
    const seritIsikGeo = new THREE.BoxGeometry(uzunluk - 2, 0.07, 0.26);
    const kasaGeo = new THREE.BoxGeometry(uzunluk - 1.6, 0.22, 0.52);
    this.atilanlar.push(seritIsikGeo, kasaGeo);
    for (const [iz, iy] of [
      [IST.peronKenarZ + 1.1, IST.tavanY - 0.18],
      [IST.peronArkaZ - 2.4, IST.tavanY - 0.18],
      [IST.karsiPeronOnZ - 1.4, IST.karsiTavanY - 0.13]
    ] as const) {
      this.kutu(kasaGeo, betonMat, merkezX, iy + 0.09, iz, { paylas: true });
      this.kutu(seritIsikGeo, isikMat, merkezX, iy, iz, { paylas: true });
    }

    // Şeritlerin altındaki yumuşak parıltı
    const parlaklik = parlaklikDokusu(0.5);
    const halkaMat = new THREE.MeshBasicMaterial({
      map: parlaklik,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.42
    });
    const halkaGeo = new THREE.PlaneGeometry(6, 3.2);
    this.atilanlar.push(halkaGeo, halkaMat);
    const halkaSayi = Math.floor(uzunluk / 6);
    const halka = new THREE.InstancedMesh(halkaGeo, halkaMat, halkaSayi * 2);
    let hi = 0;
    for (let i = 0; i < halkaSayi; i++) {
      for (const hz of [IST.peronKenarZ + 1.0, IST.peronArkaZ - 2.2]) {
        this.gecici.position.set(IST.xBas + 3 + i * 6, IST.tavanY - 0.32, hz);
        this.gecici.rotation.set(-Math.PI / 2, 0, 0);
        this.gecici.updateMatrix();
        halka.setMatrixAt(hi++, this.gecici.matrix);
      }
    }
    halka.instanceMatrix.needsUpdate = true;
    halka.renderOrder = 2;
    this.grup.add(halka);

    // --- Tüneller: her hat için ayrı bir tüp ---
    const tunelMat = new THREE.MeshStandardMaterial({
      color: 0x191c1f,
      roughness: 0.96,
      side: THREE.BackSide
    });
    this.atilanlar.push(tunelMat);
    this.tunelIsikMat = new THREE.MeshBasicMaterial({
      map: parlaklik,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.16,
      color: 0xc8b48f
    });
    this.atilanlar.push(this.tunelIsikMat);

    const portalMat = new THREE.MeshStandardMaterial({ color: 0x6b665c, roughness: 0.9 });
    this.atilanlar.push(portalMat);

    for (const hz of [IST.hatAZ, IST.hatBZ]) {
      for (const [agiz, son] of [
        [IST.tunelAgziX, IST.tunelSonX],
        [IST.arkaTunelX, IST.arkaTunelSonX]
      ] as const) {
        const uz = Math.abs(son - agiz);
        const tunel = new THREE.Mesh(
          new THREE.CylinderGeometry(IST.tunelYaricap, IST.tunelYaricap, uz, 16, 1, true),
          tunelMat
        );
        tunel.rotation.z = Math.PI / 2;
        tunel.position.set((agiz + son) / 2, IST.tunelMerkezY, hz);
        this.grup.add(tunel);
        this.atilanlar.push(tunel.geometry);

        const portal = new THREE.Mesh(
          new THREE.TorusGeometry(IST.tunelYaricap + 0.2, 0.3, 6, 18),
          portalMat
        );
        portal.rotation.y = Math.PI / 2;
        portal.position.set(agiz, IST.tunelMerkezY, hz);
        this.grup.add(portal);
        this.atilanlar.push(portal.geometry);
      }

      // Tünelin derinliğindeki soluk ışık
      const isik = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), this.tunelIsikMat);
      isik.position.set(IST.tunelAgziX + 6, IST.tunelMerkezY, hz);
      isik.rotation.y = -Math.PI / 2;
      isik.renderOrder = 3;
      this.grup.add(isik);
      this.tunelIsikMesh.push(isik);
      this.atilanlar.push(isik.geometry);
    }

    // --- Tabelalar ---
    const tabelaDoku = istasyonTabelasi(storyConfig.hikaye.istasyonAdi);
    this.tabela(tabelaDoku, new THREE.Vector3(5.5, 2.9, IST.peronArkaZ - 0.24), 5.6, 1.58, Math.PI);
    this.tabela(tabelaDoku, new THREE.Vector3(-13, 2.9, IST.peronArkaZ - 0.24), 5.6, 1.58, Math.PI);
    this.tabela(
      istasyonTabelasi(storyConfig.hikaye.istasyonAdi),
      new THREE.Vector3(2, 2.6, IST.karsiPeronArkaZ + 0.24),
      5.6,
      1.58,
      0
    );

    this.tabela(
      yaziDokusu([storyConfig.hikaye.yonYazisi], {
        genislik: 1024,
        yukseklik: 256,
        arkaPlan: '#1b2026',
        renk: '#dfe6ea',
        fontBoyu: 88,
        harfAraligi: 6
      }),
      new THREE.Vector3(14.5, 3.35, IST.peronArkaZ - 0.24),
      4.6,
      1.15,
      Math.PI
    );
    this.tabela(
      yaziDokusu([storyConfig.hikaye.hatKodu], {
        genislik: 256,
        yukseklik: 256,
        arkaPlan: '#c0392b',
        renk: '#ffffff',
        fontBoyu: 150,
        kalinlik: 700
      }),
      new THREE.Vector3(1.1, 3.35, IST.peronArkaZ - 0.24),
      1.2,
      1.2,
      Math.PI
    );
    this.tabela(
      yaziDokusu([storyConfig.hikaye.tarihYazisi], {
        genislik: 768,
        yukseklik: 192,
        arkaPlan: '#1b2026',
        renk: '#a9b6bd',
        fontBoyu: 66,
        harfAraligi: 8
      }),
      new THREE.Vector3(-4.5, 3.35, IST.peronArkaZ - 0.24),
      3.4,
      0.85,
      Math.PI
    );

    // Tavandan sarkan yön tabelası
    this.tabela(
      yaziDokusu([`${storyConfig.hikaye.hatKodu} · ${storyConfig.hikaye.yonYazisi}`], {
        genislik: 1024,
        yukseklik: 200,
        arkaPlan: '#161b21',
        renk: '#dde8f0',
        fontBoyu: 74,
        harfAraligi: 5
      }),
      new THREE.Vector3(12, 3.55, 6.4),
      5.0,
      0.98,
      Math.PI
    );

    // --- Karşı perondaki afişler ---
    for (let i = 0; i < 5; i++) {
      const doku = afisDokusu(i);
      const mat = new THREE.MeshStandardMaterial({
        map: doku,
        roughness: 0.6,
        emissiveMap: doku,
        emissive: 0xffffff,
        emissiveIntensity: 0.12
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.2), mat);
      mesh.position.set(-16 + i * 9, 1.6, IST.karsiPeronArkaZ + 0.24);
      this.grup.add(mesh);
      this.atilanlar.push(mesh.geometry, mat);
    }

    // --- Banklar ---
    for (const bx of [-14, 8, 26]) {
      this.grup.add(this.bankYap(bx, IST.peronArkaZ - 0.85, Math.PI, secenek.golgeler));
    }
    for (const bx of [-6, 18]) {
      this.grup.add(this.bankYap(bx, IST.karsiPeronArkaZ + 0.85, 0, false));
    }

    // --- Karşı perondaki uzak siluetler ---
    const siluetGeo = new THREE.CapsuleGeometry(0.21, 1.0, 4, 8);
    const siluetMat = new THREE.MeshStandardMaterial({ color: 0x2e2b30, roughness: 0.95 });
    this.atilanlar.push(siluetGeo, siluetMat);
    const siluet = new THREE.InstancedMesh(siluetGeo, siluetMat, 9);
    for (let i = 0; i < 9; i++) {
      this.gecici.position.set(
        -20 + i * 6.5 + ((i * 17) % 5) * 0.6,
        0.82,
        IST.karsiPeronOnZ - 1.4 - ((i * 13) % 4) * 0.7
      );
      this.gecici.rotation.set(0, ((i * 29) % 7) * 0.4, 0);
      this.gecici.updateMatrix();
      siluet.setMatrixAt(i, this.gecici.matrix);
    }
    siluet.instanceMatrix.needsUpdate = true;
    this.grup.add(siluet);

    this.grup.updateMatrixWorld(true);
  }

  private kutu(
    geo: THREE.BufferGeometry,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number,
    secenek: { golgeAl?: boolean; paylas?: boolean } = {}
  ): THREE.Mesh {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    if (secenek.golgeAl) m.receiveShadow = true;
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    this.grup.add(m);
    if (!secenek.paylas) this.atilanlar.push(geo);
    return m;
  }

  /** Peron kenarındaki sarı hissedilebilir şerit. */
  private serit(uzunluk: number, merkezX: number, z: number): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0xd6b23f, roughness: 0.8, metalness: 0.02 });
    this.atilanlar.push(mat);
    this.kutu(new THREE.BoxGeometry(uzunluk, 0.03, 0.5), mat, merkezX, 0.005, z);
  }

  private tabela(
    doku: THREE.Texture,
    konum: THREE.Vector3,
    g: number,
    y: number,
    donme: number
  ): void {
    const mat = new THREE.MeshStandardMaterial({
      map: doku,
      roughness: 0.45,
      metalness: 0.05,
      emissiveMap: doku,
      emissive: 0xffffff,
      emissiveIntensity: 0.24
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(g, y), mat);
    mesh.position.copy(konum);
    mesh.rotation.y = donme;
    this.grup.add(mesh);
    this.tabelaMat.push(mat);
    this.atilanlar.push(mesh.geometry, mat);
  }

  private bankYap(x: number, z: number, donme: number, golge: boolean): THREE.Group {
    const g = new THREE.Group();
    const ahsap = new THREE.MeshStandardMaterial({ color: 0x6b4f38, roughness: 0.72 });
    const metal = new THREE.MeshStandardMaterial({ color: 0x3c444c, roughness: 0.42, metalness: 0.7 });
    this.atilanlar.push(ahsap, metal);
    const oturakGeo = new THREE.BoxGeometry(2.6, 0.1, 0.55);
    const sirtGeo = new THREE.BoxGeometry(2.6, 0.5, 0.08);
    const ayakGeo = new THREE.BoxGeometry(0.09, 0.46, 0.5);
    this.atilanlar.push(oturakGeo, sirtGeo, ayakGeo);

    const oturak = new THREE.Mesh(oturakGeo, ahsap);
    oturak.position.set(0, 0.46, 0);
    oturak.castShadow = golge;
    const sirt = new THREE.Mesh(sirtGeo, ahsap);
    sirt.position.set(0, 0.74, -0.24);
    g.add(oturak, sirt);
    for (const dx of [-1.1, 1.1]) {
      const ayak = new THREE.Mesh(ayakGeo, metal);
      ayak.position.set(dx, 0.23, 0);
      g.add(ayak);
    }
    g.position.set(x, IST.peronY, z);
    g.rotation.y = donme;
    return g;
  }

  /** Trenin yaklaşmasına göre tünel ışığını ve ray parlaklığını ayarlar. */
  guncelle(yakinlik: number, zaman: number): void {
    const y = clamp01(yakinlik);
    this.tunelIsikMat.opacity = 0.13 + y * 0.5;
    const olcek = 1 + y * 1.4;
    for (const m of this.tunelIsikMesh) m.scale.setScalar(olcek);
    this.rayMat.roughness = 0.26 - y * 0.1;
    const titrek = 0.985 + Math.sin(zaman * 11.3) * 0.008 + Math.sin(zaman * 3.1) * 0.007;
    this.tabelaMat.forEach((m) => (m.emissiveIntensity = 0.24 * titrek));
  }

  birak(): void {
    this.atilanlar.forEach((a) => a.dispose());
    this.atilanlar.length = 0;
  }
}
