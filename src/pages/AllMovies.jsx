import React,{use, useEffect, useState} from 'react'
import { Link, NavLink, useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';


function AllMovies() {
  
       const {loading,setLoading} = use(AuthContext);
         const [data, setData] = useState([])
       


        useEffect(()=>{
           setLoading(true);
       fetch("https://moviemasterserver.vercel.app/movies")
       .then(res=>res.json())
       .then(data =>{
        //  console.log(data)
         setData(data)
         setLoading(false);
         toast.success("Show all movie");
       })
       .catch(err =>{
        //  console.log(err);
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
 
  <div className='flex flex-col justify-center items-center sm:flex-row gap-4'>
    <button className='btn btn-error wrap-anywhere'> <Link to='/genre'>Filter by genre</Link> </button>
  <button className='btn btn-error wrap-anywhere'> <Link to='/rating'>Filter by rating</Link> </button>
  </div>

        <div className="text-center text-xl font-bold mt-20 wrap-anywhere">All Movies</div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>
    </div>
  )
}

export default AllMovies
