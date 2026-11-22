import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal from './Reveal';
import { WHATSAPP_URL, COMPANY_PHONE, COMPANY_PHONE_E164 } from '../data/site';

export default function CtaBox({ title = 'Hemen Bizimle İletişime Geçin', text, waLink = WHATSAPP_URL }) {
    return (
        <section className="cta-section">
            <div className="container">
                <Reveal className="cta-box">
                    <h2>{title}</h2>
                    <p>{text || 'Arızanızı ya da ihtiyacınızı yazın, en kısa sürede dönüş yapalım.'}</p>
                    <div className="cta-buttons">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            <Icon name="chat-round-call" /> WhatsApp ile Yazın
                        </a>
                        <a href={`tel:${COMPANY_PHONE_E164}`} className="btn btn-outline">
                            <Icon name="call" /> {COMPANY_PHONE}
                        </a>
                        <Link to="/iletisim" className="btn btn-outline">
                            İletişim <Icon name="arrow-right" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
