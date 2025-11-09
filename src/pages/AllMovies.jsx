import React from 'react'
import { useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'

function AllMovies() {
      const data = useLoaderData()

  return (
    <div>
        <div className="text-center text-xl font-bold mt-10">All Movies</div>

             <div className="grid grid-cols-3 gap-10 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default AllMovies
