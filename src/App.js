import React, { useState, useEffect } from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starwars, setStarwars] = useState([]);
  const [url, setUrl] = useState('https://swapi.dev/api/people/');
  const [loading, setLoading] = useState(true);
 
  // Changing Pages //
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(starwars.length);
  const pages = [...Array(numberOfPages).keys()].slice(1);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(url)
      const characters = res.data.results
      const people = res.data.results

      for (const key of characters) {
        const character = await axios.get(key.homeworld)
        key.homeworld = character.data.name
        if (key.species == '') {
          key.species = 'Human';
        } else {
          const peoples = await axios.get(key.species)
          key.species = peoples.data.name
        }
      }

      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setStarwars(res.data.results)
      setLoading(false)
      console.log(res)
      console.log(characters)

    }
    getData()
  }, [url])


  // Loading Page //
  function pageLoading() {
    if (loading) {
      return <h3>Is Loading...</h3>
    }
  }

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
      <StarwarsList
        setUrl={setUrl}
        starwars={starwars}
      />
      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        changePage={changePage}
      />
      {pageLoading()}
    </>
  );
}


export default App;
