import React from 'react';

const PageList = ({ imagesArr, pageNo, goToPage }) => {
  const items =
    imagesArr.length > 3
      ? imagesArr.map((el, i) => {
          if (i === pageNo - 1) {
            return (
              <li key={i + 1} className='page-item'>
                <button className='page-link'>{i + 1}</button>
              </li>
            );
          }
        })
      : imagesArr.map((el, i) => {
          return (
            <li key={i + 1} className='page-item'>
              <button className='page-link' onClick={() => goToPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          );
        });

  return <>{items}</>;
};

export default PageList;
