import '../styles/weather.css';
import { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/weather.png";
const Weather = (props) =>  {
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState("");
  let nameOfCity = props.cityName;
  const getWeatherDetails = (nameOfCity) =>{
    if(!nameOfCity) return;
    console.log(process.env);
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+nameOfCity +"&APPID="+process.env.REACT_APP_API_KEY;
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
    <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
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


// axios.get(url)
// .then((response) => {
//     const obj = response.data;


//     var data1 = JSON.parse(JSON.stringify(obj));
//     console.log(data1.weather[0].main);
//     descr = "Feels like: " + data1.weather[0].description;
//     var hum = "Humidity: " + obj.main.humidity + "% "
//     // var temp_min_max = "Min: " + obj.main.temp_min + " | Max: " + obj.main.temp_max;
//     var temp_min = "Min: " + obj.main.temp_min;
//     var temp_max = "Max: " + obj.main.temp_max;
//     res.render('index', { weather: obj, sit: descr, humidity: hum, city: obj.name, country: obj.sys.country, icon: obj.weather.icon, temp: "Temp:" + obj.main.temp, lon: obj.coord.lon, lat: obj.coord.lat, tempmin: temp_min, tempmax: temp_max, errmsg: null });
// })
// .catch((err) => {
//     console.log(err);
//     res.render('index', { weather: null, errmsg: 'City not Found' })
// })
