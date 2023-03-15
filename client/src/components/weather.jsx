import '../styles/weather.css';
import { useState } from 'react';
import axios from 'axios';
import logo from "../assets/weather.png";
const Weather = (props) =>  {
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState("");
  let nameOfCity = props.cityName;
  const getWeatherDetails = (nameOfCity) =>{
    if(!nameOfCity) return;
    console.log(process.env.REACT_APP_OPENAPI_KEY);
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+nameOfCity+"&APPID="+process.env.REACT_APP_OPENAPI_KEY;
    axios.get(apiURL).then((res)=>{
      console.log("response", res.data);
      setData(res.data);
      }).catch((err) =>{
        if(err.code === 400){
          setInputCity("");
          setData("");
          console.log("Sorry!, City Not Found in Database");
        }
        console.log("error", err);
      })
    };
    getWeatherDetails(nameOfCity);
  return (<>
    {Object.keys(data).length > 0 &&
    <div>
        <div className="shadow-lg shadow-gray-400 rounded-2xl weatherResultBox">
           <img className="weatherIcon" src={logo} alt="weatherlogo"/>
           <h5 className="weatherCity">{data?.name}</h5>
           <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}<sup>o</sup>C</h6>
           <h6 className="weatherdescription">Feels like {data?.weather[0]?.description}</h6>
           <h6 className="humidity">Humidity: {data?.main?.humidity}</h6>
           <h6 className="Min-temp">MIN TEMP: {((data?.main?.temp_min)-273.15).toFixed(2)}</h6>
           <h6 className="Max-temp">MAX TEMP: {((data?.main?.temp_max)-273.15).toFixed(2)}</h6>
        </div>
    </div>
    }
    </>
  );
}

export default Weather;