import React from 'react'
import { useState,useEffect } from 'react'



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
    <div className='bg-[#0F1923] text-[#ECE8E1]'>
      <div>
        <h1 className='pt-30 pb-20   ml-30 text-8xl '>maps </h1>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10 text-center text-3xl p-10'>
        {mapdata.filter((item)=>item.displayIcon)
        .map((item)=>(
          <div key={item.uuid} className='hover hover:scale-105 transform transition duration-300'>
            <img className='bg-gray-800 object-contain mx-auto ' loading='lazy' src={item.displayIcon} alt="" />
            <h1 className='bg-[#F2F2F2] p-2 text-[#121212]'>{item.displayName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default mapPage
