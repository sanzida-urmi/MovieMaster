import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

function MycollectionList({movie}) {
    const {posterUrl,genre,rating,title,_id,releaseYear} = movie
    const {refetch,setRefecth} = use(AuthContext);
         const navigate = useNavigate();


    const handleDlete = (_id) => {
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
         
    
        
        fetch(`http://localhost:4000/movies/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => res.json())
        .then(data=> {
          console.log(data)
          setRefecth(!refetch)
          // navigate('/movies')
    
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        })
        .catch(err => {
          console.log(err)
        })
    
    
     
      }
    });
     }

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
