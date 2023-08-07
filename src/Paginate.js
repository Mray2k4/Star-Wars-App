import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


function Paginate({goToNextPage, goToPrevPage}) {
  return (
  <div aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
     <li class="page-item">
         {goToPrevPage && <a onClick={goToPrevPage} class="page-link" href='#'>Prev</a>}
     </li>
     <li class="page-item"><a class="page-link" href="#">1</a></li>
     <li class="page-item"><a class="page-link" href="#">2</a></li>
     <li class="page-item"><a class="page-link" href="#">3</a></li>
     <li class="page-item"><a class="page-link" href="#">4</a></li>
     <li class="page-item"><a class="page-link" href="#">5</a></li>
     <li class="page-item"><a class="page-link" href="#">6</a></li>
     <li class="page-item"><a class="page-link" href="#">7</a></li>
     <li class="page-item"><a class="page-link" href="#">8</a></li>
     <li class="page-item"><a class="page-link" href="#">9</a></li>
     <li class="page-item">
      {goToNextPage && <a onClick={goToNextPage} class="page-link" href="#">Next</a>}
    </li>
  </ul>
</div>
  );
}

export default Paginate;