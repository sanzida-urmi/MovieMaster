import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';

function Genre() {
    // const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [ary, setAry] = useState([]);

//       const handleGenreFilter = (genre) => {
//     if (selectedGenres.includes(genre)) {
//       setSelectedGenres(selectedGenres.filter(g => g !== genre));
//     } else {
//       setSelectedGenres([...selectedGenres, genre]);
//     }
//   };

  const handleGenreFilter = (genre)=>{
    if(selectedGenres.includes(genre)){
        setSelectedGenres(selectedGenres.filter(g=> g!== genre));
    } else {
        setSelectedGenres([...selectedGenres, genre]);
    }
  };


//   const applyFilters = () => {
//   const genreString = selectedGenres.join(',');
  
//   fetch(`http://localhost:4000/genre?genres=${genreString}`)
//     .then(res => res.json())
//     .then(data => console.log(data));
// };

const applyFilters =()=>{
    const genreString = selectedGenres.join(',');

    fetch(`http://localhost:4000/genre?genres=${genreString}`)
    .then(res=>res.json())
    .then(data =>{
         console.log(data)
        setAry(data);
        });
    
}

//   console.log(selectedGenres);
  console.log(selectedGenres);
  return (
    <div>
      mn
  
        <div className='filter-section'>
            <h3>Filter by genre</h3>
       

            {["Sci-Fi","Action","Romance","Fantasy","Drama","Crime","Thriller","Animation","Mystery"].map(genre => (

          <label key={genre}>
            <input 
            type='checkbox'
            checked={selectedGenres.includes(genre)}
            onChange={()=> handleGenreFilter(genre)}
            />
            {genre}
          </label>
         ))}
      </div>
      <button className='btn btn-error' onClick={applyFilters}>Apply</button>

       <div className="grid grid-cols-3 gap-10 mt-10">
         {ary.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default Genre
