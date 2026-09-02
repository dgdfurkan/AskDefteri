import * as THREE from 'three';

/** Yumuşak hatlı kalp silueti. Hem kilit ekranında hem defterin sonunda kullanılır. */
export function kalpSekli(): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(0, 0.52);
  s.bezierCurveTo(0, 0.84, -0.36, 1.08, -0.72, 1.08);
  s.bezierCurveTo(-1.28, 1.08, -1.28, 0.36, -1.28, 0.36);
  s.bezierCurveTo(-1.28, -0.12, -0.82, -0.62, 0, -1.18);
  s.bezierCurveTo(0.82, -0.62, 1.28, -0.12, 1.28, 0.36);
  s.bezierCurveTo(1.28, 0.36, 1.28, 1.08, 0.72, 1.08);
  s.bezierCurveTo(0.36, 1.08, 0, 0.84, 0, 0.52);
  return s;
}
