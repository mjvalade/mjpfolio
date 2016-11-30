import React from 'react';
import '../styles/project1.css';


const Project5 = () => {
  return(
    <div>
      <h1 className="title">GameTime</h1>
      <section className="project-body">
        <h1>
          Surf's Up is an endless-running style game for the broswer. We used the Google Chrome dinosaur game as inspiration for our surfer. Players manipulate the surfer using the spacebar to jump over rocks.
        </h1>
        <p className="project-text">
          Built using vanilla JavaScript with jQuery and webpack, including some HTML5 Canvas.
        </p>
        <a href="https://blakeworsley.github.io/surfs-up/">
          <p className="project-text">Play the game yourself.</p>
        </a>
        <a href="https://github.com/mjvalade/surfs-up">
          <p className="project-text">Check out the codes.</p>
        </a>
        <img src="../assets/screenshot-gametime.png"
        alt="website screenshot"
        className="screenshot" />
      </section>
    </div>
  );
};

export default Project5;
