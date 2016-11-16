import React from 'react';
import { Link } from 'react-router';
import '../styles/projectsList.css';


const ProjectsList = () => {
  return(
    <section id="projects" className="offset">
      <Link to="/Project1" className="project a project-links-dark">
        <div className="overlay">
          <h3 className="overlay-title">CO Kid Hikes</h3>
        </div>
      </Link>

      <Link to="/Project2" className="project b project-links-dark">
        <div className="overlay">
          <h3 className="overlay-title">Weather Tracker</h3>
        </div>
      </Link>

      <article className="project c">
        <Link to="/Project3" className="project-links-dark">
          <h3 className="project-title">Shoot the Breeze</h3>
        </Link>
      </article>

      <article className="project d">
        <Link to="/Project4" className="project-links-light">
          <h3 className="project-title">Pomodoro App</h3>
        </Link>
      </article>

      <article className="project e">
        <Link to="/Project5" className="project-links-dark">
          <h3 className="project-title">GameTime</h3>
        </Link>
      </article>

      <article className="project f">
        <Link to="/Project6" className="project-links-light">
          <h3 className="project-title">Other</h3>
        </Link>
      </article>
    </section>
  );
};

export default ProjectsList;
