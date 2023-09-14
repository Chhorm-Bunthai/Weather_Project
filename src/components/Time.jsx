import React, { useEffect, useState } from 'react'

function Time({onDate}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const handleTime = ()=>{
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    const clear = () =>{
        clearInterval(time);
    }
    return clear;
  }

  useEffect(() => {
    handleTime();
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const day = new Date(onDate * 1000) 
  return (
    <div className='date'>
        {onDate ? <h1 className='date'>{(day.toUTCString()).slice(0,16)}</h1>:null}
        <p className='clock'> {formattedTime}</p>
    </div>
  )
}

export default Time;