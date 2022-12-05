import React from "react";

function DayToDay(props) {
  //console.log("day 2 Day", props);
  return (
    <div>
      <h6>{`Day ${props.dayNumber} ${props.city}, ${props.country}`}</h6>
      <p>{props.overview}</p>
    </div>
  );
}

export default DayToDay;
