import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='bg-[#121212] text-[#ECE8E1] p-5 pl-40 fixed top-0 left-0 w-full z-50  '>
        <ul className='flex gap-10 text-2xl'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/arsenal">Arsenal</Link></li>
            <li className='hover'><Link to='/accessories'>Accessories</Link> </li>
          
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
