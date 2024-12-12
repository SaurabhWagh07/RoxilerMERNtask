import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="text-center col-md-12">
      <div className="pagination">
      <button className='btn btn-outline-danger' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      <i class="fa-solid fa-arrow-left"></i> Previous
      </button>
      <button className='btn btn-outline-info' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    </div>
  );
};

export default Pagination;
