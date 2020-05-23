import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './templates/Homepage';
import About from './templates/About';



export default function Routes() {
  return (
    <Router>  
      <Switch>
          <Route path="/About">
              <About/>
          </Route>
          <Route path="/">
              <Homepage />
          </Route>
      </Switch>
    </Router>
  );
}