/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch } from "react-router-dom";
import RouteHandler from './components/RouteHandler';

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import PostAd from './pages/PostAd';
import Ads from './pages/Ads';

export default () => {
  return (
    <Switch>
      <RouteHandler exact path="/">
        <Home />
      </RouteHandler>

      <RouteHandler exact path="/about">
        <About />
      </RouteHandler>

      <RouteHandler exact path="/sign-in">
        <Login />
      </RouteHandler>
      
      <RouteHandler exact path="/sign-up">
        <SignUp />
      </RouteHandler>

      <RouteHandler exact path="/ad/:id">
        <AdPage />
      </RouteHandler>

      <RouteHandler private exact path="/post-ad">
        <PostAd />
      </RouteHandler>

      <RouteHandler exact path="/ads">
        <Ads />
      </RouteHandler>

      <RouteHandler>
        <NotFound />
      </RouteHandler>
    </Switch>
  );
};
