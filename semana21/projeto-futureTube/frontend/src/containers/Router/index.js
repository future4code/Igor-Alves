import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../LoginPage";
import { SignupPage } from "../SignupPage"
import { HomePage } from "../HomePage";
import { UploadPage } from "../UploadPage";


export const routes = {
  login: "/login",
  signup: "/signup",
  home: "/",
  upload: "/upload"
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.upload} component={UploadPage} />
      </Switch>
    </ConnectedRouter>
  );
}


export default Router;