import React from "react";
import { Link } from "react-router-dom";
import timg from '../assets/train.png'

const TrainCard = (props) => {
  return (
    <div className="my-auto mx-auto">
        <Link
          to="https://www.google.com"
          className="flex items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <img
            className="rounded-t-lga md:w-[15%] md:h-[15%] md:rounded-none md:rounded-l-lg"
            src={timg}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
              {props.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Start: {props.start} - End: {props.end}
            </p>
          </div>
        </Link>
    
    </div>
  );
};

export default TrainCard;
