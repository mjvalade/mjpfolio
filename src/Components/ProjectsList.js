import React from 'react';
import { Link } from 'react-router';
import '../styles/projects.css';


const ProjectsList = () => {
  return(
    <section id="projects" className="offset">
      <article className="project a">
        <Link to="/Project1" className="project-links-dark">
          <h3>Networking App</h3>
          <p>About</p>
        </Link>
      </article>

      <article className="project b">
        <a href="#" className="project-links-light">
        <h3>Bookmark List</h3>
        <p>About</p></a>
      </article>

      <article className="project c">
        <a href="#" className="project-links-dark">
        <h3>Color Changer</h3>
        <p>About</p></a>
      </article>

      <article className="project d">
        <a href="#" className="project-links-light">
        <h3>IdeaBox</h3>
        <p>About</p></a>
      </article>

      <article className="project e">
        <a href="./projects/gametime/surfs-up.html" className="project-links-dark">
        <h3>GameTime</h3>
        <p>About</p></a>
      </article>

      <article className="project f">
        <a href="https://mjvalade.github.io/Pomodoro-App/" className="project-links-light">
        <h3>Pomodoro App</h3>
        <p>About</p></a>
      </article>
    </section>
  );
};

export default ProjectsList;
