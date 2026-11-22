import PageHeader from '../components/PageHeader';
import CtaBox from '../components/CtaBox';
import Faq from '../components/Faq';
import { FAQ_DATA } from '../data/site';

export default function SSS() {
    return (
        <>
            <PageHeader title="Sıkça Sorulan Sorular" lead="Merak ettiklerinize hızlı yanıtlar" crumbs={[['SSS']]} />
            <section className="section">
                <div className="container">
                    <Faq items={FAQ_DATA} level={2} />
                </div>
            </section>
            <CtaBox title="Sorunuzun yanıtını bulamadınız mı?" text="WhatsApp ya da telefonla sorun, hemen yanıtlayalım." />
        </>
    );
}
