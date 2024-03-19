import React from 'react';
import './styles/global.css';
// Correct for named exports
import { BentoBox } from './components/BentoBox/BentoBox';
import HomePage from './components/HomePage/HomePage';


function App() {
    return (
        <div>
            <HomePage />

            <BentoBox title="Project 1" description="This is a cool project." link="#"/>
            <BentoBox title="Project 2" description="Another cool project." link="#"/>
            {/* Add more BentoBoxes as needed */}
        </div> 
    );
}

export default App;
