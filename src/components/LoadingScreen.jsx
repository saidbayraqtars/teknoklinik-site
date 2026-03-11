import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setVisible(false), 500);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div
            className="loading-screen"
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.5s ease',
            }}
        >
            <div className="loading-logo">TEKNOKLİNİK</div>
            <div className="loading-bar">
                <div className="loading-bar-inner"></div>
            </div>
        </div>
    );
}
