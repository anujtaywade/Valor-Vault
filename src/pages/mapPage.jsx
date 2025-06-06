import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const mapPage = () => {

const [mapdata, setmapdata] = useState([]);
const [displayedData, setdisplayedData] = useState();

useEffect(() => {
  let mapUrl ='https://valorant-api.com/v1/maps'
  fetch(mapUrl)
  .then((Response)=>(Response.json()))
  .then((json)=>setmapdata(json.data))

  .catch((error)=>console.log("error in fetching map data",error))
}, []);

  let handleClick = (mapLayout)=>{
    setdisplayedData(mapLayout)
  
  }

  return (
    <div className='bg-[#0F1923] text-[#ECE8E1] px-6 py-10 overflow-hidden'>
      <div>
        <h1 className='pt-15 sm:pt-30 md:pt-30  mb-10 sm:mb-30 md:mb-30 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>maps </h1>
      </div>

      <div>
        <Swiper
        modules={[Autoplay,Navigation,Pagination]}
        
        pagination={{clickable:true}}
        autoplay={{delay:1000}}
        
        className='w-full h-full'
        spaceBetween={5}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          640:{
            slidesPerView:4
          },
          768:{
            slidesPerView:7
          },
          1024:{
            slidesPerView:8
          }
        }}>
        
        
        
          
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

        <div className='flex flex-col-reverse lg:flex-row gap-6'>

        
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 justify-items-start gap-4 text-center text-3xl pt-10 sm:pt-20 md:pt-20 max-w-[1100px] '>
        {mapdata.filter((item)=>item.displayIcon)
        .map((item)=>(
          <div key={item.uuid} className='hover hover:scale-105 transform transition duration-300 w-[150px] sm:w-[300px] md:w-[350px]  h-full'>
            <img onClick={()=>{handleClick(item.displayIcon)}} className='bg-[#1A1E24] object-contain mx-auto ' loading='lazy' src={item.splash} alt="" />
            <h1 className='bg-[#F2F2F2] sm:p-1 md:p-1 text-[#121212] text-base sm:text-3xl md:text-3xl'>{item.displayName}</h1>
          </div>
        ))}
      </div>

      <div className=' flex flex-col '>
        <div className=' lg:flex flex-col justify-center items-center w-full lg:w-[400px] h-full border sm:h-1/4 md:h-1/4 border-white p-8 mt-20 '>
          <h1 className='text-center text-xl sm:text-2xl md:text-2xl p-3'>
            {displayedData? 'map layout' : 'Select map to view layout'}
          </h1>
          {displayedData && (
            <div>
              <img
            className='object-contain mx-auto h-full w-full '
            src={displayedData} alt="" />

           
            </div>
            
            
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default mapPage
