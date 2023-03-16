import React, { useState } from 'react'
import useQuery from "../hooks/useQuery";

const PlaceDetailsPage = (props) => {
    const query = useQuery();
    const [image, setImage] = useState("");
    const [placeDescription, setPlaceDescription] = useState("");
    const source = query.get("source") || "";
    const dest = query.get("destination") || "";

    // useEffect(() => {
    //     fetch("http://localhost:5000/getNearbyHotels/" + destination)
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         setHotelDetails(data);
    //       });
    //   }, [destination]);
  return (
    <div className='w-[80%] mx-auto m-4'>
        <div className='flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>{dest}</h1>
        <div className='w-[100%]'>
            <div className='w-[45%]'>
            <div className='w-[50%] mx-auto'>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Barcelona_collage.JPG" className="w-[100%]" />
            </div>
            <div className='w-[100%]'>
                <p>Today, the wispy wet water is streaming down from the sky, like honey slipping off a spoon.” “Drops of rain exit the pillowcases, drowsily float like feathers, soar in many directions.” “It is raining today; the crystal clear raindrops hit the ground silently.”</p>
            </div>
            </div>
        </div>
            <div className='w-[45%] h-auto' >Review Tab</div>
        </div>
    </div>
  )
}

export default PlaceDetailsPage