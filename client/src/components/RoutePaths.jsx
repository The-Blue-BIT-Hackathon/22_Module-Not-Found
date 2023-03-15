import React, { useState, useContext, useEffect } from "react";
import TimelineCard from "./TimelineCard";

const RoutePaths = (props) => {
  const [interCity, setInterCity] = useState(null);
  const s = props.s;
  const d = props.d;
  useEffect(() => {
     fetch(`http://localhost:5000/getcities/${s}/${d}`)
     .then((res) =>{
      return res.json()
     })
     .then(data => {
        console.log(data);
        setInterCity(data);
     })
  }, [s,d] );

  

  return (
    <div className="w-[60%] mx-auto my-4 ">
      <h2 className="text-center mb-6 font-bold text-2xl">
        Places in your commute...
      </h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-4/5 mx-auto">
      {interCity && interCity.map((item) => (
       <TimelineCard city={item} />
      ))}
      </ol>
    </div>
  );
};

export default RoutePaths;
