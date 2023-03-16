import React, { useEffect, useState, useRef } from "react";
import { TileLayer, MapContainer, LayersControl } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Map = (props) => {
  const start = [props.srclat, props.srclon];
  const end = [props.destlat , props.destlon];
  return (
    <>
      <MapContainer
        center={[start[0], end[0]]}
        zoom={11}
        zoomControl={false}
        style={{ height: "500px", width: "900px", padding: 0 }}
      >
        <RoutingMachine
          position={"topright"}
          start={start}
          end={end}
          color={"#757de8"}
        />
        <LayersControl position="topleft">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
