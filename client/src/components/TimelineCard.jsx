import React from "react";

const TimelineCard = (props) => {
  return (
    <div>
      <li className="mb-10 ml-4 w-1/2 mx-auto">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 ">
          {props.city}
        </h3>
      </li>
    </div>
  );
};

export default TimelineCard;
