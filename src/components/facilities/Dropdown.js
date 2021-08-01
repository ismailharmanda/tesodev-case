import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <button
        className="btn fourteen"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-sort"> </i>&nbsp; Order By
      </button>
      <ul
        className="dropdown-menu fourteen"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <Link
            onClick={() => props.order("na")}
            className="dropdown-item"
            to="/list"
          >
            Name ascending
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.order("nd")}
            className="dropdown-item"
            to="/list"
          >
            Name descending
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.order("ya")}
            className="dropdown-item"
            to="/list"
          >
            Year ascending
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.order("yd")}
            className="dropdown-item"
            to="/list"
          >
            Year descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
