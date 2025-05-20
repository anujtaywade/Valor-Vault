import React from 'react'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
const footer = () => {
  return (
    <div>
      <footer 
      className=' text-center w-full p-4 bg-gray-900 text-gray-400 '>
       <div >
         <button className='text-3xl p-2 text-[#F2F2F2] hover: hover scale-105 transform transition duration-300 hover:bg-black rounded '>
            Visit Official valorant site
        </button>
        <p>
            ©{new Date().getFullYear().get}All Rights Reserved
        </p>
        <div 
        className='flex justify-center gap-10 p-6 '>
            <a className='hover hover:scale-125 transform transition duration-300 hover:gray-400' href="https://www.linkedin.com/in/anuj-taywade-326881270/" target='_blank' rel='noopener noreferrer'><Linkedin/></a>
            <a className='hover hover:scale-125 transform transition duration-300 hover:gray-400' href="https://github.com/anujtaywade" target='_blank' rel='noopener noreferrer'><Github/></a>
            <a className='hover hover:scale-125 transform transition duration-300 hover:gray-400' href="https://www.instagram.com/anuj_taywade07/" target='_blank' rel='noopener noreferrer'><Instagram/></a>
            <a className='hover hover:scale-125 transform transition duration-300 hover:gray-400' href="https://x.com/AnujTaywade" target='_blank' rel='noopener noreferrer'><Twitter/></a>

        </div>
       </div>
       </footer>
      
    </div>
  )
}

export default footer
