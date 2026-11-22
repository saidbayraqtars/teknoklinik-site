import Icon from './Icon';

// <details> ile: JS olmadan da açılır, yanıtlar HTML'de hep bulunur (arama motorları ve ekran okuyucular için).
export default function Faq({ items, level = 3 }) {
    const H = `h${level}`;
    return (
        <div className="faq-list">
            {items.map((f) => (
                <details className="faq-item" key={f.q}>
                    <summary className="faq-question">
                        <H>{f.q}</H>
                        <Icon name="chevron-down" />
                    </summary>
                    <div className="faq-answer-inner">{f.a}</div>
                </details>
            ))}
        </div>
    );
}
