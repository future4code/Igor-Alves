import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../LoginPage";
import { SignupPage } from "../SignupPage"
import { HomePage } from "../HomePage";
import { UploadPage } from "../UploadPage";
import { AccountPage } from "../AccountPage";
import { VideosPage } from "../VideosPage";


export const routes = {
  login: "/login",
  signup: "/signup",
  home: "/",
  upload: "/upload",
  account: "/account",
  videos: "/myvideos",
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      isAutenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

function isAutenticated() {
  const token = window.localStorage.getItem("token")
  return token ? true : false 
}

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <PrivateRoute exact path={routes.home} component={HomePage} />
        <PrivateRoute exact path={routes.upload} component={UploadPage} />
        <PrivateRoute exact path={routes.account} component={AccountPage} />
        <PrivateRoute exact path={routes.videos} component={VideosPage} />
      </Switch>
    </ConnectedRouter>
  );
}


export default Router;