import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search({setSearchFilter, starwars, setStarwars, setUrl, url}) {
   
  //   const handleFilter = (event) => {
  //   setUrl = starwars.filter((user) => user.name.toLowerCase().includes(event.target.value));
  //   console.log(setUrl)
  // }

  const handleFilter = (event) => {
   setUrl(`https://swapi.dev/api/people/?search=${event.target.value}`)
  }
   
  

  return (
    <div>
    <input type='text' placeholder='Search' onChange={handleFilter}/>
    </div>
  )
}

export default Search;