// ProductPagination.js
import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";

const CPagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Pagination>
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
CPagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default CPagination;
