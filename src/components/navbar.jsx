import React, { useRef } from 'react'
import { useState ,useEffect} from 'react';

import { Link } from 'react-router-dom';
const Navbar = () => {

  const [showDropdown, setshowDropdown] = useState(false);
  let dropdownRef = useRef(null)
  let toggledropdown =()=>{
    setshowDropdown((prev)=>!prev)
  }

  useEffect(() => {
    let handleclickoutside=(e)=>{
      if(dropdownRef && !dropdownRef.current.contains(e.target)){
        setshowDropdown(false)
      }
    }
    document.addEventListener('mousedown',handleclickoutside)
    return()=>{document.removeEventListener('mousedown',handleclickoutside)}
  }, []);
  return (
    <div>
      <nav className='bg-[#121212] text-[#ECE8E1] p-5 pl-10 fixed w-screen left-0 top-0 z-50 sm:text-lg md:text-2xl max-w-screen '>
        <ul className='flex gap-6 sm:px-10 md:gap-10 text-base sm:text-lg md:text-2xl justify-center md:justify-start'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/arsenal">Arsenal</Link></li>
            <li><Link to="/mapPage">Map</Link></li>
            
              
                <li ref={dropdownRef} className='relative group cursor-pointer sm:oclic'><button className='flex items-center gap-1 focus:outline-none' onClick={toggledropdown} >Accessories▾ <span className='absolute opacity-100 hover:opacity-100'></span></button>

                  {showDropdown && (
                     <ul className='absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 w-40 bg-black text-white rounded shadow-md z-50 flex flex-col text-center  '>
                    <Link onClick={()=>setshowDropdown(false)} to='/spray' className=' text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 hover:text-black z-50 '>Spray</Link>
                    <Link onClick={()=>setshowDropdown(false)} to='/playerCard' className='text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 hover:text-black z-50 '>Player Card</Link>
                    <Link onClick={()=>setshowDropdown(false)} to='/buddies' className=' text-center hover: bg-gray-800 p-2 group-hover: cursor-pointer hover:bg-gray-100 z-50 hover:text-black'>Buddies</Link>
                    

                  </ul>
                  )}
                 
                  </li>
                  
                
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
