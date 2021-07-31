import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
    props.input(e.target.value);
  };
  return (
    <div className="col-12 col-md-10">
      <label htmlFor="searchInput" className="visually-hidden">
        Search
      </label>
      <input
        value={props.term}
        onChange={onInputChange}
        placeholder="Search"
        id="searchInput"
        type="text"
        className="form-control form-control-lg mx-auto longBar"
      />
    </div>
  );
};

export default SearchBar;
