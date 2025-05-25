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
            {/* <Link to='/accessories'>Accessories</Link>  */}
            {/* <li> */}
              
                <li className='relative group cursor-pointer '>Accessories <span className='absolute opacity-35 hover:opacity-100'>▾</span>
             
                  <ul className='absolute hidden group-hover:flex flex-col bg-black text-white  mt-2 z-50 w-40 hover:gray-850  transition duration-initial  ease-in-out'>
                    <Link className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer'>Spray</Link>
                    <Link className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer'>Player Card</Link>
                    <Link className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer'>Buddies</Link>

                  </ul>
                  </li>
                  
                
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
