import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const AgentCard = () => {
  let { agentId } = useParams();
  const [agent, setagent] = useState(null);
  const [isHovered, setisHovered] = useState(false);
  const [selectedAbility, setselectedAbility] = useState();

  useEffect(() => {
    let agentsUrl = 'https://valorant-api.com/v1/agents';
    fetch(agentsUrl)
      .then((Response) => Response.json())
      .then((json) => {
        let selectedAgent = json.data.find((a) => a.uuid === agentId);
        setagent(selectedAgent);

        if (selectedAgent?.abilities) {
          let firstAbility = selectedAgent.abilities.find((a) => a.displayIcon);
          if (firstAbility) setselectedAbility(firstAbility);
        }
      })
      .catch((error) => console.log("error in fetching agent data", error));
  }, [agentId]);

  let handleClick = (ability) => {
    setselectedAbility(ability);
  };

  if (!agent) return <p>Agent data not available</p>;

  return (
    <div className="text-[#ECE8E1] bg-gradient-to-l from-[#0F1923] to-[#2C3A4D] overflow-hidden px-4 sm:px-10">
      <div className="pt-20 sm:pt-40">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
          {agent.displayName}
        </h1>
        <p className="text-sm sm:text-lg mt-4 max-w-full sm:max-w-3xl font-[normal]">
          {agent.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
        <div className="w-16 sm:w-32 p-2 sm:p-3 bg-[#2A2A2A]">
          <img
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
            className="object-contain w-full h-full"
            src={agent.role.displayIcon}
            alt=""
          />
          <h1 className="text-center text-xs sm:text-2xl mt-2">
            {agent.role.displayName}
          </h1>
        </div>

        {isHovered && (
          <div className="transition-opacity duration-200 text-sm sm:text-xl text-[#ECE8E1] ">
            <p className="max-w-xs sm:max-w-md mt-2 font-[normal]">
              {agent.role.description}
            </p>
          </div>
        )}
      </div>

      <div className="relative h-[350px] mt-10 sm:mt-20">
        <img
          className="absolute right-0 bottom-0 h-[450px] sm:h-[950px] object-contain"
          src={agent.fullPortraitV2}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-4xl sm:text-6xl text-center mt-5 sm:mt-20 md:mt-20 font-semibold">
          Special Abilities
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {agent.abilities
          .filter((ability) => ability.displayIcon)
          .map((ability, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                onClick={() => handleClick(ability)}
                className={`w-20 h-20 sm:w-32 sm:h-32 cursor-pointer transition duration-300 ${
                  selectedAbility?.slot === ability.slot
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`}
                src={ability.displayIcon}
                alt=""
              />
            </div>
          ))}
      </div>

      
        {selectedAbility && (
          <div className="w-full sm:w-1/2 mx-auto mt-10 p-4 sm:p-6 text-center text-lg sm:text-3xl">
            <h1 className="mb-4 font-semibold">{selectedAbility.displayName}</h1>
            <p className="text-sm sm:text-xl font-[normal]">
              {selectedAbility.description}
            </p>
          </div>
        )}

     
    </div>
  );
};

export default AgentCard;
