import React, {useState, useEffect} from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starwars, setStarwars] = useState([])
  const [url, setUrl] = useState('https://swapi.dev/api/people/?search=')
  const [count, setCount] = useState()
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
 

  // Changing Pages //
  const [currentPage, setCurrentPage] = useState();
  const [eachPage, setEachPage] = useState(10);
  const numberOfPages = Math.ceil(starwars.length)
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);
  const lastIndex = currentPage * eachPage;
  const firstIndex = lastIndex - eachPage;
  const pageList = starwars.slice(firstIndex, lastIndex)
  console.log(currentPage)


    useEffect(() => {
      axios.get(url)
        .then(res => {
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
     setUrl(`https://swapi.dev/api/people/?search=&page=${currentPage}`)

    }
    // function changePage(nextPage) {
    //   setCurrentPage(nextPage)
      
    //  }
    // function changePage() {
    //   setUrl(nextPage)
      
    //  }

    
  return (
    <>
      {loading ? <div>Is Loading...</div>: <div>{ StarwarsList }</div>}
      <StarwarsList  setUrl={setUrl} starwars={pageList}/>
      <Pagination 
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
