import * as THREE from 'three';

export interface ParcacikSecenek {
  sayi: number;
  alan: THREE.Vector3;
  merkez: THREE.Vector3;
  renk: number;
  boyut: number;
  opaklik: number;
  /** Dokulu yumuşak daire yerine sade daire kullanılır; ek doku yüklenmez. */
  dusmeHizi: number;
}

const vertexShader = /* glsl */ `
  uniform float uZaman;
  uniform vec3 uAlan;
  uniform vec3 uMerkez;
  uniform float uBoyut;
  uniform float uPikselOrani;
  attribute float aFaz;
  attribute float aHiz;
  attribute float aBoyut;
  varying float vSonme;

  void main() {
    vec3 p = position;
    // Dikey sürüklenme: alan yüksekliğinde sarmalanır, birikme olmaz.
    float y = mod(p.y - uZaman * aHiz + uAlan.y * 0.5, uAlan.y) - uAlan.y * 0.5;
    p.y = y;
    p.x += sin(uZaman * 0.32 + aFaz) * 0.42;
    p.z += cos(uZaman * 0.24 + aFaz * 1.7) * 0.42;
    p += uMerkez;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uBoyut * aBoyut * uPikselOrani * (14.0 / max(1.0, -mv.z));
    // Uzaktakiler söner, kameraya çok yakın olanlar da yumuşar.
    vSonme = smoothstep(90.0, 12.0, -mv.z) * smoothstep(0.6, 3.0, -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uRenk;
  uniform float uOpaklik;
  varying float vSonme;

  void main() {
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = dot(d, d);
    if (r > 0.25) discard;
    float a = smoothstep(0.25, 0.0, r);
    gl_FragColor = vec4(uRenk, a * uOpaklik * vSonme);
  }
`;

/** Havada asılı ince toz. Tüm hareket shader içinde, CPU'da kare başına iş yok. */
export class ParticleSystem {
  readonly nesne: THREE.Points;
  private mat: THREE.ShaderMaterial;
  private geo: THREE.BufferGeometry;

  constructor(secenek: ParcacikSecenek, pikselOrani: number) {
    const n = secenek.sayi;
    const konum = new Float32Array(n * 3);
    const faz = new Float32Array(n);
    const hiz = new Float32Array(n);
    const boyut = new Float32Array(n);

    for (let i = 0; i < n; i++) {
      konum[i * 3] = (Math.random() - 0.5) * secenek.alan.x;
      konum[i * 3 + 1] = (Math.random() - 0.5) * secenek.alan.y;
      konum[i * 3 + 2] = (Math.random() - 0.5) * secenek.alan.z;
      faz[i] = Math.random() * Math.PI * 2;
      hiz[i] = secenek.dusmeHizi * (0.4 + Math.random() * 1.2);
      boyut[i] = 0.5 + Math.random() * 1.1;
    }

    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(konum, 3));
    this.geo.setAttribute('aFaz', new THREE.BufferAttribute(faz, 1));
    this.geo.setAttribute('aHiz', new THREE.BufferAttribute(hiz, 1));
    this.geo.setAttribute('aBoyut', new THREE.BufferAttribute(boyut, 1));
    this.geo.boundingSphere = new THREE.Sphere(
      secenek.merkez.clone(),
      Math.max(secenek.alan.x, secenek.alan.y, secenek.alan.z)
    );

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uZaman: { value: 0 },
        uAlan: { value: secenek.alan.clone() },
        uMerkez: { value: secenek.merkez.clone() },
        uRenk: { value: new THREE.Color(secenek.renk) },
        uBoyut: { value: secenek.boyut },
        uOpaklik: { value: secenek.opaklik },
        uPikselOrani: { value: pikselOrani }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.nesne = new THREE.Points(this.geo, this.mat);
    this.nesne.frustumCulled = false;
    this.nesne.renderOrder = 5;
  }

  guncelle(zaman: number, opaklik?: number): void {
    this.mat.uniforms.uZaman.value = zaman;
    if (opaklik !== undefined) this.mat.uniforms.uOpaklik.value = opaklik;
  }

  pikselOraniAyarla(deger: number): void {
    this.mat.uniforms.uPikselOrani.value = deger;
  }

  birak(): void {
    this.geo.dispose();
    this.mat.dispose();
  }
}
