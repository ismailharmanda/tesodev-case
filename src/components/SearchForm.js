import React, { useState } from "react";
import SearchBar from "./facilities/SearchBar";
import Button from "./facilities/Button";

import data from "../data/mockData.json";

import "./SearchForm.css";

const SearchForm = (props) => {
  const [term, setTerm] = useState("");

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
    props.result(filteredResult);
    setTerm("");
  };
  return (
    <form onSubmit={searchTerm} className="row midForm align-items-center">
      <SearchBar term={term} input={getInput} />
      <Button onClick={searchTerm} text="Search" />
    </form>
  );
};

export default SearchForm;
