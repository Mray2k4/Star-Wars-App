import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search({setSearchFilter}) {
   


  return (
    <div>
         <input type='text' placeholder='Search' onChange={ (e) => {setSearchFilter(e.target.value)}}/>
         
    </div>
  )
}

export default Search;