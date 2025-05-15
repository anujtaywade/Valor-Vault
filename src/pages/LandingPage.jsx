import React from 'react'
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    let navigate =useNavigate()

    let handleEnter=()=>{
        navigate('/home')
    }
  return (
    <div>
      <button onClick={handleEnter}>ENTER PAGE</button>
    </div>
  )
}

export default LandingPage
