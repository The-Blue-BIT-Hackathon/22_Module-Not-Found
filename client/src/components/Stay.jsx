import React,{useState,useEffect} from 'react';
import hotels from '../config/hotels';
import HotelCards from './HotelCards';

const Stay = () => {
  const [hotelDetails, setHotelDetails] = useState([]);

  useEffect(() => {
    setHotelDetails(hotels);
  }, [])
  
  console.log(hotelDetails)
  const cards = hotelDetails.map(item => {
    return (
    <>
    <div className="my-10 flex justify-center items-center w-[100%]">
      <HotelCards 
      img={item.img}
      name={item.name}
      price={item.price}
    />
    </div>
    </>
    )
  })

  return (
    <div className='my-6 w-[100%]'>
      <h1 className='text-center mb-6 font-bold text-3xl'>Places to stay</h1>
      <div className='h-max grid grid-cols-2 gap-4 content-center w-screen'>
      {cards}
      </div>
      
    </div>
  )
}

export default Stay
