/** Hikâye boyunca kullanılan saf matematik yardımcıları. Hepsi durumsuzdur. */

export const clamp01 = (v: number): number => (v < 0 ? 0 : v > 1 ? 1 : v);

export const clamp = (v: number, min: number, max: number): number =>
  v < min ? min : v > max ? max : v;

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const inverseLerp = (a: number, b: number, v: number): number =>
  a === b ? 0 : (v - a) / (b - a);

/** v değerini [a,b] aralığından [c,d] aralığına taşır ve sınırlar. */
export const remapClamped = (v: number, a: number, b: number, c: number, d: number): number =>
  lerp(c, d, clamp01(inverseLerp(a, b, v)));

export const smoothstep = (t: number): number => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};

export const smootherstep = (t: number): number => {
  const x = clamp01(t);
  return x * x * x * (x * (x * 6 - 15) + 10);
};

export const easeInOutCubic = (t: number): number => {
  const x = clamp01(t);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - clamp01(t), 3);

export const easeInCubic = (t: number): number => Math.pow(clamp01(t), 3);

export const easeOutQuint = (t: number): number => 1 - Math.pow(1 - clamp01(t), 5);

export const easeInOutSine = (t: number): number => -(Math.cos(Math.PI * clamp01(t)) - 1) / 2;

export const easeOutSine = (t: number): number => Math.sin((clamp01(t) * Math.PI) / 2);

export const easeInOutQuart = (t: number): number => {
  const x = clamp01(t);
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
};

/** Yumuşak geri yaylanma; tanıma ve sarılma anlarında kullanılır. */
export const easeOutBack = (t: number, guc = 1.25): number => {
  const x = clamp01(t);
  const c3 = guc + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + guc * Math.pow(x - 1, 2);
};

/** 0'da ve 1'de sıfır, ortada 1 olan yumuşak tepe. Vurgu hareketleri için. */
export const puls = (t: number): number => Math.sin(clamp01(t) * Math.PI);

/**
 * Kare hızından bağımsız üstel yumuşatma.
 * hiz: saniyede yakınsama oranı (büyük değer = daha hızlı takip)
 */
export const damp = (current: number, target: number, hiz: number, dt: number): number =>
  target + (current - target) * Math.exp(-hiz * dt);

/** Bir aralığın içindeki yerel ilerlemeyi verir. */
export const segment = (p: number, a: number, b: number): number => clamp01(inverseLerp(a, b, p));
