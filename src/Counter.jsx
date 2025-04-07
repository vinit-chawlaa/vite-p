import React, { useState } from 'react'
import { Countercontext } from './Countercontext'
import Child from './Child'

const Counter = () => {
  
    const [count,setCount] = useState(0)


  return (
    <Countercontext.Provider value={{count , setCount}}>
        <h1 className='text-4xl'>Counter with context api</h1>
        <Child/>
    </Countercontext.Provider>
  )
}

export default Counter