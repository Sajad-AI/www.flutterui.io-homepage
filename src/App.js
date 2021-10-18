import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Why from "./pages/Why";
import Login from "./pages/Login";
import Terms from "./pages/Terms";

const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/why" component={Why}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/terms" component={Terms}></Route>
  </Switch>
);

export default App;
