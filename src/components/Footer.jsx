import { Link } from 'react-router-dom';
import Icon from './Icon';
import { Logo } from './Navbar';
import {
    COMPANY_NAME, COMPANY_PHONE, COMPANY_PHONE_E164, ADDRESS_TEXT, HOURS_TEXT, SUPPORT_TEXT,
    NAV_LINKS, SERVICES, SOCIAL, GOOGLE_MAPS_URL, TONER_SITE_URL,
} from '../data/site';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="navbar-logo footer-logo"><Logo /></Link>
                        <p>
                            Samsun İlkadım'da bilgisayar ve yazıcı tamiri, güvenlik kamerası montajı, bilgisayar
                            alım satımı ve web tasarım hizmetleri.
                        </p>
                        <div className="footer-social">
                            {SOCIAL.map((s) => (
                                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                                    {s.icon ? <Icon name={s.icon} /> : <span className="social-text">{s.name[0]}</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h2 className="footer-title">Sayfalar</h2>
                        {NAV_LINKS.map((link) => (
                            <Link key={link.path} to={link.path}>{link.name}</Link>
                        ))}
                        <a href={TONER_SITE_URL} target="_blank" rel="noopener">Samsun Toner Dolum</a>
                    </div>

                    <div className="footer-column">
                        <h2 className="footer-title">Hizmetler</h2>
                        {SERVICES.map((s) => (
                            <Link key={s.slug} to={`/hizmetler/${s.slug}`}>{s.title}</Link>
                        ))}
                    </div>

                    <div className="footer-column">
                        <h2 className="footer-title">İletişim</h2>
                        <a href={`tel:${COMPANY_PHONE_E164}`}>
                            <Icon name="call" className="inline-icon" /> {COMPANY_PHONE}
                        </a>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                            <Icon name="map-point" className="inline-icon" /> {ADDRESS_TEXT}
                        </a>
                        <span className="footer-text">
                            <Icon name="clock" className="inline-icon" /> {HOURS_TEXT}
                        </span>
                        <span className="footer-text">
                            <Icon name="headset" className="inline-icon" /> {SUPPORT_TEXT}
                        </span>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p suppressHydrationWarning>© {new Date().getFullYear()} {COMPANY_NAME}. Tüm hakları saklıdır.</p>
                    <div className="footer-bottom-links">
                        <Link to="/gizlilik">Gizlilik ve KVKK</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
