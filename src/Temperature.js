import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col">
          <div className="clearfix weather-temperature">
            <img
              src="http://openweathermap.org/img/wn/02d.png"
              alt="Clear"
              id="icon"
              className="float-left"
              width="80px"
            />
            <div className="float-left">
              <strong className="temperature">19</strong>
              <span className="units">
                <a href="#" id="celsius-link">
                  {props.Celsius} ºC
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  {props.fahrenheit} ºF
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 forecast-temp">
          <ul>
            <li>
              Humidity: <span id="humidity">84</span>%
            </li>
            <li>
              Wind: <span id="wind">1</span>km/h
            </li>
          </ul>
        </div>
      </div>{" "}
    </div> /*Temperature*/
  );
}
