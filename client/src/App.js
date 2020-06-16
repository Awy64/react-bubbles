import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage"


import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage}/>
          <Route exact path="/" component={Login} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
