import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Arsenal = () => {
  const [weaponsdata, setweaponsdata] = useState([]);

  useEffect(() => {
    let weaponsUrl = 'https://valorant-api.com/v1/weapons';
    fetch(weaponsUrl)
      .then((response) => response.json())
      .then((json) => setweaponsdata(json.data))
      .catch((error) => console.log('error in fetching weapons data', error));
  }, []);

  return (
    <div className='bg-[#0F1923] text-[#ECE8E1] px-4 py-6 sm:px-6 md:px-10'>
 
      <h1 className='text-center text-3xl sm:text-5xl md:text-7xl font-bold mb-10 mt-30 sm:mt-30 md:mt-30'>
        Weapons
      </h1>

      <div className='overflow-x-hidden'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 place-items-center px-2 sm:px-6'>
          {weaponsdata.map((weapon) => (
            <Link to={`/weaponSkins/${weapon.uuid}`} key={weapon.uuid} className='w-full'>
              <div className='flex flex-col items-center bg-gray-800 rounded-xl hover:scale-105 transform transition duration-300 p-2 sm:p-4'>
                <img
                  loading='lazy'
                  className='h-24 w-full object-contain sm:h-32 md:h-48'
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                />
                <h1 className='mt-2 text-sm sm:text-lg md:text-xl text-center bg-white text-black w-full py-1'>
                  {weapon.displayName}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arsenal;
