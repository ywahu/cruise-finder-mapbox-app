import React, { useState } from "react";
import DayToDays from "./DayToDays";
import ItineraryList from "./ItineraryList";

function Layout(props) {
  //console.log("Layout", props);
  const [itineraryId, setItineraryID] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [mapStartView, setMapStartView] = useState({
    longitude: 2.352222,
    latitude: 48.856613
  });

  function viewMap(id) {
    const daytoDay = props.itineraries[id].dayToDays[0];
    let startingCoordinates = Math.floor(daytoDay.length / 2);
    setShowMap(true);
    setItineraryID(id);
    setMapStartView({
      longitude: Number(daytoDay[startingCoordinates].city.Longitude),
      latitude: Number(daytoDay[startingCoordinates].city.Latitude)
    });
    window.scrollTo(0, 0);
  }
  function viewItineraryList() {
    setShowMap(false);
  }

  if (showMap) {
    console.log(showMap);
    return (
      <main>
        <DayToDays
          currentItinerary={props.itineraries[itineraryId]}
          viewItineraryList={viewItineraryList}
          itineraries={props.itineraries}
          itinerariesArr={props.itinerariesArr}
          mapStartView={mapStartView}
        />
      </main>
    );
  }
  return (
    <main>
      <ItineraryList
        viewMap={viewMap}
        itineraryArr={props.itineraryArr}
        itineraries={props.itineraries}
        regions={props.regions}
        tripCount={props.tripCount}
        handleChange={props.handleChange}
      />
    </main>
  );
}

export default Layout;
