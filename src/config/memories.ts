/**
 * Anıların listesi.
 * Fotoğraflar `npm run photos` ile hazırlanır ve memories.generated.ts'e yazılır.
 * Buradaki `notlar` sözlüğüne id yazarak her fotoğrafa başlık ve not ekleyebilirsin.
 */
import { generatedMemories } from './memories.generated';
import type { RawMemory } from './memoryTypes';

export interface MemoryNote {
  baslik?: string;
  not?: string;
}

/** id -> not. id, fotoğrafın tarihinden üretilir: '2022-10-22' ya da '2022-10-22-2'. */
export const notlar: Record<string, MemoryNote> = {
  '2022-02-23': { baslik: 'İlk kare', not: 'Her şeyin başladığı gün.' }
};

export const AYLAR_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
] as const;

export interface Memory extends RawMemory {
  tarihYazisi: string;
  yilYazisi: string;
  gunAyYazisi: string;
  baslik?: string;
  not?: string;
  /** Tarihe göre sıralanmış listedeki konumu */
  sira: number;
}

function bicimlendir(m: RawMemory): string {
  return `${m.date.gun} ${AYLAR_TR[m.date.ay - 1]} ${m.date.yil}`;
}

export const memories: Memory[] = generatedMemories.map((m, i) => ({
  ...m,
  tarihYazisi: bicimlendir(m),
  gunAyYazisi: `${m.date.gun} ${AYLAR_TR[m.date.ay - 1]}`,
  yilYazisi: String(m.date.yil),
  baslik: notlar[m.id]?.baslik,
  not: notlar[m.id]?.not,
  sira: i
}));

/** Dosya yolunu dağıtım tabanına göre çözer (GitHub Pages alt dizini dahil). */
export function varlikYolu(yol: string): string {
  const taban = import.meta.env.BASE_URL || './';
  return `${taban}${yol}`.replace(/([^:]\/)\/+/g, '$1');
}
