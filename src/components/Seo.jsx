import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta } from '../seo';

function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

// Sayfa değişince <head>'i günceller. İlk açılışta etiketler zaten ön-render ile HTML'de gelir.
export default function Seo() {
    const { pathname } = useLocation();

    useEffect(() => {
        const m = pageMeta(pathname);
        document.title = m.title;
        setMeta('name', 'description', m.description);
        setMeta('name', 'robots', m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');
        setMeta('property', 'og:title', m.title);
        setMeta('property', 'og:description', m.description);
        setMeta('property', 'og:image', m.image);
        setMeta('name', 'twitter:title', m.title);
        setMeta('name', 'twitter:description', m.description);
        setMeta('name', 'twitter:image', m.image);

        let link = document.head.querySelector('link[rel="canonical"]');
        if (m.canonical) {
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = m.canonical;
            setMeta('property', 'og:url', m.canonical);
        } else if (link) {
            link.remove();
        }

        document.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
        if (m.jsonLd) {
            const s = document.createElement('script');
            s.type = 'application/ld+json';
            s.setAttribute('data-seo', '');
            s.textContent = JSON.stringify(m.jsonLd);
            document.head.appendChild(s);
        }
    }, [pathname]);

    return null;
}
