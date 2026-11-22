import { Link } from 'react-router-dom';

// Sayfa başlığı + görünür içerik haritası (breadcrumb). JSON-LD karşılığı seo.js'te.
export default function PageHeader({ title, lead, crumbs = [] }) {
    return (
        <section className="page-header">
            <div className="container">
                <h1>{title}</h1>
                {lead && <p>{lead}</p>}
                <nav className="breadcrumb" aria-label="İçerik haritası">
                    <Link to="/">Ana Sayfa</Link>
                    {crumbs.map(([name, path], i) => (
                        <span key={name} className="breadcrumb-part">
                            <span aria-hidden="true">/</span>
                            {i === crumbs.length - 1 || !path ? (
                                <span className="current" aria-current="page">{name}</span>
                            ) : (
                                <Link to={path}>{name}</Link>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </section>
    );
}
