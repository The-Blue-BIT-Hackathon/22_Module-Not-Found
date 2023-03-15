import React from "react";
import { Tabs } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import MapIcon from "@mui/icons-material/Map";
import CloudIcon from '@mui/icons-material/Cloud';
import { useNavigate } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Stay from "./Stay";
import Travel from "./Travel";
import Weather from "./Weather";
const SearchResult = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get("q") || "";
//   const category = query.get("category") || "";
  const url = useLocation();
  console.log(url);
  return (
    <>
      <div className="text-center banner w-full px-4 py-10
       bg-teal-500 text-white-900 text-4xl">
        <h2> <b>Let's Go! {searchQuery}</b></h2>
      </div>
      <div>
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item active={true} title="Transit" icon={LocationCityIcon}>
            <RoutePaths/>
          </Tabs.Item>
         
          <Tabs.Item title="Hotels" icon={HotelIcon}>
            <Stay/>
          </Tabs.Item>

          <Tabs.Item title="Trains" icon={TrainIcon}>
            <Travel/>
          </Tabs.Item>

          <Tabs.Item title="Map & Direction" icon={MapIcon}>
            {/* <Map/> */}
          </Tabs.Item>

          <Tabs.Item title="Weather" icon={CloudIcon}>
            <Weather cityName={searchQuery}/>
          </Tabs.Item>

        </Tabs.Group>
      </div>
    </>
  );
};

export default SearchResult;
