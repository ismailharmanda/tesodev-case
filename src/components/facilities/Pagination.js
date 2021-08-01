import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = ({ itemPerPage, totalItem, paginate, next, previous }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item mx-1">
          <Link
            onClick={() => previous(pageNumbers.length)}
            className="page-link fourteen text-dark px-5"
            to="/list"
          >
            Previous
          </Link>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={"page-item mx-1"}>
              <Link
                onClick={() => paginate(number)}
                to="/list"
                className="page-link fourteen text-dark px-5"
              >
                {number}
              </Link>
            </li>
          );
        })}
        <li className="page-item mx-1">
          <Link
            onClick={() => next(pageNumbers.length)}
            className="page-link fourteen text-dark px-5"
            to="/list"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
