import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './templates/Homepage';
import About from './templates/About';
import HeadNav from './templates/header';



export default function Routes() {
  return (
    <Router>  
      <div>
        <HeadNav/>
        <div>
          <Switch>
              <Route path="/About" > <About/> </Route>
              <Route path="/" component={Homepage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}