import React from "react";
import { Switch, Route } from "react-router-dom";
import Breeds from "./Breeds/Breeds";
import Breed from "./Breeds/Breed";
import Inicio from "./Inicio";
import SubBreed from "./Breeds/SubBreed";

const Content = () => (
  <main className="container is-fluid">
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/breeds/:id" component={Breeds} />
      <Route exact path="/breeds/:id/:breed" component={Breed} />
      <Route exact path="/breeds/:id/:breed/:subBreed" component={SubBreed} />
      <Route path="*" component={Inicio} />
    </Switch>
  </main>
);
export default Content;
