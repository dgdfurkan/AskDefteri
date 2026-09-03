import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { storyConfig } from '../config/storyConfig';
import { memories } from '../config/memories';
import { Notebook, SAYFA_G, SAYFA_Y } from './Notebook';
import type { SayfaFotografi } from './SayfaFotografi';
import { ParticleSystem } from '../objects/ParticleSystem';
import { parlaklikDokusu } from '../objects/textures';
import { damp, lerp, smootherstep } from '../animation/easing';
import type { ResponsiveManager } from '../core/ResponsiveManager';

export interface AcikKartBilgisi {
  tarih: string;
  baslik?: string;
  not?: string;
  sira: number;
  toplam: number;
}

/**
 * Anı defteri sahnesi: sıcak bir boşlukta duran gerçek bir defter.
 * Kaydırdıkça sayfalar çevrilir; fotoğrafa dokununca öne gelip büyür.
 */
export class MemoryGallery {
  readonly sahne = new THREE.Scene();
  readonly kamera: THREE.PerspectiveCamera;
  kartDegisti: ((bilgi: AcikKartBilgisi | null) => void) | null = null;
  /** Kapanış yazısı yazılırken kalem sesi için. */
  kalemSesi: (() => void) | null = null;

  private ekran: ResponsiveManager;
  private defter: Notebook;
  private zerre: ParticleSystem;
  private masaIsik: THREE.PointLight;
  private yanIsik: THREE.PointLight;
  private pmrem: THREE.PMREMGenerator;
  private ortamHedef: THREE.WebGLRenderTarget;
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  private isin = new THREE.Raycaster();
  private buyukGrup = new THREE.Group();
  private buyukFoto: THREE.Mesh;
  private buyukCerceve: THREE.Mesh;
  private buyukMat: THREE.MeshBasicMaterial;
  private cerceveMat: THREE.MeshBasicMaterial;
  private acikFoto: SayfaFotografi | null = null;
  private acilma = 0;
  private acilmaHedef = 0;
  private gecici = new THREE.Vector3();
  private sonP = 0;
  private harfSayaci = 0;

  constructor(ekran: ResponsiveManager, renderer: THREE.WebGLRenderer) {
    this.ekran = ekran;
    this.sahne.background = new THREE.Color(0x0b0809);
    this.sahne.fog = new THREE.FogExp2(0x0b0809, 0.07);

    this.pmrem = new THREE.PMREMGenerator(renderer);
    const oda = new RoomEnvironment();
    this.ortamHedef = this.pmrem.fromScene(oda, 0.03);
    this.sahne.environment = this.ortamHedef.texture;
    this.sahne.environmentIntensity = 0.32;
    oda.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });

    this.kamera = new THREE.PerspectiveCamera(
      ekran.durum.mobil ? 52 : 44,
      ekran.durum.enBoy,
      0.05,
      40
    );

    // --- Defter ---
    this.defter = new Notebook(ekran.kalite.golgeler);
    this.defter.grup.rotation.x = -0.14;
    const kok = new THREE.Group();
    kok.add(this.defter.grup);
    this.sahne.add(kok);

    // --- Işıklar ---
    this.masaIsik = new THREE.PointLight(0xffe3bd, 26, 14, 1.7);
    this.masaIsik.position.set(-0.6, 2.1, 2.6);
    this.yanIsik = new THREE.PointLight(0xffbfa0, 9, 14, 2);
    this.yanIsik.position.set(2.4, -1.2, 1.6);
    const arka = new THREE.PointLight(0x8fa8ff, 5, 12, 2);
    arka.position.set(-2.6, 0.6, -2.2);
    this.sahne.add(this.masaIsik, this.yanIsik, arka, new THREE.AmbientLight(0x40343a, 1.4));

    // --- Zerreler ---
    this.zerre = new ParticleSystem(
      {
        sayi: Math.round(ekran.kalite.bokehParcacik * 0.8),
        alan: new THREE.Vector3(12, 8, 7),
        merkez: new THREE.Vector3(0, 0, 0.5),
        renk: storyConfig.renkler.defterVurgu,
        boyut: 2.2,
        opaklik: 0.32,
        dusmeHizi: -0.05
      },
      ekran.pikselOrani()
    );
    this.sahne.add(this.zerre.nesne);

    // Defterin altındaki sıcak hale
    const parlak = parlaklikDokusu(0.7);
    const haleMat = new THREE.MeshBasicMaterial({
      map: parlak,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffb98c,
      opacity: 0.3
    });
    const haleGeo = new THREE.PlaneGeometry(9, 7);
    const hale = new THREE.Mesh(haleGeo, haleMat);
    hale.position.set(0, 0, -1.4);
    this.sahne.add(hale);
    this.atilanlar.push(haleGeo, haleMat);

    // --- Büyütülmüş fotoğraf ---
    this.cerceveMat = new THREE.MeshBasicMaterial({ color: 0xfaf6ee, transparent: true, opacity: 0 });
    this.buyukMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
    const cGeo = new THREE.PlaneGeometry(1, 1);
    const fGeo = new THREE.PlaneGeometry(1, 1);
    this.buyukCerceve = new THREE.Mesh(cGeo, this.cerceveMat);
    this.buyukFoto = new THREE.Mesh(fGeo, this.buyukMat);
    this.buyukFoto.position.z = 0.002;
    this.buyukGrup.add(this.buyukCerceve, this.buyukFoto);
    this.buyukGrup.visible = false;
    this.buyukGrup.renderOrder = 10;
    this.sahne.add(this.buyukGrup);
    this.atilanlar.push(cGeo, fGeo, this.cerceveMat, this.buyukMat);

    this.guncelle(0, 0.016, 0);
  }

  /**
   * Kamera konumu. Uzaklık, o anki görüş açısı ve ekran oranından hesaplanır:
   * sayfa her ekranda tam sığar, sabit bir uzaklık varsayılmaz.
   */
  private kamerayiKur(p: number, zaman: number): void {
    const mobil = this.ekran.durum.mobil;
    const az = this.ekran.azHareket;
    const vurgu = this.defter.cevirmeVurgusu(p);
    const kapakT = this.defter.kapakAcilmasi(p);

    const yariFov = THREE.MathUtils.degToRad(this.kamera.fov) / 2;
    // Kadraja sığması gereken ölçüler (paylar dâhil): dar ekranda tek sayfa,
    // geniş ekranda açık iki sayfa. Uzaklık ikisinden büyüğüne göre seçilir.
    const acikGenislik = mobil ? SAYFA_G * 1.1 : SAYFA_G * 2 * 1.06;
    const hedefGenislik = lerp(SAYFA_G * 1.18, acikGenislik, kapakT);
    const hedefYukseklik = SAYFA_Y * 1.19;
    const zYukseklik = hedefYukseklik / 2 / Math.tan(yariFov);
    const zGenislik = hedefGenislik / 2 / (Math.tan(yariFov) * this.kamera.aspect);
    const temelZ = Math.max(zYukseklik, zGenislik);
    const z = temelZ * (1 + vurgu * 0.07);

    const odak = this.defter.odakX(p);
    const surus = mobil ? odak * 0.92 : odak * 0.18;
    const x = lerp(SAYFA_G / 2, surus, kapakT);
    const y = lerp(0.24, 0.06, kapakT);

    const salinim = az ? 0 : 1;
    this.kamera.position.set(
      x + Math.sin(zaman * 0.21) * 0.045 * salinim,
      y + Math.sin(zaman * 0.17) * 0.03 * salinim,
      z
    );
    this.gecici.set(lerp(SAYFA_G / 2, mobil ? odak * 0.96 : odak * 0.16, kapakT), -0.02, 0);
    this.kamera.lookAt(this.gecici);
  }

  guncelle(p: number, dt: number, zaman: number): void {
    this.sonP = p;
    this.defter.setIlerleme(p);
    this.kamerayiKur(p, zaman);

    // Yakındaki sayfaların fotoğrafları yüklensin.
    for (const f of this.defter.fotograflar) {
      if (this.defter.gorunurMu(f, p)) f.kucukYukle();
    }

    this.masaIsik.position.set(
      this.kamera.position.x - 0.4,
      2.0,
      2.4
    );

    // --- Büyütülmüş fotoğraf ---
    this.acilma = damp(this.acilma, this.acilmaHedef, 7, dt);
    if (this.acilma < 0.002 && this.acilmaHedef === 0) {
      this.buyukGrup.visible = false;
      this.acikFoto = null;
    }
    if (this.buyukGrup.visible && this.acikFoto) {
      const t = smootherstep(this.acilma);
      const mesafe = this.buyukMesafe();
      this.gecici.set(0, 0, -mesafe).applyQuaternion(this.kamera.quaternion).add(this.kamera.position);
      this.buyukGrup.position.copy(this.gecici);
      this.buyukGrup.quaternion.copy(this.kamera.quaternion);
      this.buyukGrup.rotateY((1 - t) * -0.55);
      this.buyukGrup.scale.setScalar(lerp(0.62, 1, t));
      this.cerceveMat.opacity = t;
      this.buyukMat.opacity = t;
    }

    // Son sayfadaki yazı, sayfa görünürken kalem sesiyle birlikte yazılır.
    const yeniPiksel = this.defter.kapanisYaziyiSur(p, dt, this.ekran.azHareket);
    if (yeniPiksel > 0) {
      this.harfSayaci += yeniPiksel;
      if (this.harfSayaci >= 26) {
        this.harfSayaci = 0;
        this.kalemSesi?.();
      }
    }

    this.zerre.guncelle(this.ekran.azHareket ? 0 : zaman, 0.24);
  }

  private buyukMesafe(): number {
    const yariFov = THREE.MathUtils.degToRad(this.kamera.fov) / 2;
    const g = this.buyukCerceve.scale.x;
    const y = this.buyukCerceve.scale.y;
    const dolgu = this.ekran.durum.mobil ? 0.82 : 0.76;
    const dikey = y / 2 / Math.tan(yariFov) / dolgu;
    const yatay = g / 2 / (Math.tan(yariFov) * this.kamera.aspect) / dolgu;
    return Math.max(dikey, yatay);
  }

  /** Ekran koordinatından fotoğraf seçer. Açık fotoğraf varsa kapatır. */
  dokunma(ndcX: number, ndcY: number): boolean {
    if (this.acikFoto && this.acilmaHedef > 0) {
      this.kapat();
      return true;
    }
    this.isin.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.kamera);
    const kesisim = this.isin.intersectObjects(this.defter.hedefMeshler, false);
    for (const k of kesisim) {
      const foto = k.object.userData.foto as SayfaFotografi | undefined;
      if (foto && this.defter.gorunurMu(foto, this.sonP)) {
        this.ac(foto);
        return true;
      }
    }
    return false;
  }

  ac(foto: SayfaFotografi): void {
    this.acikFoto = foto;
    this.acilmaHedef = 1;
    this.buyukGrup.visible = true;

    const enBoy = foto.ani.width / foto.ani.height;
    const uzun = 2.4;
    const g = enBoy >= 1 ? uzun : uzun * enBoy;
    const y = enBoy >= 1 ? uzun / enBoy : uzun;
    this.buyukFoto.scale.set(g, y, 1);
    this.buyukCerceve.scale.set(g + 0.14, y + 0.14, 1);

    const mevcut = foto.mevcutDoku;
    if (mevcut) this.buyukMat.map = mevcut;
    this.buyukMat.needsUpdate = true;
    foto.tamYukle((doku) => {
      if (this.acikFoto === foto) {
        this.buyukMat.map = doku;
        this.buyukMat.needsUpdate = true;
      }
    });

    this.kartDegisti?.({
      tarih: foto.ani.tarihYazisi,
      baslik: foto.ani.baslik,
      not: foto.ani.not,
      sira: foto.ani.sira + 1,
      toplam: memories.length
    });
  }

  kapat(): void {
    this.acilmaHedef = 0;
    this.kartDegisti?.(null);
  }

  get acikMi(): boolean {
    return this.acikFoto !== null && this.acilmaHedef > 0;
  }

  /** O an odakta olan anının sırası. */
  aktifSira(p: number): number {
    return this.defter.odakSirasi(p);
  }

  /** Kapanış sayfası geçildi mi? "Başa dön" düğmesi buna göre belirir. */
  kapanisSonrasi(p: number): number {
    return this.defter.kapanisSonrasi(p);
  }

  boyutlandir(): void {
    const mobil = this.ekran.durum.mobil;
    this.kamera.aspect = this.ekran.durum.enBoy;
    this.kamera.fov = mobil ? 52 : 44;
    this.kamera.updateProjectionMatrix();
    this.zerre.pikselOraniAyarla(this.ekran.pikselOrani());
  }

  birak(): void {
    this.defter.birak();
    this.atilanlar.forEach((a) => a.dispose());
    this.zerre.birak();
    this.ortamHedef.dispose();
    this.pmrem.dispose();
    this.sahne.clear();
  }
}
