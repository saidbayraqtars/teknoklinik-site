// Sayfa başlıkları, açıklamalar ve yapılandırılmış veri (JSON-LD).
// Tarayıcıda <Seo> bileşeni, derlemede scripts/prerender.mjs aynı fonksiyonu kullanır.
import {
    SITE_URL, COMPANY_NAME, COMPANY_LEGAL, COMPANY_PHONE_E164, ADDRESS, HOURS_SCHEMA, SERVICE_AREA,
    SOCIAL, GOOGLE_MAPS_URL, SERVICES, FAQ_DATA, serviceBySlug,
} from './data/site.js';

const BUSINESS_ID = `${SITE_URL}/#isletme`;
const WEBSITE_ID = `${SITE_URL}/#site`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const STATIC_ROUTES = ['/', '/hizmetler', '/hakkimizda', '/galeri', '/sss', '/iletisim', '/gizlilik'];
export const ALL_ROUTES = [...STATIC_ROUTES, ...SERVICES.map((s) => `/hizmetler/${s.slug}`)];

const business = () => ({
    '@type': ['LocalBusiness', 'ComputerStore'],
    '@id': BUSINESS_ID,
    name: COMPANY_NAME,
    legalName: COMPANY_LEGAL,
    description: "Samsun İlkadım'da bilgisayar tamiri, yazıcı tamiri ve bakımı, güvenlik kamerası montajı, bilgisayar alım satımı, yazıcı kiralama ve web tasarım hizmetleri.",
    url: `${SITE_URL}/`,
    telephone: COMPANY_PHONE_E164,
    image: OG_IMAGE,
    logo: `${SITE_URL}/icon-512.png`,
    priceRange: '₺₺',
    address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.district,
        addressRegion: ADDRESS.city,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: ADDRESS.lat, longitude: ADDRESS.lng },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: HOURS_SCHEMA.days,
        opens: HOURS_SCHEMA.opens,
        closes: HOURS_SCHEMA.closes,
    }],
    areaServed: SERVICE_AREA.map((d) => ({ '@type': 'City', name: `${d}, Samsun` })),
    sameAs: SOCIAL.map((s) => s.url),
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hizmetler',
        itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/hizmetler/${s.slug}` },
        })),
    },
});

const website = () => ({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: COMPANY_NAME,
    inLanguage: 'tr-TR',
    publisher: { '@id': BUSINESS_ID },
});

const breadcrumb = (items) => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: `${SITE_URL}${path === '/' ? '/' : path}`,
    })),
});

const faqPage = (faqs) => ({
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
});

const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) });

const suffix = ` | ${COMPANY_NAME}`;

const PAGES = {
    '/': {
        title: 'Samsun Bilgisayar ve Yazıcı Tamiri, Kamera Montajı | Tecnoklinik',
        description: "Samsun İlkadım'da bilgisayar ve yazıcı tamiri, güvenlik kamerası montajı, bilgisayar alım satımı, yazıcı kiralama ve web tasarım. Tel: 0545 342 29 44",
        crumbs: null,
    },
    '/hizmetler': {
        title: 'Hizmetlerimiz — Bilgisayar, Yazıcı, Kamera, Web' + suffix,
        description: "Samsun'da bilgisayar tamiri, yazıcı tamiri, güvenlik kamerası montajı, bilgisayar alım satımı, kurumsal yazıcı çözümleri, yazıcı kiralama ve web tasarım.",
        crumbs: [['Ana Sayfa', '/'], ['Hizmetler', '/hizmetler']],
    },
    '/hakkimizda': {
        title: 'Hakkımızda — Samsun Teknik Servis' + suffix,
        description: "Tecnoklinik 2014'ten beri Samsun'da bilgisayar ve yazıcı tamiri, güvenlik kamerası ve kurumsal BT hizmetleri veren teknik servistir.",
        crumbs: [['Ana Sayfa', '/'], ['Hakkımızda', '/hakkimizda']],
    },
    '/galeri': {
        title: 'Galeri — Yaptığımız İşler' + suffix,
        description: 'Anakart ve BGA onarımı, laptop ekran değişimi, yazıcı tamiri, veri kurtarma ve güvenlik kamerası montajı işlerimizden örnekler.',
        crumbs: [['Ana Sayfa', '/'], ['Galeri', '/galeri']],
    },
    '/sss': {
        title: 'Sıkça Sorulan Sorular' + suffix,
        description: 'Servis süresi, garanti, yerinde servis, yazıcı markaları, kamera kurulumu ve veri kurtarma hakkında sık sorulan sorular.',
        crumbs: [['Ana Sayfa', '/'], ['SSS', '/sss']],
        extra: () => faqPage(FAQ_DATA),
    },
    '/iletisim': {
        title: 'İletişim — Adres, Telefon, WhatsApp' + suffix,
        description: "Tecnoklinik: 19 Mayıs Mah. Dr. Kamil Cad. No:16/D İlkadım/Samsun. Telefon ve WhatsApp 0545 342 29 44. Pazartesi–Cumartesi 09:00–19:00.",
        crumbs: [['Ana Sayfa', '/'], ['İletişim', '/iletisim']],
        extra: () => ({ '@type': 'ContactPage', url: `${SITE_URL}/iletisim`, about: { '@id': BUSINESS_ID } }),
    },
    '/gizlilik': {
        title: 'Gizlilik ve KVKK Aydınlatma Metni' + suffix,
        description: 'Tecnoklinik web sitesinde hangi kişisel verilerin nasıl işlendiği, çerez kullanımı ve 6698 sayılı KVKK kapsamındaki haklarınız hakkında bilgilendirme.',
        crumbs: [['Ana Sayfa', '/'], ['Gizlilik', '/gizlilik']],
    },
};

/** Bir yol için başlık, açıklama, kanonik adres ve JSON-LD döndürür. Bilinmeyen yol → 404 (noindex). */
export function pageMeta(pathname) {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const svc = path.startsWith('/hizmetler/') ? serviceBySlug(path.slice('/hizmetler/'.length)) : null;

    if (svc) {
        const url = `${SITE_URL}${path}`;
        return {
            title: svc.seoTitle + suffix,
            description: svc.seoDesc,
            canonical: url,
            image: OG_IMAGE, // WhatsApp/Facebook önizlemesi için JPG
            jsonLd: graph(
                business(),
                {
                    '@type': 'Service',
                    '@id': `${url}#hizmet`,
                    name: svc.title,
                    serviceType: svc.title,
                    description: svc.seoDesc,
                    url,
                    provider: { '@id': BUSINESS_ID },
                    areaServed: SERVICE_AREA.map((d) => ({ '@type': 'City', name: `${d}, Samsun` })),
                },
                breadcrumb([['Ana Sayfa', '/'], ['Hizmetler', '/hizmetler'], [svc.title, path]]),
                svc.faqs?.length ? faqPage(svc.faqs) : null,
            ),
        };
    }

    const p = PAGES[path];
    if (!p) {
        return {
            title: 'Sayfa bulunamadı' + suffix,
            description: 'Aradığınız sayfa bulunamadı.',
            canonical: null,
            noindex: true,
            image: OG_IMAGE,
            jsonLd: null,
        };
    }
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
    return {
        title: p.title,
        description: p.description,
        canonical,
        image: OG_IMAGE,
        jsonLd: graph(
            business(),
            path === '/' ? website() : null,
            p.crumbs ? breadcrumb(p.crumbs) : null,
            p.extra ? p.extra() : null,
        ),
    };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Ön-render için <head> içine yazılacak etiketler. */
export function headHtml(meta) {
    const tags = [
        `<title>${esc(meta.title)}</title>`,
        `<meta name="description" content="${esc(meta.description)}" />`,
        `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}" />`,
    ];
    if (meta.canonical) {
        tags.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`);
        tags.push(`<meta property="og:url" content="${esc(meta.canonical)}" />`);
    }
    tags.push(
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="tr_TR" />`,
        `<meta property="og:site_name" content="${COMPANY_NAME}" />`,
        `<meta property="og:title" content="${esc(meta.title)}" />`,
        `<meta property="og:description" content="${esc(meta.description)}" />`,
        `<meta property="og:image" content="${esc(meta.image)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(meta.title)}" />`,
        `<meta name="twitter:description" content="${esc(meta.description)}" />`,
        `<meta name="twitter:image" content="${esc(meta.image)}" />`,
    );
    if (meta.jsonLd) {
        tags.push(`<script type="application/ld+json" data-seo>${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`);
    }
    return tags.join('\n    ');
}
