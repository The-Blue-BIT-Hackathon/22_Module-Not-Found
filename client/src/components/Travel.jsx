import React from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { travelContext } from './HomePage';

const Travel = () => {

    const apiURL = "https://api.geoapify.com/v1/ipinfo?&apiKey=error"+process.env.REACT_APP_GEOAPIFY_KEY;
    const [destination, setDestination] = useState([]);
    const [source, setSource] = useState([]);
   
    axios.get(apiURL).then((res)=>{
        console.log("latitude : ", res.data.location.latitude, "longitude : ", res.data.location.longitude);
        setDestination([res.data.location.latitude, res.data.location.longitude]);
      }).catch((err) =>{
        if(err.code === 400){
          alert("Sorry!, City Not Found in Database");
        }
        console.log("error", err);
    });
    

  return (
    <>
    <div>
      <h1>Hello !</h1>
    </div>
    </>
  )
};

export default Travel;
