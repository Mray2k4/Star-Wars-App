import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// let active = 2;
// let pages = [];
// for (let i = 1; i <= 10; i++) {
//   items.push(
//     <Pagination.Item key={i} active={i === active}>
//       {i}
//     </Pagination.Item>,
//   );
// }




function Paginate({goToNextPage, goToPrevPage, starwars}) {
  const [page, setPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(starwars.length)
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);
  // const lastIndex = currentPage * page;
  // const firstIndex = lastIndex - page;
  // const pageList = starwars.slice(firstIndex, lastIndex)
  console.log(pages)


  return (
      <div aria-label="Page navigation example">
         <ul class="pagination justify-content-center">
          <li class="page-item">
         {goToPrevPage && <a onClick={goToPrevPage} class="page-link" href='#'>Prev</a>}
        </li>
           {pages.map(page => 
          <li class="page-link" key={page}>{page}</li>)}
          <li class="page-item">
       {goToNextPage && <a onClick={goToNextPage} class="page-link" href="#">Next</a>}
        </li>
        </ul>
      </div>

//   <div aria-label="Page navigation example">
//     <ul class="pagination justify-content-center">
//      <li class="page-item">
//          {goToPrevPage && <a onClick={goToPrevPage} class="page-link" href='#'>Prev</a>}
//      </li>
//      <li class="page-item"><a class="page-link" href="#">1</a></li>
//      <li class="page-item"><a class="page-link" href="#">2</a></li>
//      <li class="page-item"><a class="page-link" href="#">3</a></li>
//      <li class="page-item"><a class="page-link" href="#">4</a></li>
//      <li class="page-item"><a class="page-link" href="#">5</a></li>
//      <li class="page-item"><a class="page-link" href="#">6</a></li>
//      <li class="page-item"><a class="page-link" href="#">7</a></li>
//      <li class="page-item"><a class="page-link" href="#">8</a></li>
//      <li class="page-item"><a class="page-link" href="#">9</a></li>
//      <li class="page-item">
//       {goToNextPage && <a onClick={goToNextPage} class="page-link" href="#">Next</a>}
//     </li>
//   </ul>
// </div>

  );
}

export default Paginate;