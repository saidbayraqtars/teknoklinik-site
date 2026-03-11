import { Link } from 'react-router-dom';
import { FiMonitor, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, NAV_LINKS, SERVICES } from '../data/constants';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>
                            TEKNO<span className="accent">KLİNİK</span>
                        </h3>
                        <p>
                            Bilgisayar tamiri, yazıcı tamiri, kamera montajı ve daha fazlası için
                            güvenilir teknoloji çözüm ortağınız. 10 yılı aşkın tecrübemizle
                            hizmetinizdeyiz.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Sayfalar</h4>
                        {NAV_LINKS.map((link) => (
                            <Link key={link.path} to={link.path}>{link.name}</Link>
                        ))}
                        <Link to="/iletisim">İletişim</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Hizmetler</h4>
                        {SERVICES.slice(0, 5).map((s) => (
                            <Link key={s.id} to="/hizmetler">{s.title}</Link>
                        ))}
                    </div>

                    <div className="footer-column">
                        <h4>İletişim</h4>
                        <a href={`tel:${COMPANY_PHONE}`}>
                            <FiPhone style={{ marginRight: 6, verticalAlign: 'middle' }} />
                            {COMPANY_PHONE}
                        </a>
                        <a href={`mailto:${COMPANY_EMAIL}`}>
                            <FiMail style={{ marginRight: 6, verticalAlign: 'middle' }} />
                            {COMPANY_EMAIL}
                        </a>
                        <a href="#">
                            <FiMapPin style={{ marginRight: 6, verticalAlign: 'middle' }} />
                            {COMPANY_ADDRESS}
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} {COMPANY_NAME}. Tüm hakları saklıdır.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Gizlilik Politikası</a>
                        <a href="#">Kullanım Koşulları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
