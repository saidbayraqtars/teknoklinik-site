import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { SERVICES } from '../data/site';

export default function NotFound() {
    return (
        <section className="section not-found">
            <div className="container">
                <p className="not-found-code">404</p>
                <h1>Sayfa bulunamadı</h1>
                <p>Aradığınız sayfa taşınmış ya da silinmiş olabilir.</p>
                <Link to="/" className="btn btn-primary">
                    Ana Sayfaya Dön <Icon name="arrow-right" />
                </Link>
                <div className="other-services">
                    {SERVICES.map((s) => (
                        <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="other-service">
                            <Icon name={s.icon} /> {s.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
