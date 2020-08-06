import React from 'react';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
