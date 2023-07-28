import React, {useState, useEffect} from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';


function App() {
  const [starwars, setStarwars] = useState([])
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/')
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)


    useEffect(() => {
      axios.get(currentPage)
        .then(res => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setStarwars(res.data.results)
        console.log(res)
        setLoading(false)
      })
    }, [currentPage])




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
    </>
  );
}


export default App;
