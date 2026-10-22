/**
 * Brand portfolio, arranged as the links of one heating / water circuit.
 * Families and series are the brands' commonly known ranges; confirm what is actually stocked.
 */

export type StageKey = 'uretim' | 'transfer' | 'pompa' | 'kontrol' | 'dagitim';

export const stages: { key: StageKey; name: string; verb: string }[] = [
  { key: 'uretim', name: 'Isı üretimi', verb: 'üretir' },
  { key: 'transfer', name: 'Isı transferi', verb: 'aktarır' },
  { key: 'pompa', name: 'Pompa', verb: 'taşır' },
  { key: 'kontrol', name: 'Akış kontrolü', verb: 'yönetir' },
  { key: 'dagitim', name: 'Dağıtım', verb: 'dağıtır' },
];

export type Family = {
  name: string;
  series?: string;
  /** Slug of a product page on this site, if there is one. */
  product?: string;
};

export type Brand = {
  slug: string;
  name: string;
  origin: string;
  stage: StageKey;
  summary: string;
  families: Family[];
};

export const brands: Brand[] = [
  {
    slug: 'viessmann',
    name: 'Viessmann',
    origin: 'Almanya · 1917',
    stage: 'uretim',
    summary: 'Yoğuşmalı kazanlar, ısı pompaları ve güneş enerjisi sistemleriyle konuttan büyük tesislere ısıtma.',
    families: [
      { name: 'Duvar tipi yoğuşmalı kazanlar', series: 'Vitodens' },
      { name: 'Yer tipi yoğuşmalı kazanlar', series: 'Vitocrossal' },
      { name: 'Isı pompaları', series: 'Vitocal' },
      { name: 'Güneş kolektörleri', series: 'Vitosol' },
      { name: 'Sıcak su boylerleri', series: 'Vitocell' },
    ],
  },
  {
    slug: 'buderus',
    name: 'Buderus',
    origin: 'Almanya · 1731',
    stage: 'uretim',
    summary: 'Duvar ve yer tipi kazanlardan ısı pompası ve boylerlere, eksiksiz ısıtma sistemleri.',
    families: [
      { name: 'Duvar tipi yoğuşmalı kazanlar', series: 'Logamax plus' },
      { name: 'Yer tipi kazanlar', series: 'Logano plus' },
      { name: 'Isı pompaları', series: 'Logatherm' },
      { name: 'Güneş kolektörleri', series: 'Logasol' },
      { name: 'Boylerler', series: 'Logalux' },
      { name: 'Kontrol sistemleri', series: 'Logamatic' },
    ],
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    origin: 'Almanya · 1886',
    stage: 'uretim',
    summary: 'Kombi, ısı pompası, klima ve su ısıtıcılarıyla konut ve ticari binalarda ısıtma ve iklimlendirme.',
    families: [
      { name: 'Yoğuşmalı kombiler', series: 'Condens' },
      { name: 'Isı pompaları', series: 'Compress' },
      { name: 'Klima ve VRF sistemleri', series: 'Climate' },
      { name: 'Elektrikli su ısıtıcılar', series: 'Tronic' },
      { name: 'Endüstriyel kazanlar' },
    ],
  },
  {
    slug: 'alfa-laval',
    name: 'Alfa Laval',
    origin: 'İsveç · 1883',
    stage: 'transfer',
    summary: 'Isıyı bir devreden diğerine kayıpsız aktaran plakalı ısı eşanjörleri.',
    families: [
      { name: 'Contalı plakalı ısı eşanjörleri', series: 'T / M serisi' },
      { name: 'Lehimli plakalı ısı eşanjörleri', series: 'CB serisi' },
      { name: 'Füzyon kaynaklı ısı eşanjörleri', series: 'AlfaNova' },
      { name: 'Kaynaklı ve boru tipi ısı eşanjörleri' },
    ],
  },
  {
    slug: 'grundfos',
    name: 'Grundfos',
    origin: 'Danimarka · 1945',
    stage: 'pompa',
    summary: 'Sirkülasyondan basınçlandırmaya, kuyudan atık suya; dünyanın en büyük pompa üreticisi. Yetkili bayisiyiz.',
    families: [
      { name: 'Islak rotorlu sirkülasyon pompaları', series: 'ALPHA, MAGNA, UPS', product: 'grundfos-alpha2' },
      { name: 'Kuru rotorlu inline pompalar', series: 'TP, TPE' },
      { name: 'Uçtan emişli pompalar', series: 'NB, NK' },
      { name: 'Dikey çok kademeli pompalar', series: 'CR, CRI, CRN, CRE', product: 'cr-cri-crn' },
      { name: 'Hidrofor setleri', series: 'Hydro Multi-E, Hydro MPC, CMV', product: 'hydro-multi-e' },
      { name: 'Dalgıç kuyu pompaları', series: 'SQ, SP', product: 'sq' },
      { name: 'Atık su ve drenaj pompaları', series: 'S, SE, Unilift, Multilift', product: 's-pompa' },
      { name: 'Ters osmoz enerji geri kazanımı', series: 'BMET', product: 'bmet' },
      { name: 'İletişim ve kontrol', series: 'CIM / CIU', product: 'cim-ciu' },
    ],
  },
  {
    slug: 'faf',
    name: 'FAF',
    origin: 'Türkiye',
    stage: 'kontrol',
    summary: 'Tesisatta akışı açan, kesen, yönlendiren ve dengeleyen vana ve armatürler.',
    families: [
      { name: 'Kelebek vanalar' },
      { name: 'Sürgülü vanalar' },
      { name: 'Çekvalfler' },
      { name: 'Pislik tutucular' },
      { name: 'Balans vanaları' },
      { name: 'Yangın tesisatı vanaları' },
    ],
  },
  {
    slug: 'rehau',
    name: 'Rehau',
    origin: 'Almanya · 1948',
    stage: 'dagitim',
    summary: 'Isıyı ve suyu yaşam alanına taşıyan boru sistemleri: yerden ısıtmadan sıhhi tesisata.',
    families: [
      { name: 'Yerden ısıtma ve soğutma', series: 'RAUTHERM' },
      { name: 'Sıhhi tesisat ve ısıtma boruları', series: 'RAUTITAN' },
      { name: 'Sessiz atık su boruları', series: 'RAUPIANO' },
      { name: 'Ön yalıtımlı uzak ısıtma boruları', series: 'RAUTHERMEX, RAUVITHERM' },
    ],
  },
];

export const brandsIn = (stage: StageKey) => brands.filter((b) => b.stage === stage);
