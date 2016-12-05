import React from 'react';
import { Link } from 'react-router';
import '../styles/projectsList.css';


const ProjectsList = () => {
  return(
    <section id="all-projects" className="offset">

      <Link to="/Project1" className="project a project-links-dark">
        {/* <p className="project-title">CO Kid Hikes</p> */}
        <div className="overlay">
          <h3 className="overlay-title">CO Kid Hikes</h3>
          <p className="overlay-about">Web app for tracking trails</p>
        </div>
      </Link>

      <Link to="/Project2" className="project b project-links-dark">
        <div className="overlay">
          <h3 className="overlay-title">Weather Tracker</h3>
          <p className="overlay-about">Find weather for favorite cities</p>
        </div>
      </Link>

      <Link to="/Project3" className="project c project-links-dark">
        <div className="overlay">
          <h3 className="overlay-title">Shoot the Breeze</h3>
          <p className="overlay-about">Online chat app</p>
        </div>
      </Link>

      <Link to="/Project4" className="project d project-links-light">
        <div className="overlay">
          <h3 className="overlay-title">Pomodoro App</h3>
          <p className="overlay-about">Need a timer?</p>
        </div>
      </Link>

      <Link to="/Project5" className="project e project-links-dark">
        <div className="overlay">
          <h3 className="overlay-title">GameTime</h3>
          <p className="overlay-about">Surf's Up!</p>
        </div>
      </Link>

      {/* <Link to="/Project6" className="project f project-links-light">
        <div className="overlay">
          <h3 className="project-title">Other</h3>
        </div>
      </Link> */}
    </section>
  );
};

export default ProjectsList;
