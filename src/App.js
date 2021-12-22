import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import HomeView from "./layouts/Homeview";
import ProfileView from "./layouts/Profileview";
import StationsView from "./layouts/Stationsview";
import React, { useState, useEffect } from "react";
import ar from "./assets/lang/ar";
import en from "./assets/lang/en";
import StaticView from "./layouts/Staticview";

export default function App() {
  const [lang, setLang] = useState("en");
  counterpart.registerTranslations("en", en);
  counterpart.registerTranslations("ar", ar);
  useEffect(() => {
    counterpart.setLocale(lang);
  }, [lang]);
  return (
    <div>
      <StaticView></StaticView>
      <ProfileView></ProfileView>
    </div>
  );
}
