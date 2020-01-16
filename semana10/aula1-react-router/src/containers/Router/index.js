import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListTripPage from "../ListTripPage";
import TripDetailsPage from "../TripDetailsPage";
import HomePage from "../HomePage";
import RegisterPage from "../RegisterPage";
import CreateTravelPage from "../CreateTripPage";
import AdminPanel from "../AdminPanel/index";



export const routes = {
  root: "/",
  register: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  allTrips: "/trips/list",
  tripDetails: "/trips/details",
  adminPanel: "/admin/panel"
};



function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact/>
        <Route path={routes.register} component={RegisterPage} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.createTrip} component={CreateTravelPage} exact/>
        <Route path={routes.allTrips} component={ListTripPage} exact/>
        <Route path={routes.tripDetails} component={TripDetailsPage} exact/>
        <Route path={routes.adminPanel} component={AdminPanel} exact/>
      </Switch>
    </ConnectedRouter>
  );
}



export default Router;
