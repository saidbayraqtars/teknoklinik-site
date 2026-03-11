import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMonitor } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS, WHATSAPP_URL, COMPANY_NAME } from '../data/constants';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon"><FiMonitor /></span>
                    <span>TEKNO<span className="logo-accent">KLİNİK</span></span>
                </Link>

                <div className="navbar-links">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                    >
                        <FaWhatsapp /> İletişim
                    </a>
                </div>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={location.pathname === link.path ? 'active' : ''}
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-cta"
                >
                    <FaWhatsapp /> İletişim
                </a>
            </div>
        </nav>
    );
}
