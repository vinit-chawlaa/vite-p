import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-5 px-5 w-full py-10'>
        <h1 className='text-4xl font-semibold w-auto'>Subscribe now & get 20% off</h1>
        <p className='text-lg text-gray-500 w-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui maiores dicta?</p>
        <div className='flex w-[100%] justify-center px-5 py-3'>
            <input type="email" placeholder='Enter your email id' className='outline outline-gray-500 px-3 py-3 rounded-l-sm w-150'/>
            <button className='bg-orange-600 text-white py-3 cursor-pointer rounded-r-sm px-10'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe