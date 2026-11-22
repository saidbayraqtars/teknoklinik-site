import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import CtaBox from '../components/CtaBox';
import { VALUES, TIMELINE } from '../data/site';

export default function Hakkimizda() {
    return (
        <>
            <PageHeader title="Hakkımızda" lead="Tecnoklinik'i yakından tanıyın" crumbs={[['Hakkımızda']]} />

            <section className="section">
                <div className="container">
                    <div className="about-intro">
                        <Reveal className="about-image">
                            <img
                                src="/img/bga-tamiri.webp"
                                alt="Tecnoklinik atölyesinde BGA çip onarımı"
                                width="640"
                                height="640"
                                loading="lazy"
                            />
                        </Reveal>
                        <Reveal className="about-text">
                            <h2>
                                Samsun'da Güvenilir <span className="accent-text">Teknik Servis</span>
                            </h2>
                            <p>
                                Tecnoklinik, 2014 yılından bu yana Samsun'da bilgi teknolojileri alanında hizmet veriyor.
                                Bilgisayar tamiriyle başlayan yolculuğumuz bugün yazıcı servisi, güvenlik kamerası montajı,
                                bilgisayar alım satımı, kurumsal yazıcı çözümleri, yazıcı kiralama ve web tasarımı kapsıyor.
                            </p>
                            <p>
                                Amacımız bireysel ve kurumsal müşterilerimizin teknoloji ihtiyaçlarını hızlı, güvenilir ve
                                uygun fiyatlı şekilde karşılamak. İlkadım'daki mağazamızda ve Samsun merkez ilçelerinde yerinde
                                servisle hizmet veriyoruz.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <Reveal className="section-header">
                        <span className="section-subtitle">DEĞERLERİMİZ</span>
                        <h2 className="section-title">Temel Değerlerimiz</h2>
                    </Reveal>
                    <div className="values-grid">
                        {VALUES.map((value, i) => (
                            <Reveal className="value-card" key={value.title} delay={i * 80}>
                                <div className="value-icon">
                                    <Icon name={value.icon} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Reveal className="section-header">
                        <span className="section-subtitle">YOLCULUĞUMUZ</span>
                        <h2 className="section-title">Kilometre Taşları</h2>
                    </Reveal>
                    <ol className="timeline">
                        {TIMELINE.map((item) => (
                            <Reveal as="li" className="timeline-item" key={item.year}>
                                <div className="timeline-year">{item.year}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-desc">{item.desc}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <CtaBox />
        </>
    );
}
