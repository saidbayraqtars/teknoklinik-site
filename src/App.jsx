import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import ScrollRestoration from './components/ScrollRestoration';
import Seo from './components/Seo';

import Home from './pages/Home';
import Hizmetler from './pages/Hizmetler';
import HizmetDetay from './pages/HizmetDetay';
import Hakkimizda from './pages/Hakkimizda';
import Galeri from './pages/Galeri';
import SSS from './pages/SSS';
import Iletisim from './pages/Iletisim';
import Gizlilik from './pages/Gizlilik';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <>
            <Seo />
            <ScrollRestoration />
            <a href="#icerik" className="skip-link">İçeriğe geç</a>
            <Navbar />
            <main id="icerik">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hizmetler" element={<Hizmetler />} />
                    <Route path="/hizmetler/:slug" element={<HizmetDetay />} />
                    <Route path="/hakkimizda" element={<Hakkimizda />} />
                    <Route path="/galeri" element={<Galeri />} />
                    <Route path="/sss" element={<SSS />} />
                    <Route path="/iletisim" element={<Iletisim />} />
                    <Route path="/gizlilik" element={<Gizlilik />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
        </>
    );
}
