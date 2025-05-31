import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';

const AgentCard = () => {
let {agentId}=useParams();
const [agent, setagent] = useState(null);
const [isHovered, setisHovered] = useState(false);

useEffect(() => {
    let agentsUrl='https://valorant-api.com/v1/agents'
     fetch(agentsUrl)
  .then((Response)=>(Response.json()))
  .then((json)=>{
    let selectedAgent = json.data.find((a)=>a.uuid===agentId);
    setagent(selectedAgent)
  })
  
  .catch((error)=>console.log("error in fetching agent data",error))
  }, [agentId]);
 

if(!agent) return <p>agent data not available</p>

  return (
    <div>
      <div>
       <h1 className='text-8xl mt-60 ml-20'>
        {agent.displayName } <br />
        </h1>
        <div className='text-2xl ml-20 flex justify-items-start w-1/2 font-[normal]'>
          {agent.description}
        </div>
       
       <div className='grid grid-cols-1 w-32 p-3 items-center bg-black mb-10 ml-20 mt-10'> 
        <img   onMouseEnter={()=>setisHovered(true)}
       onMouseLeave={()=>setisHovered(false)} className='object-contain ' src={agent.role.displayIcon} alt="" />
       <div>
         <h1 className='text-white text-center mt-2'>
          {agent.role.displayName}
        </h1>
       </div>
       </div>

       
       <div 
     >
       </div>

       <div className={` text-2xl text-black ${isHovered? 'opacity-100' : 'opacity-0'}`}>
        fhhseg
       </div>
      

        
       
      </div>
    </div>
  )
}

export default AgentCard
