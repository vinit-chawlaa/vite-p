import React, { useState } from 'react'

const Color = () => {
    const [color,setColor] = useState('#ccc')
  return (
    <div>
        <h1>Color Picker</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='w-75'/>
        <div className='w-[300px] h-[300px]' style={{backgroundColor : color}}>
        </div>
    </div>
  )
}

export default Color