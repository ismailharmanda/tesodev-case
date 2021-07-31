import React, { useState } from "react";
import SearchBar from "./facilities/SearchBar";
import Button from "./facilities/Button";
import Logo from "../img/logo.png";
import Result from "./Result";
import Dropdown from "./facilities/Dropdown";
import Pagination from "./facilities/Pagination";
import data from "../data/mockData.json";
import "./ListPage.css";

const ListPage = (props) => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);
  const getInput = (value) => {
    setTerm(value);
  };
  const searchTerm = (e) => {
    e.preventDefault();
    const filteredResult = data.data.filter(
      (data) =>
        data[0].toLowerCase().includes(term.toLowerCase()) ||
        data[1].toLowerCase().includes(term.toLowerCase()) ||
        data[2].toLowerCase().includes(term.toLowerCase()) ||
        data[3].toLowerCase().includes(term.toLowerCase()) ||
        data[4].toLowerCase().includes(term.toLowerCase()) ||
        data[5].toLowerCase().includes(term.toLowerCase())
    );
    setList(filteredResult);
    setTerm("");
  };
  const renderResult = () => {
    if (props.result.length > 0) {
      return props.result.map((result, index) => (
        <Result
          key={index}
          id={index}
          name={result[0]}
          date={result[3]}
          mail={result[2]}
          country={result[4]}
          city={result[5]}
          company={result[1]}
        />
      ));
    }
  };
  const renderOwnResult = () => {
    if (list.length > 0) {
      return list.map((list, index) => (
        <Result
          key={index}
          id={index}
          name={list[0]}
          date={list[3]}
          mail={list[2]}
          country={list[4]}
          city={list[5]}
          company={list[1]}
        />
      ));
    }
  };
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-2">
        <img className="smallLogo" alt="Logo" src={Logo}></img>
      </div>
      <form className="col-10">
        <div className="row">
          <SearchBar input={getInput} />
          <Button onClick={searchTerm} text="Search" />
        </div>
      </form>
      <div className="col-2 offset-10 mt-5">
        <Dropdown />
      </div>
      <div className="col-8">{renderOwnResult() || renderResult()}</div>
      <div className="d-flex col-8 justify-content-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default ListPage;
