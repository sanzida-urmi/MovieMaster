import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import MovieCard from '../components/MovieCard'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Autoplay,Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AuthContext } from '../context/AuthContext';



  

function Home() {

  const {totaluser } = use(AuthContext);
 
  const data = useLoaderData()
  console.log(data)
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
    <h1>Total Users: {totaluser.length}</h1>

    </div>
  );
}

export default Home

