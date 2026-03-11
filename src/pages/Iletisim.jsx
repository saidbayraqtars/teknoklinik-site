import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import {
    WHATSAPP_NUMBER,
    WHATSAPP_URL,
    COMPANY_PHONE,
    COMPANY_EMAIL,
    COMPANY_ADDRESS,
    GOOGLE_MAPS_URL,
    SERVICES,
} from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Iletisim() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `Merhaba, TEKNOKLİNİK web sitesinden yazıyorum.

*Ad Soyad:* ${form.name}
*Telefon:* ${form.phone}
*Hizmet:* ${form.service || 'Belirtilmedi'}
*Mesaj:* ${form.message}`;

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1>İletişim</h1>
                        <p>Size nasıl yardımcı olabiliriz?</p>
                        <div className="breadcrumb">
                            <Link to="/">Ana Sayfa</Link>
                            <span>/</span>
                            <span className="current">İletişim</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="contact-form">
                                <h3
                                    style={{
                                        color: 'var(--color-white)',
                                        fontSize: '1.3rem',
                                        marginBottom: 8,
                                    }}
                                >
                                    Bize Yazın
                                </h3>
                                <p
                                    style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.9rem',
                                        marginBottom: 28,
                                    }}
                                >
                                    Formu doldurun, mesajınız WhatsApp üzerinden bize iletilsin.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Ad Soyad *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Adınız ve soyadınız"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="05XX XXX XX XX"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service">Hizmet Seçimi</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Bir hizmet seçin</option>
                                            {SERVICES.map((s) => (
                                                <option key={s.id} value={s.title}>
                                                    {s.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Mesajınız *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Sorununuzu veya ihtiyacınızı detaylı açıklayın..."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        <FiSend /> WhatsApp ile Gönder
                                    </button>
                                </form>

                                <div style={{ textAlign: 'center', marginTop: 20 }}>
                                    <p
                                        style={{
                                            color: 'var(--color-text-dim)',
                                            fontSize: '0.8rem',
                                            marginBottom: 12,
                                        }}
                                    >
                                        veya doğrudan WhatsApp'tan yazın
                                    </p>
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-whatsapp"
                                        style={{ width: '100%' }}
                                    >
                                        <FaWhatsapp /> WhatsApp'ı Aç
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={1}
                        >
                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FiPhone />
                                    </div>
                                    <div>
                                        <h4>Telefon</h4>
                                        <p>
                                            <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} style={{ color: 'var(--color-primary)' }}>
                                                {COMPANY_PHONE}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <p>
                                            <a
                                                href={WHATSAPP_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: '#25D366' }}
                                            >
                                                Hemen Yazın →
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FiMail />
                                    </div>
                                    <div>
                                        <h4>E-posta</h4>
                                        <p>{COMPANY_EMAIL}</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FiMapPin />
                                    </div>
                                    <div>
                                        <h4>Adres</h4>
                                        <p>{COMPANY_ADDRESS}</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FiClock />
                                    </div>
                                    <div>
                                        <h4>Çalışma Saatleri</h4>
                                        <p>Pazartesi - Cumartesi: 09:00 - 19:00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="map-container" style={{ textAlign: 'center', padding: '24px 0' }}>
                                <a
                                    href={GOOGLE_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                >
                                    <FiMapPin /> Google Haritalar'da Görüntüle
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
