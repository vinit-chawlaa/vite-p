import React, {  useState } from 'react'

const Input = () => {

    const arr = ['Task 1' , 'Task 2' , 'Task 3']
    const [btn,setBtn] = useState('')
    const [inputs,setInputs] = useState([...arr])
    const [index,setIndex] = useState(null)
 

    const handlechange = (e,idx) => {
        const value = e.target.value
        const oldata = [...inputs] 
        oldata[idx] = value
        setInputs(oldata)   
    }

    const handleclick = (idx) => {
     if(index === idx) 
     {
      setIndex(null)
     }
      
     else{
      setIndex(idx)
     }

       
    }

 
    
    
  return (
    <div className='w-full h-screen bg-emerald-400 flex items-center flex-col py-5'>
        <div>
            {arr.map((item,idx) => (
              <div className='flex justify-center gap-10' key={idx}>
                  {
                    index === idx &&  <input type="text" className='outline  px-2 h-15 my-5 text-2xl' onChange={(e) => handlechange(e,idx)} value={inputs[idx]}  />
                  }
                  <button key={idx} className={`text-3xl bg-purple-600 my-5 px-5 py-2 rounded-md cursor-pointer ${index === idx ? 'hidden' : 'block'}`} value={btn} onChange={(e) => setBtn(e.target.value)}>{inputs[idx] === '' ? item : inputs[idx]}</button>
                  <button className='bg-blue-500 px-5 py-2 my-5 rounded-md cursor-pointer' onClick={() => handleclick(idx)}>{index === null ? 'Rename' : 'Update'}</button>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Input