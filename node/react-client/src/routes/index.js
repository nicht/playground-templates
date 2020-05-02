import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/example" exact component={Example} />
    </Switch>
  );
}
