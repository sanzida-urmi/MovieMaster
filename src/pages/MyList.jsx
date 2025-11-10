import React from 'react'

function MyList({movie}) {
    console.log(movie);
    const {addedBy,genre,posterUrl,title} = movie;
  return (
   <div>
    
         <ul className="list bg-base-200 rounded-box shadow-md">  
  <li className="list-row">
    <div><img className="size-10 rounded-box mr-10" src={posterUrl}/></div>
    <div>
      <div>{title}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{genre}</div>
    </div>
    

  </li>
  
</ul>
    </div>
  )
}

export default MyList
