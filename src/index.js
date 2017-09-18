// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';


import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import Contact from './components/Contact';
import LogIn from './components/LogIn';
import Register from './components/Register';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
