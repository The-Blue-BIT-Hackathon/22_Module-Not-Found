import React, { CSSProperties, useState, useEffect } from "react";
import Select, { AriaOnFocus } from "react-select";
import city from "../city";
import Card from "./Card";

const HomePage = () => {
  // states
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [ariaFocusMessage, setAriaFocusMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isRoutesClicked, setIsRoutesClicked] = useState(true);
  const [isStayClicked, setIsStayClicked] = useState(false);
  const [isTravelClicked, setIsTravelClicked] = useState(false);
  const [isOtherPlaceClicked, setIsOtherPlaceClicked] = useState(false);

  //populating cityArray for React Select
  let cityArray = [];
  let cardsArrayData = [];
  for (let i = 0; i < city.length; i++) {
    cityArray.push({ label: city[i].cityname, value: city[i].cityname });
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

  // Code related to react-select
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

  // form onChange functions
  const handleDestinationChange = (selectedOption) => {
    setLocation(selectedOption.value);
  };
  function handleDateChange(event) {
    setDate(event.target.value);
  }

  //Handle search button click
  function handleSubmit(){
    setIsClicked(true);
  }
  //Handle tab clicks
  function handleTabClick(option){
    if(option === 1) {
        setIsRoutesClicked(true);
        setIsStayClicked(false);
        setIsTravelClicked(false);
        setIsOtherPlaceClicked(false);
    }
    else if(option === 2){
        setIsRoutesClicked(false);
        setIsStayClicked(true);
        setIsTravelClicked(false);
        setIsOtherPlaceClicked(false);
    }
    else if(option === 3){
        setIsRoutesClicked(false);
        setIsStayClicked(false);
        setIsTravelClicked(true);
        setIsOtherPlaceClicked(false);
    }
    else if(option === 4){
        setIsRoutesClicked(false);
        setIsStayClicked(false);
        setIsTravelClicked(false);
        setIsOtherPlaceClicked(true);
    }
  }

  //storing popular cards from json into an cardsArray
  let cardsArray = cardsArrayData.map((item) => {
    return (
      <Card
        name={item.name}
        image={item.image}
        description={item.description}
      />
    );
  });

  //styles
  const styles = {
    li:{
        backgroundColor: "cyan"
    }
  }





  return (
    <div>
      <div className="banner w-full p-4 bg-teal-500 flex-col justify-start items-center">
        <h1 className="text-center font-bold text-3xl">
          Where are you planning to go?
        </h1>
        <p className="text-center">lorem erpsun dolor msfnnfl</p>
      </div>
      <div className="selections flex item-center justify-around w-[70%] ml-auto mr-auto p-4 shadow-xl shadow-gray-200 rounded-lg">
        <form className="w-[30%] flex-col justify-center">
          <label
            style={style.label}
            id="aria-label"
            htmlFor="aria-example-input"
            className="w-full"
          >
            Select Destination
          </label>

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
        </form>
        <div className="calendar-container w-[30%] flex-col justify-center">
          <h4 className="mb-2" style={style.label}>Date</h4>
          <input type="date" className="w-full" onChange={handleDateChange} value={date} />
        </div>
        <button onClick={handleSubmit} className="bg-cyan-200 h-8 px-6 rounded-lg my-auto w-[25%]">Search</button>
      </div>
      {!isClicked && <div className="suggestion-container">
        <h2 className="text-center">Something special for you ... </h2>
        <div className="popular-places-cards grid grid-cols-3 gap-4 w-4/5 p-4 ml-auto mr-auto">
            {cardsArray}
        </div>
      </div>}
      {
        isClicked && <ul className="flex gap-3 justify-between items-center p-4 w-3/5 m-auto">
            <li className="w-full text-center p-2 rounded-lg" onClick={()=> handleTabClick(1)} style={{backgroundColor: (isRoutesClicked) && "cyan"}}>Routes</li>
            <li className="w-full text-center p-2 rounded-lg" onClick={()=> handleTabClick(2)} style={{backgroundColor: (isStayClicked) && "cyan"}}>Stay</li>
            <li className="w-full text-center p-2 rounded-lg" onClick={()=> handleTabClick(3)} style={{backgroundColor: (isTravelClicked) && "cyan"}}>Travel</li>
            <li className="w-full text-center p-2 rounded-lg" onClick={()=> handleTabClick(4)} style={{backgroundColor: (isOtherPlaceClicked) && "cyan"}}>Other Places</li>
        </ul>
      }
      {isClicked && isRoutesClicked && <h1>Hey its Route you clicked just now</h1>}
      {isClicked && isStayClicked && <h1>Hey its Stay you clicked just now</h1>}
      {isClicked && isTravelClicked && <h1>Hey its Travel you clicked just now</h1>}
      {isClicked && isOtherPlaceClicked && <h1>Hey its Other Place you clicked just now</h1>}

    </div>
  );
};

export default HomePage;
