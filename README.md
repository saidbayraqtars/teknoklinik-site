# Tecnoklinik — Kurumsal Web Sitesi

Samsun İlkadım'daki teknik servisin sitesi: bilgisayar ve yazıcı tamiri, güvenlik kamerası montajı, bilgisayar
alım satımı, kurumsal yazıcı çözümleri, yazıcı kiralama, web tasarım. Yayın adresi: **https://tecnoklinik.com**.
Toner dolumu ayrı sitede: https://samsuntonerdolum.com.tr

## Yığın

React 19 · React Router 7 · Vite 7. Animasyon kütüphanesi yok (CSS + IntersectionObserver).
İkonlar yalnız [Reicon](https://github.com/dqev/reicon)'dan (`src/components/Icon.jsx`).

## Komutlar

```bash
npm install
npm run dev        # geliştirme (http://localhost:5173)
npm run build      # dist/: her sayfa ön-render edilmiş HTML + sitemap.xml + robots.txt + 404.html
npm run gorseller  # gorsel-kaynak/*.png → public/img/*.webp, simgeler, og-image.jpg (sharp)
```

`npm run build` üç adımdır: istemci derlemesi, sunucu derlemesi (`src/entry-server.jsx`), `scripts/prerender.mjs`.
Ön-render tarayıcı gerektirmez (React `renderToString`), her barındırmada çalışır.

## SEO

- Her sayfanın başlığı, açıklaması, kanonik adresi ve JSON-LD'si `src/seo.js`'te; tarayıcıda `Seo` bileşeni,
  derlemede ön-render aynı fonksiyonu kullanır.
- JSON-LD: `LocalBusiness`/`ComputerStore` (adres, konum, saatler, hizmet bölgesi), `WebSite`, `BreadcrumbList`,
  hizmet sayfalarında `Service` + `FAQPage`, SSS'de `FAQPage`.
- Her hizmetin ayrı sayfası var: `/hizmetler/<slug>` (Samsun + hizmet anahtar kelimesi).
- İşletme bilgisi (adres, telefon, saatler) tek yerde: `src/data/site.js`.

## Yayın

- **Paylaşımlı barındırma (cPanel/Apache):** `npm run build`, sonra `dist/` içeriğini (gizli `.htaccess` dahil)
  `public_html/` içine yükleyin. `.htaccess` https + www yönlendirmesi, temiz adresler, 404 ve önbellek ayarlarını yapar.
- **Vercel:** depo bağlanır, `vercel.json` hazır (derleme komutu, `cleanUrls`, www → çıplak alan adı).

## Sayfalar

| Yol | Sayfa |
|---|---|
| `/` | Ana sayfa |
| `/hizmetler`, `/hizmetler/<slug>` | Hizmetler ve 7 hizmet sayfası |
| `/hakkimizda`, `/galeri`, `/sss`, `/iletisim` | Kurumsal sayfalar |
| `/gizlilik` | Gizlilik ve KVKK aydınlatma metni |
