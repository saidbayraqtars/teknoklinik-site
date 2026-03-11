# 🖥️ TEKNOKLİNİK — Kurumsal Web Sitesi

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

> **TEKNOKLİNİK** — Bilgisayar tamiri, yazıcı servisi, güvenlik kamerası montajı ve kurumsal BT çözümleri alanında uzman teknik servis merkezi.

---

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Sayfalar](#-sayfalar)
- [İletişim Bilgileri](#-i̇letişim-bilgileri)
- [Kurulum](#-kurulum)
- [Proje Yapısı](#-proje-yapısı)

---

## 🔍 Proje Hakkında

TEKNOKLİNİK kurumsal web sitesi; modern, hızlı ve tamamen responsive bir şekilde tasarlanmıştır. Siyah-turuncu renk paleti, glassmorphism UI bileşenleri ve akıcı animasyonlarla profesyonel bir deneyim sunmaktadır.

---

## ✨ Özellikler

- 🌙 **Karanlık Tema** — Siyah & turuncu renk paleti
- 💎 **Glassmorphism UI** — Modern şeffaf kart tasarımları
- 🎯 **Framer Motion Animasyonları** — Akıcı geçişler ve scroll animasyonları
- 📱 **Tam Responsive** — Mobil, tablet ve masaüstü uyumlu
- 💬 **WhatsApp Entegrasyonu** — Formdaki mesajlar doğrudan WhatsApp'a iletilir
- 🍪 **GDPR Cookie Consent** — Çerez onay bileşeni
- ⬆️ **Scroll to Top** — Sayfa başına hızlı erişim butonu
- 🔄 **Loading Ekranı** — Şık açılış animasyonu
- 📸 **Galeri** — Gerçek servis görselleriyle kategorili galeri

---

## 🛠️ Teknolojiler

| Teknoloji | Sürüm | Kullanım Amacı |
|-----------|-------|---------------|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Framer Motion | 11 | Animasyonlar |
| React Router DOM | 6 | Sayfa yönlendirme |
| React Icons | 5 | İkon kütüphanesi |
| Vanilla CSS | — | Özel stillendirme |

---

## 📄 Sayfalar

| Sayfa | Rota | Açıklama |
|-------|------|----------|
| Ana Sayfa | `/` | Hero, istatistikler, hizmetler, referanslar |
| Hizmetler | `/hizmetler` | Detaylı hizmet listesi |
| Hakkımızda | `/hakkimizda` | Şirket tarihi ve değerleri |
| Galeri | `/galeri` | Gerçekleştirilen işlerden görseller |
| SSS | `/sss` | Sık sorulan sorular |
| İletişim | `/iletisim` | İletişim formu ve bilgiler |

---

## 📞 İletişim Bilgileri

| | |
|-|-|
| **Telefon** | [0545 342 29 44](tel:05453422944) |
| **WhatsApp** | [wa.me/905453422944](https://wa.me/905453422944) |
| **Google Haritalar** | [Konumumuzu Görüntüle](https://share.google/X0PsAYn3JXsDxePBe) |

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

```bash
# Depoyu klonlayın
git clone https://github.com/saidbayraqtars/teknoklinik-site.git
cd teknoklinik-site

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda açın: **http://localhost:5173**

### Derleme (Production)

```bash
npm run build
```

---

## 📁 Proje Yapısı

```
teknoklinik-site/
├── public/
│   ├── anakart-tamiri.png       # Anakart tamir görseli
│   ├── bga-tamiri.png           # BGA chip tamir görseli
│   ├── laptop-ekran.png         # Laptop ekran değişimi görseli
│   ├── yazici-tamiri.png        # Yazıcı tamir görseli
│   ├── veri-kurtarma.png        # Veri kurtarma görseli
│   └── kamera-montaj.png        # Kamera montaj görseli
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigasyon çubuğu
│   │   ├── Footer.jsx           # Sayfa altlığı
│   │   ├── FloatingWhatsApp.jsx # Yüzen WhatsApp butonu
│   │   ├── CookieConsent.jsx    # Çerez onay bildirimi
│   │   ├── LoadingScreen.jsx    # Yükleme ekranı
│   │   └── ScrollToTop.jsx      # Yukarı kaydırma butonu
│   ├── pages/
│   │   ├── Home.jsx             # Ana sayfa
│   │   ├── Hizmetler.jsx        # Hizmetler sayfası
│   │   ├── Hakkimizda.jsx       # Hakkımızda sayfası
│   │   ├── Galeri.jsx           # Galeri sayfası
│   │   ├── SSS.jsx              # SSS sayfası
│   │   └── Iletisim.jsx         # İletişim sayfası
│   ├── data/
│   │   └── constants.js         # Merkezi veri ve sabitler
│   ├── styles/
│   │   └── index.css            # Global stiller
│   ├── App.jsx                  # Ana uygulama ve routing
│   └── main.jsx                 # Giriş noktası
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Hizmetlerimiz

- 🔧 **Anakart & BGA Tamiri** — Profesyonel microsolder ve rework işlemleri
- 💻 **Bilgisayar Tamiri** — Masaüstü ve laptop her türlü arıza
- 🖨️ **Yazıcı Servisi** — Tüm marka lazer/inkjet yazıcı tamiri
- 📷 **Kamera Montajı** — IP ve analog güvenlik sistemi kurulumu
- 💾 **Veri Kurtarma** — HDD/SSD veri kurtarma (%90+ başarı oranı)
- 🛒 **Bilgisayar Alım Satımı** — Yeni & 2. el bilgisayar

---

<p align="center">
  <strong>TEKNOKLİNİK &copy; 2024</strong> — Teknoloji İhtiyaçlarınız İçin Güvenilir Adres
</p>
