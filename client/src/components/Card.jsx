import React from "react";
import "../index.css";

const Card = (props) => {
  return (
    <div>
      <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg max-w-sm w-full h-[60%]"
            src={props.image}
            alt=""
          />
        </a>
        <div className="p-3 h-[40%]">
          <div className="pl-4 pr-4 flex justify-between items-center">
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.name}
              </h5>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="pl-3 mt-2 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
