import React from 'react'
// import logo from "../assets/indigo.webp";

const FlightCard = (props) => {
    console.log(props.obj.img);
  return (
    <div className="block my-5 w-[60%] rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <div className="flex justify-between items-center">
          <img className="mx-5" src={props.obj.img} alt="" height={100} width={100} />

          <div className="flex flex-col justify-center items-center">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {props.obj.arr_time}
            </h5>

            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
              {props.obj.src_city}
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {props.obj.arr_date}
            </p>
          </div>
          <div className="flex-col justify-center">
            {props.obj.int_stops && props.obj.int_stops.length ? <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
             {props.obj.int_stops.length} intermediate stops 
            </h5> : <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            No intermediate stops
            </h5>   }

            <div className="bg-teal-800 h-1 w-20 mx-auto"></div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {props.obj.dep_time}
            </h5>
            

            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
              {props.obj.dest_city}
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {props.obj.dep_date}
            </p>
          </div>
        </div>
      </div>
  )
}

export default FlightCard
