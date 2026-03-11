import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SERVICES, WHATSAPP_URL, WHATSAPP_NUMBER } from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Hizmetler() {
    const handleWhatsApp = (serviceName) => {
        const message = encodeURIComponent(
            `Merhaba, ${serviceName} hizmeti hakkında bilgi almak istiyorum.`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1>Hizmetlerimiz</h1>
                        <p>Teknoloji ihtiyaçlarınız için kapsamlı çözümler sunuyoruz</p>
                        <div className="breadcrumb">
                            <Link to="/">Ana Sayfa</Link>
                            <span>/</span>
                            <span className="current">Hizmetler</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={service.id}
                            className="glass-card"
                            style={{
                                marginBottom: 32,
                                display: 'grid',
                                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                                gap: 40,
                                alignItems: 'center',
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={i}
                            variants={fadeInUp}
                        >
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16,
                                        marginBottom: 16,
                                    }}
                                >
                                    <div className="service-icon">
                                        <service.icon />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem' }}>{service.title}</h3>
                                </div>
                                <p
                                    style={{
                                        color: 'var(--color-text-muted)',
                                        lineHeight: 1.8,
                                        marginBottom: 20,
                                    }}
                                >
                                    {service.description}
                                </p>
                                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleWhatsApp(service.title)}
                                    >
                                        <FaWhatsapp /> Teklif Al
                                    </button>
                                    <Link to="/iletisim" className="btn btn-outline">
                                        İletişim <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <ul className="service-features">
                                    {service.features.map((feat, j) => (
                                        <li key={j}>
                                            <FiCheck /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2>İhtiyacınıza Uygun Çözüm İçin</h2>
                        <p>Hizmetlerimiz hakkında detaylı bilgi almak için hemen iletişime geçin.</p>
                        <div className="cta-buttons">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <FaWhatsapp /> WhatsApp ile Ulaşın
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
