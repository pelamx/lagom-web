export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  /** Path on the old site, used for redirects. */
  legacy: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  body: string[];
  specs: Spec[];
  features: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: 'hydro-multi-e',
    legacy: '/urun/hydro-multi-e',
    name: 'Hydro Multi-E',
    category: 'Hidrofor sistemi',
    image: '/images/products/hydro-multi-e.webp',
    summary: 'Bina uygulamaları için tasarlanmış, hız kontrollü kompakt hidrofor sistemi.',
    body: [
      'Hydro Multi-E, özellikle bina hizmet uygulamaları için tasarlanan yenilikçi teknolojiye sahip bir hidrofor sistemidir. Ayar noktası kontrol panosundan kolayca ayarlanabilir; gelişmiş kontrol işlevi sabit basıncı ve optimum konforu korumak için diğer ayarları düzenler.',
      'Sistem, IE3 standardında motorlara sahip CRE pompalar temel alınarak tasarlanmıştır. Frekans kontrollü (hız kontrollü) motorlar kullanıcı konforunu artırır ve işletme maliyetlerini düşürür.',
    ],
    specs: [
      { label: 'Pompa', value: 'CRE, IE3 motor' },
      { label: 'Kontrol', value: 'Frekans (hız) kontrollü' },
    ],
    features: [
      'Güvenilir ve yüksek verimli',
      'Kompakt, bakımı kolay',
      'Kolay devreye alma',
      'Debiye mükemmel uyum',
      'Düşük debi tespiti',
    ],
    applications: ['Ofisler', 'Okullar', 'Oteller', 'Apartmanlar'],
  },
  {
    slug: 'cmv-paket-hidrofor',
    legacy: '/urun/cmv-paket-hidrofor',
    name: 'CMV Paket Hidrofor',
    category: 'Hidrofor sistemi',
    image: '/images/products/cmv.webp',
    summary: 'Çok kademeli dikey santrifüj pompalardan oluşan paket basınçlandırma sistemi.',
    body: ['Çok kademeli dikey santrifüj pompalardan oluşan basınçlandırma sistemleridir. Bir, iki veya üç pompalı olarak yapılandırılabilir.'],
    specs: [
      { label: 'Debi (Q)', value: 'maks. 16 m³/h' },
      { label: 'Basma yüksekliği (H)', value: 'maks. 93 m' },
      { label: 'Sıvı sıcaklığı', value: '0 °C … +90 °C' },
      { label: 'Sistem basıncı', value: 'maks. 12 bar' },
    ],
    features: ['Bir, iki veya üç pompalı sistem', 'Kullanımı kolay kontrolörler', 'Güvenilirlik', 'Yüksek verimlilik', 'Kolay servis'],
    applications: ['Küçük su dağıtım tesisatları', 'Küçük siteler', 'Oteller', 'Mağazalar', 'Hafif endüstri', 'Hastaneler', 'Okullar', 'Büyük evler'],
  },
  {
    slug: 'grundfos-alpha2',
    legacy: '/urun/grundfos-alpha2',
    name: 'Grundfos ALPHA2',
    category: 'Sirkülasyon pompası',
    image: '/images/products/alpha2.webp',
    summary: 'Isıtma, soğutma ve iklimlendirme için enerji verimliliğinde sınıfının lideri sirkülasyon pompası.',
    body: [
      'Başarısı kanıtlanmış Grundfos teknolojileriyle geliştirilen ALPHA2 küçük sirkülasyon pompası, enerji verimliliğinde rakipsizdir. Sıcaklığı +2 °C’ye kadar olan akışkanların transfer edildiği soğutma, ısıtma ve iklimlendirme uygulamaları için eşsiz bir seçimdir.',
      'Daha kompakt tasarımıyla ALPHA2, EEI ≤ 0,15 değeriyle yüksek performansı garanti eder.',
    ],
    specs: [
      { label: 'Debi (Q)', value: 'maks. 3 m³/h' },
      { label: 'Basma yüksekliği (H)', value: 'maks. 6 m' },
      { label: 'Sıvı sıcaklığı', value: '+2 °C … +95 °C' },
      { label: 'Sistem basıncı', value: 'maks. 10 bar' },
      { label: 'Enerji verimlilik endeksi', value: 'EEI ≤ 0,15' },
    ],
    features: [
      'AUTOADAPT ile en verimli performans eğrisini kendisi seçer',
      'Sorun giderme ve dengeleme için dahili debi göstergesi',
      'Kolay bağlantı sağlayan yenilikçi fiş tasarımı',
      'Kompakt gövde',
    ],
    applications: ['Sabit veya değişken debili sistemler', 'Domestik sıcak su resirkülasyonu', 'Gece modu gerektiren sistemler', 'Yerden ısıtma'],
  },
  {
    slug: 'cr-cri-crn',
    legacy: '/urun/cr-cri-crn-yüksek-basınç-pompalar',
    name: 'CR, CRI, CRN',
    category: 'Yüksek basınç pompası',
    image: '/images/products/cr.webp',
    summary: 'Neredeyse her endüstriyel uygulamaya uygun, en geniş yelpazeye sahip dikey çok kademeli pompa serisi.',
    body: [
      'Hemen her endüstriyel uygulamaya cevap verecek şekilde tasarlanan CR pompa serisi, pompa piyasasına en geniş ürün yelpazesini sunar. Grundfos, modüler yaklaşımla CR serisini daha da genişletmiştir.',
      'Seride dört farklı malzeme kullanılır: döküm demir, iki farklı sınıf paslanmaz çelik ve tamamen titanyum. Yaklaşık 50 bara kadar basınç ve 11 farklı debi kapasitesinin yanında çeşitli salmastra, kauçuk malzeme ve besleme voltajı seçenekleri mevcuttur.',
    ],
    specs: [
      { label: 'Debi (Q)', value: 'maks. 120 m³/h' },
      { label: 'Basma yüksekliği (H)', value: 'maks. 330 m' },
      { label: 'Malzeme', value: '304 / 316 paslanmaz çelik' },
      { label: 'Sıvı sıcaklığı', value: '−40 °C … +180 °C' },
    ],
    features: [
      'Güvenilir ve yüksek verimli',
      'Kolay servis imkânı',
      'Yerden tasarruf',
      'Korozyona karşı yüksek direnç',
      'Yüksek basınçlar için tek pompalı çözüm',
    ],
    applications: ['Ters osmoz sistemleri', 'Yıkama sistemleri', 'Su hazırlama sistemleri', 'Endüstriyel tesisler', 'Kazan besleme sistemleri'],
  },
  {
    slug: 'sq',
    legacy: '/urun/sq',
    name: 'SQ / SQE',
    category: 'Dalgıç pompa · derin kuyu',
    image: '/images/products/sq.webp',
    summary: 'Daimi mıknatıs motorlu, entegre korumalı 3″ dalgıç kuyu pompası.',
    body: [
      'Grundfos SQ 3″ dalgıç pompalar, ihtiyacınıza en uygun çözümü bulabilmeniz için geniş bir performans aralığı sunar. Çok kademeli santrifüj tipteki pompalar, kendi boyutundan geniş olmayan bir sondaj deliğine monte edilebilir.',
      'Entegre elektronik sayesinde kurulum ve kullanım son derece kolaydır. Daimi mıknatıs motorla çalışan bu kompakt pompalar yüksek verimlilik sunar. CU 301 kontrol kutusuna bağlanan SQE pompalar suyu sabit basınçla temin eder.',
    ],
    specs: [
      { label: 'Debi (Q)', value: 'maks. 9 m³/h' },
      { label: 'Basma yüksekliği (H)', value: 'maks. 210 m' },
      { label: 'Malzeme', value: '304 / 316 paslanmaz çelik' },
      { label: 'Kuyu çapı', value: '3″' },
    ],
    features: [
      'Kuru çalışma koruması',
      'Yüksek verimli daimi mıknatıs motor',
      'Yumuşak yol verme',
      'Aşırı yük, aşırı sıcaklık ve voltaj koruması',
      'Hareketli çarklar sayesinde aşınmaya dayanıklı',
      'SQE: CU 301 ile değişken devir ve iki yönlü iletişim',
    ],
    applications: ['Yer altı suyu temini', 'Küçük sulama sistemleri', 'Tanklar arası sıvı transferi', 'Basınçlandırma', 'Çevre uygulamaları ve numune alma', 'Garajlar ve akaryakıt istasyonları'],
  },
  {
    slug: 's-pompa',
    legacy: '/urun/s-pompa',
    name: 'S Pompa',
    category: 'Atık su pompası',
    image: '/images/products/s-pompa.webp',
    summary: 'Kanalizasyon ve ağır hizmet atık su uygulamaları için güçlü, dayanıklı pompa serisi.',
    body: [
      'S pompalar birçok kanalizasyon sisteminin en önemli parçasıdır. Gücü ve dayanıklılığının yanı sıra SmartTrim çark açıklığı ayarı ve SmartSeal sızdırmazlık işlevi gibi yenilikçi özellikleriyle tercih edilir.',
      'SmartTrim, fabrika ayarlı çark açıklığının ihtiyaca göre yeniden ayarlanmasını ve böylece pompa verimliliğinin maksimum düzeyde sürdürülmesini sağlar. SmartSeal otomatik kaplin contası ile sızıntıya dayanıklı bir bağlantı elde edilir.',
    ],
    specs: [
      { label: 'Kurulum', value: 'Kuru veya dalgıç' },
      { label: 'Çark tipi', value: 'Kanal, vorteks, SuperVortex' },
    ],
    features: [
      'SmartTrim çark açıklığı ayarı',
      'SmartSeal sızdırmazlık',
      'Soğutma ceketli veya ceketsiz çalışma',
      'Entegre motor koruma sistemi',
      'Büyük katılar için serbest geçiş',
      'Geniş ürün serisi',
    ],
    applications: ['Arıtılmamış ham atık su transferi', 'Arıtılmamış su transferi', 'Çamurlu suyun pompalanması', 'Endüstriyel pis su'],
  },
  {
    slug: 'bmet',
    legacy: '/urun/bmet-sistemi',
    name: 'BMET Sistemi',
    category: 'Ters osmoz · enerji geri kazanımı',
    image: '/images/products/bmet.webp',
    summary: 'Ters osmoz sistemleri için türbinle enerji geri kazanan hidrofor modülü.',
    body: [
      'Grundfos BMET hidrofor modülü, seri olarak bağlanan bir BME ve bir BMT pompadan oluşur. Her iki pompada da paslanmaz çelik manşona entegre edilmiş çok kademeli bir Grundfos dalgıç pompa bulunur.',
      'BME pompa, V kayış kasnak aracılığıyla standart bir elektrik motorundan güç alır. BMT pompa ise Pelton türbin aracılığıyla güç alır ve ilk pompaya seri bağlanır. Böylece yüksek basınçtan kaynaklanan enerji geri kazanılır.',
    ],
    specs: [
      { label: 'Enerji tasarrufu', value: '%34’e varan' },
      { label: 'Yapı', value: 'BME + BMT (Pelton türbin)' },
    ],
    features: [
      'Konvansiyonel sistemlere göre %34’e varan enerji tasarrufu',
      'Karbon / silisyum karbür salmastra',
      'Su yağlamalı eksenel baskı yatağı',
      'Yüksek basınçlı uygulamalar için ideal',
    ],
    applications: ['Ters osmoz sistemleri', 'Su arıtma tesisleri'],
  },
  {
    slug: 'cim-ciu',
    legacy: '/urun/cim-ciu-grundfos-pompa',
    name: 'CIM / CIU',
    category: 'İletişim ve kontrol',
    image: '/images/products/cim-ciu.webp',
    summary: 'Pompaları bina ve tesis otomasyonuna bağlayan veri yolu (fieldbus) arayüz modülleri.',
    body: [
      'Grundfos veri yolu haberleşme konsepti, pompaların ve pompa sistemlerinin etkin şekilde kontrol edilmesi için ideal çözümdür. İletişim Arayüz Modülü (CIM) ve İletişim Arayüz Ünitesi (CIU), açık ve birlikte çalışabilen ağlar üzerinden veri iletişimi sağlar.',
      'CIM modülleri 11–22 kW E-pompalar ve atık su için geliştirilen Dedicated Control sistemleriyle çalışır. CIU ünitesi ise küçük E-pompalar, sirkülasyon pompaları ve hidroforlar gibi GENIbus arayüzlü ürünlere uygundur.',
    ],
    specs: [
      { label: 'Veri yolları', value: 'LON, PROFIBUS DP, Modbus RTU, BACnet MS/TP, SMS/GSM/GPRS' },
      { label: 'CIU besleme', value: '24 – 240 V' },
      { label: 'CIU montaj', value: 'Duvar veya DIN ray' },
    ],
    features: ['Kolay kurulum ve devreye alma', 'Standart işlevsel profiller', 'Ağa kolay entegrasyon'],
    applications: ['E-pompalar', 'Sirkülasyon pompaları', 'Hidrofor sistemleri', 'Atık su kontrol sistemleri'],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
