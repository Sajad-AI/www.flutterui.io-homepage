import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Docs from "./pages/Docs";

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/home" component={Home}></Route>
    <Route path="/info" component={Info}></Route>
    <Route path="/docs" component={Docs}></Route>
  </Switch>
);

export default App;
