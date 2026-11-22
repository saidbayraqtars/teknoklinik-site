import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import CtaBox from '../components/CtaBox';
import Faq from '../components/Faq';
import NotFound from './NotFound';
import { SERVICES, serviceBySlug, whatsappLink, SERVICE_AREA, TONER_SITE_URL } from '../data/site';

const STEPS = [
    ['Bize ulaşın', 'WhatsApp, telefon ya da mağazaya gelerek ihtiyacınızı anlatın.'],
    ['İnceleme', 'Cihazı ya da yeri inceleyip ne yapılması gerektiğini ve fiyatı söyleriz.'],
    ['Uygulama', 'Onayınızın ardından onarım, kurulum ya da tedarik işini yaparız.'],
    ['Teslim', 'İşi test edip teslim ederiz; onarımlarımız garantilidir.'],
];

export default function HizmetDetay() {
    const { slug } = useParams();
    const service = serviceBySlug(slug);
    if (!service) return <NotFound />;

    const wa = whatsappLink(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`);
    const others = SERVICES.filter((s) => s.slug !== service.slug);

    return (
        <>
            <PageHeader
                title={`Samsun ${service.title}`}
                lead={service.shortDesc}
                crumbs={[['Hizmetler', '/hizmetler'], [service.title]]}
            />

            <section className="section">
                <div className="container service-detail">
                    <div className="service-detail-main">
                        {service.intro.map((p) => (
                            <p key={p.slice(0, 20)} className="service-detail-text">{p}</p>
                        ))}
                        {service.slug === 'yazici-tamiri' && (
                            <p className="service-detail-text">
                                Toner dolumu fiyatları ve motorlu kurye hizmeti için:{' '}
                                <a href={TONER_SITE_URL} target="_blank" rel="noopener">Samsun Toner Dolum</a>.
                            </p>
                        )}

                        <h2 className="service-detail-title">Bu hizmet kapsamında</h2>
                        <ul className="service-features">
                            {service.features.map((f) => (
                                <li key={f}>
                                    <Icon name="tick-circle" /> {f}
                                </li>
                            ))}
                        </ul>

                        <h2 className="service-detail-title">Nasıl çalışıyoruz?</h2>
                        <ol className="steps">
                            {STEPS.map(([t, d], i) => (
                                <li key={t} className="step">
                                    <span className="step-no">{i + 1}</span>
                                    <div>
                                        <h3>{t}</h3>
                                        <p>{d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <p className="service-detail-text">
                            Hizmet bölgemiz: Samsun {SERVICE_AREA.join(', ')} ve çevresi.
                        </p>
                    </div>

                    <aside className="service-detail-side">
                        {service.image && (
                            <img
                                src={service.image}
                                alt={service.imageAlt}
                                width="640"
                                height="640"
                                loading="eager"
                                className="service-detail-image"
                            />
                        )}
                        <div className="glass-card side-card">
                            <div className="service-icon">
                                <Icon name={service.icon} />
                            </div>
                            <h2>Bilgi ve fiyat alın</h2>
                            <p>Arızanızı ya da ihtiyacınızı yazın, kısa sürede dönelim.</p>
                            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-block">
                                <Icon name="chat-round-call" /> WhatsApp'tan Sor
                            </a>
                            <Link to="/iletisim" className="btn btn-outline btn-block">
                                İletişim Bilgileri <Icon name="arrow-right" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {service.faqs?.length > 0 && (
                <section className="section section-tight">
                    <div className="container">
                        <Reveal className="section-header">
                            <h2 className="section-title">{service.title} hakkında sorular</h2>
                        </Reveal>
                        <Faq items={service.faqs} />
                    </div>
                </section>
            )}

            <section className="section section-tight">
                <div className="container">
                    <h2 className="section-title section-title-sm">Diğer hizmetlerimiz</h2>
                    <div className="other-services">
                        {others.map((s) => (
                            <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="other-service">
                                <Icon name={s.icon} /> {s.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBox waLink={wa} title={`${service.title} için hemen ulaşın`} />
        </>
    );
}
