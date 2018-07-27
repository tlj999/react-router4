import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import Auth from './Auth';
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
     <Switch>
       <Route path='/dashboard'component={Dashboard}></Route>
       <Route path='/login'component={Auth}></Route>
       <Redirect to='/dashboard'></Redirect>
     </Switch>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
