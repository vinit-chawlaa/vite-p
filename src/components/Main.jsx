import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import { Toaster } from 'sonner'
import Skills from './Skills'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'



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
        <ScrollToTop smooth color="#fff"
        style={{
          display : 'flex', 
          justifyContent : 'center',
          alignItems : 'center',
          background: "linear-gradient(to right, #4c1d95, #6b21a8, #9333ea)",
          borderRadius: "9999px",
          padding: "12px",
          boxShadow: "0 4px 10px rgba(147, 51, 234, 0.4)", 
          right: "1.5rem",
          bottom: "1.5rem",
          zIndex: 100,
        }}/>
        <Footer/>
    </div>
  )
}

export default Main