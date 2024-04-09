import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home" id="home">
            {/* Use img tag for background */}
            <img src="/r.avif" alt="Background" className="background-image" style={{
                transform: `rotate(${scrollY / 3}deg)` // Adjust rotation speed here
            }} />
            <div className="home-content">
                <h1>LARA ASKOVIC</h1>
                <p>SOFTWARE DESIGNER, FRONT END & APP DEVELOPER.</p>
                <a href="#create">VIEW MY WORK</a>
            </div>
        </div>
    );
};

export default HomePage;
