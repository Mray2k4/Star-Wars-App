import React from 'react'

function Pagination({goToNextPage, goToPrevPage}) {

  return (
    <div className='pages'>
        {goToPrevPage && <button  onClick={goToPrevPage}>Prev</button>}
        {goToNextPage && <button  onClick={goToNextPage}>Next</button>}
        
    </div>
  )
}

export default Pagination;