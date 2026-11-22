import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import CtaBox from '../components/CtaBox';
import { SERVICES, whatsappLink } from '../data/site';

export default function Hizmetler() {
    return (
        <>
            <PageHeader
                title="Hizmetlerimiz"
                lead="Samsun'da bilgisayar, yazıcı, güvenlik kamerası ve web için kapsamlı çözümler"
                crumbs={[['Hizmetler']]}
            />

            <section className="section">
                <div className="container">
                    {SERVICES.map((service) => (
                        <Reveal as="article" key={service.slug} className="glass-card service-row">
                            <div>
                                <div className="service-row-head">
                                    <div className="service-icon">
                                        <Icon name={service.icon} />
                                    </div>
                                    <h2>
                                        <Link to={`/hizmetler/${service.slug}`}>{service.title}</Link>
                                    </h2>
                                </div>
                                <p className="service-row-text">{service.intro[0]}</p>
                                <div className="service-row-actions">
                                    <Link to={`/hizmetler/${service.slug}`} className="btn btn-primary">
                                        Ayrıntılar <span className="sr-only">: {service.title}</span> <Icon name="arrow-right" />
                                    </Link>
                                    <a
                                        href={whatsappLink(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline"
                                    >
                                        <Icon name="chat-round-call" /> Teklif Al
                                    </a>
                                </div>
                            </div>
                            <ul className="service-features">
                                {service.features.map((feat) => (
                                    <li key={feat}>
                                        <Icon name="tick-circle" /> {feat}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </section>

            <CtaBox title="İhtiyacınıza Uygun Çözüm İçin" text="Hizmetlerimiz hakkında bilgi ve fiyat için hemen ulaşın." />
        </>
    );
}
