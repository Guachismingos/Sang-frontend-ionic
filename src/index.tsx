import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

defineCustomElements(window);
