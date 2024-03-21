import React from 'react';
import './styles/global.css';
// Correct for named exports
import BentoBox from './components/BentoBox/BentoBox';
import HomePage from './components/HomePage/HomePage';

import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
    return (
        <div>
            <div><HomePage /></div>

            <div className="bento-container">
              <h1>Projects</h1>

              <BentoBox title="Icon" description="Can:  System.out.println('Hello World');" link="#" image={`${process.env.PUBLIC_URL}/lol.avif`} size="large" />
              <BentoBox title="Library System" description="Java system with GUI Properies. Focused on UI/UX and OOP." link="#" image={`${process.env.PUBLIC_URL}/r.avif`} size="medium" />
              <BentoBox title="Chat Application" description="Something else." link="#" image={`${process.env.PUBLIC_URL}/ll.jpg`} size="small" />
              {/* Add more BentoBoxes as needed */}
             </div>
        </div> 
    );
}

export default App;
