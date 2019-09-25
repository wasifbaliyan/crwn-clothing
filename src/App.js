import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
