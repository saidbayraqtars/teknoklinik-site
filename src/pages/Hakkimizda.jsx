import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMonitor } from 'react-icons/fi';
import { VALUES, TIMELINE, STATS } from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Hakkimizda() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1>Hakkımızda</h1>
                        <p>TEKNOKLİNİK'i yakından tanıyın</p>
                        <div className="breadcrumb">
                            <Link to="/">Ana Sayfa</Link>
                            <span>/</span>
                            <span className="current">Hakkımızda</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Intro */}
            <section className="section">
                <div className="container">
                    <div className="about-intro">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <FiMonitor style={{ fontSize: '6rem', opacity: 0.6 }} />
                        </motion.div>
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>
                                Teknolojide Güvenilir{' '}
                                <span style={{ color: 'var(--color-primary)' }}>Çözüm Ortağınız</span>
                            </h2>
                            <p>
                                TEKNOKLİNİK, 2014 yılından bu yana bilgi teknolojileri alanında
                                hizmet vermektedir. Bilgisayar tamiri ile başlayan yolculuğumuz,
                                bugün yazıcı servisi, kamera montajı, bilgisayar alım-satımı,
                                kurumsal yazıcı çözümleri ve yazıcı kiralama hizmetlerini
                                kapsayan geniş bir yelpazede devam etmektedir.
                            </p>
                            <p>
                                Misyonumuz, bireysel ve kurumsal müşterilerimizin teknoloji
                                ihtiyaçlarını en hızlı, güvenilir ve uygun fiyatlı şekilde
                                karşılamaktır. Alanında uzman teknik kadromuz ve müşteri
                                memnuniyeti odaklı yaklaşımımızla sektörde fark yaratıyoruz.
                            </p>
                            <p>
                                Vizyonumuz ise Türkiye'nin her noktasında erişilebilir teknik
                                servis ve teknoloji çözümleri sunan lider bir marka olmaktır.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: 'var(--gradient-dark)' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">DEĞERLERİMİZ</span>
                        <h2 className="section-title">Temel Değerlerimiz</h2>
                    </motion.div>
                    <div className="values-grid">
                        {VALUES.map((value, i) => (
                            <motion.div
                                className="value-card"
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="value-icon">
                                    <value.icon />
                                </div>
                                <h4>{value.title}</h4>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">YOLCULUĞUMUZ</span>
                        <h2 className="section-title">Kilometre Taşları</h2>
                    </motion.div>
                    <div className="timeline">
                        {TIMELINE.map((item, i) => (
                            <motion.div
                                className="timeline-item"
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-title">{item.title}</div>
                                <div className="timeline-desc">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
