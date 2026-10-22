# lagom-web

[lagommuhendislik.com](https://lagommuhendislik.com) için yeniden tasarlanan site. Lagom Mühendislik, Grundfos yetkili bayi.

Hedef: sade, anlaşılır, kullanması kolay. Site yalnızca iki şeye odaklanır: **ürünler** ve **hizmetler**.

## Tasarım

- **Mühendislik paftası dili:** kâğıt tonu zemin, mürekkep siyahı, ince çizgiler, keskin köşeler. Gölge ve yuvarlak kart yok.
- **Antet (title block):** teknik çizimlerdeki bilgi kutusu; hero'da ve footer'da gerçek firma bilgileriyle kullanılır.
- **Katalog ızgarası:** ürünler ortak çizgili tek bir tabloda, katalog numarası (`P-01`) ve temel teknik değerlerle.
- **Tipografi:** IBM Plex Sans (metin), IBM Plex Mono (etiketler, teknik değerler).
- **Tek vurgu rengi:** sinyal turuncusu, yalnızca birincil aksiyonlarda.
- **Açık / koyu tema:** sistem tercihini izler; header'daki butonla elle değiştirilebilir, seçim hatırlanır.
- **Mobil:** altta sabit Ara / WhatsApp / Teklif iste çubuğu.
- **Dört dil:** Türkçe, İngilizce, Rusça, Özbekçe (Latin). Sağ üstteki TR · EN · RU · UZ butonları bulunulan sayfanın diğer dildeki karşılığına geçer.

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statik çıktı: dist/
npm run preview
```

Astro 6 (Node ≥ 22.12). Çıktı tamamen statiktir; herhangi bir statik hostinge (Netlify, Vercel, Cloudflare Pages, cPanel) kök dizine yüklenebilir.

## Yayın

`main` dalına her push'ta GitHub Actions siteyi **https://pelamx.github.io/lagom-web/** adresine yayınlar (`.github/workflows/deploy.yml`).

- Bu adres bir önizlemedir: alt klasörde çalıştığı için sayfalara `noindex` eklenir, arama motorlarında gerçek siteyle yarışmaz.
- Site `lagommuhendislik.com` alan adına taşınınca `BASE_PATH` ortam değişkeni kaldırılır; kod değişikliği gerekmez.
- İç linkler ve görseller için her zaman `src/lib/url.ts` içindeki `url()` kullanılmalı.

## Yapı

```
src/
  i18n/          # tüm metinler: tr.ts (kaynak), en.ts, ru.ts, uz.ts + yönlendirme (index.ts)
  data/          # dilden bağımsız veriler: ürün görselleri, markalar, seriler, iletişim bilgileri
  views/         # sayfa şablonları (her dil için aynı şablon)
  pages/         # Türkçe rotalar kökte; [lang]/[...path].astro diğer dilleri üretir
  components/    # Header, Footer, SystemLoop, ProductGrid, TitleBlock…
public/images/   # eski siteden alınan görseller
docs/crawl/      # eski sitenin taranmış metinleri (kaynak arşivi)
```

### Diller ve adresler

| Dil | Ana sayfa | Ürünler | Örnek ürün |
| --- | --- | --- | --- |
| Türkçe | `/` | `/urunler` | `/urunler/sq` |
| English | `/en` | `/en/products` | `/en/products/sq` |
| Русский | `/ru` | `/ru/products` | `/ru/products/sq` |
| O‘zbekcha | `/uz` | `/uz/products` | `/uz/products/sq` |

- Metin değiştirmek için ilgili dilin dosyası düzenlenir (`src/i18n/<dil>.ts`). Dört dosya aynı yapıdadır; `tr.ts` kaynak kabul edilir.
- Yeni ürün: `src/data/products.ts` içine kayıt + dört dil dosyasında `productData` altına metni.
- Marka ürün aileleri `src/data/brands.ts` içindeki serilerle **sırayla** eşleşir; aile eklerken dört dilde aynı sıraya eklenmeli.
- Özbekçede `o‘` / `g‘` için `‘` (U+2018) kullanılır; resmi `ʻ` (U+02BB) IBM Plex fontunda olmadığı için boşluklu görünüyordu.
- Sayfalarda `hreflang` etiketleri vardır; arama motorları her dili ayrı sayfa olarak tanır.

## Görsel kaynakları

- Ana sayfa çizimi (Beyoğlu silueti) sitenin kendi SVG bileşenidir: `src/components/CityDrawing.astro`. Paylaşım önizlemesi `public/images/site/og-cizim.png` bu çizimden üretilmiştir; çizim değişirse yeniden üretilmeli.
- Grundfos sayfasındaki pompa seti fotoğrafı: Jahhid Fitrah Alamsyah, [Unsplash](https://unsplash.com/photos/2Z7K3Oxig98) — Unsplash Lisansı (ticari kullanım serbest, atıf zorunlu değil).
- Diğer görseller eski lagommuhendislik.com sitesinden alınmıştır.

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
- **Çeviriler:** İngilizce, Rusça ve Özbekçe metinler ana dili konuşan biri tarafından gözden geçirilmeli; özellikle teknik terimler.
- **Marka ürün aileleri** (Viessmann, Buderus, Bosch, Alfa Laval, FAF, Rehau) markaların genel bilinen gamından yazıldı; satılan ürünlerle teyit edilmeli.
- **Teklif formu** sunucu gerektirmez: mesajı kullanıcının e-posta uygulamasında ya da WhatsApp'ta hazır açar. İstenirse Formspree / Netlify Forms ile doğrudan gönderime çevrilebilir.
