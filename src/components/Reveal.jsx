import { useEffect, useRef } from 'react';

// Görünür alana girince yumuşak beliren blok. JS yoksa ya da hareket azaltılmışsa içerik hep görünür
// (bkz. index.css: html.js .reveal). Ön-render edilen HTML'de içerik tam olarak bulunur.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') {
            el.classList.add('is-visible');
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${className}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}
