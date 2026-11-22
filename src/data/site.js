// Tek kaynak: işletme bilgisi, hizmetler, SSS. Hem tarayıcı hem ön-render (scripts/prerender.mjs) buradan okur.

export const SITE_URL = 'https://tecnoklinik.com';
export const COMPANY_NAME = 'Tecnoklinik';
export const COMPANY_LEGAL = 'Tecnoklinik Bilişim';
export const COMPANY_PHONE = '0545 342 29 44';
export const COMPANY_PHONE_E164 = '+905453422944';
export const WHATSAPP_NUMBER = '905453422944';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const GOOGLE_MAPS_URL = 'https://share.google/X0PsAYn3JXsDxePBe';
export const TONER_SITE_URL = 'https://samsuntonerdolum.com.tr';

export const ADDRESS = {
    street: '19 Mayıs Mahallesi, Dr. Kamil Caddesi No:16/D',
    district: 'İlkadım',
    city: 'Samsun',
    postalCode: '55030',
    country: 'TR',
    lat: 41.2867,
    lng: 36.33,
};
export const ADDRESS_TEXT = `${ADDRESS.street}, ${ADDRESS.district} / ${ADDRESS.city}`;

export const HOURS_TEXT = 'Pazartesi – Cumartesi 09:00 – 19:00';
export const SUPPORT_TEXT = 'Telefon ve WhatsApp desteği 7/24';
export const HOURS_SCHEMA = { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' };

export const SERVICE_AREA = ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy'];

export const SOCIAL = [
    { name: 'Instagram', url: 'https://www.instagram.com/tecnoklinik', icon: 'instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/tecnoklinik', icon: null },
];

export const whatsappLink = (text) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'SSS', path: '/sss' },
    { name: 'İletişim', path: '/iletisim' },
];

// Her hizmetin kendi sayfası var: /hizmetler/<slug>
export const SERVICES = [
    {
        slug: 'bilgisayar-tamiri',
        icon: 'monitor',
        title: 'Bilgisayar Tamiri',
        image: '/img/anakart-tamiri.webp',
        imageAlt: 'Tecnoklinik atölyesinde dizüstü bilgisayar anakartı onarımı',
        shortDesc: 'Masaüstü ve dizüstü bilgisayarlarda donanım ve yazılım arızalarına hızlı çözüm.',
        seoTitle: 'Samsun Bilgisayar Tamiri — Laptop ve PC Servisi',
        seoDesc: "Samsun İlkadım'da dizüstü ve masaüstü bilgisayar tamiri: anakart ve BGA onarımı, ekran değişimi, SSD yükseltme, veri kurtarma, format. 6 ay garanti.",
        intro: [
            "Açılmayan, çok ısınan, yavaşlayan ya da ekranı kırılan bilgisayarlar İlkadım'daki atölyemizde onarılıyor. Dizüstü ve masaüstü bilgisayarlarda donanım ve yazılım arızalarını gideriyoruz.",
            'Anakart ve BGA onarımı da yapıyoruz. Parça değişimi gerektiğinde orijinal ve kaliteli parça kullanıyoruz; onarımlarımız 6 ay garantilidir.',
        ],
        features: [
            'Anakart tamiri ve BGA onarımı',
            'Laptop ekran (LCD/LED) değişimi',
            'SSD/HDD değişimi ve yükseltme',
            'Veri kurtarma (HDD/SSD)',
            'İşletim sistemi kurulumu ve format',
            'Fan temizliği ve termal macun yenileme',
        ],
        faqs: [
            {
                q: 'Bilgisayar tamiri ne kadar sürer?',
                a: 'Çoğu arıza aynı gün içinde giderilir. Parça siparişi gereken durumlarda süre 1–3 iş günüdür; süreyi arıza tespitinden sonra size bildiririz.',
            },
            {
                q: 'Verilerim silinir mi?',
                a: 'Donanım onarımlarında verilerinize dokunulmaz. Format ya da disk değişimi gerekiyorsa önce size sorar, isterseniz verilerinizi yedekleriz.',
            },
        ],
    },
    {
        slug: 'yazici-tamiri',
        icon: 'printer',
        title: 'Yazıcı Tamiri',
        image: '/img/yazici-tamiri.webp',
        imageAlt: 'Lazer yazıcının iç aksamında bakım ve onarım',
        shortDesc: 'Her marka lazer ve mürekkep püskürtmeli yazıcıda tamir, bakım ve toner dolumu.',
        seoTitle: 'Samsun Yazıcı Tamiri — Lazer ve Inkjet Servis',
        seoDesc: "Samsun'da HP, Canon, Brother, Epson, Samsung yazıcı tamiri ve bakımı. Kağıt sıkışması, silik baskı, hata kodları; toner dolumu ve yerinde servis.",
        intro: [
            'Kağıt sıkıştıran, silik ya da çizgili basan, hata kodu veren yazıcıları onarıyoruz. HP, Canon, Brother, Epson, Samsung, Kyocera, Lexmark ve Xerox başta olmak üzere lazer ve mürekkep püskürtmeli yazıcılarla çalışıyoruz.',
            "Toner ve kartuş dolumu için ayrı sitemiz samsuntonerdolum.com.tr'den de bilgi alabilirsiniz. İş yerlerinde yazıcıyı yerinde inceliyor, gerekirse atölyeye alıyoruz.",
        ],
        features: [
            'Lazer yazıcı tamiri',
            'Mürekkep püskürtmeli (inkjet) yazıcı tamiri',
            'Toner ve kartuş dolumu',
            'Periyodik bakım ve temizlik',
            'Kağıt sıkışması ve besleme sorunları',
            'Ağ ve kablosuz yazıcı kurulumu',
        ],
        faqs: [
            {
                q: 'Hangi marka yazıcılara servis veriyorsunuz?',
                a: 'HP, Canon, Epson, Brother, Samsung, Lexmark, Kyocera, Xerox ve diğer yaygın markaların lazer ve mürekkep püskürtmeli yazıcılarına servis veriyoruz.',
            },
            {
                q: 'Yerinde yazıcı servisi var mı?',
                a: "Evet. Samsun merkez ilçelerinde (İlkadım, Atakum, Canik, Tekkeköy) iş yerinize gelip yazıcıyı yerinde inceliyoruz.",
            },
        ],
    },
    {
        slug: 'guvenlik-kamerasi-montaji',
        icon: 'camera',
        title: 'Güvenlik Kamerası Montajı',
        image: '/img/kamera-montaj.webp',
        imageAlt: 'İş yerine IP güvenlik kamerası montajı',
        shortDesc: 'Ev ve iş yerleri için IP ve analog güvenlik kamerası sistemleri, kurulum ve uzaktan izleme.',
        seoTitle: 'Samsun Güvenlik Kamerası Montajı ve Kurulumu',
        seoDesc: "Samsun'da ev ve iş yeri güvenlik kamerası montajı: IP ve analog kamera, NVR/DVR kurulumu, telefondan uzaktan izleme, gece görüşlü sistemler.",
        intro: [
            'Ev, mağaza, ofis ve depolar için güvenlik kamerası sistemi kuruyoruz. Önce yeri görüp kaç kameraya, hangi açılara ve ne kadar kayıt süresine ihtiyaç olduğunu birlikte belirliyoruz.',
            'Kurulumdan sonra kayıt cihazını ayarlıyor, kameraları telefonunuzdan izleyebilmeniz için uygulamayı kuruyor ve kullanımını gösteriyoruz.',
        ],
        features: [
            'IP kamera kurulumu',
            'Analog (AHD) kamera sistemleri',
            'NVR/DVR kayıt cihazı kurulumu',
            'Telefondan uzaktan izleme',
            'Gece görüşlü kameralar',
            'Hareket algılama ve bildirim ayarları',
        ],
        faqs: [
            {
                q: 'Kamera sistemi kurulumu ne kadar sürer?',
                a: '4–8 kameralı standart bir sistem çoğunlukla 1 gün içinde kurulur. Daha büyük projelerde keşif sonrası süre birlikte planlanır.',
            },
            {
                q: 'Kameraları telefondan izleyebilir miyim?',
                a: 'Evet. Kurulumda kayıt cihazını internete bağlıyor, telefonunuza izleme uygulamasını kurup kullanımını gösteriyoruz.',
            },
        ],
    },
    {
        slug: 'bilgisayar-alim-satim',
        icon: 'cart-shopping',
        title: 'Bilgisayar Alım Satımı',
        image: '/img/laptop-ekran.webp',
        imageAlt: 'Satışa hazırlanan test edilmiş dizüstü bilgisayar',
        shortDesc: 'Yeni ve ikinci el bilgisayar, yedek parça ve ihtiyaca göre toplama bilgisayar.',
        seoTitle: 'Samsun İkinci El ve Sıfır Bilgisayar Alım Satımı',
        seoDesc: "Samsun'da yeni ve garantili ikinci el bilgisayar satışı, bilgisayarınızı değerinde alım, toplama bilgisayar ve yedek parça. Kurumsal tedarik.",
        intro: [
            'İhtiyacınıza ve bütçenize uygun yeni ya da ikinci el bilgisayar buluyoruz. Sattığımız ikinci el cihazlar satıştan önce testten geçiriliyor ve garantiyle teslim ediliyor.',
            'Kullanmadığınız bilgisayarı da alıyoruz. Oyun, ofis ya da tasarım için parça seçip toplama bilgisayar hazırlıyoruz.',
        ],
        features: [
            'Sıfır bilgisayar satışı',
            'Garantili ikinci el bilgisayar',
            'Bilgisayarınızı değerinde alım',
            'Toplama (özel konfigürasyon) bilgisayar',
            'Yedek parça satışı',
            'Kurumsal bilgisayar tedariki',
        ],
        faqs: [
            {
                q: 'İkinci el bilgisayarların garantisi var mı?',
                a: 'Evet. Sattığımız ikinci el bilgisayarlar 3 ila 6 ay garantilidir ve satıştan önce kapsamlı testten geçirilir.',
            },
        ],
    },
    {
        slug: 'kurumsal-yazici-cozumleri',
        icon: 'buildings',
        title: 'Kurumsal Yazıcı Çözümleri',
        image: null,
        shortDesc: 'Şirketler için yazıcı filosu yönetimi, periyodik bakım ve toplu toner tedariki.',
        seoTitle: 'Kurumsal Yazıcı Çözümleri — Bakım ve Toner Tedariki',
        seoDesc: "Samsun'daki şirketler için yazıcı filosu yönetimi, periyodik bakım anlaşması, toplu toner ve kartuş tedariki, ağ yazıcı kurulumu.",
        intro: [
            'Birden çok yazıcısı olan iş yerleri için bakım ve sarf malzemesini tek elden yönetiyoruz. Yazıcılar düzenli aralıklarla bakıma alınıyor, toner bitmeden yenisi ulaştırılıyor.',
            'Arıza olduğunda öncelikli servis veriyor, baskı maliyetini düşürmek için cihaz ve sarf seçiminde yol gösteriyoruz.',
        ],
        features: [
            'Yazıcı filosu yönetimi',
            'Periyodik bakım anlaşmaları',
            'Toplu toner ve kartuş tedariki',
            'Ağ yazıcısı kurulumu',
            'Baskı maliyeti analizi',
            'Öncelikli teknik destek',
        ],
        faqs: [
            {
                q: 'Bakım anlaşması neleri kapsar?',
                a: 'Periyodik bakım ziyaretleri, arızada öncelikli servis ve sarf malzemesi tedariki. Kapsamı yazıcı sayınıza ve baskı hacminize göre birlikte belirliyoruz.',
            },
        ],
    },
    {
        slug: 'yazici-kiralama',
        icon: 'calendar',
        title: 'Yazıcı Kiralama',
        image: null,
        shortDesc: 'Kısa ve uzun süreli yazıcı kiralama; kurulum, bakım ve toner dahil.',
        seoTitle: 'Samsun Yazıcı Kiralama — Toner ve Bakım Dahil',
        seoDesc: "Samsun'da kısa ve uzun süreli yazıcı kiralama. Kurulum, bakım, toner ve teknik destek dahil; ofis, okul ve etkinlikler için esnek seçenekler.",
        intro: [
            'Yazıcı satın almak yerine kiralayabilirsiniz. Kiralık yazıcıyı kurup çalışır halde teslim ediyoruz; bakım, toner ve arıza servisi kiraya dahil.',
            'Fuar ve etkinlik gibi kısa süreli ihtiyaçlar için de, ofisinizde yıllarca kullanacağınız cihazlar için de seçenek sunuyoruz.',
        ],
        features: [
            'Kısa süreli kiralama',
            'Uzun süreli kiralama',
            'Kurulum ve teslimat dahil',
            'Toner ve kartuş dahil',
            'Bakım ve arıza servisi dahil',
            'Baskı hacmine göre cihaz seçimi',
        ],
        faqs: [
            {
                q: 'Yazıcı kiralama fiyatı nasıl belirlenir?',
                a: 'Yazıcı modeli, kiralama süresi ve aylık baskı adedine göre belirlenir. Size uygun teklif için WhatsApp ya da telefonla ulaşabilirsiniz.',
            },
        ],
    },
    {
        slug: 'web-tasarim',
        icon: 'globe',
        title: 'Web Tasarım',
        image: null,
        shortDesc: 'İşletmeler için hızlı, mobil uyumlu ve arama motoru dostu web siteleri.',
        seoTitle: 'Samsun Web Tasarım — Kurumsal Web Sitesi ve SEO',
        seoDesc: "Samsun'da işletmeler için kurumsal web sitesi, e-ticaret sitesi, SEO ve Google İşletme Profili kurulumu. Mobil uyumlu, hızlı siteler; alan adı ve hosting.",
        intro: [
            'İşletmeniz için hızlı açılan, telefonda düzgün görünen ve Google aramalarında bulunabilen web siteleri hazırlıyoruz. Alan adı, barındırma ve e-posta kurulumunu da üstleniyoruz.',
            'Site yayına girdikten sonra güncelleme ve bakımını sürdürüyor, Google İşletme Profilinizin doğru kurulmasına yardım ediyoruz.',
        ],
        features: [
            'Kurumsal web sitesi',
            'E-ticaret sitesi',
            'Mobil uyumlu (responsive) tasarım',
            'Arama motoru optimizasyonu (SEO)',
            'Alan adı ve hosting',
            'Bakım ve güncelleme',
        ],
        faqs: [
            {
                q: 'Web sitesi kaç günde hazır olur?',
                a: 'Tanıtım sitesi içerik hazır olduğunda genellikle 1–2 haftada yayına girer. E-ticaret projelerinde süre ürün sayısına ve özelliklere göre belirlenir.',
            },
        ],
    },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);

export const STATS = [
    { number: 5000, suffix: '+', label: 'Mutlu Müşteri' },
    { number: 10, suffix: '+', label: 'Yıllık Deneyim' },
    { number: 15000, suffix: '+', label: 'Tamamlanan İş' },
    { number: 6, suffix: ' ay', label: 'İşçilik Garantisi' },
];

export const FEATURES = [
    { icon: 'shield-check', title: 'Garantili Hizmet', desc: 'Yaptığımız onarım ve bakımlarda 6 ay garanti veriyoruz.' },
    { icon: 'headset', title: '7/24 Destek', desc: 'Acil durumlarda telefon ve WhatsApp hattımızdan bize her zaman ulaşabilirsiniz.' },
    { icon: 'medal-star', title: 'Uzman Kadro', desc: 'Alanında deneyimli teknisyenlerle hizmet veriyoruz.' },
    { icon: 'cpu', title: 'Orijinal Parça', desc: 'Onarım ve bakımlarda orijinal ve kaliteli parça kullanıyoruz.' },
    { icon: 'truck-fast', title: 'Yerinde Servis', desc: 'Samsun merkez ilçelerinde iş yerinize gelerek servis veriyoruz.' },
    { icon: 'wallet', title: 'Uygun Fiyat', desc: 'Kaliteli hizmeti uygun fiyatla sunmayı hedefliyoruz.' },
];

export const FAQ_DATA = [
    {
        q: 'Servis süresi ne kadar?',
        a: 'Arıza türüne göre değişmekle birlikte çoğu onarım aynı gün tamamlanır. Parça tedariki gereken durumlarda 1–3 iş günü sürebilir.',
    },
    {
        q: 'Yerinde servis veriyor musunuz?',
        a: 'Evet. Samsun merkez ilçelerinde (İlkadım, Atakum, Canik, Tekkeköy) yerinde servis veriyoruz. Kurumsal müşterilerimiz için anlaşmalı servis paketleri de var.',
    },
    {
        q: 'Garanti süresi ne kadar?',
        a: 'Yapılan onarım ve bakım işlemlerinde 6 ay garanti veriyoruz. Yeni parça takılan işlemlerde garanti süresi 1 yıla kadar uzayabilir.',
    },
    {
        q: 'Hangi marka yazıcılara servis veriyorsunuz?',
        a: 'HP, Canon, Epson, Brother, Samsung, Lexmark, Kyocera, Xerox ve diğer yaygın markaların lazer ve mürekkep püskürtmeli yazıcılarına servis veriyoruz.',
    },
    {
        q: 'Kamera sistemi kurulumu ne kadar sürer?',
        a: '4–8 kameralı standart bir sistem çoğunlukla 1 gün içinde kurulur. Daha kapsamlı projelerde keşif sonrası süre birlikte planlanır.',
    },
    {
        q: 'İkinci el bilgisayarların garantisi var mı?',
        a: 'Evet. Sattığımız ikinci el bilgisayarlar 3 ila 6 ay garantilidir; her cihaz satıştan önce testten geçirilir.',
    },
    {
        q: 'Veri kurtarma yapıyor musunuz?',
        a: 'Evet, HDD ve SSD disklerden veri kurtarma yapıyoruz. Veri kurtarılamazsa ücret alınmaz.',
    },
    {
        q: 'Neredesiniz, nasıl ulaşırım?',
        a: `Mağazamız ${ADDRESS_TEXT} adresinde. ${HOURS_TEXT} açığız; telefon ya da WhatsApp ile ${COMPANY_PHONE} numarasından ulaşabilirsiniz.`,
    },
];

export const GALLERY_ITEMS = [
    { id: 1, title: 'Anakart Tamiri', category: 'bilgisayar', image: '/img/anakart-tamiri.webp', alt: 'Dizüstü bilgisayar anakartında lehim ve onarım' },
    { id: 2, title: 'BGA Tamiri', category: 'bilgisayar', image: '/img/bga-tamiri.webp', alt: 'BGA rework istasyonunda çip yenileme' },
    { id: 3, title: 'Laptop Ekran Değişimi', category: 'bilgisayar', image: '/img/laptop-ekran.webp', alt: 'Dizüstü bilgisayarda LCD ekran değişimi' },
    { id: 4, title: 'Yazıcı Tamiri', category: 'yazici', image: '/img/yazici-tamiri.webp', alt: 'Lazer yazıcı iç aksamının onarımı' },
    { id: 5, title: 'Veri Kurtarma', category: 'bilgisayar', image: '/img/veri-kurtarma.webp', alt: 'Arızalı sabit diskten veri kurtarma' },
    { id: 6, title: 'Kamera Montajı', category: 'kamera', image: '/img/kamera-montaj.webp', alt: 'IP güvenlik kamerası montajı' },
];

export const GALLERY_FILTERS = [
    { key: 'hepsi', label: 'Hepsi' },
    { key: 'bilgisayar', label: 'Bilgisayar' },
    { key: 'yazici', label: 'Yazıcı' },
    { key: 'kamera', label: 'Kamera' },
];

export const TIMELINE = [
    { year: '2014', title: 'Kuruluş', desc: 'Bilgisayar tamiri hizmetiyle başladık.' },
    { year: '2016', title: 'Yazıcı Servisi', desc: 'Yazıcı tamiri ve bakım hizmetlerini ekledik.' },
    { year: '2018', title: 'Kurumsal Çözümler', desc: 'Şirketler için yazıcı yönetimi ve bakım anlaşmaları sunmaya başladık.' },
    { year: '2020', title: 'Güvenlik Sistemleri', desc: 'Güvenlik kamerası montajına başladık.' },
    { year: '2022', title: 'Kiralama', desc: 'Yazıcı kiralama hizmetini başlattık.' },
    { year: '2024', title: 'Büyüme', desc: '5000’i aşkın müşteriye hizmet verdik.' },
];

export const VALUES = [
    { icon: 'shield-check', title: 'Güvenilirlik', desc: 'Müşterilerimize verdiğimiz sözleri tutarak güven inşa ediyoruz.' },
    { icon: 'medal-star', title: 'Kalite', desc: 'Her işimizde yüksek kalite standartlarını uyguluyoruz.' },
    { icon: 'handshake', title: 'Müşteri Odaklılık', desc: 'Müşteri memnuniyeti bizim için her şeyin önünde gelir.' },
];
