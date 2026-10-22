/** Language-neutral company data. Localised strings (hours, address line, tagline…) live in src/i18n/<locale>.ts. */
export const site = {
  name: 'Lagom Mühendislik',
  url: 'https://lagommuhendislik.com',
  phone: '0212 245 06 74',
  phoneIntl: '+90 212 245 06 74',
  phoneHref: 'tel:+902122450674',
  whatsapp: '0531 660 74 79',
  whatsappIntl: '+90 531 660 74 79',
  whatsappHref: 'https://wa.me/905316607479',
  email: 'info@lagommuhendislik.com',
  street: 'Ömer Avni, Beytül Malcı Sk. 8/A',
  postalCode: '34427',
  geo: { lat: 41.0354888, lng: 28.9900265 },
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Lagom+M%C3%BChendislik+Beyo%C4%9Flu',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5322263967064!2d28.990026476347715!3d41.03548881774837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab741c8d9005d%3A0x45cc325056677809!2sLagom%20M%C3%BChendislik!5e0!3m2!1str!2str!4v1720611516502!5m2!1str!2str',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/lagommuhendislik' },
    { label: 'Facebook', href: 'https://www.facebook.com/lagommuhendislik' },
    { label: 'X', href: 'https://x.com/Lagommuhendislik' },
  ],
};

/** WhatsApp link with a prefilled message. */
export const whatsappWith = (text: string) => `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
