import React, { useState, useEffect} from 'react';

const Time = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const diplayTime = () => {
    let hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const meridiem = hours <= 12 ? "AM" : "PM";

    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(mins)}:${addZero(secs)} ${meridiem}`;
  }

  const addZero = (num) => {
    return (num < 10 ? "0" : "" ) + num;
  }

  return (


    <div className='text-lg font-semibold text-accent-color'>
      <p>{diplayTime()}</p>
    </div>

  )
}

export default Time;
