import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';
import { ClimbingBoxLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function Genre() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [ary, setAry] = useState([]);
      const [loading, setLoading] = useState(false);
    

  const handleGenreFilter = (genre)=>{
    if(selectedGenres.includes(genre)){
        setSelectedGenres(selectedGenres.filter(g=> g!== genre));
    } else {
        setSelectedGenres([...selectedGenres, genre]);
    }
  };


const applyFilters =()=>{
    const genreString = selectedGenres.join(',');
    setLoading(true);

    fetch(`https://moviemasterserver.vercel.app/genre?genres=${genreString}`)
    .then(res=>res.json())
    .then(data =>{
        //  console.log(data)
        setAry(data);
        setLoading(false);
        toast.success("Show movie");
        })
        .catch(err =>{
                //  console.log(err);
                 toast.error("could not show movie")
               })
    
}

  // console.log(selectedGenres);

  
 if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }
  return (
    <div className='space-y-4 wrap-anywhere'>
          <div className='filter-section'>
            <h3 className='mb-5 wrap-anywhere'>Filter by genre</h3>
       

            {["Sci-Fi","Action","Romance","Fantasy","Drama","Crime","Thriller","Animation","Mystery"].map(genre => (

          <label key={genre}>
            <input 
            className='ml-3'
            type='checkbox'
            checked={selectedGenres.includes(genre)}
            onChange={()=> handleGenreFilter(genre)}
            />
            {genre}
          </label>
         ))}
      </div>
      <button className='btn btn-error' onClick={applyFilters}>Apply</button>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {ary.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default Genre
