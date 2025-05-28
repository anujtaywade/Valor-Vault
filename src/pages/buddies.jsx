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
    <div className='px-6 py-10 items-center bg-[#0F1923] text-[#ECE8E1] '>
      <h1 className='text-6xl text-center mb-15'>
        Buddies
      </h1>
      
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-10 '> 
        {buddies
        .filter((item)=>item.displayIcon)
        .sort((a,b)=>a.displayName.localCompare(b.displayName))
        .map((item)=>(
          <div className='flex felx-col justify-center bg-[#1A1E24] p-4 hover:scale-105 transform transition duration-300 rounded-xl shadow-lg'>
            <div className='' key={item.uuid}>
              <img loading='lazy' src={item.displayIcon} alt={item.displayName} />
              <h1 className='text-center p-1 mt-3 bg-[#F2F2F2] text-black rounded shadow-lg'>{item.displayName}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default buddies
buddies