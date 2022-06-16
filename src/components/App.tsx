/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "../theme/styles.css";
import "../theme/variables.css";

import { IonApp, setupIonicReact, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import routes from "../router/routes";
import { FC } from "react";

setupIonicReact();

const App: FC = () => {
  const GetRoutes: FC = () => {
    return (
      <IonRouterOutlet>
        <Redirect strict path="" to="/home" />
        {routes.map(({ name, path, Component }) => (
          <Route key={name} exact path={path} component={Component} />
        ))}
      </IonRouterOutlet>
    );
  };

  return (
    <IonApp>
      <IonReactRouter>
        <GetRoutes />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
