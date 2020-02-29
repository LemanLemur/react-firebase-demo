import React from "react";
import Home from "./component/Home";
import Header from "./component/TopNav/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Index() {
  return <Home />;
}

function App() {
  return (
    <Router>
      <nav>
        <Header></Header>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
