import React, {useState, useEffect} from 'react'
import Search from './Search';
import axios from 'axios';

function StarwarsList({starwars}) {
     const [getList, setGetList] = useState([])
     const [searchFilter, setSearchFilter] = useState([])

    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people/?search=')
    //       .then(res => {
    //         setGetList(res.data.results)
    //     })
    //     .catch(err => console.log(err))
    //   }, [])

  return (
    <div className='container'>
        <div className='mt-6'>
            <h3>Star Wars List</h3>
            <Search setSearchFilter={setSearchFilter}/>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Birth Date</td>
                        <td>Height</td>
                        <td>Mass</td>
                        <td>Homeworld</td>
                        <td>Species</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        starwars.map((user, index) => (
                         <tr key={index}>
                             <td>{user.name} </td>
                             <td>{user.birth_year}</td>
                             <td>{user.height}</td>
                             <td>{user.mass}</td>
                             <td>{user.homeworld}</td>
                             <td>{user.species}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StarwarsList;