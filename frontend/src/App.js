import React from 'react';
import './App.css';

import Login from './Components/LogIn/Login';
import Signup from './Components/Singup/Signup';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>  
          <Switch>
            <Route path = "/" exact component =  {Login}>
            </Route>
            <Route path = "/signup" exact component = {Signup}></Route>
          </Switch>

        </Router>
    </div>
  )
}

export default App;
