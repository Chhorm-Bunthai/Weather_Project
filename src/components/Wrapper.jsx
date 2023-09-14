import { useState, useEffect } from 'react';
import React from 'react'
import Location from './Location';
import Time from './Time';
import ShowWeather from './ShowWeather';
import axios from 'axios';
import TodayWeather from './TodayWeather';
import Spinner from '../assets/spinning-dots.svg'

function Wrapper() {

  // fetching current day
  const [value, setValue] = useState([]);
  // API next for days
  const [daysApi, setDayApi] = useState([])

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
  // second api for next 4 days
  const urlForDays = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=1ed49b57432b841036895e62c128d585&units=metric`
  const fetchDataForWeek = async() =>{
    const fetchDaysData = await axios(urlForDays);
    setDayApi(fetchDaysData.data)
    console.log('fhfh',daysApi)
  }
  useEffect(() => {
    fetchData();
    fetchDataForWeek();
  }, []);
  console.log('fhfh',daysApi)
  return (
    <>
    {value.length == 0 ? <div className="loading">
      
      <div>
      <h1>App is loading</h1>
      <img src={Spinner} alt="" /></div>
    </div> : <main>
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
        <TodayWeather onShowToday={value}/>
      </section>
      <footer>
        <ShowWeather days={daysApi} onDate={daysApi}/>
      </footer>
    </main>}
    </>
  )
}

export default Wrapper;