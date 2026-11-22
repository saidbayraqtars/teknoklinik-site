import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CtaBox from '../components/CtaBox';
import { GALLERY_ITEMS, GALLERY_FILTERS } from '../data/site';

export default function Galeri() {
    const [active, setActive] = useState('hepsi');
    const filtered = active === 'hepsi' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);

    return (
        <>
            <PageHeader title="Galeri" lead="Yaptığımız işlerden örnekler" crumbs={[['Galeri']]} />

            <section className="section">
                <div className="container">
                    <div className="gallery-filters" role="group" aria-label="Kategori süzgeci">
                        {GALLERY_FILTERS.map((f) => (
                            <button
                                type="button"
                                key={f.key}
                                className={`gallery-filter-btn ${active === f.key ? 'active' : ''}`}
                                aria-pressed={active === f.key}
                                onClick={() => setActive(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <ul className="gallery-grid">
                        {filtered.map((item) => (
                            <li className="gallery-item" key={item.id}>
                                <figure>
                                    <img src={item.image} alt={item.alt} width="640" height="640" loading="lazy" decoding="async" />
                                    <figcaption className="gallery-item-overlay">
                                        <span className="gallery-item-title">{item.title}</span>
                                        <span className="gallery-item-category">
                                            {GALLERY_FILTERS.find((f) => f.key === item.category)?.label}
                                        </span>
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaBox />
        </>
    );
}
