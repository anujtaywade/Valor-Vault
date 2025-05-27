import React from 'react'
import  { useEffect,useState } from 'react';

const playerCard = () => {
    const [playerCard, setplayerCard] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        let playerCardUrl='https://valorant-api.com/v1/playercards'
        fetch(playerCardUrl)
        .then((Response)=>Response.json())
        .then((json)=>setplayerCard(json.data))
        .catch((error)=>console.log("error in fetching playerCard data",error))
        .finally(()=>setloading(false))
}, []);

    
    if (loading) return <p>loading playerCard data</p>
  return (
    <div className='px-6 py-10 bg-[#0F1923]'>
      <h1 className='text-6xl text-center text-[#ECE8E1] mb-15  '>
        Player Cards
      </h1>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-15 '>
        {playerCard
        .filter((cards)=>cards.largeArt)
        .sort((a,b)=>a.displayName.localeCompare(b.displayName))
        .map((cards)=>(
            <div key={cards.uuid} className='bg-[#1A1E24] rounded-xl p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 '>
                <div className='' >
                    <img className='' loading='lazy' src={cards.largeArt} alt={cards.displayName} />
                    <h1 className='text-center text-2xl mt-3 bg-[#F2F2F2] rounded '>{cards.displayName}</h1>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default playerCard
