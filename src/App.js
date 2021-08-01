import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import LandingPage from "./components/LandingPage";
import ListPage from "./components/ListPage";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const passResult = (data) => {
    setData(data);
  };
  const orderType = (type) => {
    setType(type);
    switch (type) {
      case "na":
        setData((prev) => prev.sort((a, b) => a[0][0].localeCompare(b[0][0])));
        break;
      case "nd":
        setData((prev) => prev.sort((a, b) => b[0][0].localeCompare(a[0][0])));
        break;
      case "ya":
        setData((prev) =>
          prev.sort((a, b) => {
            let dateA = new Date(
              a[3].slice(-4),
              a[3].slice(3, 5),
              a[3].slice(0, 2)
            );
            let dateB = new Date(
              b[3].slice(-4),
              b[3].slice(3, 5),
              b[3].slice(0, 2)
            );
            return dateA - dateB;
          })
        );
        break;
      case "yd":
        setData((prev) =>
          prev.sort((a, b) => {
            let dateA = new Date(
              a[3].slice(-4),
              a[3].slice(3, 5),
              a[3].slice(0, 2)
            );
            let dateB = new Date(
              b[3].slice(-4),
              b[3].slice(3, 5),
              b[3].slice(0, 2)
            );
            return dateB - dateA;
          })
        );
        break;
      default:
        setData((prev) => prev);
    }
  };
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <LandingPage type={type} carryResult={passResult} />
          </Route>
          <Route path="/list">
            <ListPage orderType={orderType} result={data} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
