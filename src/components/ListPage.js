import React from "react";
import SearchBar from "./facilities/SearchBar";
import Button from "./facilities/Button";
import Logo from "../img/logo.png";
import Result from "./Result";
import "./ListPage.css";

const ListPage = () => {
  return (
    <div className="row mt-5">
      <div className="col-2">
        <img className="smallLogo" alt="Logo" src={Logo}></img>
      </div>
      <form className="col-10">
        <div className="row">
          <SearchBar />
          <Button text="Search" />
        </div>
      </form>
      <div className="col-12 justify-content-center">
        <Result />
      </div>
    </div>
  );
};

export default ListPage;
