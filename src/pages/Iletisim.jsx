import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import {
    WHATSAPP_URL, COMPANY_PHONE, COMPANY_PHONE_E164, ADDRESS_TEXT, HOURS_TEXT, SUPPORT_TEXT,
    GOOGLE_MAPS_URL, SERVICES, whatsappLink,
} from '../data/site';

export default function Iletisim() {
    const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        const text = [
            'Merhaba, Tecnoklinik web sitesinden yazıyorum.',
            '',
            `*Ad Soyad:* ${form.name.trim()}`,
            `*Telefon:* ${form.phone.trim()}`,
            `*Hizmet:* ${form.service || 'Belirtilmedi'}`,
            `*Mesaj:* ${form.message.trim()}`,
        ].join('\n');
        window.open(whatsappLink(text), '_blank', 'noopener');
    };

    return (
        <>
            <PageHeader title="İletişim" lead="Size nasıl yardımcı olabiliriz?" crumbs={[['İletişim']]} />

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form">
                            <h2 className="contact-form-title">Bize Yazın</h2>
                            <p className="contact-form-lead">
                                Formu doldurun, mesajınız WhatsApp'ta hazır olarak açılsın; göndermek size kalır.
                            </p>

                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Ad Soyad *</label>
                                    <input type="text" id="name" name="name" autoComplete="name" placeholder="Adınız ve soyadınız"
                                        value={form.name} onChange={onChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefon *</label>
                                    <input type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel"
                                        placeholder="05XX XXX XX XX" pattern="[0-9 +()\-]{10,20}"
                                        title="Telefon numaranızı yazın (ör. 0545 342 29 44)"
                                        value={form.phone} onChange={onChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Hizmet</label>
                                    <select id="service" name="service" value={form.service} onChange={onChange}>
                                        <option value="">Bir hizmet seçin</option>
                                        {SERVICES.map((s) => (
                                            <option key={s.slug} value={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mesajınız *</label>
                                    <textarea id="message" name="message" placeholder="Arızayı ya da ihtiyacınızı kısaca yazın"
                                        value={form.message} onChange={onChange} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    <Icon name="send" /> WhatsApp ile Gönder
                                </button>
                                <p className="form-note">
                                    Bilgileriniz sitede saklanmaz. Ayrıntı: <Link to="/gizlilik">Gizlilik ve KVKK</Link>
                                </p>
                            </form>
                        </div>

                        <div>
                            <address className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon"><Icon name="call" /></div>
                                    <div>
                                        <h2>Telefon</h2>
                                        <p><a href={`tel:${COMPANY_PHONE_E164}`} className="accent-text">{COMPANY_PHONE}</a></p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon"><Icon name="chat-round-call" /></div>
                                    <div>
                                        <h2>WhatsApp</h2>
                                        <p>
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-text">
                                                Hemen yazın →
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon"><Icon name="map-point" /></div>
                                    <div>
                                        <h2>Adres</h2>
                                        <p>{ADDRESS_TEXT}</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon"><Icon name="clock" /></div>
                                    <div>
                                        <h2>Çalışma Saatleri</h2>
                                        <p>{HOURS_TEXT}</p>
                                        <p>{SUPPORT_TEXT}</p>
                                    </div>
                                </div>
                            </address>

                            <div className="map-actions">
                                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <Icon name="map-point" /> Google Haritalar'da Aç
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
