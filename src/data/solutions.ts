export type Solution = {
  slug: string;
  legacy: string;
  title: string;
  image: string;
  summary: string;
  body: string[];
  items: string[];
  /** Related product slugs. */
  products: string[];
};

export const solutions: Solution[] = [
  {
    slug: 'bireysel-binalar',
    legacy: '/hizmet/bireysel-binalar',
    title: 'Bireysel Binalar',
    image: '/images/solutions/bireysel.jpg',
    summary: 'Müstakil evler ve konutlar için ısıtma, sıcak su ve basınçlandırma.',
    body: [
      'Evsel kullanım için tasarlanan kapsamlı Grundfos pompalarıyla konforu artıran, verimli ve kalıcı çözümler kuruyoruz.',
    ],
    items: [
      'Sıcak su resirkülasyonu',
      'Zemin suyu alımı',
      'Isıtma',
      'Su basınçlandırma',
      'Yağmur suyu toplama',
      'Atık su',
    ],
    products: ['grundfos-alpha2', 'cmv-paket-hidrofor', 'sq'],
  },
  {
    slug: 'ticari-binalar',
    legacy: '/hizmet/ticari-binalar',
    title: 'Ticari Binalar',
    image: '/images/solutions/ticari.jpg',
    summary: 'Otel, hastane, ofis ve havalimanları için yüksek performanslı sistemler.',
    body: [
      'Otel, hastane, ofis kuleleri ve havalimanları gibi her ticari binanın kendi ihtiyaçları vardır. Grundfos’un eksiksiz ürün serileri; iklimlendirme, ısıtma, yangından korunma, atık su ve su dezenfeksiyonu gibi uygulamalarda yüksek konfor, güvenilirlik ve enerji verimliliği sunar.',
    ],
    items: ['İklimlendirme', 'Yangından korunma', 'Isıtma', 'Basınçlandırma', 'Su dezenfeksiyonu', 'Atık su'],
    products: ['hydro-multi-e', 'cmv-paket-hidrofor', 'grundfos-alpha2', 'cim-ciu'],
  },
  {
    slug: 'endustriyel-tesisler',
    legacy: '/hizmet/endüstriyel-proses-ve-tesisler',
    title: 'Endüstriyel Proses ve Tesisler',
    image: '/images/solutions/endustriyel.jpg',
    summary: 'Agresif akışkanlara ve 180 °C’ye kadar sıcaklıklara dayanıklı proses pompaları.',
    body: [
      'Endüstriyel süreçler birbirine bağlıdır; bir alandaki aksaklık diğerlerini hızla etkiler. Yüksek kaliteli paslanmaz çelikten üretilen Grundfos proses pompaları, temizleme işlemlerindeki agresif akışkanlara ve 180 °C’ye kadar sıcaklıklara dayanır.',
      'Farklı viskozite, kimyasal ve sıcaklık koşullarına uygun malzeme seçenekleri korozyon ve kavitasyona karşı koruma sağlar. Su arıtma, soğutma, ısıtma ve atık su transferi dahil her uygulamayı destekleriz.',
    ],
    items: [
      'Kazan sistemleri',
      'Endüstriyel ısıtma ve soğutma',
      'Sıcaklık kontrolü',
      'Endüstriyel su temini ve arıtma',
      'Endüstriyel atık su',
      'CIP / SIP',
      'Şişe yıkama ve doldurma',
      'Tuz giderme',
      'Bioyakıt',
      'Liç madenciliği',
      'Yangından korunma',
    ],
    products: ['cr-cri-crn', 'bmet', 'cim-ciu'],
  },
  {
    slug: 'kentsel-atik-su',
    legacy: '/hizmet/kentsel-atık-su',
    title: 'Kentsel Atık Su',
    image: '/images/solutions/kentsel-atik-su.jpg',
    summary: 'Atık su taşıma, arıtma ve taşkın kontrolünde tasarımdan bakıma tek muhatap.',
    body: [
      'Atık sular ancak güvenilir teknik ve uygulama uzmanlığıyla başarıyla arıtılabilir. Tesislerin giderek sıkılaşan yasal gereksinimleri karşılaması beklenir ve her yeni proses toplam maliyeti artırır.',
      'Çözüm tasarımı ve tekliften uygulamaya kadar projenin her adımında tek iletişim noktası sunuyoruz. Tasarım, doğrulama, kurulum, kullanım ve bakımda zamandan, enerjiden ve maliyetten tasarruf etmeniz için çalışıyoruz.',
    ],
    items: ['Atık su taşıma', 'Atık su arıtma', 'Taşkın kontrolü'],
    products: ['s-pompa', 'cim-ciu'],
  },
  {
    slug: 'su-temini',
    legacy: '/hizmet/su-temini',
    title: 'Su Temini',
    image: '/images/solutions/su-temini.jpg',
    summary: 'Ham su alımından arıtma ve dağıtıma kadar entegre su temini.',
    body: [
      'Ham su alımından arıtma ve dağıtıma kadar tam entegrasyon gerekir. Grundfos pompa, kontrolör, dozaj, dezenfeksiyon ve basınç yönetimi; ideal su ve enerji verimliliği için birlikte çalışır.',
    ],
    items: ['İçme suyu arıtma', 'Su dağıtımı', 'Zemin suyu alma', 'Yüzey suyu alma', 'Sulama', 'Solar su çözümleri'],
    products: ['sq', 'cr-cri-crn', 'bmet'],
  },
];
