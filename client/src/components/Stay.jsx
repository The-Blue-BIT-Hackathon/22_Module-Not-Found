import React, { useState, useEffect } from "react";
import HotelCards from "./HotelCards";

const Stay = (props) => {
  const [hotelDetails, setHotelDetails] = useState([]);
  const destination = props.destination;

  useEffect(() => {
    fetch("http://localhost:5000/getNearbyHotels/" + destination)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHotelDetails(data);
      });
  }, [destination]);

  return (
    <div className="my-6 w-[100%]">
      <h1 className="text-center mb-6 font-bold text-3xl">Places to stay</h1>
      <div className="h-max grid grid-cols-2 gap-4 content-center w-screen">
          {hotelDetails && hotelDetails.map((item) => (<HotelCards hotelName={item} />))}
      </div>
    </div>
  );
};

export default Stay;
