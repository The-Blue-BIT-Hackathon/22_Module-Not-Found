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
//    useEffect(() => {
//     const url =
//     "https://api.geoapify.com/v1/routing?waypoints=18.5204%2C73.8567%7C18.7557%2C73.4091&mode=drive&apiKey=5c88f9c1c00f4c64b661e3154a942bbb";
//   axios
//     .get(url)
//     .then((res) => {
//     //   const cities = new Set();
//     let city = [];
//       const arr1 = [];

//       let a = -1;
//       let b = -1;

//       for (let v of res.data.features[0].geometry.coordinates[0]) {
//         if (a === -1 && b === -1) {
//           a = v[0];
//           b = v[1];
//         } else if (Math.abs(v[0] - a) + Math.abs(v[1] - b) >= 0.01) {
//           a = v[0];
//           b = v[1];
//           arr1.push([v[0], v[1]]);
//         }
//       }
//       // console.log('next try\n')
//       for (const v of arr1) {
//         // console.log(v[0],v[1])
//         const urlcity = `https://api.geoapify.com/v1/geocode/reverse?lat=${v[1]}&lon=${v[0]}&apiKey=5c88f9c1c00f4c64b661e3154a942bbb`;
//         axios
//           .get(urlcity)
//           .then((resp) => {
//             if (resp.data.features[0].properties.city != null){
//               city.push(resp.data.features[0].properties.city);
//                 console.log(typeof(resp.data.features[0].properties.city));
//             }
//           })
//           .catch((err) => {
//             if (err.code) {
//               alert(err.message);
//               console.log(err.message);
//             }
//           });
//         }
//         const filteredCity = city.filter((value, index, self) => {
//           return self.indexOf(value) === index;
//         });
//         console.log(filteredCity);
//       setInterCity(filteredCity);
      

//     })
//     .catch((err) => {
//       if (err.code === 400) {
//         alert("Sorry!, City Not Found in Database");
//       }
//       console.log("error in side first request : ", err);
//     });
// }, [])

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
