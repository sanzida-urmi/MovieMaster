import React,{use, useEffect, useState} from 'react'
import { Link, NavLink, useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';


function AllMovies() {
      // const data = useLoaderData()
       const {loading,setLoading} = use(AuthContext);
         const [data, setData] = useState([])
       


        useEffect(()=>{
           setLoading(true);
       fetch("http://localhost:4000/movies")
       .then(res=>res.json())
       .then(data =>{
         console.log(data)
         setData(data)
         setLoading(false);
         toast.success("Show all movie");
       })
       .catch(err =>{
         console.log(err);
         toast.error("could not show all movie")
       })
         },[])

          if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

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
