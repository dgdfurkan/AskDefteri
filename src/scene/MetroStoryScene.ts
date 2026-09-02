import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { storyConfig } from '../config/storyConfig';
import { IST, Station } from '../objects/Station';
import { MetroTrain } from '../objects/MetroTrain';
import { ProceduralCharacter } from '../objects/ProceduralCharacter';
import { ParticleSystem } from '../objects/ParticleSystem';
import { Lighting } from './Lighting';
import { CameraDirector, type KameraAnahtar } from './CameraDirector';
import { hikayeDurumu, type HikayeDurumu } from '../animation/StoryDirector';
import type { ResponsiveManager } from '../core/ResponsiveManager';

/**
 * Sinematik kamera anahtar kareleri.
 * Mobil varyantlar kadrajı genişletir ki iki karakter de görünsün.
 */
const KAMERA: KameraAnahtar[] = [
  { p: 0.0, konum: [-8.8, 1.66, 7.8], hedef: [10, 1.45, 3.2], fov: 44, mobilKonum: [-7.4, 1.6, 6.9], mobilFov: 52 },
  { p: 0.12, konum: [-8.2, 1.72, 7.6], hedef: [30, 1.5, 1.6], fov: 40, mobilKonum: [-6.6, 1.66, 6.6], mobilFov: 50 },
  { p: 0.26, konum: [-3.0, 1.6, 6.6], hedef: [46, 1.5, 0.9], fov: 36, mobilKonum: [-3.2, 1.6, 6.4], mobilFov: 46 },
  { p: 0.38, konum: [3.6, 1.5, 6.8], hedef: [20, 1.7, 0.9], fov: 40, mobilKonum: [3.0, 1.62, 7.6], mobilFov: 54 },
  { p: 0.5, konum: [5.6, 1.74, 9.2], hedef: [0.4, 1.5, 2.1], fov: 44, mobilKonum: [6.0, 1.82, 9.5], mobilFov: 58 },
  { p: 0.58, konum: [3.8, 1.55, 7.6], hedef: [0.0, 1.3, 1.6], fov: 42, mobilKonum: [4.3, 1.66, 8.4], mobilFov: 56 },
  { p: 0.67, konum: [3.9, 1.5, 7.4], hedef: [0.2, 1.1, 2.5], fov: 43, mobilKonum: [4.4, 1.62, 8.2], mobilFov: 57 },
  { p: 0.75, konum: [3.2, 1.55, 7.8], hedef: [-0.5, 1.15, 3.4], fov: 44, mobilKonum: [3.7, 1.68, 8.6], mobilFov: 58 },
  { p: 0.82, konum: [0.6, 1.6, 8.6], hedef: [-1.8, 1.15, 4.3], fov: 45, mobilKonum: [1.0, 1.72, 9.0], mobilFov: 59 },
  { p: 0.89, konum: [-4.2, 1.5, 7.4], hedef: [-1.95, 1.25, 4.6], fov: 42, mobilKonum: [-4.6, 1.62, 7.9], mobilFov: 56 },
  { p: 0.95, konum: [-5.2, 1.58, 7.6], hedef: [-1.8, 1.25, 4.6], fov: 43, mobilKonum: [-5.5, 1.7, 8.1], mobilFov: 57 },
  { p: 1.0, konum: [-6.8, 2.05, 8.2], hedef: [-1.78, 1.22, 4.6], fov: 45, mobilKonum: [-7.1, 2.2, 8.6], mobilFov: 59 }
];

export class MetroStoryScene {
  readonly sahne = new THREE.Scene();
  readonly yonetmen: CameraDirector;

  private istasyon: Station;
  private tren: MetroTrain;
  private kalkanTren: MetroTrain;
  private kadin: ProceduralCharacter;
  private erkek: ProceduralCharacter;
  private toz: ParticleSystem;
  private isik: Lighting;
  private ekran: ResponsiveManager;
  private pmrem?: THREE.PMREMGenerator;
  private ortamHedef?: THREE.WebGLRenderTarget;
  private oncekiTrenX = 0;
  private oncekiKalkanX = 0;
  private durum: HikayeDurumu;

  constructor(ekran: ResponsiveManager, renderer: THREE.WebGLRenderer) {
    this.ekran = ekran;
    const k = ekran.kalite;

    this.sahne.background = new THREE.Color(0x0d0c0a);
    this.sahne.fog = new THREE.FogExp2(0x14120e, 0.0125);

    // Prosedürel oda ortamı: uzak dosya gerekmeden metalik yüzeylere yansıma verir.
    this.pmrem = new THREE.PMREMGenerator(renderer);
    const oda = new RoomEnvironment();
    this.ortamHedef = this.pmrem.fromScene(oda, 0.04);
    this.sahne.environment = this.ortamHedef.texture;
    this.sahne.environmentIntensity = 0.28;
    oda.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });

    this.istasyon = new Station({ golgeler: k.golgeler });
    this.sahne.add(this.istasyon.grup);

    this.tren = new MetroTrain({ yolcuSayisi: k.trenYolcu, golgeler: k.golgeler });
    this.sahne.add(this.tren.grup);

    // Karşı hattaki tren: hikâye başlarken istasyondan ayrılır.
    this.kalkanTren = new MetroTrain({
      vagonSayisi: 2,
      yolcuSayisi: Math.max(2, Math.round(k.trenYolcu * 0.5)),
      golgeler: false
    });
    this.kalkanTren.grup.rotation.y = Math.PI;
    this.kalkanTren.grup.position.z = IST.hatBZ;
    this.sahne.add(this.kalkanTren.grup);

    this.kadin = new ProceduralCharacter({
      ustRengi: storyConfig.renkler.kadinKiyafet,
      altRengi: storyConfig.renkler.kadinAlt,
      sacRengi: storyConfig.renkler.kadinSac,
      tenRengi: storyConfig.renkler.ten,
      siluet: 'ince',
      sarilmaStili: 'alt',
      tanimaYonu: -1,
      sacTarzi: 'uzunDalgali',
      gozluk: true,
      kupe: true,
      sirtCantasi: storyConfig.renkler.kadinCanta,
      golgeler: k.golgeler
    });
    this.erkek = new ProceduralCharacter({
      ustRengi: storyConfig.renkler.erkekKiyafet,
      altRengi: storyConfig.renkler.erkekAlt,
      sacRengi: storyConfig.renkler.erkekSac,
      tenRengi: storyConfig.renkler.ten,
      siluet: 'genis',
      sarilmaStili: 'ust',
      tanimaYonu: 1,
      sacTarzi: 'atkuyrugu',
      sakal: true,
      omuzAskisi: 0x3a3b34,
      golgeler: k.golgeler
    });
    // Boy farkı: silueti daha inandırıcı kılar.
    this.kadin.kok.scale.setScalar(0.985);
    this.erkek.kok.scale.setScalar(1.045);
    this.sahne.add(this.kadin.kok, this.erkek.kok);

    this.toz = new ParticleSystem(
      {
        sayi: k.tozParcacik,
        alan: new THREE.Vector3(70, 5, 16),
        merkez: new THREE.Vector3(6, 2.2, 4),
        renk: 0xe6dcc6,
        boyut: 1.05,
        opaklik: 0.2,
        dusmeHizi: 0.05
      },
      ekran.pikselOrani()
    );
    this.sahne.add(this.toz.nesne);

    this.isik = new Lighting(k.golgeler, k.golgeCozunurluk);
    this.sahne.add(this.isik.grup);

    this.yonetmen = new CameraDirector(KAMERA, ekran.durum.enBoy);
    this.durum = hikayeDurumu(0);
    this.uygula(0, 0);
  }

  /** Sahnenin tüm görsel durumunu ilerlemeden yeniden kurar. */
  private uygula(p: number, zaman: number): void {
    const d = hikayeDurumu(p);
    this.durum = d;

    this.tren.setPozisyon(d.trenX);
    this.tren.setDoorOpenProgress(d.kapiAcik);

    // Tren hızı: konumun kare içindeki değişimi. Kaydırma durunca titreşim de durur.
    const hiz = Math.abs(d.trenX - this.oncekiTrenX);
    this.oncekiTrenX = d.trenX;
    this.tren.guncelle(hiz * 60, zaman, this.ekran.azHareket, d.oturma);

    // Ayrılan tren yalnızca ilk bölümde görünür.
    const kalkanGorunur = d.kalkanX < 150;
    this.kalkanTren.grup.visible = kalkanGorunur;
    if (kalkanGorunur) {
      const kalkanHiz = Math.abs(d.kalkanX - this.oncekiKalkanX);
      this.kalkanTren.setPozisyon(d.kalkanX);
      this.kalkanTren.guncelle(kalkanHiz * 60, zaman, this.ekran.azHareket);
    }
    this.oncekiKalkanX = d.kalkanX;

    this.istasyon.guncelle(d.tunelYakinlik, zaman);
    this.isik.guncelle(p, d.kapiAcik);

    // Azaltılmış harekette karakterlerin serbest nefes hareketi de durur.
    const kZaman = this.ekran.azHareket ? 0 : zaman;

    this.kadin.kok.visible = d.kadin.gorunur;
    this.kadin.kok.position.set(d.kadin.x, d.kadin.y, d.kadin.z);
    this.kadin.kok.rotation.y = d.kadin.donme;
    this.kadin.uygula({
      yurumeFaz: d.kadin.yurumeFaz,
      yurumeSiddet: d.kadin.yurumeSiddet,
      tanima: d.kadin.tanima,
      sarilma: d.kadin.sarilma,
      zaman: kZaman,
      bakisY: d.kadin.bakisY,
      rahatlik: d.kadin.rahatlik
    });

    this.erkek.kok.position.set(d.erkek.x, d.erkek.y, d.erkek.z);
    this.erkek.kok.rotation.y = d.erkek.donme;
    this.erkek.uygula({
      yurumeFaz: d.erkek.yurumeFaz,
      yurumeSiddet: d.erkek.yurumeSiddet,
      tanima: d.erkek.tanima,
      sarilma: d.erkek.sarilma,
      zaman: kZaman,
      bakisY: d.erkek.bakisY,
      rahatlik: d.erkek.rahatlik
    });

    // Sisin rengi finalde ısınır.
    const fog = this.sahne.fog as THREE.FogExp2;
    fog.color.setHex(0x14120e).lerp(new THREE.Color(0x241610), d.finalGuc * 0.7);
    (this.sahne.background as THREE.Color).copy(fog.color);
    this.sahne.environmentIntensity = 0.28 + d.finalGuc * 0.1;

    this.toz.guncelle(this.ekran.azHareket ? 0 : zaman, 0.3 + d.tunelYakinlik * 0.12);
  }

  guncelle(p: number, zaman: number): void {
    this.uygula(p, zaman);
    const sarsinti = this.ekran.azHareket ? 0 : 1;
    this.yonetmen.guncelle(p, this.ekran.durum.darKadraj, sarsinti, zaman);
  }

  get sonDurum(): HikayeDurumu {
    return this.durum;
  }

  boyutlandir(): void {
    this.yonetmen.enBoyAyarla(this.ekran.durum.enBoy);
    this.toz.pikselOraniAyarla(this.ekran.pikselOrani());
  }

  birak(): void {
    this.istasyon.birak();
    this.tren.birak();
    this.kalkanTren.birak();
    this.kadin.birak();
    this.erkek.birak();
    this.toz.birak();
    this.isik.birak();
    this.ortamHedef?.dispose();
    this.pmrem?.dispose();
    this.sahne.clear();
  }
}
