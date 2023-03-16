import axios from "axios";

const url =
  "https://api.geoapify.com/v1/routing?waypoints=18.5204%2C73.8567%7C18.7557%2C73.4091&mode=drive&apiKey=0d9568502cca49a29d3861244023e2f1";
axios
  .get(url)
  .then((res) => {
    const cities = new Set();
    const arr1 = [];

    let a = -1;
    let b = -1;

    for (let v of res.data.features[0].geometry.coordinates[0]) {
      if (a === -1 && b === -1) {
        a = v[0];
        b = v[1];
      } else if (Math.abs(v[0] - a) + Math.abs(v[1] - b) >= 0.01) {
        a = v[0];
        b = v[1];
        arr1.push([v[0], v[1]]);
      }
    }

    for (const v of arr1) {
      const urlcity = `https://api.geoapify.com/v1/geocode/reverse?lat=${v[1]}&lon=${v[0]}&apiKey=0d9568502cca49a29d3861244023e2f1`;
      axios
        .get(urlcity)
        .then((resp) => {
          if (resp.data.features[0].properties.city != null)
            cities.add(resp.data.features[0].properties.city);
        })
        .catch((err) => {
          if (err.code) {
            alert(err.message);
            console.log(err.message);
          }
        });
    }
  })
  .catch((err) => {
    if (err.code === 400) {
      alert("Sorry!, City Not Found in Database");
    }
    console.log("error in side first request : ", err);
  });
