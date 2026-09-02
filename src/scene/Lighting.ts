import * as THREE from 'three';
import { storyConfig } from '../config/storyConfig';
import { IST } from '../objects/Station';
import { clamp01, lerp, smoothstep } from '../animation/easing';

/**
 * İstasyon aydınlatması. Nokta ışık sayısı bilinçli olarak düşük tutulur;
 * atmosferin çoğu emissive yüzeyler ve sisten gelir.
 */
export class Lighting {
  readonly grup = new THREE.Group();

  private ortam: THREE.HemisphereLight;
  private tavan: THREE.DirectionalLight;
  private sicak: THREE.PointLight;
  private dolgu: THREE.PointLight;
  private seritIsiklari: THREE.PointLight[] = [];

  constructor(golgeler: boolean, golgeCozunurluk: number) {
    this.ortam = new THREE.HemisphereLight(
      storyConfig.renkler.istasyonIsik,
      0x6a6252,
      storyConfig.isik.ortam
    );
    this.grup.add(this.ortam);

    this.tavan = new THREE.DirectionalLight(0xf1e7d4, storyConfig.isik.tavan);
    this.tavan.position.set(4, 9, 7);
    this.tavan.target.position.set(-1, 0, 4);
    if (golgeler) {
      this.tavan.castShadow = true;
      this.tavan.shadow.mapSize.set(golgeCozunurluk, golgeCozunurluk);
      const c = this.tavan.shadow.camera;
      c.left = -14;
      c.right = 14;
      c.top = 14;
      c.bottom = -8;
      c.near = 1;
      c.far = 30;
      c.updateProjectionMatrix();
      this.tavan.shadow.bias = -0.0012;
      this.tavan.shadow.normalBias = 0.02;
    }
    this.grup.add(this.tavan, this.tavan.target);

    // Buluşma anında devreye giren sıcak anahtar ışık.
    this.sicak = new THREE.PointLight(storyConfig.renkler.sicakFinal, 0, 16, 1.6);
    this.sicak.position.set(-1.6, 2.6, 6.6);
    this.grup.add(this.sicak);

    // Peronun dolgu ışığı: yüzler tamamen karanlıkta kalmasın.
    this.dolgu = new THREE.PointLight(0xd8cdb6, 1.1, 26, 1.7);
    this.dolgu.position.set(0, 3.4, 6);
    this.grup.add(this.dolgu);

    // Tavan şeritlerini duyulur kılan iki geniş menzilli nokta ışık.
    for (const sx of [-6, 14]) {
      const s = new THREE.PointLight(0xf0e4cc, 12, 34, 1.5);
      s.position.set(sx, IST.tavanY - 0.6, 4.6);
      this.grup.add(s);
      this.seritIsiklari.push(s);
    }
  }

  /** Hikâye ilerlemesine göre ışık dengesi: soğuk peron -> sıcak final. */
  guncelle(p: number, kapiAcik: number): void {
    const finalGuc = smoothstep(clamp01((p - 0.78) / 0.2));
    this.sicak.intensity = storyConfig.isik.finalSicak * finalGuc * 2.2;
    this.ortam.intensity = lerp(storyConfig.isik.ortam, storyConfig.isik.ortam * 1.25, finalGuc);
    this.ortam.color.setHex(storyConfig.renkler.istasyonIsik).lerp(new THREE.Color(0xffcfa4), finalGuc * 0.45);
    this.tavan.intensity = lerp(storyConfig.isik.tavan, storyConfig.isik.tavan * 0.82, finalGuc);
    // Kapı açıkken peronun kapı önü hafifçe ısınır.
    this.dolgu.color.setHex(0xd8cdb6).lerp(new THREE.Color(0xffd9a8), clamp01(kapiAcik) * 0.45);
    this.dolgu.intensity = 1.1 + clamp01(kapiAcik) * 0.5;
  }

  birak(): void {
    this.seritIsiklari.forEach((s) => s.dispose());
    this.tavan.dispose();
    this.sicak.dispose();
    this.dolgu.dispose();
    this.ortam.dispose();
  }
}
