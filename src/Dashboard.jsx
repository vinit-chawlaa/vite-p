import { LayoutDashboard } from 'lucide-react'
import React, { useState } from 'react'

const Dashboard = () => {

  const [expand, setExpand] = useState(false)

  return (
    <div className='w-full h-screen relative bg-gray-700 text-white'>
      <h1 className='text-center text-3xl'>Dashboard</h1>

      <div className={`w-[300px]  bg-gray-900  h-screen absolute top-0 ${expand && '-translate-x-3/4'} transition-all duration-300`}>
       <div className='group'>
        {!expand && <h1 className='left-[26%] absolute text-3xl'>deepseek</h1>}
       <button className={`${expand && 'hidden'}  absolute right-0 rounded-sm cursor-pointer bg-teal-300 text-black p-2`} onClick={() => setExpand(!expand)}><LayoutDashboard /></button>

<div class="w-0 h-0 top-12 right-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[18px] border-b-gray-800 absolute group-hover:block hidden"></div>

<button className='-right-13 top-15 absolute text-white rounded-sm cursor-pointer px-5 py-2 bg-gray-800 group-hover:block hidden'>
  close sidebar
</button>
       </div>
      </div>
      <div className='group'>
        <button className={`absolute left-3.5 ${!expand && 'hidden'} rounded-sm cursor-pointer bg-teal-300 text-black p-2`} onClick={() => setExpand(!expand)}><LayoutDashboard /></button>
        <div class="w-0 h-0 top-19 left-[10px] border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[18px] border-b-gray-800 absolute group-hover:block hidden"></div>

        <button className='left-3 top-23 absolute text-white rounded-sm cursor-pointer px-5 py-2 bg-gray-800 group-hover:block hidden'>
          open sidebar
        </button>
      </div>
    </div>
  )
}

export default Dashboard