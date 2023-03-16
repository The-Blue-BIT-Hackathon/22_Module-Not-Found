import '../styles/weather.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../assets/weather.png";
const Weather = (props) =>  {
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState("");
  let nameOfCity = props.cityName;

  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+nameOfCity+"&APPID="+process.env.REACT_APP_OPENAPI_KEY;

  useEffect(()=>{
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
  }, [apiURL])

  
  const getWeatherDetails = (nameOfCity) =>{
    if(!nameOfCity) return;
    };
    getWeatherDetails(nameOfCity);
  return (<>
    {Object.keys(data).length > 0 ?
    <div>
        <div className="shadow-lg shadow-gray-400 rounded- weatherResultBox">
           <img className="weatherIcon" src={logo} alt="weatherlogo"/>
           <h5 className="weatherCity">{data?.name}</h5>
           <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}<sup>o</sup>C</h6>
           <h6 className="weatherdescription">Feels like {data?.weather[0]?.description}</h6>
           <h6 className="humidity">Humidity: {data?.main?.humidity}</h6>
           <h6 className="Min-temp">MIN TEMP: {((data?.main?.temp_min)-273.15).toFixed(2)}</h6>
           <h6 className="Max-temp">MAX TEMP: {((data?.main?.temp_max)-273.15).toFixed(2)}</h6>
        </div>
    </div> :
        
        <div className="shadow-lg h-[40vh] shadow-gray-400 rounded text-center py-20 w-[50%] mx-auto">
           <h1 className='text-2xl text-red-600'>Error : (</h1>
           <h3 className='text-gray-600'>-- Weather pata nahi chalra bhai !!</h3>
        </div>
    
    }
    </>
  );
}

export default Weather;