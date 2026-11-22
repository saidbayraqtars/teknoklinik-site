import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import CtaBox from '../components/CtaBox';
import {
    SERVICES, STATS, FEATURES, WHATSAPP_URL, COMPANY_PHONE, COMPANY_PHONE_E164, ADDRESS_TEXT, HOURS_TEXT,
    GOOGLE_MAPS_URL, SERVICE_AREA, TONER_SITE_URL,
} from '../data/site';

// Sayı, görünür alana girince sayar. Ön-render ve JS'siz görünümde son değer yazılıdır.
function Counter({ target, suffix = '' }) {
    const [value, setValue] = useState(target);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
        let raf;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const start = performance.now();
            const tick = (t) => {
                const p = Math.min(1, (t - start) / 1500);
                setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
                if (p < 1) raf = requestAnimationFrame(tick);
            };
            setValue(0);
            raf = requestAnimationFrame(tick);
        }, { threshold: 0.5 });
        io.observe(el);
        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [target]);

    return (
        <span ref={ref}>
            {value.toLocaleString('tr-TR')}
            {suffix}
        </span>
    );
}

export default function Home() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero-bg" aria-hidden="true"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                SAMSUN · İLKADIM TEKNİK SERVİS
                            </div>
                            <h1 className="hero-title">
                                Samsun'da <span className="highlight">Bilgisayar ve Yazıcı</span> Tamiri
                            </h1>
                            <p className="hero-description">
                                Bilgisayar ve yazıcı tamiri, güvenlik kamerası montajı, bilgisayar alım satımı ve kurumsal
                                çözümler. 10 yılı aşkın tecrübemizle İlkadım'daki mağazamızda ve yerinde servisle yanınızdayız.
                            </p>
                            <div className="hero-buttons">
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <Icon name="chat-round-call" /> WhatsApp'tan Yazın
                                </a>
                                <a href={`tel:${COMPANY_PHONE_E164}`} className="btn btn-primary">
                                    <Icon name="call" /> {COMPANY_PHONE}
                                </a>
                            </div>
                            <div className="hero-stats">
                                {STATS.map((stat) => (
                                    <div className="hero-stat" key={stat.label}>
                                        <div className="hero-stat-number">
                                            <Counter target={stat.number} suffix={stat.suffix} />
                                        </div>
                                        <div className="hero-stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-visual">
                            <ul className="hero-card-stack">
                                {SERVICES.slice(0, 4).map((service) => (
                                    <li key={service.slug}>
                                        <Link to={`/hizmetler/${service.slug}`} className="hero-feature-card">
                                            <div className="hero-feature-icon">
                                                <Icon name={service.icon} />
                                            </div>
                                            <div>
                                                <div className="hero-feature-title">{service.title}</div>
                                                <div className="hero-feature-desc">{service.shortDesc}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HİZMETLER ===== */}
            <section className="section">
                <div className="container">
                    <Reveal className="section-header">
                        <span className="section-subtitle">HİZMETLERİMİZ</span>
                        <h2 className="section-title">Neler Yapıyoruz?</h2>
                        <p className="section-description">
                            Bireysel ve kurumsal müşterilerimizin teknoloji ihtiyaçlarına tek adresten çözüm sunuyoruz.
                        </p>
                    </Reveal>

                    <div className="services-grid">
                        {SERVICES.map((service, i) => (
                            <Reveal className="service-card" key={service.slug} delay={(i % 3) * 80}>
                                <div className="service-icon">
                                    <Icon name={service.icon} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                                <Link to={`/hizmetler/${service.slug}`} className="btn btn-outline service-more">
                                    Ayrıntılar <span className="sr-only">: {service.title}</span> <Icon name="arrow-right" />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== NEDEN BİZ ===== */}
            <section className="section why-us">
                <div className="container">
                    <Reveal className="section-header">
                        <span className="section-subtitle">NEDEN BİZ?</span>
                        <h2 className="section-title">Neden Tecnoklinik?</h2>
                        <p className="section-description">
                            Müşteri memnuniyetini öne alan çalışma anlayışımız ve deneyimli ekibimizle hizmet veriyoruz.
                        </p>
                    </Reveal>

                    <div className="features-grid">
                        {FEATURES.map((feat, i) => (
                            <Reveal className="feature-card" key={feat.title} delay={(i % 3) * 80}>
                                <div className="feature-icon">
                                    <Icon name={feat.icon} />
                                </div>
                                <div>
                                    <h3>{feat.title}</h3>
                                    <p>{feat.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== KONUM ===== */}
            <section className="section">
                <div className="container">
                    <Reveal className="location-box">
                        <div>
                            <span className="section-subtitle">BİZİ ZİYARET EDİN</span>
                            <h2 className="section-title">İlkadım'daki Mağazamız</h2>
                            <p className="location-text">
                                <Icon name="map-point" className="inline-icon" /> {ADDRESS_TEXT}
                            </p>
                            <p className="location-text">
                                <Icon name="clock" className="inline-icon" /> {HOURS_TEXT}
                            </p>
                            <p className="location-text">
                                Yerinde servis bölgelerimiz: {SERVICE_AREA.join(', ')}.
                            </p>
                            <p className="location-text">
                                Toner ve kartuş dolumu için:{' '}
                                <a href={TONER_SITE_URL} target="_blank" rel="noopener">samsuntonerdolum.com.tr</a>
                            </p>
                        </div>
                        <div className="location-actions">
                            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <Icon name="map-point" /> Yol Tarifi Al
                            </a>
                            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                <Icon name="star2" /> Google Yorumlarımız
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CtaBox />
        </>
    );
}
