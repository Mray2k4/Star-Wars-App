import React from 'react'

function Search({setUrl}) {

  const handleFilter = (event) => {
   setUrl(`https://swapi.dev/api/people/?search=${event.target.value}`)
  }
   
  

  return (
    <div>
    <input className='search' type='text' placeholder='Search' onChange={handleFilter}/>
    </div>
  )
}

export default Search;