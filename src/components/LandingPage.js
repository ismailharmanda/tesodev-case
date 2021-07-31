import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Logo from "../img/logo.png";
import Result from "./Result";

import "./LandingPage.css";

const LandingPage = () => {
  const [result, setResult] = useState([]);
  const getResult = (data) => {
    setResult(data);
  };
  const renderResult = () => {
    console.log(result);
    return (
      result.length > 0 &&
      result.map((result) => (
        <Result
          key={result[0]}
          id={result[0]}
          name={result[0]}
          date={result[3]}
          mail={result[2]}
          country={result[4]}
          city={result[5]}
          company={result[1]}
        />
      ))
    );
  };
  return (
    <div className="row justify-content-center">
      <img className="logo col-12" alt="Logo" src={Logo} />
      <h6 className="col-xl-10 col-lg-9 col-md-8 col-6 offset-xl-2 offset-lg-3 offset-md-4 offset-6 text-center">
        <small className="">Search web app</small>
      </h6>
      <div className="col-8 mb-5">
        <SearchForm result={getResult} />
      </div>
      {renderResult()}
    </div>
  );
};

export default LandingPage;
