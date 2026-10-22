/** Language-neutral product records. Texts live in src/i18n/<locale>.ts under `productData`. */
export type Product = {
  slug: string;
  /** Path on the old site, used for redirects. */
  legacy: string;
  image: string;
};

export const products: Product[] = [
  { slug: 'hydro-multi-e', legacy: '/urun/hydro-multi-e', image: '/images/products/hydro-multi-e.webp' },
  { slug: 'cmv-paket-hidrofor', legacy: '/urun/cmv-paket-hidrofor', image: '/images/products/cmv.webp' },
  { slug: 'grundfos-alpha2', legacy: '/urun/grundfos-alpha2', image: '/images/products/alpha2.webp' },
  { slug: 'cr-cri-crn', legacy: '/urun/cr-cri-crn-yüksek-basınç-pompalar', image: '/images/products/cr.webp' },
  { slug: 'sq', legacy: '/urun/sq', image: '/images/products/sq.webp' },
  { slug: 's-pompa', legacy: '/urun/s-pompa', image: '/images/products/s-pompa.webp' },
  { slug: 'bmet', legacy: '/urun/bmet-sistemi', image: '/images/products/bmet.webp' },
  { slug: 'cim-ciu', legacy: '/urun/cim-ciu-grundfos-pompa', image: '/images/products/cim-ciu.webp' },
];

export const productCode = (p: Product) => `P-${String(products.indexOf(p) + 1).padStart(2, '0')}`;
