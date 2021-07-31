import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn fourteen"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-sort"> </i>&nbsp; Order By
      </button>
      <ul
        className="dropdown-menu fourteen"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" href="/#">
            Name ascending
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/#">
            Name descending
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/#">
            Year ascending
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/#">
            Year descending
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
