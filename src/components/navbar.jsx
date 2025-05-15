import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='bg-[#0F1923] text-[#ECE8E1] p-4 pl-40 '>
        <ul className='flex gap-10 text-3xl'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/arsenal">Arsenal</Link></li>
            
            
            
            
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
