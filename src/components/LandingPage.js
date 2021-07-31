import React from "react";
import SearchForm from "./SearchForm";
import Logo from "../img/logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="row justify-content-center">
      <img className="logo col-12" alt="Logo" src={Logo} />
      <div className="col-12">
        <SearchForm />
      </div>
    </div>
  );
};

export default LandingPage;
