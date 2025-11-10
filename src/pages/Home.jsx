import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Autoplay,Navigation} from "swiper/modules";
import { PiStarDuotone } from "react-icons/pi";
import { BsMoonStars } from "react-icons/bs";
import star from "../assets/star.png"
import starr from "../assets/starr.png"
import {motion} from 'framer-motion';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AuthContext } from '../context/AuthContext';

function Home() {
  const [ratedmovie, setRatedmovie] = useState([])
  const [recentmovie, setRecentmovie] = useState([])
  const [totaluser,setTotaluser]= useState(0);

  useEffect(()=>{
    fetch("http://localhost:4000/users/count")
    .then(res => res.json())
    .then(data => setTotaluser(data.totalUsers))
  },[])

  useEffect(()=>{
fetch("http://localhost:4000/rate")
.then(res=>res.json())
.then(data =>{
  // console.log(data)
  setRatedmovie(data)
})
.then(err =>{
  console.log(err)
})
  },[])

   useEffect(()=>{
fetch("http://localhost:4000/recent")
.then(res=>res.json())
.then(data =>{
  // console.log(data)
  setRecentmovie(data)
})
.then(err =>{
  console.log(err)
})
  },[])

  // const {totaluser } = use(AuthContext);
 
  const data = useLoaderData()
  // console.log(data)
  return (
    <div>
    <div className="flex justify-center my-10">
      
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-96 w-2/3 rounded-lg"
      >
        {data.map((movie) => (
          <SwiperSlide
            key={movie._id}
            className="flex justify-center items-center h-full"
          >
            <img 
              src={movie.posterUrl}
              alt={movie.title}
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <h1>Total Movies: {data.length}</h1>
    <h1>Total Users: {totaluser}</h1>


<div className="text-center text-xl font-bold mt-10">Top 5 highest-rated movies</div>

             <div className="grid grid-cols-3 gap-10 mt-10">
         {ratedmovie.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>


      <div className="text-center text-xl font-bold mt-10">Latest movies</div>

             <div className="grid grid-cols-3 gap-10 mt-10">
         {recentmovie.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>

<div className="text-center text-xl font-bold my-10">Latest movies</div>
<div className='flex gap-30 mx-auto justify-center items-center'>

  <div>
  <motion.img
   transition={{
    repeat: Infinity,
    duration: 2,
    ease: "linear",
  }}
      
   animate={{scale: [1,2,1], rotate:360, x: [0,100,-100,0]}}  className='h-20' src={starr} alt="" />
</div>
  <div><ul>
  <li className='flex items-center gap-2'><PiStarDuotone /> Action</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Adventure</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Comedy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Crime</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Drama</li>
  </ul>
  <ul>
  <li className='flex items-center gap-2'><PiStarDuotone /> Fantasy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Horror</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Romance</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Thriller</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> War</li>
</ul></div>
</div>

<div className="text-center text-xl font-bold my-10">About MovieMaster Pro</div>
<p className='mb-5 '> MovieMaster Pro is a smart movie management system that lets users easily browse, filter, and organize their favorite movies. You can explore films by genre, rating or release year and even create your own personal collections.</p>

<div className='flex items-center gap-3'>
  <p className='text-yellow-400'><BsMoonStars /></p>
<p className='text-yellow-400'>With a clean interface and smooth performance, MovieMaster Pro brings your movie world together in one place.</p>
</div>



    </div>
  );
}

export default Home

