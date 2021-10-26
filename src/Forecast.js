import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2 mt-5 text-center">
        <h3> Sun </h3>
        <img
          src="http://openweathermap.org/img/wn/01d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 20º| 16º </h6>
        </div>
      </div>
      <div className="col-2 mt-5 text-md-center">
        <h3> Mon </h3>
        <img
          src="http://openweathermap.org/img/wn/02d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 15º| 10º </h6>
        </div>
      </div>
      <div className="col-2  mt-5 text-md-center">
        <h3> Tue </h3>
        <img
          src="http://openweathermap.org/img/wn/04d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 25º| 19º </h6>
        </div>
      </div>
      <div className="col-2  mt-5 text-md-center">
        <h3> Wed </h3>
        <img
          src="http://openweathermap.org/img/wn/02d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 25º| 19º </h6>
        </div>
      </div>
      <div className="col-2  mt-5 text-md-center">
        <h3> Thu </h3>
        <img
          src="http://openweathermap.org/img/wn/02d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 25º| 19º </h6>
        </div>
      </div>
      <div className="col-2  mt-5 text-md-center">
        <h3> Fri </h3>

        <img
          src="http://openweathermap.org/img/wn/02d.png"
          alt="Clear"
          id="icon"
          className="float-center"
        />
        <div className="mt-2 text-md-center">
          <h6> 25º| 19º </h6>
        </div>
      </div>
    </div>
  );
}
