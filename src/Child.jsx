import React, { useContext } from 'react'
import { Contexthook } from './Countercontext'

const Child = () => {

    const {count,setCount} = Contexthook()

    const handleincrement = () => {
        setCount((prev) => prev + 1)
    }

   

  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={handleincrement}>increment</button>
    </div>
  )
}

export default Child