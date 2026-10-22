import { url } from '../lib/url';
import { solutions } from '../data/solutions';
import tr from './tr';
import en from './en';
import ru from './ru';
import uz from './uz';

export const locales = ['tr', 'en', 'ru', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

export const languages: Record<Locale, { label: string; name: string; og: string }> = {
  tr: { label: 'TR', name: 'Türkçe', og: 'tr_TR' },
  en: { label: 'EN', name: 'English', og: 'en_US' },
  ru: { label: 'RU', name: 'Русский', og: 'ru_RU' },
  uz: { label: 'UZ', name: 'O‘zbekcha', og: 'uz_UZ' },
};

export const dict = { tr, en, ru, uz };
export type Dict = typeof tr;

export type PageKey = 'home' | 'products' | 'solutions' | 'services' | 'about' | 'grundfos' | 'contact';

// Turkish keeps its own path names; every other language uses the English ones under its prefix.
const segments: Record<'tr' | 'intl', Record<PageKey, string>> = {
  tr: { home: '', products: 'urunler', solutions: 'uygulama-alanlari', services: 'hizmetler', about: 'hakkimizda', grundfos: 'grundfos', contact: 'iletisim' },
  intl: { home: '', products: 'products', solutions: 'applications', services: 'services', about: 'about', grundfos: 'grundfos', contact: 'contact' },
};
const group = (l: Locale) => (l === 'tr' ? 'tr' : 'intl');

/** Path segment for a page in a locale (no base, no locale prefix). */
export const segment = (l: Locale, key: PageKey) => segments[group(l)][key];

/** Slug of an application area in a locale. `id` is the Turkish slug. */
export const solutionSlug = (l: Locale, id: string) => {
  const s = solutions.find((x) => x.id === id);
  return !s || l === 'tr' ? id : s.intl;
};

/**
 * Link to a page in a locale, with the site base applied.
 * `slug` is a product slug, or a solution id (Turkish slug) for `solutions`.
 */
export function href(l: Locale, key: PageKey, slug?: string, suffix = '') {
  const prefix = l === defaultLocale ? '' : l;
  const s = slug && key === 'solutions' ? solutionSlug(l, slug) : slug;
  const path = [prefix, segment(l, key), s].filter(Boolean).join('/');
  return url(`/${path}`.replace(/\/+$/, '') || '/') + suffix;
}

/** Works out locale, page and slug from a URL, so any component can find its language and the page's twins. */
export function parse(u: URL): { locale: Locale; key: PageKey | null; slug?: string } {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const parts = decodeURIComponent(u.pathname.slice(base.length)).split('/').filter(Boolean);
  const locale = (locales as readonly string[]).includes(parts[0]) ? (parts.shift() as Locale) : defaultLocale;
  const map = segments[group(locale)];
  const key = parts.length === 0 ? 'home' : ((Object.keys(map) as PageKey[]).find((k) => map[k] === parts[0]) ?? null);
  let slug = parts[1];
  if (slug && key === 'solutions' && locale !== 'tr') slug = solutions.find((s) => s.intl === slug)?.id ?? slug;
  return { locale, key, slug };
}

/** Locale and dictionary for the page being rendered. */
export function useT(u: URL) {
  const { locale } = parse(u);
  return { locale, t: dict[locale] };
}

/** The same page in every locale (home when the page is unknown, e.g. 404). */
export function alternates(u: URL) {
  const { key, slug } = parse(u);
  return locales.map((l) => ({ locale: l, href: key ? href(l, key, slug) : href(l, 'home') }));
}
