import React from "react";
import traindata from "../config/traindata";
import TrainCard from "./TrainCard";
import { useState, useEffect } from "react";

const Travel = () => {
  const [trainDetails, setTrainDetails] = useState([]);

  useEffect(() => {
    setTrainDetails(traindata);
  }, []);

  const cards = trainDetails.map((item) => {
    return (
      <div className="my-10">
      <TrainCard
        id={item.id}
        name={item.name}
        start={item.start}
        end={item.end}
      />
      </div>
    );
  });

  return(
    <>
    <h1 className="text-center mx-auto mb-6 font-bold text-3xl">How can you get there</h1>
    <div className="mx-auto">
    {cards}
    </div>
    </>
  )
};

export default Travel;

// const apiURL = "https://api.geoapify.com/v1/ipinfo?&apiKey="+process.env.REACT_APP_GEOAPIFY_KEY;
//     const [destination, setDestination] = useState([]);
//     const [source, setSource] = useState([]);

//     axios.get(apiURL).then((res)=>{
//         console.log("latitude : ", res.data.location.latitude, "longitude : ", res.data.location.longitude);
//         setDestination([res.data.location.latitude, res.data.location.longitude]);
//       }).catch((err) =>{
//         if(err.code === 400){
//           alert("Sorry!, City Not Found in Database");
//         }
//         console.log("error", err);
// })
