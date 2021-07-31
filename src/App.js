import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ListPage from "./components/ListPage";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const passResult = (data) => {
    setData(data);
  };
  return (
    <>
      <ListPage result={data} />
      <LandingPage carryResult={passResult} />
    </>
  );
};

export default App;
