import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import ThankU from './ThankU';
import Error from './Error';

const RoutePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/thankyou">
          <ThankU />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default RoutePage;
