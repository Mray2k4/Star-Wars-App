import React from 'react'
import Search from './Search';
import { Table } from 'react-bootstrap';

function StarwarsList({starwars, setStarwars, setUrl, characters}) {
    console.log('starwars; ', characters)

  return (
    <div className='container'>
        <div className='mt-6'>
            <h2 className='header'>Star Wars List</h2>
            <Search setStarwars={setStarwars} starwars={starwars} setUrl={setUrl}/>
            <Table hover variant='dark'>
                <thead variant='light'>
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
                             <td>{user.name}</td>
                             <td>{user.birth_year}</td>
                             <td>{user.height}</td>
                             <td>{user.mass}</td>
                             <td>{user.homeworld}</td>
                             <td>{user.species}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default StarwarsList;