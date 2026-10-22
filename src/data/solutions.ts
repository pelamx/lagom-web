/** Language-neutral application areas. `id` is the Turkish slug; `intl` is the slug used by other languages. */
export type Solution = {
  id: string;
  intl: string;
  legacy: string;
  image: string;
  /** Related product slugs. */
  products: string[];
};

export const solutions: Solution[] = [
  {
    id: 'bireysel-binalar',
    intl: 'residential-buildings',
    legacy: '/hizmet/bireysel-binalar',
    image: '/images/solutions/bireysel.jpg',
    products: ['grundfos-alpha2', 'cmv-paket-hidrofor', 'sq'],
  },
  {
    id: 'ticari-binalar',
    intl: 'commercial-buildings',
    legacy: '/hizmet/ticari-binalar',
    image: '/images/solutions/ticari.jpg',
    products: ['hydro-multi-e', 'cmv-paket-hidrofor', 'grundfos-alpha2', 'cim-ciu'],
  },
  {
    id: 'endustriyel-tesisler',
    intl: 'industrial-facilities',
    legacy: '/hizmet/endüstriyel-proses-ve-tesisler',
    image: '/images/solutions/endustriyel.jpg',
    products: ['cr-cri-crn', 'bmet', 'cim-ciu'],
  },
  {
    id: 'kentsel-atik-su',
    intl: 'municipal-wastewater',
    legacy: '/hizmet/kentsel-atık-su',
    image: '/images/solutions/kentsel-atik-su.jpg',
    products: ['s-pompa', 'cim-ciu'],
  },
  {
    id: 'su-temini',
    intl: 'water-supply',
    legacy: '/hizmet/su-temini',
    image: '/images/solutions/su-temini.jpg',
    products: ['sq', 'cr-cri-crn', 'bmet'],
  },
];
