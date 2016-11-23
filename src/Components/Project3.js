import React from 'react';
import '../styles/project1.css';


const Project3 = () => {
  return(
    <div>
      <h1 className="title">Shoot the Breeze</h1>
      <section className="project-body">
        <h1>
          This is a browser application for a multi-user chat room.
        </h1>
        <p className="project-text">
          Built using React.js with a Firebase server and SASS for looks.
        </p>
        <a href="https://shootthebreeze-559ba.firebaseapp.com/">
          <p className="project-text">Try it for yourself.</p>
        </a>
        <a href="https://github.com/mjvalade/shoot-the-breeze">
          <p className="project-text">Check out the codes.</p>
        </a>
        <img src="./assets/screenshot-shootbreeze.png"
        alt="website screenshot"
        className="screenshot" />
      </section>
    </div>
  );
};

export default Project3;
