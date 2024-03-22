import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure this file exists and contains your CSS

function Navbar() {
  // State to hold the current active hash
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // Effect to update the active hash based on URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="nav">
      <a href="#home" className="site-title">LaraAskovic</a>
      <ul>
        <CustomLink href="#home" activeHash={activeHash}>Home</CustomLink>
        <CustomLink href="#create" activeHash={activeHash}>Projects</CustomLink>
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