import { storyConfig } from '../config/storyConfig';

/** Türkçe harfleri sadeleştirir; İ/I/ı ayrımı toLowerCase'e bırakılmaz. */
const HARF_ESLEME: Record<string, string> = {
  İ: 'i', I: 'i', ı: 'i', Ş: 's', ş: 's', Ğ: 'g', ğ: 'g',
  Ü: 'u', ü: 'u', Ö: 'o', ö: 'o', Ç: 'c', ç: 'c', Â: 'a', â: 'a'
};

/**
 * Şifreyi karşılaştırmaya hazırlar: harf büyüklüğü, boşluk, noktalama ve
 * Türkçe karakter farkları yok sayılır. "Aşk Pozitifi" = "askpozitifi".
 */
export function sifreNormalize(girdi: string): string {
  return [...girdi]
    .map((ch) => HARF_ESLEME[ch] ?? ch.toLowerCase())
    .join('')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

const KABUL = storyConfig.kilit.kabulEdilenler.map(sifreNormalize);

export function sifreDogruMu(girdi: string): boolean {
  const n = sifreNormalize(girdi);
  return n.length > 0 && KABUL.includes(n);
}
