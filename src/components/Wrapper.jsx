import { useState, useEffect } from 'react';
import React from 'react'
import Location from './Location';
import Time from './Time';
import SearchBar from './SearchBar';
import ShowWeather from './ShowWeather';
import axios from 'axios';

function Wrapper() {

  // fetching current day
  const [value, setValue] = useState([]);

  function  fetchData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const currUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1ed49b57432b841036895e62c128d585&units=metric`;
        try {
          const res = await axios(currUrl);
          setValue(res.data);
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    } else {
      console.log("Geolocation not supported");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
    <section className="top">
      <div className="container">
        <div className="row mx-auto justify-content-center align-items-center">
          <div className="col-md g-0 ">
            <Time onDate={value.dt}/>
          </div>
          <div className="col-md g-0">
            <Location onLocation={value}/>
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
    <footer>
      <ShowWeather/>
    </footer>
  </main>
  )
}

export default Wrapper;