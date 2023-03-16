import React from "react";
import TrainCard from "./TrainCard";
import { useState, useEffect } from "react";

const Travel = (props) => {
  const trainDetails = props.arr;
  console.log("inside travel traindetails: ",trainDetails[0]);

  console.log("checking data attached with trainDetails", trainDetails[0].train_number, trainDetails[0].train_destination_station);
  return (
    <>
      <h1 className="text-center mx-auto mb-6 font-bold text-3xl">
        How can you get there
      </h1>
      <div className="mx-auto">
        {trainDetails.map((item) => (
          <TrainCard
            id={item.train_number}
            name={item.train_name}
            start={item.train_origin_station}
            end={item.train_destination_station}
          />
        )
        )}
      </div>
    </>
  );
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
