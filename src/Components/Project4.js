import React from 'react';
import '../styles/project1.css';

const Project4 = () => {
  return(
    <div>
      <h1 className="title pom">Pomodoro Timer</h1>
      <section className="project-body">
        <h1>
          This is a mobile-friendly browser timer app to track times for working and a break in the pomodoro style.
        </h1>
        <p className="project-text">
          Built using vanilla JavaScript with jQuery and webpack, including some SASS.
        </p>
        <a href="https://mjvalade.github.io/Pomodoro-App/">
          <p className="project-text">Try it for yourself.</p>
        </a>
        <a href="https://github.com/mjvalade/Pomodoro-App">
          <p className="project-text">Check out the codes.</p>
        </a>
        <img src="../assets/screenshot-pomodoro.png"
        alt="website screenshot"
        className="screenshot" />
      </section>
    </div>
  );
};

export default Project4;
