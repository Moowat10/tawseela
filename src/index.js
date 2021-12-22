import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/App.css";
import { AuthProvider } from "./contexts/Auth";
import App from "./App";

ReactDOM.render(
  <AuthProvider className="app">
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
