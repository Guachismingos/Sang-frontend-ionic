// import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

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

import { ScreenOrientation } from "@awesome-cordova-plugins/screen-orientation";

import routes from "../router/routes";
import { FC, Suspense } from "react";
import { CRUDProvider } from "../context/CRUDContext";
import Loading from "./Loading";

setupIonicReact();

const App: FC = () => {
  ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);

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
      <Suspense fallback={<Loading/>}>
      <CRUDProvider>
        <GetRoutes />
      </CRUDProvider>
    </Suspense>
    </IonApp>
  );
};

export default App;
