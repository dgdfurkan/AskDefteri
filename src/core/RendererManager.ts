import * as THREE from 'three';
import type { ResponsiveManager } from './ResponsiveManager';

/**
 * Tek bir WebGLRenderer'ı tüm sahneler için paylaşır.
 * Sekme görünmezken çizimi durdurur, boyut ve piksel oranını güvenli günceller.
 */
export class RendererManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly canvas: HTMLCanvasElement;
  private ekran: ResponsiveManager;
  private gorunur = true;

  constructor(canvas: HTMLCanvasElement, ekran: ResponsiveManager) {
    this.canvas = canvas;
    this.ekran = ekran;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: ekran.kalite.antialias,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false
    });

    this.renderer.setClearColor(0x05050a, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.enabled = ekran.kalite.golgeler;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.info.autoReset = true;

    this.boyutla();
    ekran.dinle(() => this.boyutla());

    document.addEventListener('visibilitychange', () => {
      this.gorunur = document.visibilityState === 'visible';
    });

    this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
    });
  }

  get cizilebilir(): boolean {
    return this.gorunur;
  }

  boyutla(): void {
    const { genislik, yukseklik } = this.ekran.durum;
    this.renderer.setPixelRatio(this.ekran.pikselOrani());
    this.renderer.setSize(genislik, yukseklik, false);
  }

  ciz(sahne: THREE.Scene, kamera: THREE.Camera): void {
    this.renderer.render(sahne, kamera);
  }
}
