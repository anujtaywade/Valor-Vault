
import { motion } from "framer-motion";
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


const Home = () => {
  const [data, setdata] = useState(null);
  const [TierData, setTierData] = useState();
  const [loading, setloading] = useState(true);

  let handleOfficial=()=>{
    window.open ('https://playvalorant.com/','_blank')
  }

  let gameModeUuid =[
    '96bd3920-4f36-d026-2b28-c683eb0bcac5',
    'a8790ec5-4237-f2f0-e93b-08a8e89865b2',
    'a4ed6518-4741-6dcb-35bd-f884aecdc859',
    'e086db66-47fd-e791-ca81-06a645ac7661',
    '4744698a-4513-dc96-9c22-a9aa437e4a58',
    'e921d1e6-416b-c31f-1291-74930c330b7b',
    '5d0f264b-4ebe-cc63-c147-809e1374484b',
  ]

  let compiModeuuid =[
    '564d8e28-c226-3180-6285-e48a390db8b1'
  ]

  useEffect(() => {
   let gameMode='https://valorant-api.com/v1/gamemodes'
  fetch(gameMode)
  .then((Response)=>Response.json())
  .then((json)=>setdata(json))
  .catch((error)=>console.log('error in fetching date',error)) 
  }, []);
  
  useEffect(() => {
    let competitiveTierData = 'https://valorant-api.com/v1/competitivetiers'
    fetch(competitiveTierData)
    .then((Response)=>Response.json())
      .then((json)=>setTierData(json))
      .catch((error)=>console.log('Error while fetching data',error))
      .finally(()=>setloading(false))

  }, []);
  if (loading) return <p className="text-center mt-10 ">Loading tiers...</p> 

  return (
    <div className='bg-[#F2F2F2] relative h-full w-full overflow-x-hidden '>
      <div>
        
        <h1 className='absolute left-1/2 top-10 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-8xl font-bold drop-shadow-lg bg-gradient-to-r from-[#c48a39] to-[#ECE8E1] text-transparent bg-clip-text mt-40 md:top-20 ' >
          Valor Vault : 
        </h1>
         <h2 className='absolute left-1/2 top-30 md:top-48 transform -translate-x-1/2 text-2xl sm:text-4xl md:text-6xl font-semibold drop-shadow-lg bg-gradient-to-r from-[#c48a39] to-[#ECE8E1] text-transparent bg-clip-text whitespace-nowrap  mt-30 md:mt-40 '>
          Decode the Game. Dominate the Meta
        </h2>
        <video className='w-full h-[300px] sm:h-[500px] md:h-[700px] object-cover mt-15 '  src="/chamber home page.mp4" loop autoPlay playsInline muted ></video>
        </div>
        
        <div className="px-4">
          <h1 className=' mt-20 text-4xl sm:text-5xl md:text-8xl font-medium  md:ml-20 md:mt-40'>
          Welcome to Valor Vault
        </h1>
        
        <h3 className='  w-200 mb-10 mt-10 text-s sm:text-2xl md:text-2xl object-contain font-[normal] sm:ml-20 md:ml-20 max-w-fit'>Valor Vault is your ultimate intel hub for everything Valorant. From in-depth agent guides and map strategies to weapon stats, tier lists, and pro tips — we equip you with the knowledge to level up your game. Whether you're climbing ranked, perfecting your aim, or mastering team comps, Valor Vault is where strategy meets domination. Unlock the meta. Own every round. <br /><br /> Dive deep into detailed breakdowns of every agent’s abilities, uncover map control secrets, and learn the most effective playstyles used by top-tier players worldwide. Our regularly updated tier lists and weapon analysis keep you ahead of the meta, while exclusive pro tips and tactical insights give you that competition. <br /> <br />
        Unlock the meta. Own every round. Elevate your gameplay with Valor Vault — your trusted companion in the fight for Radiance.  
      </h3>

      <div className="relative h-[200px]">
        <img loading="lazy" className='h-full md:absolute md:bottom-50  md:left-300  md:transform md:-translate-x-1/2 md:w-[980px] md:max-w-full md:object-contain md:drop-shadow-xl md:h-[650px]   ' src="\accent_home.png" alt="" />
      
      <button className='ml-30 mt-10 text-xl sm:text-2xl md:text-2xl border-2 p-3  font-bebas hoverr hover:scale-105 transform transition duration-300 bg-[#FF4655] text-[#F2F2F2] hover:bg-black ' onClick={handleOfficial} >learn more</button>
      </div>

        </div>
                  
        <div className=" mt-40 text-5xl sm:text-5xl md:text-7xl md:mt-10 flex justify-center ">Game Modes</div>
       
      

       <div className="bg-[#ff4655] text-[#F2F2F2] font-[normal] mt-10 "></div>
        <Swiper
        modules={[Autoplay,Navigation,Pagination]}
  spaceBetween={30}
  navigation={true}
  grabCursor={true}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{delay:3000}}
  className="mt-10"
>
  {gameModeUuid.map(uuid => {
    const mode = data?.data?.find(item => item.uuid === uuid);
    if (!mode) return null;

    return (
      <SwiperSlide key={uuid}>
        <div className="bg-[#ff4655] text-[#F2F2F2] font-[normal] flex flex-col sm:flex-row items-start gap-6 px-6 py-10 relative">
          

          <img
            loading="lazy"
            src={mode.displayIcon}
            alt="standard"
            className="object-contain h-[100px] sm:h-[150px] md:h-[250px] w-auto"
          />

          <div className="mt-6">
            <h1 className="text-2xl sm:text-4xl md:text-6xl mb-6">
              Mode: {mode.displayName}
            </h1>
            <h2 className="text-xs sm:text-xl md:text-2xl mb-4">
              <span className="font-semibold text-base sm:text-2xl">Description:</span><br />
              {mode.description}
            </h2>
            <p className="text-xs sm:text-xl md:text-2xl">
              <span className="font-semibold text-base sm:text-2xl">Duration:</span><br />
              {mode.duration}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

        

                    
          <div className="max-w-5xl mx-auto py-10 px-6 ">
            <div className="text-center mt-20 text-2xl sm:mt-40 sm:text-5xl md:text-7xl md:mt-40 ">Valorant competitive Tier</div>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center mt-10   text-2xl sm:text-5xl md:text-5xl">
               
               {compiModeuuid
               .map(uuid=>{
                let tierMode= TierData?.data?.find(item=>item.uuid===uuid)
                if (!tierMode) return null
                return tierMode.tiers.filter(t=>t.largeIcon && !t.tierName.toLowerCase().includes("unranked"))
                .map((tier,index)=> {
                  if (!tier.largeIcon) return null;
                  return(
                     <div key={`${tier.tierName}-${index}`}>
                      <div className="flex flex-col items-center hover hover:scale-105 transform transition duration-300 hover:shadow-2xl hover:bg-[#1f1f1f] hover:text-[#ECE8E1]">
                        <img loading="lazy" src={tier.largeIcon} alt=""  />
                    <p className="text-xl sm:text-4xl md:text-4xl">{tier.tierName}</p> 
                      </div>
                    
                  </div>
                
                  )

                })
                 
               })}
              </div>

            
          </div>
         
        </div>
    
  )
}

export default Home
