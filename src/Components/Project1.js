import React from 'react';
import '../styles/project1.css';


const Project1 = () => {
  return(
    <div>
      <h1 className="title">CO Kid Hikes</h1>
      <section className="project-body">
        <h1>
          This is a web application for users to upload and search for hiking trails in Colorado that are kid-focused.
        </h1>
        <p>
          Built using React.js and Redux with Firebase as the database and SASS for looks.
        </p>
        <a href="https://co-kid-hikes.firebaseapp.com/">
          <p>Try it for yourself.</p>
        </a>
        <a href="https://github.com/mjvalade/cokid-hikes">
          <p>Check out the codes.</p>
        </a>
        <img src="./assets/screenshot-kidhikes.png"
        alt="website screenshot"
        className="screenshot" />
      </section>
    </div>
  );
};

export default Project1;
