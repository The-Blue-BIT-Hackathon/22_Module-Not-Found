import React, { useState } from "react";
import Select, { AriaOnFocus } from "react-select";
import Reviewform from "./Reviewform";
import "../styles/ReviewForm.css";
import cities from "../config/cities-name-list";
import city from "../config/city";
import axios from "axios";

const GiveFeedBackPage = () => {
  const [reviewData, setReviewData] = useState({
    location: "",
    name: "",
    email:"",
    review: "",
    rating: 0,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //populating cityArray for React Select
  let cityArray = [];
  cities.map((item) => {
    cityArray.push({ label: item, value: item });
  });
  let cardsArrayData = [];
  for (let i = 0; i < city.length; i++) {
    cardsArrayData.push({
      name: city[i].famous_places[0].place_name,
      image: city[i].famous_places[0].picture,
      description: city[i].famous_places[0].description,
    });
    cardsArrayData.push({
      name: city[i].famous_places[1].place_name,
      image: city[i].famous_places[1].picture,
      description: city[i].famous_places[1].description,
    });
  }

  // react select functions and styles
  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const style = {
    blockquote: {
      fontStyle: "italic",
      fontSize: ".75rem",
      margin: "1rem 0",
    },
    label: {
      fontSize: ".75rem",
      fontWeight: "bold",
      lineHeight: 2,
    },
  };


  function handleFormData(event){

    const {name, value} = event.target
        setReviewData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
  }
  const handleDestinationChange = (selectedOption) => {
    setReviewData((prev) => {
      return { ...prev, location: selectedOption.value };
    });
  };

  function handleRating(event){
    setReviewData((prev) => {
        return { ...prev, rating: event.target.value}
    })
  }

  function handleSubmit(){
    
        // method: 'GET',
       const url='http://localhost:5000/travels/feedback/addReview';
      // const    body={reviewData}
  
    

      axios.post(url, {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: JSON.stringify(reviewData),
        Cache: 'default'
      })
      .then((res)=>{res.json()
              console.log(res)})
      .catch((err)=>{err.json()
          console.log(err)
        });
  }

  return (
    <div>
      <div
          className="banner w-full px-4 py-10
       bg-teal-500 flex-col justify-start items-center"
        >
          <h1 className="text-center font-bold text-5xl">
           Add a review Help others!
          </h1>
          
        </div>
      <div>
        <form className="w-[750px] p-5 mt-10 mb-10 mx-auto rounded-lg border border-gray-300 shadow-xl shadow-gray-200">
        <div className="search-bar mb-3">
          <label className="peer-focus:font-medium text-sm">City Name</label>
        <Select
          aria-labelledby="aria-label"
          inputId="aria-example-input"
          name="aria-live-color"
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          options={cityArray}
          onChange={handleDestinationChange}
          className="w-full"
        />
      </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleFormData}
                value={reviewData.name}
                required
              />
              <label
                for="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Good Name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleFormData}
              value={reviewData.email}
              required
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <label
            for="rating1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Rate your experience
          </label>
          <form className="rating">
            <label>
              <input type="radio" name="stars" value="1" onChange={handleRating} />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" onChange={handleRating}/>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" onChange={handleRating}/>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" onChange={handleRating}/>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" onChange={handleRating}/>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </form>
          <label
            for="review"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Your Review
          </label>
          <textarea
            id="message"
            rows="4"
            name="review"
            className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Share your experience..."
            onChange={handleFormData}
            value={reviewData.review}
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiveFeedBackPage;
