import React, { useState } from 'react'

const emojis = {
    angry : '😡',
    happy : '😊',
    pen : '🖊️',
    gift : '🎁',
}

const Emoji = () => {

    const [value,setValue] = useState('')

    const handlechange = (e) => {
        const values = e.target.value 
        setValue(values)
         
       if(emojis[values])
       {
        setValue(emojis[values])
       }
      
          
     }

   
   
  return (
    <div className='w-full h-screen bg-sky-400'>
        <h1 className='text-3xl text-center'>Emoji Generator</h1>
        <div className='flex justify-center my-5'>
            <input type="text" className='outline text-3xl p-2' value={value} onChange={handlechange}/>
        </div>
    </div>
  )
}

export default Emoji