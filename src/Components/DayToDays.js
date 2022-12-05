import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  LinearInterpolator,
  FlyToInterpolator
} from "react-map-gl";
import DayToDayCarousel from "./DayToDayCarousel";
// 3rd-party easing functions
//import d3 from "d3-ease";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFzb255d2FodSIsImEiOiJjazFsOWJheGgwM2FsM2N0aGF2cTh2bGcyIn0.uTaTjM9ouuYwTwntNC4xIA";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

function DayToDays(props) {
  console.log(props.viewport);
  const [dayNumber, setDayNumber] = useState(0);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "50vh",
    longitude: props.mapStartView.longitude,
    latitude: props.mapStartView.latitude,
    zoom: 4,
    transitionDuration: 3000
  });

  function renderCityMarker() {
    const themarkers = props.currentItinerary.dayToDays[0].map((d, i) => (
      <Marker
        key={i}
        longitude={Number(d.city.Longitude)}
        latitude={Number(d.city.Latitude)}
      >
        <svg
          height="20"
          viewBox="0 0 24 24"
          style={{
            cursor: "pointer",
            fill: "#2E3D49",
            stroke: "none",
            transform: `translate(${-20 / 2}px,${-20}px)`
          }}
          // onClick={() => onClick(city)}
        >
          <path d={ICON} />
        </svg>
      </Marker>
    ));
    return themarkers;
  }

  const viewNextDay = () => {
    const city = {
      width: viewport.width,
      height: viewport.height,
      transitionDuration: 3000,
      latitude: Number(
        props.currentItinerary.dayToDays[0][dayNumber].city.Latitude
      ),
      longitude: Number(
        props.currentItinerary.dayToDays[0][dayNumber].city.Longitude
      ),
      zoom: 12,
      transitionInterpolator: new FlyToInterpolator()
      //...itinerary[0].dayToDay[dayNumber].day
      //transitionEasing: d3.easeCubic
    };
    if (props.currentItinerary.dayToDays[0].length - 1 > dayNumber) {
      setDayNumber(dayNumber + 1);
    } else {
      setDayNumber(0);
    }
    setViewport(city);
  };

  const goToDay = day => {
    let dayCity = {};
    if (day !== 0) {
      dayCity = {
        width: viewport.width,
        height: viewport.height,
        transitionDuration: 3000,
        latitude: Number(
          props.currentItinerary.dayToDays[0][day - 1].city.Latitude
        ),
        longitude: Number(
          props.currentItinerary.dayToDays[0][day - 1].city.Longitude
        ),
        zoom: 12,
        transitionInterpolator: new FlyToInterpolator()
      };
    } else {
      dayCity = {
        width: viewport.width,
        height: viewport.height,
        longitude: props.mapStartView.longitude,
        latitude: props.mapStartView.latitude,
        zoom: 4,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator()
      };
    }
    setViewport(dayCity);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 changeview">
          <div
            className="changeview__link"
            onClick={() => props.viewItineraryList()}
          >
            <i className="material-icons left">arrow_back</i> Back To
            Itineraries
          </div>
        </div>
        <div className="col s12">
          <div className="map">
            <ReactMapGL
              {...viewport}
              onViewportChange={setViewport}
              mapStyle="mapbox://styles/mapbox/light-v10"
              mapboxApiAccessToken={MAPBOX_TOKEN}
            >
              {renderCityMarker()}
            </ReactMapGL>
          </div>
        </div>
      </div>
      <div className="row">
        <DayToDayCarousel
          viewNextDay={viewNextDay}
          dayNumber={dayNumber}
          goToDay={goToDay}
          currentItinerary={props.currentItinerary}
          dayToDays={props.currentItinerary.dayToDays}
        />
      </div>
    </div>
  );
}

export default DayToDays;
