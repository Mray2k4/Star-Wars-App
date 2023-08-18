import React, { useState, useEffect } from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starwars, setStarwars] = useState([])
  const [url, setUrl] = useState('https://swapi.dev/api/people/')
  const [count, setCount] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)



  // Changing Pages //
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(starwars.length)
  const pages = [...Array(numberOfPages).keys()].slice(1);
  console.log(currentPage)


  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setStarwars(res.data.results)
        setCount(res.data.next)
        setLoading(false)
        console.log(res)
      })
  }, [url])







  function goToNextPage() {
    setUrl(nextPage)
  }

  function goToPrevPage() {
    setUrl(prevPage)
  }

  function changePage(page) {
    setCurrentPage(page)
    setUrl(`https://swapi.dev/api/people/?search=&page=${page}`)

  }


  return (
    <>
      {loading ? <div>Is Loading...</div> : <div>{StarwarsList}</div>}
      <StarwarsList setUrl={setUrl} starwars={starwars} />
      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        changePage={changePage}
        count={count}

      />
    </>
  );
}


export default App;
