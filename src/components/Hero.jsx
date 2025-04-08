'use client'

import { Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {

  const elref = useRef(null)

  const defaultText = ['Web Developer' , 'UI UX Designer' , 'Problem Solver']


  useEffect(() => {
   const options = {
    strings : defaultText,
    typeSpeed : 60,
    backSpeed : 60,
    loop : true,
    backDelay : 1000,
  }

  const typed = new Typed(elref.current , options)

  return () => {
    typed.destroy()
  }
  },[])


  return (
    <div className='px-5 lg:px-20 py-30 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center w-full items-center' id='home'>
       <div className='lg:max-w-[600px]'>
       <div className='flex flex-col gap-3'>
       <h1 className='text-3xl lg:text-left text-center'>Hello I'm</h1>
        <h1 className='bg-gradient-to-r lg:text-left text-center text-5xl from-purple-800 via-purple-500 to-purple-400 bg-clip-text text-transparent font-extrabold'>Vinit Chawla</h1>
       <h1 className='text-3xl lg:text-left text-center'>
           <span ref={elref}></span>
        </h1>
       </div>
        <p className='py-5 lg:text-left text-center'>I craft high-performance, responsive web applications that blend aesthetics with functionality.
        With a focus on clean code and scalable architecture, I help brands thrive online.</p>

       
     <div className='flex sm:flex-row flex-col gap-7 py-5 lg:justify-start justify-center items-center lg:items-start'>
   <div>
   <a href="/vinit.pdf" download>
   <button className='px-5 py-2   text-white rounded-md cursor-pointer bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300'>Downlaod CV </button>
   </a>
   </div>
      <div className='flex gap-3'>
        <a href="https://github.com/vinit-chawlaa">
        <Github className='cursor-pointer hover:rotate-360 bg-gradient-to-r from-[#111260] to-[#302eb9] p-2 rounded-full hover:from-[#302eb9] hover:to-[#111260] transition-all duration-300' size={45}/>
        </a>
        <Twitter className='cursor-pointer hover:rotate-360  bg-gradient-to-r from-[#111260] to-[#302eb9] p-2 rounded-full hover:from-[#302eb9] hover:to-[#111260] transition-all duration-300' size={45}/>
        <Facebook className='cursor-pointer hover:rotate-360  bg-gradient-to-r from-[#111260] to-[#302eb9] p-2 rounded-full hover:from-[#302eb9] hover:to-[#111260] transition-all duration-300' size={45}/>
        <Linkedin className='cursor-pointer hover:rotate-360  bg-gradient-to-r from-[#111260] to-[#302eb9] p-2 rounded-full hover:from-[#302eb9] hover:to-[#111260] transition-all duration-300' size={45}/>
      </div>
     </div>
       </div>

       <div className='py-5'>
        <img src='/hero.jpeg' width={500} height={100} className='animate-[float_3s_ease-in-out_infinite] rounded-full shadow-[0_0_30px_20px_rgba(88,28,135,0.6)] transition duration-500 hover:shadow-[0_0_40px_20px_rgba(139,92,246,0.8)] border-5 border-purple-500 cursor-pointer' alt='not found'/>
       </div>
    </div>
  )
}

export default Hero