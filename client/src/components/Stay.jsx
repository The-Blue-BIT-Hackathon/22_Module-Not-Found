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
    return <HotelCards 
      img={item.img}
      name={item.name}
      price={item.price}
    />
  })

  return (
    <div className='my-6'>
      <h1 className='text-center mb-6 font-bold text-3xl'>Places to stay</h1>
      <div className='card-container w-[80%] mx-auto'>
      {cards}
      </div>
      
    </div>
  )
}

export default Stay
