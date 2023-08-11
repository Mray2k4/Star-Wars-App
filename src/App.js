import React, {useState, useEffect} from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Paginate from './Paginate';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starwars, setStarwars] = useState([])
  const [url, setUrl] = useState('https://swapi.dev/api/people/?search=')
  const [count, setCount] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
 

  // Changing Pages //
  const [currentPage, setCurrentPage] = useState(1);
  const [eachPage, setEachPage] = useState(10);
  const numberOfPages = Math.ceil(starwars.length)
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);
  const lastIndex = currentPage * count;
  const firstIndex = lastIndex - count;
  const pageList = starwars.slice(firstIndex, lastIndex)
  console.log(lastIndex)


    useEffect(() => {
      axios.get(url)
        .then(res => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setStarwars(res.data.results)
        setCount(res.data.count)
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

    function changePage(name) {
      setCurrentPage(name)
      console.log(setCurrentPage)
    }

    
  return (
    <>
      {loading ? <div>Is Loading...</div>: <div>{ StarwarsList }</div>}
      <StarwarsList  setUrl={setUrl} starwars={pageList}/>
      <Paginate 
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
        // count={pageList}
        setCurrentPage={setCurrentPage}
        pages={pages}
        changePage={changePage}
        // pageList={pageList}
       
      />
    </>
  );
}


export default App;
