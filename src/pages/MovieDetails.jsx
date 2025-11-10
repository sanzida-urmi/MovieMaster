import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

function MovieDetails() {
    const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
     const navigate = useNavigate();

  console.log(user?.email);
const [show, setShow] = useState(false)  

 
 const handleDlete = () => {
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
     

    
    fetch(`http://localhost:4000/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data)
      navigate('/movies')

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


  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`
        
//         , {
//       headers: {
//         authorization: `Bearer ${user.accessToken}`,
//       },
// }

)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        setMovie(data.result);
        // console.log(" Api called!")
        setLoading(false);
      });
  }, [user, id]);

  

useEffect(()=>{
    console.log("updated movie", movie);
},[movie])

console.log(user?.email, movie.addedBy);


useEffect(()=>{
  if(user?.email === movie.addedBy){
    setShow(true);
  }else{
    setShow(false)
  }
},[user,movie])

  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <div className="card bg-base-100 w-full gap-20 shadow-sm flex flex-row justify-center items-center mx-auto">
 <div> <figure>
    <img
    className='h-200 w-full'
      src={movie.posterUrl}
      alt="Shoes" />
  </figure></div>
  <div className="card-body">
    <h2 className="card-title text-red-700 text-4xl font-semibold mb-5 mx-auto">{movie.title}</h2>
    <p>Genre: {movie.genre}</p>
    <p>ReleaseYear: {movie.releaseYear}</p>
    <p>Director: {movie.director}</p>
    <p>Cast: {movie.cast}</p>
    <p>Rating: {movie.rating}</p>
    <p>Duration: {movie.duration}</p>
    <p>Language: {movie.language}</p>
    <p>Country: {movie.country}</p>
    <p>Language: {movie.language}</p>
    <p>AddedBy: {movie.addedBy}</p>
    <p>AddedAt: {movie.addedAt}</p>
    <p>{movie.plotSummary}</p>

    <button className="btn btn-error my-5">Add to watchlist</button>

{ show && ( 
<div className="card-actions justify-end">
  
        <Link to={`/movies/update/${id}`} className="btn btn-active  btn-error">Edit</Link>
      <button onClick={handleDlete} className="btn btn-error">Delete</button>
    </div>
)
}
    


  </div>
</div>
    </div>
  )
}

export default MovieDetails
