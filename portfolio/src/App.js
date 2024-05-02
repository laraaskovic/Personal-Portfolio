import React from 'react';
import './styles/global.css';
// Correct for named exports
import BentoBox from './components/BentoBox/BentoBox';
import HomePage from './components/HomePage/HomePage';

import NavigationBar from './Navbar';
import Cursor from './components/Cursor/Cursor'; // Import the Cursor component
import Contact from './components/Contact/Contact'; 
import Skills3D from './Name3D'; 
import LaraAskovic3D from './DynamicSpikyShape3D'; 
import Lol from './LaraAskovic3D'; 
import Three from './three'; 



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

              <BentoBox title="Event Planner" description="React: JS, HTML, CSS" link="#" image={`${process.env.PUBLIC_URL}/lol.avif`} size="large" />
              <BentoBox title="Library System" description="Java, JavaGUI" link="#" image={`${process.env.PUBLIC_URL}/pr.jpg`} size="medium" />
              <BentoBox title="Chat Application" description="React: JS, HTML, CSS, Firebase" link="#" image={`${process.env.PUBLIC_URL}/ko.avif`} size="large" />
              <BentoBox title="2048 Customizable" description="Java, JavaGUI" link="#" image={`${process.env.PUBLIC_URL}/ik.avif`} size="medium" />
              <BentoBox title="Thee 3D App" description="Three.js, React: JS, HTML, CSS" link="#" image={`${process.env.PUBLIC_URL}/roll.avif`} size="large" />
              <BentoBox title="Customizable Drink App" description="React: JS, HTML, CSS" link="#" image={`${process.env.PUBLIC_URL}/oll.avif`} size="medium" />

             </div>


             <div>
                <Skills3D />
                <Three/>
                <Lol/>
            </div>

           

            <div id = "exp" className="exp">
                <hi> -</hi>
                <Exp/>
            </div>

             <div id="contact" classname="contact">
                <Contact/>
             </div>
        </div> 
    );
}

export default App;
