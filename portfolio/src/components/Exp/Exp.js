import React, { useState } from 'react';
import './Exp.css'; // Make sure this CSS file exists and is correctly linked

const experiences = [
  { id: 1, title: "Senior Developer", company: "Tech Solutions", date: "2020 - Present", description: "Lead developer overseeing..." },
  { id: 2, title: "Mid-Level Developer", company: "Innovatech", date: "2018 - 2020", description: "Developing innovative solutions..." },
  { id: 3, title: "Junior Developer", company: "Startup Hub", date: "2016 - 2018", description: "Assisting in web application development..." },
];

export const Exp = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <>
      <header className="experiences-header">
        <h1>Past Experiences</h1>
      </header>
      <div className="experiences-container">

        {experiences.map((exp) => (
          <div key={exp.id} className={`experience-item ${activeId === exp.id ? 'active' : ''}`} onClick={() => setActiveId(exp.id)}>
            <h3>{exp.title} @ {exp.company}</h3>
            <p className="date">{exp.date}</p>
            {activeId === exp.id && (
              <div className="experience-details">
                <p>{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Exp;
