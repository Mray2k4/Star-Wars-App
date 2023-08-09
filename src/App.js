import React, {useState, useEffect} from 'react';
import StarwarsList from './StarwarsList';
import axios from 'axios';
import Paginate from './Paginate';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starwars, setStarwars] = useState([])
  const [url, setUrl] = useState('https://swapi.dev/api/people/?search=')
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
 


    useEffect(() => {
      axios.get(url)
        .then(res => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setStarwars(res.data.results)
        console.log(res)
        setLoading(false)
      })
    }, [url])

    


    function goToNextPage() {
      setUrl(nextPage)
    }
    

    function goToPrevPage() {
      setUrl(prevPage)
    }

    
  return (
    <>
      {loading ? <div>Is Loading...</div>: <div>{ StarwarsList }</div>}
      <StarwarsList starwars={starwars} setUrl={setUrl}/>
      <Paginate 
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
        starwars={starwars}
      />
    </>
  );
}


export default App;
