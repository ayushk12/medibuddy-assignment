import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Drivers from "./component/Drivers";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="imageStyle">
          <Switch>
            <Route path="/" component={Drivers} />

          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;