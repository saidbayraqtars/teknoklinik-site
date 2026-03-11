import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, GALLERY_FILTERS } from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
    }),
};

export default function Galeri() {
    const [activeFilter, setActiveFilter] = useState('hepsi');

    const filtered =
        activeFilter === 'hepsi'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1>Galeri</h1>
                        <p>Gerçekleştirdiğimiz işlerden örnekler</p>
                        <div className="breadcrumb">
                            <Link to="/">Ana Sayfa</Link>
                            <span>/</span>
                            <span className="current">Galeri</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="gallery-filters">
                        {GALLERY_FILTERS.map((filter) => (
                            <button
                                key={filter.key}
                                className={`gallery-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <motion.div className="gallery-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filtered.map((item, i) => (
                                <motion.div
                                    className="gallery-item"
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span style={{ fontSize: '4rem' }}>{item.emoji}</span>
                                    <div className="gallery-item-overlay">
                                        <div>
                                            <div className="gallery-item-title">{item.title}</div>
                                            <div className="gallery-item-category">
                                                {GALLERY_FILTERS.find((f) => f.key === item.category)?.label}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
