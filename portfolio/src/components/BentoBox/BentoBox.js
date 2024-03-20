/*import React from 'react';
import './BentoBox.css';


const BentoBox = ({ title, description, link }) => (
    <div className="bento-box">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Learn More</a>
    </div>
);

export { BentoBox };
*/

import React from 'react';
import './BentoBox.css'; // Update the CSS file for new styles

const BentoBox = ({ title, description, link, image, size }) => (
  <div className={`bento-box ${size}`}>
    <img src={image} alt={title} className="bento-image" />
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Learn More</a>
    </div>
  </div>
);

export default BentoBox;
