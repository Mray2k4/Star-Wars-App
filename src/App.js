import React, {useState, useEffect} from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';
import Search from './Search';


function App() {
  const [starwars, setStarwars] = useState([])
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/')
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
  const [searchData, setSearchData] = useState([])
  const [searchFilter, setSearchFilter] = useState([])


    useEffect(() => {
      axios.get(currentPage)
        .then(res => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setStarwars(res.data.results)
        setSearchData(res.data)
        setSearchFilter(res.data)
        console.log(res)
        setLoading(false)
      })
    }, [currentPage])


    function handleFilter (value) {
      const res = searchFilter.filter(f => f.name.toLowerCase().includes(value))
      setSearchData(res);
    }


    function goToNextPage() {
      setCurrentPage(nextPage)
    }
    

    function goToPrevPage() {
      setCurrentPage(prevPage)
    }

    
  return (
    <>
      {loading ? <div>Is Loading...</div>: <div>{ StarwarsList }</div>}
      <StarwarsList starwars={starwars}/>
      <Pagination 
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
      <Search/>
      {/* <div>
        <input type="text" placeholder='Search Here...' onChange={e => handleFilter(e.target.value)}/>
        {searchData.map((user, i) => {
            <div key={i}>
                {user.name}
            </div>
        })}
    </div> */}
    </>
  );
}


export default App;
