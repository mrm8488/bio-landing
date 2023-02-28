import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOME from "./components/HOME";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <HOME {...hOMEData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const hOMEData = {
    shopNow: "Shop now",
    text2: "We do body care to feel good daily care",
    text1: <React.Fragment><br />Custom skincare that works.</React.Fragment>,
    reviews: "Reviews",
    surname: "Best Seller",
    contacUs: "Contac Us",
    bioface: "Bioface",
    singUp: "Sing Up",
    logIn: "Log In",
};

