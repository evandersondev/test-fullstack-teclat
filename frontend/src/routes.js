import React from "react";
import { Router, Switch, Route } from "react-router";
import history from "./pages/history";

import LoginLogout from "./pages/LoginLogout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginLogout} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
