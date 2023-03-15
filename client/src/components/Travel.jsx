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
      <TrainCard
        id={item.id}
        name={item.name}
        start={item.start}
        end={item.end}
      />
    );
  });

  //     const travelCard =
  // <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  //     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
  //     <div class="flex flex-col justify-between p-4 leading-normal">
  //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  //     </div>
  // </a>

  return <div>
    <h1 className="text-center mb-6 font-bold text-3xl">How can you get there</h1>
    <div className="card-container flex-col justify-center items-center">
    {cards}
    </div>
    </div>;
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
