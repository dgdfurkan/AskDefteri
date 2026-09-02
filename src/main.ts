import './style.css';
import { App, webglVarMi } from './core/App';
import { storyConfig } from './config/storyConfig';

const canvas = document.getElementById('sahne') as HTMLCanvasElement;

if (!webglVarMi()) {
  // 3B çalışmıyorsa aynı hikâye metniyle sade bir sayfa göster.
  canvas.remove();
  const kutu = document.createElement('div');
  kutu.className = 'yedek';
  kutu.innerHTML = `
    <p class="yedek-ust">${storyConfig.acilis.ustBaslik}</p>
    <h1>${storyConfig.acilis.baslik}</h1>
    ${storyConfig.hikaye.finalYazilari.map((t) => `<p>${t}</p>`).join('')}
    <p class="yedek-not">Bu cihaz 3B çizimi desteklemiyor. Tarayıcını güncellersen defter tüm derinliğiyle açılır.</p>
  `;
  (document.getElementById('ui-katmani') as HTMLElement).appendChild(kutu);
} else {
  const uygulama = new App(canvas);
  window.addEventListener('pagehide', () => uygulama.birak(), { once: true });
  // Geliştirme sırasında sahneyi konsoldan incelemek için.
  if (import.meta.env.DEV) (window as unknown as Record<string, unknown>).__ani = uygulama;
}
