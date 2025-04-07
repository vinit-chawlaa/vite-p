import React, { useState } from 'react'

const Password = () => {

    const [value,setValue] = useState('weak')
    const [inputs,setInputs] = useState('')

    const handlechange = (e) =>{
    const inputvalue = e.target.value
    setInputs(inputvalue)

    if(inputvalue.length > 0 && inputvalue.length < 4)
    {
        setValue('weak')
    }

    else if (inputvalue.length > 4 && inputvalue.length < 8)
    {
        setValue('medium')
    }

    else if(inputvalue.length > 8){
        setValue('strong')
    }

    else if (inputvalue.length === 0){
        setValue('weak')
    }
    }

  return (
    <div className='flex justify-center'>
       <div className='flex justify-center flex-col'>
       <h1 className='font-bold text-4xl py-4'>Password Strength Checker</h1>
       <input type="text" className='border px-3 py-3 text-2xl outline-none' value={inputs} onChange={handlechange} placeholder='Enter your Password'/>
       <h2 className='py-3'>Strength : <span className={`${value === 'weak' ? 'text-red-600' : 'text-blue-600'} ${value === 'strong' ? 'text-green-600' : ''}`}>{value}</span></h2>
       </div>
    </div>
  )
}

export default Password