import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import Header from "../common/Header";
import PageNotFound from "../PageNotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
};

export default App;
