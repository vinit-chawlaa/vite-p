import React from 'react'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='w-full  border-t-2 border-t-purple-500 flex justify-between items-center lg:px-20 lg:flex-row flex-col py-5'>
        <p className='text-md'>© 2025. All rights reserved.</p>
       <div className='flex flex-row items-center justify-center'>
        <img src="/vc1.png" alt="" className='w-20'/>
       <h1 className='font-semibold'>Vinit Chawla</h1>
       </div>
      <div className='flex lg:flex-row items-center flex-col gap-5 lg:gap-0 justify-center'>
      <p className='text-lg text-left'>Have a project in mind? Let’s connect!</p>
        <Link to='contact' smooth={true} offset={-70} duration={500}>
        <button className="px-5 py-2 mx-5   text-white rounded-md cursor-pointer bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300">
            Say Hello
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Footer