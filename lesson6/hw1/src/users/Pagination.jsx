import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  const isNextDisabled = currentPage * itemsPerPage >= totalItems;
  const isPrevDisabled = currentPage === 1;
  return (
    <div className="pagination">
      <button disabled={isPrevDisabled} className="btn" onClick={goPrev}>
        {!isPrevDisabled && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={isNextDisabled} className="btn" onClick={goNext}>
        {!isNextDisabled && '→'}
      </button>
    </div>
  );
};

export default Pagination;
