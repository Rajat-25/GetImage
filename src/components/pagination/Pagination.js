import React, { Component } from 'react';
import PageList from './PageList';
function Pagination({ imagesArr, pageNo, changePage, goToCurr }) {
  const incPage = () => {
    let page = pageNo;
    page++;
    changePage(page, imagesArr);
  };

  const decPage = () => {
    let page = pageNo;
    if (page === 1) {
      changePage(page, imagesArr);
      return;
    } else {
      page--;
      imagesArr.pop();
      changePage(page, imagesArr);
    }
  };

  const goToPage = (pageNo) => {
    goToCurr(pageNo);
  };

  return (
    <div className='pagination-nav'>
      <ul className='pagination'>
        <li className='page-item '>
          <button className='page-link' onClick={decPage}>
            Prev
          </button>
        </li>

        <PageList imagesArr={imagesArr} pageNo={pageNo} goToPage={goToPage} />

        <li className='page-item'>
          <button className='page-link' onClick={incPage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
