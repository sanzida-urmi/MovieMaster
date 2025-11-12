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
import { BiCameraMovie } from "react-icons/bi";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import "swiper/css/autoplay";
import { AuthContext } from '../context/AuthContext';
import { ClimbingBoxLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function Home() {
  const [ratedmovie, setRatedmovie] = useState([])
  const [recentmovie, setRecentmovie] = useState([])
  const [data, setData] = useState([])
  const [totaluser,setTotaluser]= useState(0);
    const [loading, setLoading] = useState(false);
  


  useEffect(()=>{
    setLoading(true);
    fetch("http://localhost:4000/users/count")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTotaluser(data.totalUsers)
      toast.success("successfully count user");
      setLoading(false)
    })
    .catch(err =>{
  console.log(err)
  toast.error("could not count user")
})
  },[])



  useEffect(()=>{
    setLoading(true);
fetch("http://localhost:4000/rate")
.then(res=>res.json())
.then(data =>{
  console.log(data)
  setLoading(false);
  setRatedmovie(data)
  toast.success("Show top movie");
  
})
.catch(err =>{
  console.log(err);
  toast.error("could not show top movie")
})
  },[])




   useEffect(()=>{
    setLoading(true);
fetch("http://localhost:4000/recent")
.then(res=>res.json())
.then(data =>{
  console.log(data)
  setRecentmovie(data)
  setLoading(false);
  toast.success("Show latest movie");
})
.catch(err =>{
  console.log(err);
  toast.error("could not show latest movie")
})
  },[])



  useEffect(()=>{
    setLoading(true);
fetch("http://localhost:4000/movies")
.then(res=>res.json())
.then(data =>{
  console.log(data)
  setData(data)
  setLoading(false);
  toast.success("Show slider");
})
.catch(err =>{
  console.log(err);
  toast.error("could not show slider")
})
  },[])


  // const data = useLoaderData()
  console.log(data)

   if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

  return (
    <div>
    <div className="flex justify-center mb-20">
      
        <Swiper
        key={data.length}
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

    <h1 className='wrap-anywhere'>Total Movies: {data.length}</h1>
    <h1 className='wrap-anywhere'>Total Users: {totaluser}</h1>


<div className="text-center text-xl font-bold mt-20 wrap-anywhere">Top 5 highest-rated movies</div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {ratedmovie.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>


      <div className="text-center text-xl font-bold mt-20 wrap-anywhere">Latest movies</div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {recentmovie.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>

<div className="text-center text-xl font-bold mt-20 my-10 wrap-anywhere">Genres</div>
<div className='flex flex-col md:flex-row gap-30 mx-auto justify-center items-center'>

  <div className=' wrap-anywhere'>
  <motion.img
   transition={{
    repeat: Infinity,
    duration: 2,
    ease: "linear",
  }}
      
   animate={{scale: [1,2,1], rotate:360, x: [0,100,-100,0]}}  className='h-10 sm:h-20' src={starr} alt="" />
</div>



  <div><ul className='wrap-anywhere'>
  <li className='flex items-center gap-2'><PiStarDuotone /> Action</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Adventure</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Comedy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Drama</li>
  </ul>
  <ul className='wrap-anywhere'>
  <li className='flex items-center gap-2'><PiStarDuotone /> Fantasy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Horror</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Romance</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Thriller</li>
</ul></div>
</div>


{/* genre card  */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20 wrap-anywhere'>



<div className="card bg-base-100 image-full  w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img6}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Action</h2>
    <p>Fast-paced stories full of thrill, fights, and excitement</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>


<div className="card bg-base-100 image-full  w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img4}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Adventure</h2>
    <p>Stories full of exploration, journeys, and daring experiences</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>


<div className="card bg-base-100 image-full   w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Comedy</h2>
    <p>Light-hearted movies meant to make you laugh and feel happy.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full  w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img5}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Drama</h2>
    <p>Emotional and character-driven stories with intense situations.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full   w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img8}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Fantasy</h2>
    <p>Imaginative worlds with magic, mythical creatures, and wonder.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full   w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img7}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Horror</h2>
    <p>Movies designed to scare, thrill, and create suspense.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full   w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Romance</h2>
    <p>Heartfelt stories focused on love and relationships.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full   w-60 h-50  shadow-sm">
  <figure>
    <img
    className='object-cover h-full w-full'
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Thriller</h2>
    <p>Edge-of-your-seat suspense, tension, and unexpected twists.</p>
    <div className="card-actions justify-end">
      <BiCameraMovie size={32}  />
    </div>
  </div>
</div> 


</div>



<div className="text-center text-xl font-bold wrap-anywhere mt-20 my-10">About MovieMaster Pro</div>
<p className='mb-5 wrap-anywhere'> MovieMaster Pro is a smart movie management system that lets users easily browse, filter, and organize their favorite movies. You can explore films by genre, rating and even create your own personal collections and watchlist.It is a complete movie management web application.</p>

<div className='flex items-center gap-3 wrap-anywhere'>
  <p className='text-yellow-400'><BsMoonStars /></p>
<p className='text-yellow-400 wrap-anywhere'>With a clean interface and smooth performance, MovieMaster Pro brings your movie world together in one place.</p>
</div>



    </div>
  );
}

export default Home

