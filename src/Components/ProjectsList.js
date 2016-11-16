import React from 'react';
import { Link } from 'react-router';
import '../styles/projectsList.css';


const ProjectsList = () => {
  return(
    <section id="projects" className="offset">
      <Link to="/Project1" className="project a project-links-dark">
        <article >
          <h3 className="project-title">CO Kid Hikes</h3>
          {/* <p>About</p> */}
        </article>
        <img src="./assets/hikedetail-small.jpeg"
        className="proj1-img"
        alt="project 1"
        name="https://unsplash.com/search/hiking?photo=Md5vvHf55fk"
        />
      </Link>

      <article className="project b">
        <Link to="/Project2" className="project-links-light">
          <h3 className="project-title">Weather Tracker</h3>
          <p>About</p>
        </Link>
      </article>

      <article className="project c">
        <Link to="/Project3" className="project-links-dark">
          <h3 className="project-title">Shoot the Breeze</h3>
          <p>About</p>
        </Link>
      </article>

      <article className="project d">
        <Link to="/Project4" className="project-links-light">
          <h3 className="project-title">IdeaBox</h3>
          <p>About</p>
        </Link>
      </article>

      <article className="project e">
        <Link to="/Project5" className="project-links-dark">
          <h3 className="project-title">GameTime</h3>
          <p>About</p>
        </Link>
      </article>

      <article className="project f">
        <Link to="/Project6" className="project-links-light">
          <h3 className="project-title">Pomodoro App</h3>
          <p>About</p>
        </Link>
      </article>
    </section>
  );
};

export default ProjectsList;
