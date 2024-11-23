import React from 'react'
import './Digitalclock.css'
import  { useEffect, useState } from 'react'

export const Digitalclock = () => {
    const[time,setTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());
        },1000);
        return () => clearInterval(timer);

    },[]);
    const formatHour = (hour)=>{
      return hour == 0?12:hour>12?hour-12:hour;
    }

    const formatTimewithZero =(num)=>{
      return num<10? `0${num}`:num;
    }
    const formatDate=(date)=>{
      const options ={weekday:"long",year:"numeric",month:"long",day:"numeric"}
      return date.toLocaleDateString(undefined,options)
    }

  return (
    <>

    <div className="digitalclock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimewithZero(formatHour(time.getHours()))}:{formatTimewithZero(time.getMinutes())}:{formatTimewithZero(time.getSeconds())}
          {time.getHours() >= 12?" PM" :" AM"}
        </div>
        <div className="day">{formatDate(time)}</div>
    </div>
    </>
  )
}
