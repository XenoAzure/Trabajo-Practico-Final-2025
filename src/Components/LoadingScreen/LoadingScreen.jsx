import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            // that thing waits for the transition to finish before unmounting
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // this matches the css with the transition duration, knowing me, im gonna forget about it and complain later on
            return () => clearTimeout(timer);
        } else {
            setShouldRender(true);
        }
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div className={`loading-screen-container ${!isLoading ? 'fade-out' : ''}`}>
            <i className="bi bi-whatsapp loading-logo-icon"></i>
            <div className="loading-text">WhatsApp</div>
            <div className="loading-bar-container">
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
