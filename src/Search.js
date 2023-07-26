import {useState, useEffect} from 'react'
import axios from 'axios';

function Search() {

    const [searchData, setSearchData] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [loading, setLoading] = useState(true)
    

    // const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
          .then(res => {
          setSearchData(res.data)
          setSearchFilter(res.data)
          console.log(res)
          setLoading(false)
        })
      }, [])

      function handleFilter (value) {
          const res = searchFilter.filter(f => f.name.toLowerCase().includes(value))
          setSearchData(res);
        }

    
  return (
    <div>
         <div>
        <input type="text" placeholder='Search...' onChange={e => handleFilter(e.target.value)}/>
        {searchFilter.map((user, i) => {
            <div key={i}>
                {user.name}
            </div>
        })}
    </div>
    {/* Search:
    <input type="search" />
    <form>
        New Item:
        <input type="text" />
        <button>Add</button>
    </form>
    <h3>Items:</h3>
    {items.map(item => {
        <div>{items}</div>
    })} */}
    </div>
  )
}

export default Search