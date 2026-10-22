# lagom-web

[lagommuhendislik.com](https://lagommuhendislik.com) için yeniden tasarlanan site. Lagom Mühendislik, Grundfos yetkili bayii.

Hedef: sade, anlaşılır, kullanması kolay. Site yalnızca iki şeye odaklanır: **ürünler** ve **hizmetler**.

## Tasarım

- **Mühendislik paftası dili:** kâğıt tonu zemin, mürekkep siyahı, ince çizgiler, keskin köşeler. Gölge ve yuvarlak kart yok.
- **Antet (title block):** teknik çizimlerdeki bilgi kutusu; hero'da ve footer'da gerçek firma bilgileriyle kullanılır.
- **Katalog ızgarası:** ürünler ortak çizgili tek bir tabloda, katalog numarası (`P-01`) ve temel teknik değerlerle.
- **Tipografi:** IBM Plex Sans (metin), IBM Plex Mono (etiketler, teknik değerler).
- **Tek vurgu rengi:** sinyal turuncusu, yalnızca birincil aksiyonlarda.
- **Açık / koyu tema:** sistem tercihini izler; header'daki butonla elle değiştirilebilir, seçim hatırlanır.
- **Mobil:** altta sabit Ara / WhatsApp / Teklif iste çubuğu.

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statik çıktı: dist/
npm run preview
```

Astro 6 (Node ≥ 22.12). Çıktı tamamen statiktir; herhangi bir statik hostinge (Netlify, Vercel, Cloudflare Pages, cPanel) kök dizine yüklenebilir.

## Yapı

```
src/
  data/          # tüm içerik burada: site.ts, products.ts, solutions.ts, services.ts
  components/    # Header, Footer, TitleBlock, ProductGrid, SolutionList, Brands, ContactSheet…
  layouts/Base.astro
  pages/         # /, /urunler, /uygulama-alanlari, /hizmetler, /hakkimizda, /grundfos, /iletisim
public/images/   # eski siteden alınan görseller
docs/crawl/      # eski sitenin taranmış metinleri (kaynak arşivi)
```

Ürün eklemek / değiştirmek için yalnızca `src/data/products.ts` düzenlenir; liste, detay sayfası, footer ve yönlendirmeler otomatik güncellenir.

## Eski siteden taşınanlar

- 8 ürün (teknik değerleri, özellikleri ve kullanım alanlarıyla), 5 uygulama alanı, Grundfos yetkili bayi ve servis içerikleri, misyon, Lagom felsefesi, 16 marka logosu, iletişim bilgileri ve harita.
- **Eski URL'ler yeni sayfalara yönlendirilir** (`astro.config.mjs`), arama motoru sıralaması ve paylaşılmış linkler korunur.

### Bilinçli olarak çıkarılanlar

- Boş sayaçlar ("0+ Mutlu Müşteri" vb.), boş müşteri yorumları bölümü, e-bülten, tek seçenekli dil seçici.
- Sahte ürün kodları (123, 1234…) ve "Stokta var" etiketleri.
- SEO dolgu blog yazıları; ilgili sayfalara yönlendirildi.

### Teyit edilmesi gerekenler

- **SQ:** eski sitede "Sistem basıncı: maks. 150 bar" yazıyordu; dalgıç kuyu pompası için hatalı görünüyor, yayına alınmadı.
- **WhatsApp numarası** (0531 660 74 79) eski sitedeki butondan alındı.
- **Teklif formu** sunucu gerektirmez: mesajı kullanıcının e-posta uygulamasında ya da WhatsApp'ta hazır açar. İstenirse Formspree / Netlify Forms ile doğrudan gönderime çevrilebilir.
