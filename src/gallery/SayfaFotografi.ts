import * as THREE from 'three';
import { bantDokusu } from '../objects/textures';
import type { Memory } from '../config/memories';
import { varlikYolu } from '../config/memories';

/** Sayfaya yapıştırılan fotoğrafın uzun kenarı. */
const UZUN_KENAR = 1.58;
const CERCEVE = 0.055;

const yukleyici = new THREE.TextureLoader();
let bant: THREE.CanvasTexture | null = null;

/**
 * Defter sayfasına bantla tutturulmuş tek bir fotoğraf.
 * Doku aşamalı yüklenir: bulanık önizleme -> küçük boy -> tam boy.
 */
export class SayfaFotografi {
  readonly grup = new THREE.Group();
  readonly ani: Memory;
  readonly genislik: number;
  readonly yukseklik: number;
  /** Işın testinde kullanılan yüzey */
  readonly hedefMesh: THREE.Mesh;

  private fotoMat: THREE.MeshStandardMaterial;
  private cerceveMat: THREE.MeshStandardMaterial;
  private kucukYuklendi = false;
  private tamYuklendi = false;
  private tamDoku: THREE.Texture | null = null;
  private dokular: THREE.Texture[] = [];
  private atilanlar: Array<THREE.BufferGeometry | THREE.Material> = [];

  constructor(ani: Memory) {
    this.ani = ani;
    const enBoy = ani.width / ani.height;
    const fw = enBoy >= 1 ? UZUN_KENAR : UZUN_KENAR * enBoy;
    const fh = enBoy >= 1 ? UZUN_KENAR / enBoy : UZUN_KENAR;
    this.genislik = fw + CERCEVE * 2;
    this.yukseklik = fh + CERCEVE * 2;

    // Fotoğraf kâğıdının beyaz kenarı
    this.cerceveMat = new THREE.MeshStandardMaterial({
      color: 0xfaf6ee,
      roughness: 0.78,
      metalness: 0
    });
    const cerceveGeo = new THREE.PlaneGeometry(this.genislik, this.yukseklik);
    const cerceve = new THREE.Mesh(cerceveGeo, this.cerceveMat);
    cerceve.position.z = 0.004;
    this.grup.add(cerceve);
    this.hedefMesh = cerceve;
    this.atilanlar.push(cerceveGeo, this.cerceveMat);

    const onizleme = yukleyici.load(ani.blur);
    onizleme.colorSpace = THREE.SRGBColorSpace;
    this.dokular.push(onizleme);
    this.fotoMat = new THREE.MeshStandardMaterial({
      map: onizleme,
      roughness: 0.52,
      metalness: 0
    });
    const fotoGeo = new THREE.PlaneGeometry(fw, fh);
    const foto = new THREE.Mesh(fotoGeo, this.fotoMat);
    foto.position.z = 0.006;
    this.grup.add(foto);
    this.atilanlar.push(fotoGeo, this.fotoMat);

    // Köşelerdeki bantlar
    if (!bant) bant = bantDokusu();
    const bantMat = new THREE.MeshStandardMaterial({
      map: bant,
      transparent: true,
      opacity: 0.9,
      roughness: 0.85,
      depthWrite: false
    });
    const bantGeo = new THREE.PlaneGeometry(0.24, 0.085);
    this.atilanlar.push(bantGeo, bantMat);
    for (const [sx, sy, don] of [
      [-1, 1, 0.78],
      [1, -1, 0.78]
    ] as const) {
      const b = new THREE.Mesh(bantGeo, bantMat);
      b.position.set((sx * this.genislik) / 2, (sy * this.yukseklik) / 2, 0.009);
      b.rotation.z = don * sx * sy;
      this.grup.add(b);
    }

    cerceve.userData.foto = this;
  }

  /** Sayfa yaklaşınca küçük boy fotoğrafı yükler. */
  kucukYukle(): void {
    if (this.kucukYuklendi) return;
    this.kucukYuklendi = true;
    yukleyici.load(varlikYolu(this.ani.thumb), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      if (!this.tamDoku) {
        this.fotoMat.map = t;
        this.fotoMat.needsUpdate = true;
      }
      this.dokular.push(t);
    });
  }

  /** Fotoğraf büyütülünce tam çözünürlüğe geçer; dokuyu geri döndürür. */
  tamYukle(bitince?: (doku: THREE.Texture) => void): void {
    if (this.tamDoku) {
      bitince?.(this.tamDoku);
      return;
    }
    if (this.tamYuklendi) return;
    this.tamYuklendi = true;
    yukleyici.load(varlikYolu(this.ani.src), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      this.tamDoku = t;
      this.fotoMat.map = t;
      this.fotoMat.needsUpdate = true;
      this.dokular.push(t);
      bitince?.(t);
    });
  }

  get mevcutDoku(): THREE.Texture | null {
    return this.fotoMat.map;
  }

  birak(): void {
    this.dokular.forEach((t) => t.dispose());
    this.atilanlar.forEach((a) => a.dispose());
    this.dokular.length = 0;
    this.atilanlar.length = 0;
  }
}
