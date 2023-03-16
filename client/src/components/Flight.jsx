import React from 'react'
import {useState, useEffect} from 'react'

const Flight = (props) => {
    const [flightDetails, setFlightDetails] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/getFlights/${props.src}/${props.dest}/${props.date}`)
        .then((res) =>{
         return res.json()
        })
        .then(data => {
           console.log(data);
           setFlightDetails(data);
        })
     }, [props.src, props.dest, props.date] );
  return (
    <div>
      
    </div>
  )
}

export default Flight
