import React from "react";

import "./Pagination.css";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark px-5" href="/#">
            Previous
          </a>
        </li>
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark" href="/#">
            1
          </a>
        </li>
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark" href="/#">
            2
          </a>
        </li>
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark" href="/#">
            3
          </a>
        </li>
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark px-5" href="/#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
