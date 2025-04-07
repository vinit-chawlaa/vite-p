import React, { useEffect, useRef, useState } from 'react'

let NoOfInputs = 4

const Otp = () => {
    
    const refarr = useRef([])

    const [inputs,setInputs] = useState(new Array(NoOfInputs).fill(''))


    useEffect(() => {
      refarr.current[0].focus()
    },[])

    const handlechange = (e,idx) => {
      const value = e.target.value
      
      if(isNaN(value)) return;

      const copy = [...inputs]
      copy[idx] = value.slice(-1)
      setInputs(copy)
      value.trim() && refarr.current[idx + 1]?.focus()
    }


    const handlekeydown = (e,idx) => {
      if(!e.target.value && e.key === 'Backspace')
      {
        refarr.current[idx - 1]?.focus()
      }

      if(e.key === 'ArrowRight')
        {
          refarr.current[idx+1]?.focus()
        }

      if(e.key === 'ArrowLeft')
      {
        refarr.current[idx-1]?.focus()
      }
      
    }

  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-4'>Otp Component</h1>
        <div className='flex gap-5 my-4 justify-center'>
            {inputs.map((item,idx) => (
                <input type="text" key={idx} className='outline w-20 py-4 px-2 text-3xl text-center' value={item} onChange={(e)=> handlechange(e,idx)} ref={(input) => (refarr.current[idx] = input)} onKeyDown={(e) => handlekeydown(e,idx)}/>
            ))}
        </div>
    </div>
  )
}

export default Otp