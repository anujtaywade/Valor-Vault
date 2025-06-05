import React from 'react'
import  { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WeaponsCard = () => {

  const [weaponSkins, setweaponSkins] = useState([]);
  let {weaponId }= useParams();

  useEffect(() => {
     let  weaponsUrl = 'https://valorant-api.com/v1/weapons'
      fetch(weaponsUrl)
      .then((Response)=>Response.json()
      )
      .then((json)=>{
        let selectedWeapon = json.data.find((a)=>
          a.uuid===weaponId)
        setweaponSkins(selectedWeapon?.skins || [])
        
      })
      .catch((error)=>console.log("error in fetching weapons data",error));
  }, [weaponId]);

  if(!weaponSkins) <p>weapons data not available</p>

  return (
    <div className='bg-gradient-to-l from-[#0F1923] to-[#2C3A4D] text-white min-h-screen px-2 py-10 sm:px-6 md:px-6'>
      
      <div>
        <h1 className='text-3xl sm:text-4xl md:text-6xl text-center pt-20 pb-10 sm:pb-20 md:pb-20 sm:pt-20 md:pt-20'>
          Skin Varients
        </h1>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 p-3 ' >
        {weaponSkins
        .filter(skin=>skin.displayIcon && !skin.displayName.startsWith("Standard")) 
        .sort((a,b)=>a.displayName.localeCompare(b.displayName))
        .map((skin)=>(
          <div key={skin.uuid} className='flex flex-col justify-center rounded-xl p-3 bg-[#1A1E24] hover hover:scale-105 transform transition duration-300'>
            <img className='object-contain  h-full' src={skin.displayIcon} alt="" />
            <h1 className='text-center mt-5 bg-white text-black rounded-xl text-sx sm:text-m md:text-m'>{skin.displayName}</h1>
          </div>
        ))}

      </div>
    </div>
  )
}

export default WeaponsCard
