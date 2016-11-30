import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './Components/Header';
import App from './Components/App';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';
import Project5 from './Components/Project5';
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
        <Match exactly pattern="/Project2" component={Project2} />
        <Match exactly pattern="/Project3" component={Project3} />
        <Match exactly pattern="/Project4" component={Project4} />
        <Match exactly pattern="/Project5" component={Project5} />
        <Miss component={NoMatch} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#root'));
