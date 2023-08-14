import React from 'react';

function Pagination({goToNextPage, goToPrevPage, pages, changePage}) {

  return (
      <div aria-label="Page navigation example">
         <ul class="pagination justify-content-center">
          <li class="page-item">
         {goToPrevPage && <a onClick={goToPrevPage} class="page-link" href='!#'>Prev</a>}
        </li>
           {pages.map(page => 
            <li class= "page-item" 
              key={page} 
              >
              <a class="page-link" href='!#' 
                onClick={() => changePage(page)}>
                {page}
              </a>
            </li>)}
          <li class= "page-item">
       {goToNextPage && <a onClick={goToNextPage} class="page-link" href="!#">Next</a>}
        </li>
        </ul>
      </div>

  );
}

export default Pagination;