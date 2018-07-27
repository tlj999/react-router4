import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import App from './App';

function One(){
  return <h1>One</h1>
}
class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <ul>
        <li>
          <Link to='/dashboard/'>home</Link>
        </li>
        <li>
          <Link to='/dashboard/one'>第一</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/dashboard/' component={App}></Route>
        <Route path='/dashboard/one' component={One}></Route>
      </Switch>
      </div>
      

    )
  }
}
export default Dashboard;