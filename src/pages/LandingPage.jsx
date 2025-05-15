import React from 'react'
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    let navigate =useNavigate()

    let handleEnter=()=>{
        navigate('/home')
    }
  return (
    <div >
      

     <div className='h-screen flex flex-col justify-center items-center bg-[#F2F2F2] '>

     
      <h1 className='text-2xl pt-10'>In The World of Valorant</h1>
      <button className='text-3xl absolute top-1/2 bg-[#FF4655] py-3 px-6 text-[#ECE8E1] rounded-xl' onClick={handleEnter}>ENTER</button>
      <img className='' src="/assets/valorantLPI.jpg" alt="valorant" />
    </div>
    </div>
  )
}

export default LandingPage
