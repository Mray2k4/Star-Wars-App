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
  


  // Code With No Async//

  // useEffect(() => {
  //   axios.get(url)
  //     .then((res) => {
        
  //       const characters = res.data.results;
  //       characters.map((char) => {
  //         axios.get(char.homeworld)
  //         .then(response => {
  //           char.homeworld = response.data.name;
  //         })

  //         // axios.get(char.species)
  //         // .then(response => {
  //         //   char.species = response.data.name
  //         // })

  //         // if(char.species !== characters) {
  //         //   char.species = 'Human';
  //         // } else {
  //         // return char;
  //         // }
  //       })
  //       setNextPage(res.data.next)
  //       setPrevPage(res.data.previous)
  //       setStarwars(characters)
  //       setLoading(false)
  //       console.log(characters)
  //     })
  // }, [url])


  // Async function //

  useEffect(() => {
    async function getData() {
          const res = await axios.get(url)
          const characters = res.data.results
          const people = res.data.results

          characters.map((char) => {
            async function getPlanets() {
            const res = await axios.get(char.homeworld)
              char.homeworld = res.data.name
            }
            getPlanets()
          })

          // people.map((peep) => {
          //   async function getSpecies() {
          //   const res = await axios.get(peep.species)
          //     peep.species = res.data.name
          //   }
          //   getSpecies()
          // })
        
          setNextPage(res.data.next)
          setPrevPage(res.data.previous)
          setStarwars(res.data.results)
          setLoading(false)
          console.log(res)
          console.log(characters)
        
        }
      getData()
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
      {/* {loading ? <div>Is Loading...</div> : <div>{StarwarsList}</div>} */}
      {loading && <div>Is Loading...</div>}
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
