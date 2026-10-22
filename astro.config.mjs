import { defineConfig } from 'astro/config';
import { products } from './src/data/products.ts';
import { solutions } from './src/data/solutions.ts';

// SITE / BASE_PATH are set by the GitHub Pages workflow; locally and on the real domain the site lives at the root.
const site = process.env.SITE ?? 'https://lagommuhendislik.com';
const base = process.env.BASE_PATH ?? '/';
const withBase = (path) => `${base.replace(/\/$/, '')}${path}`;

// Old lagommuhendislik.com URLs → new pages, so existing links and search results keep working.
const legacy = {
  ...Object.fromEntries(products.map((p) => [p.legacy, `/urunler/${p.slug}`])),
  ...Object.fromEntries(solutions.map((s) => [s.legacy, `/uygulama-alanlari/${s.id}`])),
  '/hizmet/grundfos-pompa': '/grundfos',
  '/icerik/grundfos-yetkili-bayii': '/grundfos',
  '/icerik/grundfos-servisleri': '/hizmetler',
  '/icerik/hakkımızda': '/hakkimizda',
  '/icerik/biz-kimiz': '/hakkimizda',
  '/icerik/misyonumuz': '/hakkimizda',
  '/icerik/vizyonumuz': '/hakkimizda',
  '/referanslar': '/hakkimizda#markalar',
  '/bayilerimiz': '/iletisim',
  '/urun-kategori/urunlerimiz': '/urunler',
  '/haberler': '/',
  '/haberdetay/grundfos-pompa': '/grundfos',
  '/haberdetay/lagom-felsefesi': '/hakkimizda',
  '/haberdetay/domestik-atık-su': '/uygulama-alanlari/bireysel-binalar',
  '/haberdetay/ticari-binalar-i̇çin-su-pompası': '/uygulama-alanlari/ticari-binalar',
};

export default defineConfig({
  site,
  base,
  redirects: Object.fromEntries(Object.entries(legacy).map(([from, to]) => [from, withBase(to)])),
});
