import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {appInfo} from "./app-info";
import routes from "./app-routes";
import { SideNavOuterToolbar } from "./layouts";
import { Footer } from "./components";

export function Content() {
  return (
    <SideNavOuterToolbar title={appInfo.title}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
        <Redirect to={"/home"} />
      </Switch>
      <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners.
      </Footer>
    </SideNavOuterToolbar>
  );
}
