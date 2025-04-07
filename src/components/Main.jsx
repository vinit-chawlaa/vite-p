import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import { Toaster } from 'sonner'
import Skills from './Skills'


const Main = () => {
  return (
    <div className='bg-[#11071F] text-white w-full'>
        <Navbar/>
        <Hero/>
        <Project/>
        <About/>
        <Skills/>
        <Contact/>
        <Toaster/>
    </div>
  )
}

export default Main