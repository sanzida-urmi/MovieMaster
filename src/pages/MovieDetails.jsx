import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import { ClimbingBoxLoader } from 'react-spinners';

function MovieDetails() {
    const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
    //  const navigate = useNavigate();
    const location = useLocation();
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
       toast.success('successfully deleted');

         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    })
    .catch(err => {
      console.log(err)
       toast.error('could not delete');
    })


 
  }
});
 }


  useEffect(() => {
    setLoading(true);
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
         toast.success("Show details");
      })
      .catch(err =>{
                       console.log(err);
                       toast.error("could not show details")
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

  if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

 const handlewatch = () => {
  if(user)
   { const watchdata = {
     title: movie.title,
     genre: movie.genre,
     posterUrl: movie.posterUrl,
     addedBy: user?.email,
    };
  console.log(watchdata)

     fetch('http://localhost:4000/watch', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(watchdata)
        })
        .then(res => res.json())
        .then(data=> {
          console.log(data)
          toast.success('successfully added to watchlist');
        })
        .catch(err => {
          console.log(err)
           toast.error('could not add to watchlist');
        })
      }
      else{
        // navigate('/login')
// navigate("/login", { state: { from: location.pathname } });
navigate("/login",{state:{from:location.pathname}});
      }
  };


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

    <button onClick={handlewatch} className="btn btn-error my-5">Add to watchlist</button>

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
