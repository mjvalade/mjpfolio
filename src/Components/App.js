import React, { Component } from 'react';
import ProjectsList from './ProjectsList';
import '../styles/home.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="color-wash">
          <section id="about-me" className="offset">
            <h1 className="name">MaryJane Valade</h1>
            <p>Hi.</p>
          </section>
        </div>
        <ProjectsList />
      </div>
    );
  }
}

export default App;
