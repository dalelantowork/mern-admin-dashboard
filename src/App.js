import React , { useState }from 'react'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Forgot from './components/Auth/Forgot';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/forgot" exact component={Forgot} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
