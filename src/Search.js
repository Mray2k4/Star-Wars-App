import React from 'react'

function Search({searchData}) {

    
  return (
    <div>
         <div>
        <input type="text" placeholder='Search Here...' onChange={e => handleFilter(e.target.value)}/>
        {searchData.map((user, i) => {
            <div key={i}>
                {user.name}
            </div>
        })}
    </div>
    </div>
  )
}

export default Search