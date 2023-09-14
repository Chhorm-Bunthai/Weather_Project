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
        <h1 className='clock'> {formattedTime}</h1>
        {onDate ? <p>{(day.toUTCString()).slice(0,16)}</p>:null}
    </div>
  )
}

export default Time;