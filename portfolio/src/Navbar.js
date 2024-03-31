import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure this file exists and contains your CSS

function Navbar() {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="nav">
      <a href="#home" className="site-title">LaraAskovic</a>
      <ul>
        <CustomLink href="#create" activeHash={activeHash}>Projects</CustomLink>
        <CustomLink href="#exp" activeHash={activeHash}>Experience</CustomLink>
        <CustomLink href="#skills" activeHash={activeHash}>Skills</CustomLink>
        <CustomLink href="#contact" activeHash={activeHash}>Contact</CustomLink>
        
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, activeHash }) {
  // Determine if this link is active based on the current hash
  const isActive = activeHash === href;

  return (
    <li className={isActive ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default Navbar;

/*import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file


function Navbar() {
  return (
  <nav className="nav">
      <a href="#home" className="site-title">LaraAskovic</a>
      <ul>
          <CustomLink href="#create">Projects</CustomLink>
          
      </ul>
  </nav>
  );
}

function CustomLink({ href, children }) {
  const path = window.location.hash;

  return (
      <li className={path === href ? "active" : ""}>
          <a href={href}>{children}</a>
      </li>
  );
}

export default Navbar;
*/