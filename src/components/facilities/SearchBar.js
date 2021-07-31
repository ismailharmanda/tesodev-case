import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="col-12 col-md-10">
      <label htmlFor="searchInput" className="visually-hidden">
        Search
      </label>
      <input
        placeholder="Search"
        id="searchInput"
        type="text"
        className="form-control form-control-lg mx-auto"
      />
    </div>
  );
};

export default SearchBar;
