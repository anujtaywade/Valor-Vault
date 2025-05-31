import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='bg-[#121212] text-[#ECE8E1] p-5 pl-40  '>
        <ul className='flex gap-10 text-2xl'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/arsenal">Arsenal</Link></li>
            <li><Link to="/mapPage">Map</Link></li>
            
              
                <li className='relative group cursor-pointer '>Accessories <span className='absolute opacity-35 hover:opacity-100'>▾</span>
             
                  <ul className='absolute hidden group-hover:flex flex-col bg-black text-white  mt-2 z-50 w-40  cursor-pointer   '>
                    <Link to='/spray' className=' text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 hover:text-black z-50 '>Spray</Link>
                    <Link to='/playerCard' className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 hover:text-black z-50 '>Player Card</Link>
                    <Link to='/buddies' className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 z-50 hover:text-black'>Buddies</Link>
                    

                  </ul>
                  </li>
                  
                
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
