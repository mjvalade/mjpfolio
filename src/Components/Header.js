import React from 'react';
import { Link } from 'react-router';
import '../styles/header.css';


const Header = () => {
  return(
    <header className="header-container">
      <section className="icon">
        <Link to="/">
          <h1 className="header-title">Front-End Design</h1>
        </Link>
      </section>

      <nav>
        <a href="#footer" className="top">CONTACT</a>
        <a href="https://www.turing.io/sites/default/files/resumes/ValadeMJ-Resume.pdf" className="top">RESUME</a>
      </nav>
    </header>
  );
};

export default Header;
