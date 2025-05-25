
import { useEffect,useState } from 'react';

const Arsenal = () => {
const [weaponsdata, setweaponsdata] = useState([]);


  useEffect(() => {
      let  weaponsUrl = 'https://valorant-api.com/v1/weapons'
      fetch(weaponsUrl)
      .then((Response)=>Response.json()
      )
      .then((json)=>
        setweaponsdata(json.data))
      .catch((error)=>console.log("error in fetching weapons data",error));
      
    }, []);
    
    
    
  return (
    
    <div className='bg-[#0F1923] text-[#ECE8E1] px-10 py-6 '>
        <h1 className='pt-30 text-8xl ml-30 pb-15 '>
          weapons
        </h1>
      <div className=''>

      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10 mt-10 '>
        {/* {console.log(weaponsdata)} */}
        {weaponsdata.map((weapon) => {
          return(
            <div className='flex flex-col justify-between bg-gray-800   rounded-xl object-contain  hover hover:scale-105 transform transition duration-300' key={weapon.uuid} >
            <img loading='lazy' className='p-10' src={weapon.displayIcon} alt="" />
            <h1 className='text-center text-3xl p-2  bg-white text-black '>{weapon.displayName}</h1>
          </div>
        )
      })}
      </div>
      </div>
    </div>
  )
}

export default Arsenal
