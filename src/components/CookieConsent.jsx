import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('teknoklinik-cookies');
        if (!accepted) {
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('teknoklinik-cookies', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="cookie-consent">
            <h4>🍪 Çerez Bildirimi</h4>
            <p>
                Web sitemizde size daha iyi bir deneyim sunabilmek için çerezler kullanıyoruz.
                Sitemizi kullanmaya devam ederek çerez politikamızı kabul etmiş olursunuz.
            </p>
            <div className="cookie-buttons">
                <button className="btn btn-primary" onClick={accept}>
                    Kabul Et
                </button>
                <button className="btn btn-outline" onClick={accept}>
                    Reddet
                </button>
            </div>
        </div>
    );
}
