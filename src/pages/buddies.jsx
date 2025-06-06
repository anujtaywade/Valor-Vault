import React from 'react'
import { useEffect,useState } from 'react';

const buddies = () => {
  const [buddies, setbuddies] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let buddiesUrl='https://valorant-api.com/v1/buddies'
    fetch(buddiesUrl)
    .then((Response)=>Response.json())
    .then((json)=>setbuddies(json.data))
    .catch((error)=>console.log("errorin fetching buddies data",error))
    .finally(()=>setloading(false))

  }, []);
  if (loading) return <p className='text-center'>loading buddies data</p>
  return (
    <div className='px-4 py-6 items-center bg-[#0F1923] text-[#ECE8E1] sm:px-6 sm:py-10 md:px-6 md:py-10'>
      <h1 className='text-3xl text-center mb-15 mt-20 sm:text-6xl md:text-6xl'>
        Buddies
      </h1>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-10 md:gap-10 '> 
        {buddies
        .filter((item)=>item.displayIcon)
        .sort((a,b)=>a.displayName.localeCompare(b.displayName))
        .map((item)=>(
          <div className='flex felx-col justify-center bg-[#1A1E24] p-2 sm:p-4 md:p-4 hover:scale-105 transform transition duration-300 rounded-xl shadow-lg '>
            <div className='overflow-hidden' key={item.uuid}>
              <img className='items-center' loading='lazy' src={item.displayIcon} alt={item.displayName} />
              <h1 className='text-center p-1 mt-3 bg-[#F2F2F2] text-black rounded shadow-lg text-xs sm:text-xl md:text-xl'>{item.displayName}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default buddies
buddies