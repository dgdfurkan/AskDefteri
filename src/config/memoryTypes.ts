export interface RawMemory {
  id: string;
  src: string;
  thumb: string;
  date: { gun: number; ay: number; yil: number };
  width: number;
  height: number;
  /** 24px genişliğinde base64 önizleme, fotoğraf yüklenene kadar gösterilir. */
  blur: string;
}
