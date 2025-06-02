
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';

const AgentCard = () => {
let {agentId}=useParams();
const [agent, setagent] = useState(null);
const [isHovered, setisHovered] = useState(false);
const [selectedAbility, setselectedAbility] = useState();

useEffect(() => {
    let agentsUrl='https://valorant-api.com/v1/agents'
     fetch(agentsUrl)
  .then((Response)=>(Response.json()))
  .then((json)=>{
    let selectedAgent = json.data.find((a)=>a.uuid===agentId);
    setagent(selectedAgent)
    console.log()

    if(selectedAgent && selectedAgent.abilities){
      let firstability = selectedAgent.abilities.find((a)=>a.displayIcon)
      if(firstability) setselectedAbility (firstability)
    }
  })
  
  .catch((error)=>console.log("error in fetching agent data",error))
  }, [agentId]);

  let handleClick= (ability)=>{
    setselectedAbility (ability)
  }

if(!agent) return <p>agent data not available</p>



  return (
    <div className='text-[#ECE8E1] bg-gradient-to-l from-[#0F1923] to-[#2C3A4D]'>
      <div>
       <h1 className='text-8xl pt-60 ml-20'>
        {agent.displayName } <br />
        </h1>
        <div className='text-2xl ml-20 flex justify-items-start w-1/2 font-[normal]'>
          {agent.description}
        </div>
       
      <div className='flex ml-20 mt-10 gap-30 items-start'>

  <div className='w-32 p-3 bg-[#2A2A2A]'>
    <img
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      className='object-contain'
      src={agent.role.displayIcon}
      alt=""
    />
    <h1 className='text-white text-center mt-2'>
      {agent.role.displayName}
    </h1>
  </div>
  <div
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    className={`transition-opacity duration-200 text-xl text-black ${
      isHovered ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <p className='w-[500px] mt-5 font-[normal] text-[#ECE8E1] '>
      {agent.role.description}
    </p>
  </div>
</div>
</div>

   <div className='relative h-[300px] '>
    <img
    className='absolute right-0 bottom-0 h-[950px] object-contain' 
    src={agent.fullPortraitV2} alt="" />
   </div>


    <div>
      <h1 className='text-8xl text-center mt-20'> 
        Special abilities
      </h1>
     </div>
     
     <div className='flex justify-center gap-40 '>
      {agent.abilities
      .filter(ability=>ability.displayIcon)
      .map((ability , index)=>(
        <div key={index} className='flex flex-col items-center justify-center '>
         
          <img onClick={()=>handleClick(ability)}
         className={`w-32 h-32 mt-20 cursor-pointer transition duration-300 ${
            selectedAbility?.slot === ability.slot ? 'opacity-100' : 'opacity-60 hover:opacity-100'
          }`}
          src={ability.displayIcon} alt="" /> 

        </div>
      ))}
     </div>

      <div  className='relative w-full h-[600px] mt-10'>
      <img
      className='absolute top-0 right-0 h-full object-contain opacity-60 hover:opacity-100 transition duration-300'
      src={agent.background} alt="" />

        {selectedAbility && (
         <div className='w-1/2 mx-auto mt-10 p-6 object-contain text-4xl text-center'>
           <h1 className='mb-6 '>{selectedAbility.displayName}</h1>
          <p className='font-[normal]' >{selectedAbility.description}</p>
         </div>
        )}

      <img
      className='absolute top-0 left-0 h-full object-contain opacity-60 hover:opacity-100 transition duration-300'
      src={agent.background} alt="" />
    </div>

    
    
    </div>
  )
}

export default AgentCard
