import React from "react";
import clear from "../assets/weather icons/clear-day.svg";
import clouds from "../assets/weather icons/cloudy.svg";
import mist from "../assets/weather icons/mist.svg";
import snow from "../assets/weather icons/snow.svg";
import rain from "../assets/weather icons/rain.svg";
import drizzle from "../assets/weather icons/drizzle.svg";
import thunderStorm from "../assets/weather icons/thunderstorms.svg";

function ShowWeather({ days, onDate }) {
  // Create variable for fetching days
  const nextOneDays = new Date(onDate?.list && onDate.list[8].dt * 1000);
  const nextTwoDays = new Date(onDate?.list && onDate.list[16].dt * 1000);
  const nextThreedays = new Date(onDate?.list && onDate.list[24].dt * 1000);
  const nextFourthdays = new Date(onDate?.list && onDate.list[32].dt * 1000);

  // Catching description for display icons
  const displayDay1 = days?.list && days?.list[8].weather && days?.list[8].weather[0].main;
  const displayDay2 = days?.list && days?.list[16].weather && days?.list[16].weather[0].main;
  const displayDay3 = days?.list && days?.list[24].weather && days?.list[24].weather[0].main;
  const displayDay4 = days?.list && days?.list[32].weather && days?.list[32].weather[0].main;
  const state = {
    Clear: clear,
    Clouds: clouds,
    Mist: mist,
    Snow: snow,
    Rain: rain,
    Drizzle: drizzle,
    Thunderstorm: thunderStorm,
  };

  return (
    <div className="show-weather">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-3 ">
            <div className="block">
              {onDate ? (
                <p>{nextOneDays.toUTCString().slice(0, 3).toUpperCase()}</p>
              ) : null}
              <div className="weather-icons">
                <img src={state[displayDay1]} alt="" />
              </div>
              {onDate ? (
                <p>
                  {Math.floor(onDate?.list && onDate.list[6]?.main?.temp)} °C
                </p>
              ) : null}
            </div>
          </div>
          <div className="col-3">
            <div className="block">
              {onDate ? (
                <p>{nextTwoDays.toUTCString().slice(0, 3).toUpperCase()}</p>
              ) : null}
              <div className="weather-icons">
                <img src={state[displayDay2]} alt="" />
              </div>
              {onDate ? (
                <p>
                  {Math.floor(onDate?.list && onDate.list[13]?.main?.temp)} °C
                </p>
              ) : null}
            </div>
          </div>
          <div className="col-3">
            <div className="block">
              {onDate ? (
                <p>{nextThreedays.toUTCString().slice(0, 3).toUpperCase()}</p>
              ) : null}
              <div className="weather-icons">
                <img src={state[displayDay3]} alt="" />
              </div>
              {onDate ? (
                <p>
                  {Math.floor(onDate?.list && onDate.list[21]?.main?.temp)} °C
                </p>
              ) : null}
            </div>
          </div>
          <div className="col-3">
            <div className="block">
              {onDate ? (
                <p>{nextFourthdays.toUTCString().slice(0, 3).toUpperCase()}</p>
              ) : null}
              <div className="weather-icons">
                <img src={state[displayDay4]} alt="" />
              </div>
              {onDate ? (
                <p>
                  {Math.floor(onDate?.list && onDate.list[30]?.main?.temp)} °C
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowWeather;
