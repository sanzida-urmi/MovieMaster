import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

function MycollectionList({movie}) {
    const {posterUrl,genre,rating,title,_id,releaseYear} = movie
    const {refetch,setRefecth} = use(AuthContext);
         const navigate = useNavigate();


   

  return (
    <div>
         <ul className="list bg-base-200 rounded-box shadow-md">  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src={posterUrl}/></div>
    <div>
      <div>{title}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{genre}</div>
    </div>
    <Link to={`/movies/update/${_id}`} className="btn btn-active  btn-error">Edit</Link>
          <button onClick={()=>handleDlete(_id)} className="btn btn-error">Delete</button>

  </li>
  
</ul>
    </div>
  )
}

export default MycollectionList
