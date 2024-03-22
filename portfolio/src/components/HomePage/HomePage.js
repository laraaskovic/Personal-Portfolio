import React, { useState } from 'react';
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
                <p>Innovative developer based in Toronto, crafting unique digital experiences.</p>
                <a href="#create">View My Work</a>
            </div>
        </div>
    );
};

export default HomePage;



/*import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="home" id="home">
    <div className="home-content">
      <h1>Lara Askovic</h1>
      <p>Innovative developer based in Toronto, crafting unique digital experiences.</p>
      <a href="#create">View My Work</a>
    </div>
  </div>
);

export default HomePage;
*/