import React from 'react';
import '../styles/project1.css';


const Project2 = () => {
  return(
    <div>
      <h1 className="title">Weather Tracker</h1>
      <section className="project-body">
        <h1>
          This is a web application to find the weather forecast for a user's favorite cities.
        </h1>
        <p>
          Built using React.js and Redux with SASS for looks.
        </p>
        <a href="https://github.com/mjvalade/weather-forecast">
          <p>Check out the codes.</p>
        </a>
        {/* <img src="./assets/screenshot-kidhikes.png"
        alt="website screenshot"
        className="screenshot" /> */}
      </section>
    </div>
  );
};

export default Project2;
