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
import Account from './components/Account';
import LogIn from './components/LogIn';
import Register from './components/Register';
import ResaListView from './components/ResaListView';
import StagerListView from './components/StagerListView';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Account" component={Account} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Route exact path="/RESA/ListView" component={ResaListView} />
        <Route path="/RESA/:id" component={ResaListView} />
        <Route exact path="/Stager/ListView" component={StagerListView} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,
document.getElementById('root'));
registerServiceWorker();
