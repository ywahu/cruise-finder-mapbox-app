import React from "react";

function Loader(props) {
  if (props.loadItineraries) {
    return (
      <div className="container">
        <div className="row center-align">
          <div className="progress">
            <div className="indeterminate" />
          </div>
          Loading trips from Uniworld.com
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row center-align">
        <button
          className="itin-load-button waves-effect waves-light btn-large"
          onClick={() => props.callData()}
        >
          Load Trips from Uniworld
        </button>
      </div>
    </div>
  );
}

export default Loader;
