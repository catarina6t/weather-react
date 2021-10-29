import React from "react";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search() {
  return (
    <div className="Master1">
      <div className="container">
        <div class="weather-app-wrapper">
          <div class="row">
            <div class="col-12">
              <form id="search-form" className="nb-3">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </form>
            </div>
            <div className="col-12">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-200"
                id="search-button"
              />
            </div>
          </div>
          <div className="overview">
            <br />
            <h1 className="city">Porto</h1>
          </div>
        </div>
        <Temperature />
        <Forecast />
        <h3 className="update"> Last Updated Sunday 22:33 || Clear Sky </h3>
      </div>
      <h3 className="update-by"> Open-source by Cate </h3>
    </div> /*MASTER*/
  );
}
