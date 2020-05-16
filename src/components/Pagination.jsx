import React from "react";

function Pagination({ postPerPage, totalPages, onPaginate }) {
  let pageNumeber = [];

  for (let index = 1; index <= Math.ceil(totalPages / postPerPage); index++) {
    pageNumeber.push(index);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumeber.map((number) => (
          <li
            onClick={() => onPaginate(number)}
            key={number}
            className="page-item"
          >
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
