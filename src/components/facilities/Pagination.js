import React from "react";

import "./Pagination.css";

const Pagination = ({ itemPerPage, totalItem, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item mx-1">
          <a className="page-link fourteen text-dark px-5" href="/#">
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={"page-item mx-1"}>
              <a
                onClick={() => paginate(number)}
                href="/#"
                className="page-link fourteen text-dark px-5"
              >
                {number}
              </a>
            </li>
          );
        })}
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
