const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes a root-relative path with the configured base (e.g. /lagom-web on GitHub Pages). Other URLs pass through. */
export const url = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
