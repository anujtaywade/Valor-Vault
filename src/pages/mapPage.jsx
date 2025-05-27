import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const mapPage = () => {

const [mapdata, setmapdata] = useState([]);

useEffect(() => {
  let mapUrl ='https://valorant-api.com/v1/maps'
  fetch(mapUrl)
  .then((Response)=>(Response.json()))
  .then((json)=>setmapdata(json.data))
  .catch((error)=>console.log("error in fetching map data",error))
}, []);

  return (
    <div className='bg-[#0F1923] text-[#ECE8E1] px-6 py-10'>
      <div>
        <h1 className='pt-30 ml-30 mb-30 text-8xl '>maps </h1>
      </div>

      <div>
        <Swiper
        modules={[Autoplay,Navigation,Pagination]}
        navigation
        pagination={{clickable:true}}
        autoplay={{delay:1000}}
        
        className='w-70% h-full'
        spaceBetween={5}
        slidesPerView={9}
        grabCursor={true}>
        
        
        
          
            {mapdata.filter((item)=>item.listViewIconTall)
        .map((item)=>(
          <SwiperSlide key={item.uuid} >
          <div className='  rounded-lg shadow-lg overflow-hidden hover hover:scale-105 transform transition duration-300'>
            <img className='bg-[#1A1E24] object-contain mx-auto h-full w-48' loading='lazy' src={item.listViewIconTall} alt="" />
            
          </div>
          </SwiperSlide>
        ))}
        
          
        </Swiper>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10 text-center text-3xl p-20'>
        {mapdata.filter((item)=>item.displayIcon)
        .map((item)=>(
          <div key={item.uuid} className='hover hover:scale-105 transform transition duration-300'>
            <img className='bg-[#1A1E24] object-contain mx-auto ' loading='lazy' src={item.displayIcon} alt="" />
            <h1 className='bg-[#F2F2F2] p-2 text-[#121212]'>{item.displayName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default mapPage
