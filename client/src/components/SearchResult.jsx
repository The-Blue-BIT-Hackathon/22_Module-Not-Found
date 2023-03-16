import React from "react";
import { Tabs } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import MapIcon from "@mui/icons-material/Map";
import CloudIcon from "@mui/icons-material/Cloud";
import { useNavigate } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Stay from "./Stay";
import Travel from "./Travel";
import Map from "./Map";
import Weather from "./Weather";
import RoutingMachine from "./RoutingMachine";
const SearchResult = () => {
  console.log("inside search result");
  const navigate = useNavigate();
  const query = useQuery();
  const source = query.get("source") || "";
  const dest = query.get("destination") || "";
  const url = useLocation();
  console.log(url);
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
            <RoutePaths s={source} d={dest}/>
          </Tabs.Item>

          <Tabs.Item title="Hotels" icon={HotelIcon}>
            {/* <Stay /> */}
          </Tabs.Item>

          <Tabs.Item title="Trains" icon={TrainIcon}>
            {/* <Travel /> */}
          </Tabs.Item>

          <Tabs.Item title="Map & Direction" icon={MapIcon}>
            <Map></Map>
            <Map/>
            {/* <RoutingMachine/> */}
          </Tabs.Item>

          <Tabs.Item title="Weather" icon={CloudIcon}>
            <Weather cityName={dest} />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  );
};

export default SearchResult;
