import React, { useEffect, useState } from 'react'

const Dates = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    return () => clearInterval(interval)
    },[])

   console.log(time)

  return (
    <div>
        <h1>Current Time : {time}</h1>
      
    </div>
  )
}

export default Dates