import React from "react";

function Itinerary(props) {
  console.log(props);
  const Ships = () => {
    let shipsList = "";
    let shipsArr = [];
    if (props.ships.length === 1) {
      shipsList = `Ship: ${props.ships[0].Title}`;
    } else {
      for (let i = 0; i < props.ships.length; i += 1) {
        shipsArr.push(props.ships[i].Title);
      }
      let tempShipList = shipsArr.join(", ");
      shipsList = `Ships: ${tempShipList}`;
    }
    return <span>{shipsList}</span>;
  };

  return (
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img src={props.imageSrc} alt="" />
          <span className="card-title">{props.itineraryName}</span>
        </div>
        <div className="card-content">
          <p>
            <h6>
              {props.numberOfDays} days from {props.fromCity} to {props.toCity}
              <br />
              <Ships />
            </h6>
          </p>
          <p>{props.shortDescription}</p>
        </div>
        <div className="card-action">
          <button
            className="waves-effect waves-light btn"
            onClick={() => props.viewMap(props.id)}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
