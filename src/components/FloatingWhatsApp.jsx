import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../data/constants';

export default function FloatingWhatsApp() {
    return (
        <div className="floating-whatsapp">
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geçin"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
}
