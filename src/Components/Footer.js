import React from 'react';
import '../styles/footer.css';


const Footer = () => {
  return(
    <footer id="footer" className="offset">
      <section id="contact" className="column-right">
        <h2 className="footer-title">CONTACT</h2>
        <a className="email" href="mailto:mjvalade@gmail.com">mjvalade@gmail.com</a>
        <br/>
        <a href="http://www.linkedin.com/in/maryjane-valade">
          <img role="presentation" src="assets/linkedin.png"/></a>
        <a href="https://github.com/mjvalade">
          <img role="presentation" src="assets/github.png"/></a>
        <a href="https://twitter.com/mjvalade22">
          <img role="presentation" src="assets/twitter.png"/></a>
      </section>

      <section id="education" className="column-left">
        <h2 className="footer-title">EDUCATION</h2>
        <a href="http://www.turing.io">
          <img role="presentation" className="logo" src="assets/turing-clear.png"/></a>
        <a href="http://www.gwu.edu">
          <img role="presentation" className="logo" src="assets/gw.png"/></a>
        <a href="http://www.kzoo.edu">
          <img role="presentation" className="logo" src="assets/kzoo-clear.png"/></a>
      </section>

      <section id="past-life" className="column-middle">
        <h2 className="footer-title">PAST LIFE</h2>
        <a href="http://www.auroramuseum.org">
          <img role="presentation" className="logo" src="assets/ahm-logo.jpg"/></a>
        <a href="http://www.nbm.org">
          <img role="presentation" className="logo" src="assets/nbm.png"/></a>
      </section>
    </footer>
  );
};

export default Footer;
