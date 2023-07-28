import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search() {
    const [searchFilter, setSearchFilter] = useState([])
    const [searchData, setSearchData] = useState('https://swapi.dev/api/people/?search')
    // console.log(searchFilter)

    useEffect(() => {
        axios.get(searchData)
          .then(res => {
          setSearchFilter(res.data.results)
        }
  )
        .catch(err => console.log(err))
      }, [])

      function Filter (event) {
        setSearchData(searchFilter.filter(f => f.name.toLowerCase().includes(event.target.value)))
                  }

  return (
    <div>
         <input type='text' placeholder='Search' onChange={Filter}/>
         
    </div>
  )
}

export default Search;