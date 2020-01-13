import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListTripPage from "../ListTripPage";
import TripDetailsPage from "../TripDetailsPage";
import HomePage from "../HomePage";
import RegisterPage from "../RegisterPage";
import CreateTravelPage from "../CreateTravelPage";


const routes = {
  root: "/",
  register: "/application-form",
  login: "/login",
  createTravel: "/trips/create",
  allTravels: "/trips/list",
  travelDetails: "/trips/details",
};



function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.createTravel} component={CreateTravelPage} />
        <Route path={routes.allTravels} component={ListTripPage} />
        <Route path={routes.travelDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
