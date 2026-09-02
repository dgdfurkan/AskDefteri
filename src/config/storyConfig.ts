/**
 * Anı defterinin tek merkezî ayar dosyası.
 * Metinler, renkler, zaman aralıkları ve kalite ayarları burada.
 */

export const storyConfig = {
  /** Açılış ve kilit ekranı metinleri */
  acilis: {
    ustBaslik: 'Sana ait',
    baslik: 'Anı Defterimiz',
    altYazi: 'Sen ve ben, aynı sayfada'
  },

  kilit: {
    baslik: 'Kalbimin Şifresi',
    aciklama: 'Bu defterin anahtarı yalnızca sende.',
    yerTutucu: 'Şifreyi yaz',
    dugme: 'Kilidi Aç',
    ipucuMetni: 'İpucu ver',
    ipucu: 'Bize ait dört rakam. Ya da o iki kelime.',
    hataMetni: 'Anahtar dönmedi. Bir daha dene, acelemiz yok.',
    basariMetni: 'Kilit açıldı. Hoş geldin.',
    /** Kilidin üzerine kazınan tarih */
    kazima: '30 · 09 · 2022',
    /** Kabul edilen şifreler. Karşılaştırma büyük/küçük harf, boşluk ve
     *  Türkçe karakter farklarına duyarsızdır: "Aşk Pozitifi" = "askpozitifi". */
    kabulEdilenler: ['1416', 'aşkpozitifi', 'aşk pozitifi', 'aşkpozitif', 'aşk pozitif']
  },

  /** Metro hikâyesi (tanışma anı) */
  hikaye: {
    istasyonAdi: 'TOPKAPI - ULUBATLI',
    hatKodu: 'M1',
    yonYazisi: 'AKSARAY YÖNÜ',
    tarihYazisi: '30 EYLÜL 2022',
    kaydirmaIpucu: 'Kaydır',
    /** Sahne ilerledikçe beliren altyazılar (p: 0-1 aralığında konum) */
    altyazilar: [
      { p: 0.04, sure: 0.09, metin: 'O gün bir peronda bekliyordum.' },
      { p: 0.2, sure: 0.1, metin: 'Tünelin sonunda bir ışık belirdi.' },
      { p: 0.42, sure: 0.08, metin: 'Ve tren yavaşladı.' },
      { p: 0.55, sure: 0.08, metin: 'Kapılar açıldı.' },
      { p: 0.66, sure: 0.08, metin: 'İçeriden sen çıktın.' },
      { p: 0.78, sure: 0.08, metin: 'Kalabalık bir anda sustu.' }
    ],
    finalYazilari: ['Bir metro kapısı açıldı.', 'Ve hayatımızın en güzel yolculuğu başladı.'],
    defterDavet: 'Anı defterimizi aç'
  },

  /** Anı defteri (fotoğraf galerisi) */
  defter: {
    kapakUstu: 'ilk günden bugüne',
    kapakBaslik: 'Anı Defterimiz',
    kapakAlt: 'kaydır',
    kapanisBaslik: 'Buradan sonrası boş.',
    kapanisMetin: 'Seninle biriktireceğimiz güzel anılar için bekliyor.',
    tekrarIzle: 'Hikâyeyi tekrar izle',
    detayIpucu: 'Fotoğrafa dokun',
    kaydirmaIpucu: 'Kaydır'
  },

  ses: {
    ac: 'Müziği aç',
    kapat: 'Müziği kapat'
  },

  gezinme: {
    deftereGit: 'Anı Defteri',
    hikayeyeGit: 'Hikâye'
  },

  /** Renkler */
  renkler: {
    istasyonIsik: 0xe4dccc,
    hatVurgusu: 0xd8443a,
    metroGovde: 0xb9c0c7,
    metroIc: 0xffd9a0,
    /** Beyaz tişört */
    kadinKiyafet: 0xf2f0ec,
    kadinAlt: 0x2b2a30,
    kadinCanta: 0x1f2126,
    kadinSac: 0x3a2620,
    /** Açık gri tişört */
    erkekKiyafet: 0xb9bcc0,
    erkekAlt: 0x2d3340,
    erkekSac: 0x7d5f3d,
    ten: 0xd6ae90,
    sicakFinal: 0xffb877,
    defterZemin: 0x0b0810,
    defterVurgu: 0xe8b4a0
  },

  /** Işık şiddetleri */
  isik: {
    ortam: 0.85,
    tavan: 1.05,
    metroIc: 4.2,
    farlar: 3.0,
    finalSicak: 1.5
  },

  /** Hikâye bölümlerinin ilerleme aralıkları (0-1) */
  bolumler: {
    istasyon: [0.0, 0.12],
    yaklasma: [0.12, 0.38],
    durus: [0.38, 0.5],
    kapilar: [0.5, 0.6],
    inis: [0.6, 0.73],
    yaklasim: [0.73, 0.86],
    sarilma: [0.86, 0.96],
    final: [0.96, 1.0]
  } as const,

  /** Kaydırma uzunlukları (viewport yüksekliği katı) */
  kaydirma: {
    hikayeVh: 780,
    /** Defterde her anı için eklenen yükseklik */
    defterAniBasinaVh: 62,
    defterEkVh: 240
  },

  /** Kalite kademeleri */
  kalite: {
    masaustu: {
      pixelRatio: 2,
      golgeler: true,
      golgeCozunurluk: 1024,
      tozParcacik: 1400,
      bokehParcacik: 900,
      trenYolcu: 7,
      antialias: true
    },
    mobil: {
      pixelRatio: 1.7,
      golgeler: true,
      golgeCozunurluk: 512,
      tozParcacik: 420,
      bokehParcacik: 340,
      trenYolcu: 4,
      antialias: false
    }
  }
} as const;

export type StoryConfig = typeof storyConfig;
