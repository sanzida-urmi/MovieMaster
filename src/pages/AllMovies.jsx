import React,{useState} from 'react'
import { Link, NavLink, useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'


function AllMovies() {
      const data = useLoaderData()
  //      const [minRating, setMinRating] = useState(0);
  // const [maxRating, setMaxRating] = useState(10);
  // const [movies, setMovies] = useState([]);

  //   const applyFilters = () => {
  //   fetch(`http://localhost:4000/movies?minRating=${minRating}&maxRating=${maxRating}`)
  //     .then(res => res.json())
  //     .then(data => setMovies(data));
  // };

  return (
<div>
 
  <button className='btn btn-error mr-5'> <Link to='/genre'>Filter by genre</Link> </button>
  <button className='btn btn-error'> <Link to='/rating'>Filter by rating</Link> </button>

        <div className="text-center text-xl font-bold mt-10">All Movies</div>

             <div className="grid grid-cols-3 gap-10 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default AllMovies
