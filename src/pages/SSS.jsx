import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FAQ_DATA } from '../data/constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
    }),
};

export default function SSS() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1>Sıkça Sorulan Sorular</h1>
                        <p>Merak ettiklerinize hızlı yanıtlar</p>
                        <div className="breadcrumb">
                            <Link to="/">Ana Sayfa</Link>
                            <span>/</span>
                            <span className="current">SSS</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="faq-list">
                        {FAQ_DATA.map((faq, i) => (
                            <motion.div
                                className={`faq-item ${openIndex === i ? 'active' : ''}`}
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeInUp}
                            >
                                <button className="faq-question" onClick={() => toggle(i)}>
                                    {faq.question}
                                    <FiChevronDown />
                                </button>
                                <div
                                    className="faq-answer"
                                    style={{
                                        maxHeight: openIndex === i ? '300px' : '0',
                                    }}
                                >
                                    <div className="faq-answer-inner">{faq.answer}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
