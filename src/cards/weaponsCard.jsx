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
    <div className='bg-gradient-to-l from-[#0F1923] to-[#2C3A4D] text-white min-h-screen px-6 py-10'>
      
      <div>
        <h1 className='text-6xl text-center pt-10 pb-20'>
          Skin Varients
        </h1>
      </div>

      <div className='grid grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-10 p-3 ' >
        {weaponSkins
        .filter(skin=>skin.displayIcon && !skin.displayName.startsWith("Standard")) 
        .sort((a,b)=>a.displayName.localeCompare(b.displayName))
        .map((skin)=>(
          <div key={skin.uuid} className='flex flex-col justify-center rounded-xl p-3 bg-[#1A1E24] hover hover:scale-105 transform transition duration-300'>
            <img className='object-contain  h-full' src={skin.displayIcon} alt="" />
            <h1 className='text-center mt-5 bg-white text-black rounded-xl'>{skin.displayName}</h1>
          </div>
        ))}

      </div>
    </div>
  )
}

export default WeaponsCard
