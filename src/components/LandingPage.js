import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Logo from "../img/logo.png";
import Result from "./Result";
import ShowMore from "./facilities/ShowMore";

import "./LandingPage.css";

const LandingPage = () => {
  const [result, setResult] = useState([]);
  const getResult = (data) => {
    setResult(data);
  };
  const renderResult = () => {
    console.log(result);
    if (result.length <= 3 && result.length > 0) {
      return result.map((result, index) => (
        <div key={index} className="col-8 ">
          <Result
            id={index}
            name={result[0]}
            date={result[3]}
            mail={result[2]}
            country={result[4]}
            city={result[5]}
            company={result[1]}
          />
        </div>
      ));
    } else if (result.length > 0) {
      return result.slice(0, 3).map((result) => (
        <div key={result[0]} className="col-8 ">
          <Result
            id={result[0]}
            name={result[0]}
            date={result[3]}
            mail={result[2]}
            country={result[4]}
            city={result[5]}
            company={result[1]}
          />
        </div>
      ));
    }
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
      {result.length > 3 && <ShowMore />}
    </div>
  );
};

export default LandingPage;
