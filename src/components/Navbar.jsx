import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { NAV_LINKS, WHATSAPP_URL, COMPANY_PHONE_E164 } from '../data/site';

export function Logo() {
    return (
        <>
            <span className="logo-icon"><Icon name="monitor" /></span>
            <span>TECNO<span className="logo-accent">KLİNİK</span></span>
        </>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    const links = NAV_LINKS.map((link) => (
        <NavLink key={link.path} to={link.path} end={link.path === '/'}>
            {link.name}
        </NavLink>
    ));

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo" aria-label="Tecnoklinik ana sayfa">
                    <Logo />
                </Link>

                <nav className="navbar-links" aria-label="Ana menü">
                    {links}
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
                        <Icon name="chat-round-call" /> WhatsApp
                    </a>
                </nav>

                <button
                    type="button"
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={menuOpen}
                    aria-controls="mobil-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav id="mobil-menu" className={`mobile-menu ${menuOpen ? 'active' : ''}`} aria-label="Mobil menü" inert={!menuOpen}>
                {links}
                <a href={`tel:${COMPANY_PHONE_E164}`} className="nav-cta nav-cta-outline">
                    <Icon name="call" /> Hemen Ara
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
                    <Icon name="chat-round-call" /> WhatsApp
                </a>
            </nav>
        </header>
    );
}
