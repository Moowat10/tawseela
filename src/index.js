import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/App.css";
import { AuthProvider } from "./contexts/Auth";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import Header from "./components/Header";
import Signview from "./views/signview";
import Cartview from "./views/Cartview";
import HomeView from "./layouts/Homeview";
import ProfileView from "./layouts/Profileview";
ReactDOM.render(
  <AuthProvider className="app">
    <BrowserRouter>
      <HomeView></HomeView>
      <Header />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
