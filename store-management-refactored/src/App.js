import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./components/main-layout";
import LoginPage from "./pages/login/login-page";
import SellPage from "./pages/sell/sell-page";
import Report from "./pages/report/report-page";

const App = () => {
  // ===============================
  // Hooks
  // ===============================

  const [hello, setHello] = useState("Hello User");

  // ===============================
  // Helpers
  // ===============================

  function changeHello(msg) {
    setHello(msg);
  }

  // ===============================

  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <LoginPage hello={hello} changeHello={changeHello} />
        </Route>
        <Route path="/home" exact>
          <SellPage hello={hello} changeHello={changeHello} />
        </Route>
        <Route path="/report" exact>
          <Report hello={hello} changeHello={changeHello} />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default App;
