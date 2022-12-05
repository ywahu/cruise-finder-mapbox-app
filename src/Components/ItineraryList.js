import React from "react";
import Itinerary from "./Itinerary";
import { Select } from "react-materialize-forms";

function Itineraries(props) {
  //console.log("REGIONS", props.getRegions(props.itineraryArr));
  console.log(props);

  function ItineraryList(props) {
    const itineraryListItems = props.itineraries.map((d, i) => (
      <Itinerary
        key={i}
        imageSrc={d.image}
        itineraryName={d.title}
        shortDescription={d.shortDescription}
        ships={d.ships}
        id={i}
        viewMap={props.viewMap}
        fromCity={d.fromCity}
        toCity={d.toCity}
        numberOfDays={d.numberOfDays}
      />
    ));
    return (
      <div className="container">
        <div className="row">{itineraryListItems}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <Select
              data={props.regions}
              onChange={props.handleChange}
              placeholder="Choose a Region"
            />
            <p>Found {props.tripCount} Trips from Uniworld River Cruises</p>
          </div>
        </div>
      </div>
      <ItineraryList
        itineraryArr={props.itineraryArr}
        itineraries={props.itineraries}
        viewMap={props.viewMap}
        chooseYear={props.chooseYear}
      />
    </div>
  );
}
export default Itineraries;
