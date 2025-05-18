import React from 'react'
import { motion } from "framer-motion";
const Home = () => {

  let handleOfficial=()=>{
    window.open ('https://playvalorant.com/','_blank')
  }
  

  return (
    <div className='bg-[#F2F2F2] relative h-full w-full'>
      <div>
        
        <h1 className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-150 text-[#ECE8E1] text-8xl font-bold drop-shadow-lg bg-clip-text bg-gradient-to-r from-[#c48a39] to-[#ECE8E1] text-transparent bg-clip-text' >
          Valor Vault : 
        </h1>
         <h2 className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-200 text-[#ECE8E1] text-6xl font-bold drop-shadow-lg bg-gradient-to-r from-[#c48a39] to-[#ECE8E1] text-transparent bg-clip-text '>
          Decode the Game. Dominate the Meta
        </h2>
        <video className='w-full h-full object-cover' src="/chamber home page.mp4" loop autoPlay playsInline muted></video>
        </div>
        
        <div>
          <h1 className='ml-20 mt-40 text-8xl font-medium'>
          Welcome to Valor Vault
        </h1>
        
        <h3 className='  w-200 mb-10 mt-10 ml-20 text-2xl font-[normal] object-contain'>Valor Vault is your ultimate intel hub for everything Valorant. From in-depth agent guides and map strategies to weapon stats, tier lists, and pro tips — we equip you with the knowledge to level up your game. Whether you're climbing ranked, perfecting your aim, or mastering team comps, Valor Vault is where strategy meets domination. Unlock the meta. Own every round. <br /><br /> Dive deep into detailed breakdowns of every agent’s abilities, uncover map control secrets, and learn the most effective playstyles used by top-tier players worldwide. Our regularly updated tier lists and weapon analysis keep you ahead of the meta, while exclusive pro tips and tactical insights give you that competition. <br /> <br />
        Unlock the meta. Own every round. Elevate your gameplay with Valor Vault — your trusted companion in the fight for Radiance.
 
          <img className=' w-280 absolute bottom-5 left-142.5 object-contain  ' src="\accent_home.png" alt="" />
        
      </h3>


     <button className='ml-30 mt-10  text-4xl border-2 p-3 mb-20 font-serif hoverr hover:scale-105 transform transition duration-300 bg-[#FF4655] text-[#F2F2F2] hover:bg-black ' onClick={handleOfficial} >learn more</button>
     
        </div>
        
       
    </div>
    
  )
}

export default Home
