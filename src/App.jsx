import { useState, useEffect } from "react";
import "./App.css";
// import Wrapper from './components/Wrapper'
import Location from "./components/Location";
import DailyWeather from "./components/DailyWeather";
import Time from "./components/Time";
import TodayWeather from "./components/TodayWeather";
import axios from "axios";
import Spinner from "./assets/spinning-dots.svg";

function App() {
  // fetching current day
  const [value, setValue] = useState([]);
  // API next for days
  const [daysApi, setDayApi] = useState([]);

  function FetchData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const currUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1ed49b57432b841036895e62c128d585&units=metric`;
        const urlForDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=1ed49b57432b841036895e62c128d585&units=metric`;
        try {
          // fetch currrent data
          const res = await axios(currUrl);
          // second api for next 4 days
          const fetchDaysData = await axios(urlForDays);
          setValue(res.data);
          setDayApi(fetchDaysData.data);
          // console.log(res.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    } else {
      console.log("Location is not support");
    }
  }
  // console.log(daysApi)
  useEffect(() => {
    FetchData();
  }, []);
  console.log(daysApi);
  return (
    <>
      {value.length == 0 ? (
        <div className="loading">
          <img src={Spinner} alt="Weather Icon for today" />
          <p>Data is loading</p>
        </div>
      ) : (
        <main>
          <section className="top">
            <div className="container">
              <div className="row mx-auto justify-content-center align-items-center">
                <div className="col-md g-0 ">
                  <Time onDate={value.dt} />
                </div>
                <div className="col-md g-0">
                  <Location onLocation={value} />
                </div>
              </div>
            </div>
            <TodayWeather onShowToday={value} />
          </section>
          <footer>
            <DailyWeather days={daysApi} onDate={daysApi} />
          </footer>
        </main>
      )}
      ;
    </>
  );
}

export default App;
