
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
    <div className='items-center px-10 py-6 bg-[#0F1923]'>
      <h1 className='text-8xl mt-30 mb-20 ml-30 text-[#ECE8E1]'>
        AGENTS
      </h1>
      <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 gap-10 p-10 '>
        {agentsData
        .filter((item)=>item.fullPortrait)
        .map((item)=>(
         <Link key={item.uuid} to={`/agent/${item.uuid}`}>
          <div className='hover hover:scale-105 transform transition duration-300 rounded-xl shadow-lg'>
            
            <img loading='lazy' className='bg-gray-800 object-contain mx-auto ' src={item.fullPortrait} alt="" />
            <h1 className='text-center text-[#121212] text-4xl p-2 bg-white'>
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
