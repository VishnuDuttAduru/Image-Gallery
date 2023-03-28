import React, { useState, useEffect } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const [pageRange, setPageRange] = useState([1, Math.min(5, totalPages)]);

  useEffect(() => {
    setPageRange([1, Math.min(5, totalPages)]);
  }, [totalPages]);

  const onPrevClick = () => {
    const [start, end] = pageRange;
    if (start > 1) {
      setPageRange([start - 5, end - 5]);
    }
  }

  const onNextClick = () => {
    const [start, end] = pageRange;
    if (end < totalPages) {
      setPageRange([start + 5, end + 5]);
    }
  }

  const getPageNumbers = () => {
    const [start, end] = pageRange;
    const pageNumbers = [];
    for (let i = start; i <= Math.min(end, totalPages); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  return (
    <div className='container'>
      <div className='pagination'>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            &larr;
          </button>
        )}
        {pageRange[0] > 1 && (
          <button onClick={onPrevClick}>...</button>
        )}
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        {pageRange[1] < totalPages && (
          <button onClick={onNextClick}>...</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>&rarr;</button>
        )}
      </div>
    </div>
  );
}

export default Pagination;