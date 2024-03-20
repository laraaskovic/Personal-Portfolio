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
              <BentoBox title="Event Planner" description="A cool project." link="#" image={`${process.env.PUBLIC_URL}/lol.avif`} size="large" />
              <BentoBox title="Library System" description="Java system with GUI Properies. Focused on UI/UX and OOP." link="#" image={`${process.env.PUBLIC_URL}/r.avif`} size="medium" />
              <BentoBox title="Chat Application" description="Something else." link="#" image={`${process.env.PUBLIC_URL}/ll.jpg`} size="small" />
              {/* Add more BentoBoxes as needed */}
          </div>
        </div> 
    );
}

export default App;
