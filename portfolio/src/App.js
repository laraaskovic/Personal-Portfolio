import React from 'react';
import './styles/global.css';
// Correct for named exports
import BentoBox from './components/BentoBox/BentoBox';
import HomePage from './components/HomePage/HomePage';

import NavigationBar from './Navbar';
import Cursor from './components/Cursor/Cursor'; // Import the Cursor component
import Contact from './components/Contact/Contact'; 

import Exp from './components/Exp/Exp';


function App() {
    return (
        <div>
            <Cursor />

            <NavigationBar/>
            
            <div id="home" className="section">
                <HomePage />
            </div>

            <div id="create" className="bento-container">

              <BentoBox title="Icon" description="Can: ello World');" link="#" image={`${process.env.PUBLIC_URL}/lol.avif`} size="large" />
              <BentoBox title="Library System" description="Focused on UI/UX and OOP." link="#" image={`${process.env.PUBLIC_URL}/pr.jpg`} size="medium" />
              <BentoBox title="Chat Application" description="Something else." link="#" image={`${process.env.PUBLIC_URL}/ko.avif`} size="medium" />
              <BentoBox title="Chat Application" description="Something else." link="#" image={`${process.env.PUBLIC_URL}/ik.avif`} size="medium" />
              <BentoBox title="Icon" description="Can:  System.oHello World');" link="#" image={`${process.env.PUBLIC_URL}/roll.avif`} size="large" />
              <BentoBox title="Library System" description="Focused on UI/UX and OOP." link="#" image={`${process.env.PUBLIC_URL}/oll.avif`} size="medium" />

            {/* Add more BentoBoxes as needed */}
             </div>


            <div id = "exp" className="exp">
                <Exp/>
            </div>

             <div id="contact" classname="contact">
                <Contact/>
             </div>
        </div> 
    );
}

export default App;
