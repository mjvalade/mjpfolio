import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './Components/Header';
import App from './Components/App';
import Project1 from './Components/Project1';
import NoMatch from './Components/NoMatch';
import Footer from './Components/Footer';


import './styles/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        {/* <Match pattern="/Project/:title" component={TrailDetailContainer} /> */}
        <Match exactly pattern="/Project1" component={Project1} />

        <Miss component={NoMatch} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#root'));
