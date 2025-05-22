import React from 'react'

import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    let navigate =useNavigate()

    let handleEnter=()=>{
        navigate('/home')
    }
  return (
    
    
    
    <div className='relative h-screen w-full overflow-hidden flex flex-col justify-center items-center '>
      
         <video className='absolute top-0 left-0 w-full h-full object-cover z-0' src="\valoLandingVideo.mp4" autoPlay muted loop playsInline></video>
  

     <div className='relative z-10 flex flex-col justify-center items-center  text-[#ECE8E1]'>
      
       <img className='' src="/valorantLPI.jpg" alt="valorant" />
      <h1 className='text-3xl pt-30 '>In The World of Valorant</h1>
      <button className='text-3xl absolute top-1/2 bg-[#FF4655] py-3 px-6 text-[#ECE8E1] border-1 hover:scale-105 transform transition duration-300 hover:bg-white hover:text-black' onClick={handleEnter}>ENTER</button>
    </div>
    </div>
  )
}

export default LandingPage
