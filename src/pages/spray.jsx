import React from 'react'
import { useState,useEffect } from 'react';

const spray = () => {

    const [sprayData, setsprayData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        let sprayUrl='https://valorant-api.com/v1/sprays'
        fetch(sprayUrl)
        .then((Response)=>Response.json())
        .then((json)=>
            setsprayData(json.data)
        )
        .catch((error)=>console.log("error in fetching spray data",error))
        .finally(()=>setloading(false))
      
    }, []);
    if (loading) return <p>loading spray data</p>
     console.log(sprayData)
  return (
    <div className="bg-[#0F1923] text-[#ECE8E1] min-h-screen px-10 py-4 sm:px-6 sm:py-10 md:px-6 md:py-10 ">
      <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-center mb-10 mt-20 sm:mb-20 md:mb-20">Sprays</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 md:gap-10 overflow-hidden">
        {sprayData
          .filter((spray) => spray.fullIcon )
          .sort((a, b) => a.displayName.localeCompare(b.displayName)) 
          .map((spray) => (
            <div
              key={spray.uuid}
              className="bg-[#1A1E24] rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-30 md:h-64 md:w-64 sm:h-64 sm:w-64 flex items-center justify-center">
                <img
                  loading="lazy"
                  src={spray.fullIcon}
                  alt={spray.displayName}
                  className="object-contain w-full h-full"
                />
              </div>
              <h2 className="mt-4 text-xs text-center bg-white text-black px-3 py-1 rounded w-full ">
                {spray.displayName}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default spray
