import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './templates/Homepage';
import About from './templates/About';
import HeadNav from './templates/header';
import Project from './templates/Projects';

export default function Routes() {
  return (
    <Router>  
      <div>
        <HeadNav/>
        <div>
          <Switch>
              <Route path="/about" > <About/> </Route>
              <Route path="/projects" component={Project} />
              <Route path="/" component={Homepage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}