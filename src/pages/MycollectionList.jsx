import React from 'react'

function MycollectionList({movie}) {
    const {posterUrl,genre,rating,title,_id,releaseYear} = movie

  return (
    <div>
         <ul className="list bg-base-200 rounded-box shadow-md">  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src={posterUrl}/></div>
    <div>
      <div>{title}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{genre}</div>
    </div>
    <button className="btn btn-error">Edit</button>
          <button className="btn btn-error">Delete</button>

  </li>
  
</ul>
    </div>
  )
}

export default MycollectionList
