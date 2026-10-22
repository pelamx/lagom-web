/** Logos shown in the "brands we work with" grid. */
export const logos = [
  'grundfos', 'bosch', 'buderus', 'danfoss', 'honeywell', 'alfa-laval', 'ao-smith', 'baymak',
  'ayvaz', 'airflow', 'kodsan', 'limodor', 'miscea', 'nema', 'frankische', 'fullblaze',
].map((slug) => ({
  slug,
  name: {
    'alfa-laval': 'Alfa Laval', 'ao-smith': 'A. O. Smith', frankische: 'Fränkische', fullblaze: 'Fullblaze',
  }[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1),
  logo: `/images/brands/${slug}.png`,
  /** Logo sits on its own filled box, so it can't be reduced to a silhouette. */
  boxed: slug === 'frankische',
}));
