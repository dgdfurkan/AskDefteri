import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { storyConfig } from '../config/storyConfig';
import { ParticleSystem } from '../objects/ParticleSystem';
import { parlaklikDokusu, yaziDokusu } from '../objects/textures';
import { clamp01, damp, easeInOutCubic, easeOutCubic, lerp, remapClamped, smootherstep } from '../animation/easing';
import type { ResponsiveManager } from '../core/ResponsiveManager';
import { kalpSekli } from '../objects/heartShape';

/** Anahtarın kilide girip döndüğü anlar; tıkırtılar buralarda çalar. */
const TIK_ANLARI: Array<{ p: number; guc: number }> = [
  { p: 0.44, guc: 0.55 },
  { p: 0.6, guc: 1 },
  { p: 0.74, guc: 0.7 }
];

/**
 * Şifre ekranının sahnesi: kalp biçimli bir asma kilit ve yanında süzülen
 * anahtar. Doğru şifrede anahtar kilide girer, döner, kanca açılır.
 */
export class LockScene {
  readonly sahne = new THREE.Scene();
  readonly kamera: THREE.PerspectiveCamera;
  /** Kilit tıkırtısı için dışarı verilen çağrı. */
  tikCagrisi: ((guc: number) => void) | null = null;

  private kilitGrup = new THREE.Group();
  private govdeGrup = new THREE.Group();
  private kancaGrup = new THREE.Group();
  private anahtar = new THREE.Group();
  private hale: THREE.Mesh;
  private haleMat: THREE.MeshBasicMaterial;
  private metalMat: THREE.MeshStandardMaterial;
  private anahtarMat: THREE.MeshStandardMaterial;
  private kazimaMat: THREE.MeshBasicMaterial;
  private zerre: ParticleSystem;
  private ekran: ResponsiveManager;
  private pmrem: THREE.PMREMGenerator;
  private ortamHedef: THREE.WebGLRenderTarget;
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  private fareHedef = new THREE.Vector2();
  private fare = new THREE.Vector2();
  private sarsinti = 0;
  private basari = 0;
  private calinanTik = 0;

  constructor(ekran: ResponsiveManager, renderer: THREE.WebGLRenderer) {
    this.ekran = ekran;
    this.sahne.background = new THREE.Color(0x0a0709);
    this.sahne.fog = new THREE.FogExp2(0x0a0709, 0.055);

    this.pmrem = new THREE.PMREMGenerator(renderer);
    const oda = new RoomEnvironment();
    this.ortamHedef = this.pmrem.fromScene(oda, 0.02);
    this.sahne.environment = this.ortamHedef.texture;
    this.sahne.environmentIntensity = 0.75;
    oda.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });

    this.kamera = new THREE.PerspectiveCamera(42, ekran.durum.enBoy, 0.1, 60);
    this.kamera.position.set(0, 0, 6.2);

    // --- Malzemeler ---
    this.metalMat = new THREE.MeshStandardMaterial({
      color: 0xb98a4e,
      roughness: 0.28,
      metalness: 0.95,
      emissive: new THREE.Color(0x2a140c),
      emissiveIntensity: 0.35
    });
    this.anahtarMat = new THREE.MeshStandardMaterial({
      color: 0xa8783f,
      roughness: 0.34,
      metalness: 0.92
    });
    const koyuMat = new THREE.MeshStandardMaterial({ color: 0x160f0c, roughness: 0.55, metalness: 0.4 });
    this.atilanlar.push(this.metalMat, this.anahtarMat, koyuMat);

    // --- Kilit gövdesi: kalp ---
    const govdeGeo = new THREE.ExtrudeGeometry(kalpSekli(), {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 5,
      bevelSize: 0.14,
      bevelThickness: 0.12,
      curveSegments: 24
    });
    govdeGeo.center();
    govdeGeo.computeVertexNormals();
    const govde = new THREE.Mesh(govdeGeo, this.metalMat);
    govde.scale.setScalar(0.6);
    this.govdeGrup.add(govde);
    this.atilanlar.push(govdeGeo);

    // Kalbin ölçeklenmiş sınırları: kanca ve delik buna göre yerleşir.
    const yariG = 1.28 * 0.6;
    const ustY = 1.08 * 0.6;
    const derinlik = (0.5 / 2 + 0.12) * 0.6;

    // --- Anahtar deliği ---
    const delikGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.05, 20);
    const delik = new THREE.Mesh(delikGeo, koyuMat);
    delik.rotation.x = Math.PI / 2;
    delik.position.set(0, -0.1, derinlik);
    this.govdeGrup.add(delik);
    const yarikGeo = new THREE.BoxGeometry(0.055, 0.13, 0.05);
    const yarik = new THREE.Mesh(yarikGeo, koyuMat);
    yarik.position.set(0, -0.19, derinlik);
    this.govdeGrup.add(yarik);
    this.atilanlar.push(delikGeo, yarikGeo);

    // Deliğin çevresindeki ince halka
    const bilezikGeo = new THREE.TorusGeometry(0.1, 0.014, 8, 24);
    const bilezik = new THREE.Mesh(bilezikGeo, this.metalMat);
    bilezik.position.set(0, -0.1, derinlik);
    this.govdeGrup.add(bilezik);
    this.atilanlar.push(bilezikGeo);

    // --- Kazıma: tarih ---
    const kazimaDoku = yaziDokusu([storyConfig.kilit.kazima], {
      genislik: 512,
      yukseklik: 128,
      arkaPlan: 'rgba(0,0,0,0)',
      renk: 'rgba(38, 20, 10, 0.9)',
      fontBoyu: 80,
      harfAraligi: 4
    });
    this.kazimaMat = new THREE.MeshBasicMaterial({
      map: kazimaDoku,
      transparent: true,
      depthWrite: false,
      opacity: 0.8
    });
    const kazimaGeo = new THREE.PlaneGeometry(0.8, 0.2);
    const kazima = new THREE.Mesh(kazimaGeo, this.kazimaMat);
    kazima.position.set(0, 0.3, derinlik + 0.002);
    this.govdeGrup.add(kazima);
    this.atilanlar.push(kazimaGeo, this.kazimaMat);

    // --- Kanca: sabit ayaktan döner ---
    const ayakYaricap = 0.056;
    const kancaAcikligi = 0.27;
    const bacakGeo = new THREE.CylinderGeometry(ayakYaricap, ayakYaricap, 0.42, 16);
    const kemerGeo = new THREE.TorusGeometry(kancaAcikligi, ayakYaricap, 12, 32, Math.PI);
    this.atilanlar.push(bacakGeo, kemerGeo);

    const solBacak = new THREE.Mesh(bacakGeo, this.metalMat);
    solBacak.position.set(0, 0.21, 0);
    const kemer = new THREE.Mesh(kemerGeo, this.metalMat);
    kemer.position.set(kancaAcikligi, 0.42, 0);
    const sagBacak = new THREE.Mesh(bacakGeo, this.metalMat);
    sagBacak.position.set(kancaAcikligi * 2, 0.26, 0);
    sagBacak.scale.y = 0.76;
    this.kancaGrup.add(solBacak, kemer, sagBacak);
    this.kancaGrup.position.set(-kancaAcikligi, ustY - 0.3, 0);
    this.govdeGrup.add(this.kancaGrup);

    this.kilitGrup.add(this.govdeGrup);
    this.sahne.add(this.kilitGrup);
    void yariG;

    // --- Anahtar ---
    const sapGeo = new THREE.CylinderGeometry(0.021, 0.021, 0.52, 12);
    const sap = new THREE.Mesh(sapGeo, this.anahtarMat);
    sap.rotation.x = Math.PI / 2;
    sap.position.z = 0.03;
    this.anahtar.add(sap);
    const halkaGeo = new THREE.TorusGeometry(0.098, 0.026, 10, 26);
    const halka = new THREE.Mesh(halkaGeo, this.anahtarMat);
    halka.position.z = 0.36;
    this.anahtar.add(halka);
    const bilezik2Geo = new THREE.CylinderGeometry(0.038, 0.038, 0.05, 12);
    const bilezik2 = new THREE.Mesh(bilezik2Geo, this.anahtarMat);
    bilezik2.rotation.x = Math.PI / 2;
    bilezik2.position.z = 0.22;
    this.anahtar.add(bilezik2);
    const disGeo = new THREE.BoxGeometry(0.02, 0.085, 0.045);
    for (const dz of [-0.14, -0.21]) {
      const dis = new THREE.Mesh(disGeo, this.anahtarMat);
      dis.position.set(0, -0.052, dz);
      this.anahtar.add(dis);
    }
    this.atilanlar.push(sapGeo, halkaGeo, bilezik2Geo, disGeo);
    this.anahtar.scale.setScalar(1.15);
    this.sahne.add(this.anahtar);

    // --- Arkadaki hale ---
    const parlak = parlaklikDokusu(0.8);
    this.haleMat = new THREE.MeshBasicMaterial({
      map: parlak,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffa877,
      opacity: 0.34
    });
    const haleGeo = new THREE.PlaneGeometry(7, 7);
    this.hale = new THREE.Mesh(haleGeo, this.haleMat);
    this.hale.position.z = -1.5;
    this.kilitGrup.add(this.hale);
    this.atilanlar.push(haleGeo, this.haleMat);

    // --- Zerreler ---
    this.zerre = new ParticleSystem(
      {
        sayi: Math.round(ekran.kalite.bokehParcacik * 0.7),
        alan: new THREE.Vector3(15, 11, 9),
        merkez: new THREE.Vector3(0, 0, -1),
        renk: 0xffc9a0,
        boyut: 2.1,
        opaklik: 0.42,
        dusmeHizi: -0.07
      },
      ekran.pikselOrani()
    );
    this.sahne.add(this.zerre.nesne);

    // --- Işıklar ---
    const anahtarIsik = new THREE.PointLight(0xffb478, 24, 20, 2);
    anahtarIsik.position.set(-2.8, 2.4, 3.2);
    const kenar = new THREE.PointLight(0xff7d80, 14, 18, 2);
    kenar.position.set(3.2, -1.2, 2.0);
    const arka = new THREE.PointLight(0x7c96ff, 10, 18, 2);
    arka.position.set(0.8, 1.4, -2.6);
    this.sahne.add(anahtarIsik, kenar, arka, new THREE.AmbientLight(0x2b1d1a, 1.2));

    this.kilidiYerlestir();
    window.addEventListener('pointermove', this.fareOku, { passive: true });
  }

  /** Kilit, şifre kartının üstünde kalacak şekilde konumlanır. */
  private kilidiYerlestir(): void {
    const alcak = window.innerHeight < 640;
    this.kilitGrup.position.y = alcak ? 0.36 : 1.66;
    this.kilitGrup.scale.setScalar(alcak ? 0.62 : 0.9);
    this.kamera.lookAt(0, this.kilitGrup.position.y * 0.4, 0);
  }

  private fareOku = (e: PointerEvent): void => {
    this.fareHedef.set(
      (e.clientX / window.innerWidth) * 2 - 1,
      (e.clientY / window.innerHeight) * 2 - 1
    );
  };

  /** Yanlış şifrede kilit sarsılır. */
  hataVer(): void {
    this.sarsinti = 1;
  }

  /** Doğru şifrede anahtarın dönüşü; 0-1 arası dışarıdan sürülür. */
  basariAyarla(t: number): void {
    const yeni = clamp01(t);
    // Eşikleri geçerken tıkırtı çal.
    while (this.calinanTik < TIK_ANLARI.length && yeni >= TIK_ANLARI[this.calinanTik].p) {
      this.tikCagrisi?.(TIK_ANLARI[this.calinanTik].guc);
      this.calinanTik++;
    }
    if (yeni < 0.01) this.calinanTik = 0;
    this.basari = yeni;
  }

  guncelle(dt: number, zaman: number): void {
    const az = this.ekran.azHareket;
    this.fare.x = damp(this.fare.x, this.fareHedef.x, 4, dt);
    this.fare.y = damp(this.fare.y, this.fareHedef.y, 4, dt);
    this.sarsinti = Math.max(0, this.sarsinti - dt * 2.4);
    const s = this.sarsinti * this.sarsinti;
    const b = this.basari;

    // --- Kilit ---
    const salinim = az ? 0 : 1;
    const suzulme = Math.sin(zaman * 0.5) * 0.05 * salinim;
    this.govdeGrup.rotation.y =
      (az ? 0.22 : Math.sin(zaman * 0.32) * 0.3) + this.fare.x * 0.3 + s * Math.sin(zaman * 44) * 0.14;
    this.govdeGrup.rotation.x = (az ? 0 : Math.sin(zaman * 0.24) * 0.07) + this.fare.y * 0.12;
    this.govdeGrup.rotation.z = s * Math.sin(zaman * 38) * 0.1;
    this.govdeGrup.position.set(s * Math.sin(zaman * 41) * 0.09, suzulme, 0);

    // Kanca açılışı
    const kanca = smootherstep(remapClamped(b, 0.6, 0.78, 0, 1));
    this.kancaGrup.rotation.y = -1.55 * kanca;
    this.kancaGrup.position.y = 1.08 * 0.6 - 0.3 + kanca * 0.14;

    // Kilidin dağılışı
    const dagilma = easeOutCubic(remapClamped(b, 0.76, 1, 0, 1));
    this.kilitGrup.scale.setScalar((window.innerHeight < 640 ? 0.62 : 0.9) * (1 + dagilma * 1.5));
    this.kilitGrup.position.z = dagilma * 2.6;
    this.metalMat.emissiveIntensity = 0.35 + dagilma * 5;
    this.metalMat.opacity = 1 - smootherstep(remapClamped(b, 0.82, 1, 0, 1));
    const saydam = b > 0.8;
    if (this.metalMat.transparent !== saydam) {
      this.metalMat.transparent = saydam;
      this.metalMat.needsUpdate = true;
    }
    this.kazimaMat.opacity = 0.8 * (1 - dagilma);

    // --- Anahtar ---
    const bekleme = new THREE.Vector3(0.92, -0.52, 0.72);
    const hizala = easeInOutCubic(remapClamped(b, 0, 0.32, 0, 1));
    const sokma = easeInOutCubic(remapClamped(b, 0.32, 0.45, 0, 1));
    const donme = easeInOutCubic(remapClamped(b, 0.46, 0.62, 0, 1));
    const cikma = easeInOutCubic(remapClamped(b, 0.78, 1, 0, 1));

    const hedefZ = lerp(0.68, 0.42, sokma);
    this.anahtar.position.set(
      lerp(bekleme.x + s * Math.sin(zaman * 37) * 0.1, 0, hizala),
      lerp(bekleme.y + (az ? 0 : Math.sin(zaman * 0.62) * 0.05), -0.1, hizala) +
        this.kilitGrup.position.y,
      lerp(bekleme.z, hedefZ, hizala)
    );
    this.anahtar.rotation.set(
      lerp(az ? 0.1 : Math.sin(zaman * 0.4) * 0.16, 0, hizala),
      lerp(0.55, 0, hizala),
      lerp(0.4, -Math.PI / 2 * donme, hizala)
    );
    this.anahtar.scale.setScalar(1.15 * (1 - cikma * 0.85) * (window.innerHeight < 640 ? 0.62 : 0.9));
    this.anahtarMat.opacity = 1 - cikma;
    const anahtarSaydam = cikma > 0.01;
    if (this.anahtarMat.transparent !== anahtarSaydam) {
      this.anahtarMat.transparent = anahtarSaydam;
      this.anahtarMat.needsUpdate = true;
    }

    // --- Hale ve zerreler ---
    this.haleMat.opacity = (0.3 + s * 0.3 + dagilma * 0.7) * (1 - smootherstep(remapClamped(b, 0.9, 1, 0, 1)));
    this.hale.scale.setScalar(1 + dagilma * 1.6);
    this.zerre.guncelle(az ? 0 : zaman, lerp(0.42, 0.95, dagilma));

    // --- Kamera ---
    this.kamera.position.x = this.fare.x * 0.4;
    this.kamera.position.y = -this.fare.y * 0.26;
    this.kamera.position.z = lerp(6.2, 4.4, dagilma);
    this.kamera.lookAt(0, this.kilitGrup.position.y * 0.4 * (1 - dagilma), 0);
  }

  boyutlandir(): void {
    this.kamera.aspect = this.ekran.durum.enBoy;
    this.kamera.updateProjectionMatrix();
    this.kilidiYerlestir();
    this.zerre.pikselOraniAyarla(this.ekran.pikselOrani());
  }

  birak(): void {
    window.removeEventListener('pointermove', this.fareOku);
    this.atilanlar.forEach((a) => a.dispose());
    this.zerre.birak();
    this.ortamHedef.dispose();
    this.pmrem.dispose();
    this.sahne.clear();
  }
}
