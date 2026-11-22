import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import './styles/eklemeler.css';

document.documentElement.classList.add('js');

const root = document.getElementById('root');
const app = (
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

// Ön-render edilmiş sayfada mevcut HTML'e bağlan, geliştirmede sıfırdan çiz.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
