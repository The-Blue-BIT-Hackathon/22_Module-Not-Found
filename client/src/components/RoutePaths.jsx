import React,{ useState, useContext} from "react";
import { travelContext  } from "./HomePage";
import TimelineCard from "./TimelineCard";

const RoutePaths = () => {
    const { citiesInBetween } = useContext(travelContext);
    const timelines = citiesInBetween.map(item => {
        return <TimelineCard 
            city={item}
            />
    })
    console.log(timelines)

  return (
    <div className="w-[60%] mx-auto my-4 ">
        <h2 className="text-center mb-6 font-bold text-2xl">Some of the places you might be interested in...</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timelines}
      </ol>
    </div>
  );
};

export default RoutePaths;
