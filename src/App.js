import React, { useState, useEffect } from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(getPlanets, setGetPlanets) {
  const [starwars, setStarwars] = useState([]);
  const [url, setUrl] = useState('https://swapi.dev/api/people/');
  const [loading, setLoading] = useState(true);

  // Changing Pages //
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(starwars.length);
  const pages = [...Array(numberOfPages).keys()].slice(1);
  // console.log(getPlanets);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        const characters = res.data.results
        characters.map((char) => {
          axios.get(char.homeworld)
          .then(response => {
            char.homeworld = response.data.name
          })
          return char
        })
        setStarwars(characters)
        setLoading(false)
        console.log(res)
      })
  }, [url])


  // Next and Previous Pages //
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
        getPlanets={getPlanets}
        setGetPlanets={setGetPlanets}

      />
    </>
  );
}


export default App;
