
import { Link } from 'react-router-dom';

import { useEffect,useState } from 'react';
const Agents = () => {
  const [agentsData, setagentsData] = useState([]);
  
  
  useEffect(() => {
    let agentsUrl='https://valorant-api.com/v1/agents'
     fetch(agentsUrl)
  .then((Response)=>(Response.json()))
  .then((json)=>setagentsData(json.data))
  
  .catch((error)=>console.log("error in fetching agent data",error))
  }, []);
  {console.log(agentsData)}

  return (
    <div className='items-center px-6 py-8 bg-[#0F1923] sm:px-10 sm:py-6 md:px-10 md:py-6 '>
      <h1 className='text-6xl mt-30 mb-10 ml-25 sm:mb-20 sm:ml-30 md:mb-20 md:ml-30 text-[#ECE8E1] md:text-8xl'>
        AGENTS
      </h1>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10  place-items-center sm:p-2 md:p-2'>
        {agentsData
        .filter((item)=>item.fullPortrait)
        .map((item)=>(
         <Link key={item.uuid} to={`/agent/${item.uuid}`}>
          <div className='hover hover:scale-105 transform transition duration-300 rounded-xl overflow-hidden shadow-lg w-full h-38 md:w-110 md:h-110'>
            
            <img loading='lazy' className='bg-gray-800 object-contain mx-auto ' src={item.fullPortrait} alt="" />
            <h1 className='text-center text-[#121212] text-xs p-0 bg-white sm:text-3xl sm:p-1 md:text-4xl md:p-1'>
              {item.displayName}
            </h1>
            
          </div>
          </Link>
        ))
         }
         
      </div>
      
      
    </div>
  )
}

export default Agents
