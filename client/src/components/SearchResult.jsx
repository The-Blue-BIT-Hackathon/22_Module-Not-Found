import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import MapIcon from "@mui/icons-material/Map";
import CloudIcon from "@mui/icons-material/Cloud";
import FlightIcon from '@mui/icons-material/Flight';
import { useNavigate } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Stay from "./Stay";
import Flight from "./Flight";
import Travel from "./Travel";
import Map from "./Map";
import Weather from "./Weather";
import RoutingMachine from "./RoutingMachine";
import axios from "axios";
const SearchResult = () => {
  console.log("inside search result");
  const navigate = useNavigate();
  const query = useQuery();
  const source = query.get("source") || "";
  const dest = query.get("destination") || "";
  const dateOfTravel = query.get("traveldate") || "";
  const [sourcePoint, setSourcePoint] = useState(null); 
  const [destinationPoint, setDestinationPoint] = useState(null); 
  const [trainData, setTrainData] = useState(null);
  const [date, setDate] = useState(null);
    // useEffect(()=>{
    //     fetch(`https://api.geoapify.com/v1/geocode/search?city=${source}&apiKey=`+process.env.REACT_APP_GEOAPIFY_KEY)
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         let arr = [data.features[0].properties.lat, data.features[0].properties.lon];
    //         setSourcePoint(arr);
    //     })
    // },[source])

    // useEffect(()=>{
    //     fetch(`https://api.geoapify.com/v1/geocode/search?city=${dest}&apiKey=`+process.env.REACT_APP_GEOAPIFY_KEY)
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         let arr = [data.features[0].properties.lat, data.features[0].properties.lon];
    //         setDestinationPoint(arr);
    //     })
    // },[dest])


    // useEffect(() => {
    //     fetch(
    //       `http://localhost:5000/getTrainSchedules/${source}/${dest}`
    //     )
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         console.log("flightdetails", data);
    //         setTrainData(data);
    //       });
    //   }, [source, dest]);


  return (
    <>
      <div
        className="text-center banner w-full px-4 py-10
       bg-teal-500 text-white-900 text-4xl"
      >
        <h2>
          {" "}
          <b>{source} ------{">"} {dest}</b>
        </h2>
      </div>
      <div>
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item active={true} title="Transit" icon={LocationCityIcon}>
            {/* <RoutePaths s={source} d={dest}/> */}
          </Tabs.Item>

          <Tabs.Item title="Hotels" icon={HotelIcon}>
            {/* <Stay destination={dest}/> */}
          </Tabs.Item>

          <Tabs.Item title="Trains" icon={TrainIcon}>
            {/* {trainData && <Travel arr={trainData}/>} */}
          </Tabs.Item>

          <Tabs.Item title="Map & Direction" icon={MapIcon}>
            {/* {sourcePoint && destinationPoint && <Map srclat={sourcePoint[0]} srclon={sourcePoint[1]} destlat={destinationPoint[0]} destlon={destinationPoint[1]}/>} */}
          </Tabs.Item>

          <Tabs.Item title="Weather" icon={CloudIcon}>
            <Weather cityName={dest} />
          </Tabs.Item>
            
          <Tabs.Item title="Flights" icon={FlightIcon}>
            <Flight src={source} dest={dest} date={dateOfTravel}/>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  );
};

export default SearchResult;
