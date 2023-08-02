import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search({setSearchFilter, starwars, setStarwars, setUrl}) {
   
  const handleFilter = (event) => {
    setUrl = starwars.filter((user) => user.name.toLowerCase().includes(event.target.value));
    console.log(setUrl)
  } 
  

  return (
    // <div>
    //      <input type='text' placeholder='Search' onChange={ (e) => {setSearchFilter(e.target.value)}}/>
         
    // </div>
    <div>
    <input type='text' placeholder='Search' onChange={handleFilter}/>
    
</div>
  )
}

export default Search;