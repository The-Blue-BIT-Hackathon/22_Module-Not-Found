import React, { useState, useContext, useEffect } from "react";
import { travelContext } from "./HomePage";
import TimelineCard from "./TimelineCard";
import axios from "axios";
import intermediateCity from "../config/intermediateCity";

const RoutePaths = (props) => {
  // const user = useContext(travelContext);
  // console.log(user.citiesInBetween);
  const [interCity, setInterCity] = useState([]);
  // console.log(timelines);
  console.log(props.city)


axios.get("http://localhost:5000/getcities/pune/lonavla")
.then((res)=>{
  if(res.status===200){
    console.log(res);
    console.log(res.json());
    setInterCity(res);
  }
})

const timelines = intermediateCity.map((item) => {
  console.log("Printing items: ",item);
  return <TimelineCard city={item} />;
});

// console.log(user.citiesInBetween)


  return (
    <div className="w-[60%] mx-auto my-4 ">
      <h2 className="text-center mb-6 font-bold text-2xl">
        Places in your commute...
      </h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-4/5 mx-auto">
        {timelines}
      </ol>
    </div>
  );
};

export default RoutePaths;
