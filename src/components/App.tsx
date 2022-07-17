/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "../theme/styles.css";
import "../theme/variables.css";

import "animate.css";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router";

import routes from "../router/routes";
import { FC } from "react";
import { CRUDProvider } from "../context/CRUDContext";

setupIonicReact();

const App: FC = () => {
  const GetRoutes: FC = () => {
    return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} path={path} component={Component} />
            ))}
            <Route
              path=""
              render={() => <Redirect to="/home" />}
              exact={true}
            />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    );
  };

  return (
    <IonApp>
      <CRUDProvider>
        <GetRoutes />
      </CRUDProvider>
    </IonApp>
  );
};

export default App;
