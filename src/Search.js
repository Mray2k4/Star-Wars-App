import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Search() {
    const [searchFilter, setSearchFilter] = useState([])
    const [filterList, setFilterList] = useState('https://swapi.dev/api/people/?search=')
    console.log(searchFilter)

    useEffect(() => {
        axios.get(filterList)
          .then(res => {
            setSearchFilter(res.data)
        })
        .catch(err => console.log(err))
      }, [])

        function handleChange(e) {
            const search = e.target.value.toLowerCase()
            const filterNames = searchFilter.filter(searchFilter => searchFilter.names.toLowerCase().includes(search))
            setSearchFilter(filterNames)
        }


  return (
    <div>
         <input type='text' placeholder='Search' onChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default Search