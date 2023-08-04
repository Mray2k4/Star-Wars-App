import React, {useState, useEffect} from 'react'
import Search from './Search';
import axios from 'axios';

function StarwarsList({starwars, setStarwars, setUrl, url}) {
     const [getList, setGetList] = useState([])
     const [searchFilter, setSearchFilter] = useState([])



  return (
    <div className='container'>
        <div className='mt-6'>
            <h3>Star Wars List</h3>
            <Search setStarwars={setStarwars} starwars={starwars} setUrl={setUrl}/>
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