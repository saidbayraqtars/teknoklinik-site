import PageHeader from '../components/PageHeader';
import { COMPANY_LEGAL, ADDRESS_TEXT, COMPANY_PHONE } from '../data/site';

export default function Gizlilik() {
    return (
        <>
            <PageHeader title="Gizlilik ve KVKK Aydınlatma Metni" crumbs={[['Gizlilik']]} />
            <section className="section">
                <div className="container prose">
                    <p>
                        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, {COMPANY_LEGAL} ("Tecnoklinik")
                        tarafından bu web sitesi aracılığıyla işlenen kişisel veriler hakkında sizi bilgilendirmek için hazırlanmıştır.
                    </p>

                    <h2>Hangi verileri işliyoruz?</h2>
                    <p>
                        Bu site bir kayıt veya üyelik sistemi içermez ve form verilerini sunucuda saklamaz. İletişim formunu
                        doldurduğunuzda yazdığınız ad, telefon ve mesaj, cihazınızda WhatsApp uygulamasına aktarılır; mesajı siz
                        göndermedikçe bize ulaşmaz. WhatsApp ya da telefonla bize ulaştığınızda ad, telefon numarası ve talebinizle
                        ilgili bilgiler yalnız talebinize yanıt vermek ve hizmeti yerine getirmek için kullanılır.
                    </p>

                    <h2>Çerezler</h2>
                    <p>
                        Sitede reklam veya takip çerezi kullanılmaz. Barındırma hizmeti, güvenlik ve işletim amacıyla standart sunucu
                        kayıtları (IP adresi, tarih, istenen sayfa) tutabilir. Yazı tipleri Google Fonts üzerinden yüklenir.
                    </p>

                    <h2>Verilerin aktarılması</h2>
                    <p>
                        Kişisel verileriniz yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. WhatsApp üzerinden yapılan
                        yazışmalar WhatsApp'ın kendi gizlilik koşullarına tabidir.
                    </p>

                    <h2>Haklarınız</h2>
                    <p>
                        KVKK'nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini
                        isteme ve diğer haklarınızı kullanmak için bize {ADDRESS_TEXT} adresinden ya da {COMPANY_PHONE} numarasından
                        ulaşabilirsiniz.
                    </p>
                </div>
            </section>
        </>
    );
}
