import React from 'react'

function MovieCard({movie}) {
    const {posterUrl,genre,rating,title,_id,releaseYear} = movie
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img className='h-50 w-50 mt-10'
      src={posterUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mb-5">{title}</h2>
    <p className='font-semibold'>Genre: {genre}</p>
    <p className='font-semibold'>ReleaseYear: {releaseYear}</p>
    <p className='font-semibold'>Rating: {rating}</p>
    
    
    <div className="card-actions justify-end">
      <button className="btn btn-active  btn-error">Details</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default MovieCard
