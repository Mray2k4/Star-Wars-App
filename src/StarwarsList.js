import React from 'react'

function StarwarsList({starwars}) {
  return (
    <div>
        {starwars.map((s) => (
            <div key={s}>{s}</div>
        ))}
    </div>
  )
}

export default StarwarsList;