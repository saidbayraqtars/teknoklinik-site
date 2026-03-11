import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import {
    SERVICES,
    STATS,
    FEATURES,
    TESTIMONIALS,
    WHATSAPP_URL,
} from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 2000;
                    const step = target / (duration / 16);
                    const animate = () => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                        } else {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        }
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count.toLocaleString('tr-TR')}
            {suffix}
        </span>
    );
}

export default function Home() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                TEKNOLOJİ ÇÖZÜM ORTAGINIZ
                            </div>
                            <h1 className="hero-title">
                                Teknolojide <span className="highlight">Güvenilir</span>{' '}
                                Çözüm Ortağınız
                            </h1>
                            <p className="hero-description">
                                Bilgisayar tamiri, yazıcı servisi, kamera montajı ve kurumsal
                                çözümlerle işinizi bir adım öteye taşıyoruz. 10 yılı aşkın
                                tecrübemizle yanınızdayız.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/hizmetler" className="btn btn-primary">
                                    Hizmetlerimiz <FiArrowRight />
                                </Link>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp"
                                >
                                    <FaWhatsapp /> Hemen Ulaşın
                                </a>
                            </div>
                            <div className="hero-stats">
                                {STATS.map((stat, i) => (
                                    <div className="hero-stat" key={i}>
                                        <div className="hero-stat-number">
                                            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                        </div>
                                        <div className="hero-stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="hero-card-stack">
                                {SERVICES.slice(0, 4).map((service, i) => (
                                    <motion.div
                                        className="hero-feature-card"
                                        key={service.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.15 }}
                                    >
                                        <div className="hero-feature-icon">
                                            <service.icon />
                                        </div>
                                        <div>
                                            <div className="hero-feature-title">{service.title}</div>
                                            <div className="hero-feature-desc">{service.shortDesc.substring(0, 60)}...</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES OVERVIEW ===== */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">HİZMETLERİMİZ</span>
                        <h2 className="section-title">Neler Yapıyoruz?</h2>
                        <p className="section-description">
                            Geniş hizmet yelpazemizle bireysel ve kurumsal tüm teknoloji
                            ihtiyaçlarınıza profesyonel çözümler sunuyoruz.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {SERVICES.map((service, i) => (
                            <motion.div
                                className="service-card"
                                key={service.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="service-icon">
                                    <service.icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                                <Link to="/hizmetler" className="btn btn-outline" style={{ marginTop: 20 }}>
                                    Detaylı Bilgi <FiArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY US ===== */}
            <section className="section why-us">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">NEDEN BİZ?</span>
                        <h2 className="section-title">Farkımız Ne?</h2>
                        <p className="section-description">
                            Müşteri memnuniyeti odaklı çalışma anlayışımız ve uzman kadromuzla
                            sektörde öne çıkıyoruz.
                        </p>
                    </motion.div>

                    <div className="stats-grid">
                        {STATS.map((stat, i) => (
                            <motion.div
                                className="stat-card"
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="stat-number">
                                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="features-grid">
                        {FEATURES.map((feat, i) => (
                            <motion.div
                                className="feature-card"
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="feature-icon">
                                    <feat.icon />
                                </div>
                                <div>
                                    <h4>{feat.title}</h4>
                                    <p>{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">REFERANSLAR</span>
                        <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
                        <p className="section-description">
                            Binlerce mutlu müşterimizin bize olan güveni, en büyük referansımızdır.
                        </p>
                    </motion.div>

                    <div className="testimonials-grid">
                        {TESTIMONIALS.slice(0, 3).map((t, i) => (
                            <motion.div
                                className="testimonial-card"
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="testimonial-stars">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <FaStar key={j} />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2>Hemen Bizimle İletişime Geçin</h2>
                        <p>
                            Teknoloji sorunlarınız için profesyonel destek almak ister misiniz?
                            WhatsApp üzerinden anında ulaşabilirsiniz.
                        </p>
                        <div className="cta-buttons">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <FaWhatsapp /> WhatsApp ile Ulaşın
                            </a>
                            <Link to="/iletisim" className="btn btn-outline">
                                İletişim Formu <FiArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
