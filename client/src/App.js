import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute path="/colors" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
