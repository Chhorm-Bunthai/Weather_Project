import React from 'react'
import clear from '../assets/weather icons/clear-day.svg'
import clouds from '../assets/weather icons/cloudy.svg'
import mist from '../assets/weather icons/mist.svg'
import snow from '../assets/weather icons/snow.svg'
import rain from '../assets/weather icons/rain.svg'
import drizzle from '../assets/weather icons/drizzle.svg'
import thunderStorm from '../assets/weather icons/thunderstorms.svg'

function TodayWeather({onShowToday}) {
  const s = onShowToday?.weather &&  onShowToday?.weather[0]?.main
  const state = {
    'Clear' : clear,
    'Clouds': clouds,
    'Mist': mist,
    'Snow': snow,
    'Rain': rain,
    'Drizzle':drizzle,
    'Thunderstorm': thunderStorm
  }

  // for current location

  const temp = onShowToday?.main?.temp
  const desc= onShowToday?.weather && onShowToday?.weather[0]?.main 
  const speed= onShowToday?.wind?.speed
  return (
<div className="container">
          <div className="row">
            <div className="col-9 mx-auto input-form">
              <div className="current">
                <div className="logo">
                    <h1 className='today'>Today</h1>
                    <img src={state[s]} alt="" />
                </div>
                <div className="description">
                    <p className='temp'>Temparature  <span className='dis-block'>{temp ? Math.floor(temp) : null}  °C</span></p>
                    <p className='desc'> Description  <span className='dis-block'>{desc}</span></p>
                    <p className='speed'>Speed <span className='speed dis-block'>{speed} km/h</span></p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TodayWeather;