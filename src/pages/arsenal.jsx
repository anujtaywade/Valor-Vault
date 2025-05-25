
import { useEffect,useState } from 'react';

const Arsenal = () => {
const [weaponsdata, setweaponsdata] = useState([]);


  useEffect(() => {
      let  weaponsUrl = 'https://valorant-api.com/v1/weapons'
      fetch(weaponsUrl)
      .then((Response)=>Response.json())
      .then((json)=>setweaponsdata(json.data))
      .catch((error)=>console.log("error in fetching weapons data",error));
      
  
    }, []);
  
  

  return (
    
    <div>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-10 mt-30'>
        {weaponsdata.map((weapon) => {
          const defaultSkin = weapon.skins.find(
            (skin) => skin.uuid === weapon.defaultSkinUuid
          );
          if(!defaultSkin || !defaultSkin.displayIcon ) return null
        return(
          <div className='items-center object-contain  ' key={weapon.uuid} >
            <img className='' src={defaultSkin.displayIcon} alt="" />
            <h1>{defaultSkin.displayName}</h1>
          </div>
        )
       })}
      </div>
    </div>
  )
}

export default Arsenal
