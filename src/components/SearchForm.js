import React from "react";
import SearchBar from "./facilities/SearchBar";
import Button from "./facilities/Button";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="row midForm align-items-center">
      <SearchBar />
      <Button text="Search" />
    </form>
  );
};

export default SearchForm;
