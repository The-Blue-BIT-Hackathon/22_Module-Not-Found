import React from "react";
import { useState, useEffect } from "react";
import airlines from "../config/airlines";
import FlightCard from "./FlightCard";
const Flight = (props) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [isImg, setIsImg] = useState(false);
  useEffect(() => {
    fetch(
      `http://localhost:5000/error/getFlights/${props.src}/${props.dest}/${props.date}`
    )
      .then((res) => {
        console.log("api called0");
        return res.json();
      })
      .then((data) => {
        console.log("flight data : ", data);
        for(const v of data){
            v['src_city'] = `${props.src}`;
            v['dest_city'] = `${props.dest}`;
            v['date_of_travel'] = `${props.date}`;
            for(const k of airlines){
                console.log(k.icao, v.arr_carrier);
                if(k.icao == v.arr_carrier){
                v['img'] = k.logo;
                setIsImg(true);
                break;
                }
            }
            if(v['img']===undefined){
                v['img'] = "https://designlooter.com/images/airplane-svg-9.png";
            }
        }
       
        console.log("flightdetails", data);
        setFlightDetails(data);
      });
  }, [props.src, props.dest, props.date, isImg]);
  return (
    <div className="flex justify-center mx-auto">
      <ol className="border-gray-200 dark:border-gray-700 w-[80%] mx-auto px-auto">
      {flightDetails && flightDetails.map((item) => (
       <FlightCard  obj={item} />
      ))}
      </ol>
    </div>
  );
};

export default Flight;
