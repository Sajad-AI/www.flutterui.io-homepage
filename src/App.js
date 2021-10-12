import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Why from "./pages/Why";
import Docs from "./pages/Docs";
import Login from "./pages/Login";

const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/why" component={Why}></Route>
    <Route path="/docs" component={Docs}></Route>
    <Route path="/login" component={Login}></Route>
  </Switch>
);

export default App;
