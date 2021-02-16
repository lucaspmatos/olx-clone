/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/sign-in">
        <Login />
      </Route>
      
      <Route exact path="/sign-up">
        <SignUp />
      </Route>

      <Route exact path="/ad/:id">
        <AdPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
