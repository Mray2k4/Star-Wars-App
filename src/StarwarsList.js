import React from 'react'

export default function StarwarsList({starwars}) {
  return (
    <div>
        {starwars.map(p => (
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}
