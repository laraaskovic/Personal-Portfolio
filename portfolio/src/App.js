import React from 'react';
import './styles/global.css';
// Correct for named exports
import BentoBox from './components/BentoBox/BentoBox';
import HomePage from './components/HomePage/HomePage';


function App() {
    return (
        <div>
            <HomePage />

            <div className="bento-container">
              <BentoBox title="Project 1" description="A cool project." link="#" image={`${process.env.PUBLIC_URL}/back.png`} size="large" />
              <BentoBox title="Project 2" description="Another project." link="#" image={`${process.env.PUBLIC_URL}/back.png`} size="medium" />
              <BentoBox title="Project 3" description="Something else." link="#" image={`${process.env.PUBLIC_URL}/back.png`} size="small" />
              {/* Add more BentoBoxes as needed */}
          </div>
        </div> 
    );
}

export default App;
