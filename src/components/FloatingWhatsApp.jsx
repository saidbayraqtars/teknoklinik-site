import Icon from './Icon';
import { WHATSAPP_URL } from '../data/site';

export default function FloatingWhatsApp() {
    return (
        <div className="floating-whatsapp">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın">
                <Icon name="chat-round-call" />
            </a>
        </div>
    );
}
