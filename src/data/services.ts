export const services = [
  {
    title: 'Seçim ve projelendirme',
    text: 'Debi, basma yüksekliği ve kullanım koşullarına göre pompayı boyutlandırır, gerekirse sistemi projelendiririz.',
  },
  {
    title: 'Tedarik',
    text: 'Grundfos yetkili bayii olarak orijinal ürünü ve yedek parçayı doğrudan sağlarız.',
  },
  {
    title: 'Devreye alma',
    text: 'Kurulumdan sonra sistemi ayarlar, çalıştırır ve çalışır hâlde teslim ederiz.',
  },
  {
    title: 'Bakım ve servis',
    text: 'Periyodik bakım, arıza onarımı ve teknik destekle sistemin ömrü boyunca yanınızdayız.',
  },
];

export const brands = [
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
