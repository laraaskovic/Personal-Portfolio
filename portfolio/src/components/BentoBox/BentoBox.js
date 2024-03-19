import React from 'react';
import './BentoBox.css';


const BentoBox = ({ title, description, link }) => (
    <div className="bento-box">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Learn More</a>
    </div>
);

export { BentoBox };
