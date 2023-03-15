require('./connection')
const fetch = require('cross-fetch')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const app = express()
const { cities } = require('./config/cities-name-list')
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()
const authRoute=require('./routes/auth')
const cors = require("cors");

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
const axios = require('axios')
const CookieParser = require('cookie-parser')

app.use(CookieParser());
app.use(cors());

app.get('/', (req, res) => {
  const acc_token = req.cookies.jwtoken;
  const data = jwt.verify(acc_token, process.env.SECRET_KEY);
  const userId = data.id;

  console.log(data)
  res.send({ username: 'mangesh' });
})
app.use('/travel/auth', authRoute);

// app.get('/getNearbyPlaces/:cityname', async (req, resp) => {
//   const arr = [];
//   console.log('showing city name is: ',req.params.cityname)
//   try {
//     const url = `http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?Waypoint=${req.params.cityname}&TravelMode=Driving&Optimize=time&MaxTime=60&TimeUnit=Minute&type=HotelsAndMotels&key=AlTC9he2DiTAaibqX9oBK9WwGxo10wPsfla-myVg5jEmYyE_gPO9_Goo_S1WEUYL`
//     // console.log(url);
//    axios.get(url)
//    .then((res)=>{res.json()})
//    .then((data)=>{
//     // resp.json();
//     console.log(data);
//     resp.status(200).json(data) ;
//    })

//  }
//   catch(err)
//   {
//     console.log(err);
//     res.status(404).json(err); 
//   }
// })


app.get('/getNearbyHotels/:cityname',async(req,res)=>{
  try {
    const url = `http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?Waypoint=${req.params.cityname}&TravelMode=Driving&Optimize=time&MaxTime=60&TimeUnit=Minute&type=HotelsAndMotels&key=AlTC9he2DiTAaibqX9oBK9WwGxo10wPsfla-myVg5jEmYyE_gPO9_Goo_S1WEUYL`
    const response = await fetch(url);

    if (response.status!=200 && !response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // ✅ call response.json() here
    const result = await response.json();
      const arr=[];
      for(const v of result.resourceSets[0].resources[0].categoryTypeResults[0].entities)
      {
        arr.push(v.entityName)
      }

    res.status(200).json(arr);
    // res.status(200).json(result.resourceSets[0].resources[0].categoryTypeResults[0].entities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

const ValidCity = (cityName) => {


  for (const v of cities) {
    const a = v.toUpperCase()
    const b = cityName.toUpperCase()
    if (a === b) {
      console.log('The answer is: ', v.toUpperCase());
      return true;
    }

  }
  return false;

}

app.get('/search/:cityname', async (req, res) => {

  const cityName = req.params.cityname;
  console.log('THe city is :'.cityName);
  res.status(200).json({ cityName: cityName });

})

function getCoordinates(cityName) {
  console.log('Name of the city is: ', cityName)



}
app.get('/getcities/:city/:dest_city', (req, res) => {
  try {

    const getcity = ValidCity(req.params.city);

    if (!getcity) {
      // console.log('City not found error');
      res.status(404).json({ msg: 'City not found in the database!!' });
    }

    let src_lat = 18.5204, src_longitude = 73.8567, dest_lat = 18.7557, dest_longitude = 73.4091;
     const data=getCoordinates(req.params.city);
    axios.get(`https://api.geoapify.com/v1/geocode/search?city=${req.params.city}&apiKey=0d9568502cca49a29d3861244023e2f1`)
      .then((resp2) => {
        const arr = [];
        arr.push(resp2.data.features[0].lat);
        arr.push(resp2.data.features[0].lon);
        console.log('latitude is: ',resp2.data.features[0].properties.lat);
        src_lat = resp2.data.features[0].properties.lat;
        src_longitude = resp2.data.features[0].properties.lon;
        
        axios.get(`https://api.geoapify.com/v1/geocode/search?city=${req.params.dest_city}&apiKey=0d9568502cca49a29d3861244023e2f1`)
        .then((resp3)=>{
          dest_lat = resp3.data.features[0].properties.lat;
          dest_longitude = resp3.data.features[0].properties.lon;
          const url = `https://api.geoapify.com/v1/routing?waypoints=${src_lat}%2C${src_longitude}%7C${dest_lat}%2C${dest_longitude}&mode=drive&apiKey=0d9568502cca49a29d3861244023e2f1`
          const resp = fetch(url, {
  
            method: "GET",
            headers: {
              "Content-Type": "application/json",
  
            }
          })
            .then((resp) => resp.json())
            .then(async (data) => {
  
              const cities = new Set();
              const arr1 = [];
  
  
  
              let a = -1, b = -1, c = -1, d = -1;
  
              for (let v of data.features[0].geometry.coordinates[0]) {
  
                if (a == -1 && b == -1) {
  
                  a = v[0];
                  b = v[1];
  
                }
                else if (Math.abs(v[0] - a) + Math.abs(v[1] - b) >= 0.01) {
                  a = v[0], b = v[1];
  
                  arr1.push([v[0], v[1]])
  
                }
  
  
              }
              console.log(arr1.length)
  
              try {
                // console.log('next try\n')
                for (const v of arr1) {
                  // console.log(v[0],v[1])
                  const urlcity = `https://api.geoapify.com/v1/geocode/reverse?lat=${v[1]}&lon=${v[0]}&apiKey=0d9568502cca49a29d3861244023e2f1`
                  const resp = await fetch(urlcity, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
  
                    }
                  })
                    .then((resp) => resp.json())
                    .then((data) => {
                      if (data.features[0].properties.city != null)
                        cities.add(data.features[0].properties.city)
  
  
                    })
                }
  
              }
              catch (err) {
                res.status(404).json(err);
              }
  
              for (const v of cities)
                console.log(v);
  
              res.status(200).json(Array.from(cities));
  
  
              // res.status(200).send(arr);
            })
            .catch((err) => {
              res.status(404).json(err);
            })
        })
        .catch((err) => {
          res.status(404).json(err);
        })

        })
        .catch((err)=>{
          console.log('Error in finding the second city');
          console.log(err);
          res.status(404).json(err);
        })
       



  }
  catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
})




app.listen(5000, () => {
  console.log("App is listening at port 5000...");
});
