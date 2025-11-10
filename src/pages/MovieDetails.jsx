import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function MovieDetails() {
    const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  console.log(user);


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
    <div className="card-actions justify-end">
        <button className="btn btn-error">Edit</button>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default MovieDetails
