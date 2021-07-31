import React from "react";
import SearchForm from "./SearchForm";
import Logo from "../img/logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="row justify-content-center">
      <img className="logo col-12" alt="Logo" src={Logo} />
      <h6 className="col-xl-10 col-lg-9 col-md-8 col-6 offset-xl-2 offset-lg-3 offset-md-4 offset-6 text-center">
        <small className="">Search web app</small>
      </h6>
      <div className="col-12">
        <SearchForm />
      </div>
    </div>
  );
};

export default LandingPage;
