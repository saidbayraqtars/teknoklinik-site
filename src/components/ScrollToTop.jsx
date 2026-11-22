import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            type="button"
            className={`scroll-to-top ${visible ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Sayfanın başına dön"
            tabIndex={visible ? 0 : -1}
        >
            <Icon name="arrow-up" />
        </button>
    );
}
