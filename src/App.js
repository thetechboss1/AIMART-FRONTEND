import React from 'react';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Administrator from './layouts/Administrator';
import Customer from './layouts/Customer';
import Realtor from './layouts/Realtor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/administrator" component={Administrator}/>
        <Route path="/realtor" component={Realtor}/>
        <Route path="/customer" component={Customer}/>
      </Switch>
    </Router>
  );
}

export default App;
