/**
 * Brand portfolio, arranged as the links of one heating / water circuit.
 * Language-neutral parts only; names of families, summaries and origins live in src/i18n/<locale>.ts under `brandData`
 * (family names are matched to these entries by position).
 * Families and series are the brands' commonly known ranges; confirm what is actually stocked.
 */

export const stageKeys = ['uretim', 'transfer', 'pompa', 'kontrol', 'dagitim'] as const;
export type StageKey = (typeof stageKeys)[number];

export type Family = {
  series?: string;
  /** Slug of a product page on this site, if there is one. */
  product?: string;
};

export type Brand = {
  slug: string;
  name: string;
  stage: StageKey;
  families: Family[];
};

export const brands: Brand[] = [
  {
    slug: 'viessmann',
    name: 'Viessmann',
    stage: 'uretim',
    families: [{ series: 'Vitodens' }, { series: 'Vitocrossal' }, { series: 'Vitocal' }, { series: 'Vitosol' }, { series: 'Vitocell' }],
  },
  {
    slug: 'buderus',
    name: 'Buderus',
    stage: 'uretim',
    families: [
      { series: 'Logamax plus' },
      { series: 'Logano plus' },
      { series: 'Logatherm' },
      { series: 'Logasol' },
      { series: 'Logalux' },
      { series: 'Logamatic' },
    ],
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    stage: 'uretim',
    families: [{ series: 'Condens' }, { series: 'Compress' }, { series: 'Climate' }, { series: 'Tronic' }, {}],
  },
  {
    slug: 'alfa-laval',
    name: 'Alfa Laval',
    stage: 'transfer',
    families: [{ series: 'T / M' }, { series: 'CB' }, { series: 'AlfaNova' }, {}],
  },
  {
    slug: 'grundfos',
    name: 'Grundfos',
    stage: 'pompa',
    families: [
      { series: 'ALPHA, MAGNA, UPS', product: 'grundfos-alpha2' },
      { series: 'TP, TPE' },
      { series: 'NB, NK' },
      { series: 'CR, CRI, CRN, CRE', product: 'cr-cri-crn' },
      { series: 'Hydro Multi-E, Hydro MPC, CMV', product: 'hydro-multi-e' },
      { series: 'SQ, SP', product: 'sq' },
      { series: 'S, SE, Unilift, Multilift', product: 's-pompa' },
      { series: 'BMET', product: 'bmet' },
      { series: 'CIM / CIU', product: 'cim-ciu' },
    ],
  },
  {
    slug: 'faf',
    name: 'FAF',
    stage: 'kontrol',
    families: [{}, {}, {}, {}, {}, {}],
  },
  {
    slug: 'rehau',
    name: 'Rehau',
    stage: 'dagitim',
    families: [{ series: 'RAUTHERM' }, { series: 'RAUTITAN' }, { series: 'RAUPIANO' }, { series: 'RAUTHERMEX, RAUVITHERM' }],
  },
];

export const brandsIn = (stage: StageKey) => brands.filter((b) => b.stage === stage);
