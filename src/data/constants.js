import { FiMonitor, FiPrinter, FiCamera, FiShoppingCart, FiSettings, FiClock, FiGlobe } from 'react-icons/fi';
import { FaShieldAlt, FaHeadset, FaStar, FaTools, FaTruck, FaHandshake } from 'react-icons/fa';

export const WHATSAPP_NUMBER = '905453422944';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const COMPANY_NAME = 'TEKNOKLİNİK';
export const COMPANY_EMAIL = 'info@teknoklinik.com';
export const COMPANY_PHONE = '0545 342 29 44';
export const COMPANY_ADDRESS = 'İstanbul, Türkiye';
export const GOOGLE_MAPS_URL = 'https://share.google/X0PsAYn3JXsDxePBe';

export const NAV_LINKS = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'SSS', path: '/sss' },
];

export const SERVICES = [
  {
    id: 'bilgisayar-tamiri',
    icon: FiMonitor,
    title: 'Bilgisayar Tamiri',
    shortDesc: 'Masaüstü ve dizüstü bilgisayar arızalarına profesyonel çözümler sunuyoruz.',
    description: 'Masaüstü ve dizüstü bilgisayarlarınızın her türlü donanım ve yazılım arızasını en kısa sürede gideriyoruz. Anakart tamiri, ekran değişimi, veri kurtarma ve daha fazlası.',
    features: [
      'Anakart tamiri ve değişimi',
      'Ekran değişimi (LCD/LED)',
      'SSD/HDD değişimi ve veri kurtarma',
      'İşletim sistemi kurulumu',
      'Virüs temizleme ve performans artırma',
      'Termal macun yenileme',
    ],
  },
  {
    id: 'yazici-tamiri',
    icon: FiPrinter,
    title: 'Yazıcı Tamiri',
    shortDesc: 'Her marka ve model yazıcı için uzman tamir ve bakım hizmeti.',
    description: 'Tüm marka ve modellerde yazıcı tamiri, bakımı ve toner/kartuş dolumu yapıyoruz. Lazer, inkjet ve dot-matrix yazıcılarda uzmanız.',
    features: [
      'Lazer yazıcı tamiri',
      'Inkjet yazıcı tamiri',
      'Toner ve kartuş dolumu',
      'Yazıcı bakım hizmeti',
      'Kağıt sıkışma sorunları',
      'Baskı kalitesi optimizasyonu',
    ],
  },
  {
    id: 'kamera-montaj',
    icon: FiCamera,
    title: 'Kamera Montajı',
    shortDesc: 'Ev ve iş yerleri için profesyonel güvenlik kamerası montajı.',
    description: 'Ev, ofis ve iş yerleriniz için profesyonel güvenlik kamerası sistemleri kuruyoruz. IP kamera, analog kamera ve akıllı güvenlik çözümleri.',
    features: [
      'IP kamera kurulumu',
      'Analog kamera sistemleri',
      'NVR/DVR kayıt cihazı kurulumu',
      'Uzaktan izleme ayarları',
      'Gece görüşlü kamera sistemleri',
      'Hareket algılama ve bildirim',
    ],
  },
  {
    id: 'bilgisayar-alim-satim',
    icon: FiShoppingCart,
    title: 'Bilgisayar Alım Satımı',
    shortDesc: 'Yeni ve 2. el bilgisayar alım satımında güvenilir adres.',
    description: 'İhtiyacınıza uygun yeni ve ikinci el bilgisayar tedariği yapıyoruz. Kurumsal ve bireysel müşterilerimize en uygun fiyat garantisi sunuyoruz.',
    features: [
      'Yeni bilgisayar satışı',
      '2. el bilgisayar alım satımı',
      'Kurumsal bilgisayar tedariği',
      'Özel konfigürasyon toplama',
      'Yedek parça satışı',
      'Garanti ve teknik destek',
    ],
  },
  {
    id: 'kurumsal-yazici',
    icon: FiSettings,
    title: 'Kurumsal Yazıcı Çözümleri',
    shortDesc: 'Kurumsal müşteriler için özel yazıcı yönetim ve bakım çözümleri.',
    description: 'Kurumsal müşterilerimiz için yazıcı filosu yönetimi, periyodik bakım anlaşmaları ve toplu toner tedariği hizmetleri sunuyoruz.',
    features: [
      'Yazıcı filosu yönetimi',
      'Periyodik bakım anlaşmaları',
      'Toplu toner/kartuş tedariği',
      'Ağ yazıcı kurulumu',
      'Maliyet optimizasyonu',
      'Teknik destek ve SLA',
    ],
  },
  {
    id: 'yazici-kiralama',
    icon: FiClock,
    title: 'Yazıcı Kiralama',
    shortDesc: 'Kısa ve uzun süreli yazıcı kiralama hizmetleri.',
    description: 'Etkinlikler, fuarlar veya sürekli kullanım için yazıcı kiralama hizmeti sunuyoruz. Kurulum, bakım ve toner dahil.',
    features: [
      'Kısa süreli kiralama',
      'Uzun süreli kiralama',
      'Kurulum ve teslimat dahil',
      'Toner/kartuş dahil',
      'Teknik destek dahil',
      'Esnek ödeme seçenekleri',
    ],
  },
  {
    id: 'web-tasarim',
    icon: FiGlobe,
    title: 'Web Tasarım',
    shortDesc: 'Profesyonel ve modern web sitesi tasarım ve geliştirme hizmetleri.',
    description: 'İşletmeniz için kurumsal web sitesi, e-ticaret sitesi ve özel yazılım çözümleri geliştiriyoruz. SEO uyumlu, mobil dostu ve modern tasarımlarla dijital dünyada fark yaratmanızı sağlıyoruz.',
    features: [
      'Kurumsal web sitesi tasarımı',
      'E-ticaret sitesi geliştirme',
      'Mobil uyumlu (responsive) tasarım',
      'SEO optimizasyonu',
      'Alan adı ve hosting hizmeti',
      'Web sitesi bakım ve güncelleme',
    ],
  },
];

export const STATS = [
  { number: 5000, suffix: '+', label: 'Mutlu Müşteri' },
  { number: 10, suffix: '+', label: 'Yıllık Deneyim' },
  { number: 15000, suffix: '+', label: 'Tamamlanan İş' },
  { number: 7, suffix: '/24', label: 'Destek' },
];

export const FEATURES = [
  {
    icon: FaShieldAlt,
    title: 'Güvenilir Hizmet',
    desc: 'Tüm işlerimizde garanti veriyor, müşteri memnuniyetini ön planda tutuyoruz.',
  },
  {
    icon: FaHeadset,
    title: '7/24 Destek',
    desc: 'Acil durumlar için 7 gün 24 saat teknik destek hattımız mevcuttur.',
  },
  {
    icon: FaStar,
    title: 'Uzman Kadro',
    desc: 'Alanında uzman ve sertifikalı teknisyenlerimizle hizmet veriyoruz.',
  },
  {
    icon: FaTools,
    title: 'Orijinal Parça',
    desc: 'Tüm tamir ve bakım işlemlerinde orijinal ve kaliteli parçalar kullanıyoruz.',
  },
  {
    icon: FaTruck,
    title: 'Yerinde Servis',
    desc: 'İhtiyaç halinde iş yerinize gelerek yerinde teknik servis hizmeti veriyoruz.',
  },
  {
    icon: FaHandshake,
    title: 'Uygun Fiyat',
    desc: 'Piyasanın en uygun fiyatlarıyla kaliteli hizmet sunmayı hedefliyoruz.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ahmet Yılmaz',
    role: 'İşletme Sahibi',
    initials: 'AY',
    text: 'Ofisimizdeki tüm bilgisayar ve yazıcı sorunlarını TEKNOKLİNİK\'e emanet ediyoruz. Her zaman hızlı ve profesyonel çözümler sundular.',
    stars: 5,
  },
  {
    name: 'Fatma Demir',
    role: 'Muhasebeci',
    initials: 'FD',
    text: 'Yazıcı kiralama hizmetlerini kullanıyoruz. Toner dahil olması ve teknik desteğin hızlı olması büyük avantaj sağlıyor.',
    stars: 5,
  },
  {
    name: 'Mehmet Kara',
    role: 'Mağaza Müdürü',
    initials: 'MK',
    text: 'Güvenlik kamerası montajı için TEKNOKLİNİK\'i tercih ettik. Kurulum ve uzaktan izleme ayarlarını çok kısa sürede tamamladılar.',
    stars: 5,
  },
  {
    name: 'Zeynep Arslan',
    role: 'Avukat',
    initials: 'ZA',
    text: 'Dizüstü bilgisayarımın anakartı arızalanmıştı, başka yerlerde değiştirilmesi gerektiğini söylediler. TEKNOKLİNİK tamir etti.',
    stars: 5,
  },
  {
    name: 'Can Özkan',
    role: 'Yazılımcı',
    initials: 'CÖ',
    text: 'Özel konfigürasyon bilgisayar topladım, hem parça hem montaj fiyatı çok uygundu. Tavsiye ederim.',
    stars: 5,
  },
  {
    name: 'Elif Şahin',
    role: 'Öğretmen',
    initials: 'EŞ',
    text: 'Evimize kamera taktırdık. Telefondan izleme özelliği harika çalışıyor. Çok teşekkürler!',
    stars: 5,
  },
];

export const FAQ_DATA = [
  {
    question: 'Servis süresi ne kadar?',
    answer: 'Arıza türüne göre değişmekle birlikte, çoğu tamir işlemi aynı gün içinde tamamlanır. Parça tedariği gereken durumlarda 1-3 iş günü sürebilir.',
  },
  {
    question: 'Yerinde servis hizmeti veriyor musunuz?',
    answer: 'Evet, İstanbul genelinde yerinde servis hizmeti sunuyoruz. Kurumsal müşterilerimiz için özel anlaşmalı yerinde servis paketlerimiz mevcuttur.',
  },
  {
    question: 'Garanti süresi ne kadardır?',
    answer: 'Yapılan tüm tamir ve bakım işlemlerinde 6 ay garanti sunuyoruz. Yeni parça kullanılan işlemlerde garanti süresi 1 yıla kadar uzayabilir.',
  },
  {
    question: 'Yazıcı kiralama fiyatları nasıl belirleniyor?',
    answer: 'Yazıcı kiralama fiyatları, yazıcı modeli, kiralama süresi ve aylık baskı hacmine göre belirlenir. Detaylı fiyat teklifi için bizimle iletişime geçebilirsiniz.',
  },
  {
    question: 'Hangi marka yazıcılara servis veriyorsunuz?',
    answer: 'HP, Canon, Epson, Brother, Samsung, Lexmark, Kyocera, Xerox ve daha birçok marka yazıcıya servis veriyoruz. Tüm lazer ve inkjet yazıcılar dahildir.',
  },
  {
    question: 'Kamera sistemi kurulumu ne kadar sürer?',
    answer: 'Standart bir 4-8 kameralı sistem kurulumu 1 gün içinde tamamlanır. Daha kapsamlı projeler için önceden planlama yapılarak süre belirlenir.',
  },
  {
    question: 'İkinci el bilgisayar garantisi var mı?',
    answer: 'Evet, satışını yaptığımız tüm ikinci el bilgisayarlara 3 ila 6 ay arası garanti sunuyoruz. Her cihaz satıştan önce kapsamlı test sürecinden geçirilir.',
  },
  {
    question: 'Veri kurtarma hizmeti veriyor musunuz?',
    answer: 'Evet, HDD ve SSD disklerden veri kurtarma hizmeti veriyoruz. Başarı oranımız %90\'ın üzerindedir. Veri kurtarılamadığı durumlarda ücret alınmaz.',
  },
];

export const GALLERY_ITEMS = [
  { id: 1, title: 'Anakart Tamiri', category: 'bilgisayar', image: '/anakart-tamiri.png', desc: 'Profesyonel anakart onarımı' },
  { id: 2, title: 'BGA Tamiri', category: 'bilgisayar', image: '/bga-tamiri.png', desc: 'BGA rework ve chip yenileme' },
  { id: 3, title: 'Laptop Ekran Değişimi', category: 'bilgisayar', image: '/laptop-ekran.png', desc: 'LCD/LED ekran değişimi' },
  { id: 4, title: 'Yazıcı Tamiri', category: 'yazici', image: '/yazici-tamiri.png', desc: 'Lazer ve inkjet yazıcı tamiri' },
  { id: 5, title: 'Veri Kurtarma', category: 'bilgisayar', image: '/veri-kurtarma.png', desc: 'HDD/SSD veri kurtarma' },
  { id: 6, title: 'Kamera Montajı', category: 'kamera', image: '/kamera-montaj.png', desc: 'IP güvenlik kamerası kurulumu' },
];

export const GALLERY_FILTERS = [
  { key: 'hepsi', label: 'Hepsi' },
  { key: 'bilgisayar', label: 'Bilgisayar' },
  { key: 'yazici', label: 'Yazıcı' },
  { key: 'kamera', label: 'Kamera' },
  { key: 'web', label: 'Web Tasarım' },
];

export const TIMELINE = [
  { year: '2014', title: 'Kuruluş', desc: 'TEKNOKLİNİK, bilgisayar tamiri hizmeti ile faaliyetlerine başladı.' },
  { year: '2016', title: 'Yazıcı Servisi', desc: 'Yazıcı tamiri ve bakım hizmetlerini portföyümüze ekledik.' },
  { year: '2018', title: 'Kurumsal Çözümler', desc: 'Kurumsal müşteriler için özel yazıcı yönetim çözümleri sunmaya başladık.' },
  { year: '2020', title: 'Güvenlik Sistemleri', desc: 'Kamera montajı ve güvenlik sistemleri alanına giriş yaptık.' },
  { year: '2022', title: 'Kiralama Hizmeti', desc: 'Yazıcı kiralama hizmetimizi başlatarak hizmet yelpazemizi genişlettik.' },
  { year: '2024', title: 'Büyüme', desc: '5000+ mutlu müşteriye ulaştık ve hizmet kalitemizi sürekli artırıyoruz.' },
];

export const VALUES = [
  {
    icon: FaShieldAlt,
    title: 'Güvenilirlik',
    desc: 'Müşterilerimize verdiğimiz sözleri tutarak güven inşa ediyoruz.',
  },
  {
    icon: FaStar,
    title: 'Kalite',
    desc: 'Her işimizde en yüksek kalite standartlarını uyguluyoruz.',
  },
  {
    icon: FaHandshake,
    title: 'Müşteri Odaklılık',
    desc: 'Müşteri memnuniyeti bizim için her şeyin önünde gelir.',
  },
];
