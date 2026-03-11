import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import LoadingScreen from './components/LoadingScreen';
import ScrollRestoration from './components/ScrollRestoration';

import Home from './pages/Home';
import Hizmetler from './pages/Hizmetler';
import Hakkimizda from './pages/Hakkimizda';
import Galeri from './pages/Galeri';
import SSS from './pages/SSS';
import Iletisim from './pages/Iletisim';

export default function App() {
    return (
        <>
            <LoadingScreen />
            <ScrollRestoration />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hizmetler" element={<Hizmetler />} />
                    <Route path="/hakkimizda" element={<Hakkimizda />} />
                    <Route path="/galeri" element={<Galeri />} />
                    <Route path="/sss" element={<SSS />} />
                    <Route path="/iletisim" element={<Iletisim />} />
                </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
            <CookieConsent />
        </>
    );
}
