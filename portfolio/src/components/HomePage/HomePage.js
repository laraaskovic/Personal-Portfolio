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

/*import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home" id="home" style={{ 
            backgroundImage: `url('/r.avif')`,
            backgroundPosition: 'center',
            transform: `rotate(${scrollY / 10}deg)` // Adjust the divisor for subtlety
        }}>
            <div className="home-content">
                <h1>LARA ASKOVIC</h1>
                <p>SOFTWARE DESIGNER, FRONT END & APP DEVELOPER.</p>
                <a href="#create">VIEW MY WORK</a>
            </div>
        </div>
    );
};

export default HomePage;
*/


/*import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [gradientAngle, setGradientAngle] = useState(0);

    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { width, height, top, left } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI) + 180;
        setGradientAngle(angle);
    };

    return (
        <div className="home" id="home" onMouseMove={handleMouseMove} style={{ 
            background: `linear-gradient(${gradientAngle}deg, #060314 , #000000)`
        }}>
            <div className="home-content">
                <h1>LARA ASKOVIC</h1>
                <p>SOFTWARE DESIGNER, FRONT END & APP DEVELOPER.</p>
                <a href="#create">VIEW MY WORK</a>
            </div>
        </div>
    );
};

export default HomePage;
*/
