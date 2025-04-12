import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'




const Project = () => {
    return (

        <div className='w-full pb-10 lg:px-20 px-5' id='project'>
            <motion.h1 initial={{y : -100 , opacity : 0}} viewport={{ once: true }} whileInView={{y : 0 , opacity : 1}} transition={{duration : 0.5}} className='text-4xl py-10'>Work <span className='bg-gradient-to-r from-purple-800 via-purple-500 to-purple-400 bg-clip-text text-transparent font-extrabold'>Experience</span></motion.h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center w-full  gap-10'>
               <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={1500}   glareEnable={false} >
               <motion.div initial={{x : -100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.2}} className='w-full min-h-[300px] hover:shadow-[0_20px_50px_-10px_rgba(109,40,217,0.4)] rounded-3xl border-t-5 border-t-[#4d2289] p-3 bg-gradient-to-tl from-[#2e0a51] via-[#0d0219] to-[rgb(34,6,64)]'>
                    <div className='grid sm:grid-cols-[40%_auto] grid-cols-1 lg:gap-10 gap-5 justify-items-center items-center'>
                        <div>
                            <img src="/ai.png" alt="" className='object-contain h-full w-full' />
                        </div>
                        <div>
                            <h2 className='text-3xl py-5'>AI Image Generator</h2>
                          <p className='text-md text-gray-300'>AI-powered image generator built with Next.js , Hugging Face’s Text-to-Image api and Tailwind CSS and Shadcin Ui.</p>
                        <a href="https://imgiai.vercel.app/" target='_blank'>
                        <button className='px-5 py-2 my-5 cursor-pointer  hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300 text-white rounded-md bg-gradient-to-r from-[#6D28D9] to-[#5B21B6]'>Live Demo</button>
                        </a>
                        </div>
                    </div>
                </motion.div>
               </Tilt>
               <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={1500}   glareEnable={false} >
                <motion.div initial={{x : 100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.4}} className='w-full  min-h-[300px]  hover:shadow-[0_20px_50px_-10px_rgba(109,40,217,0.4)] rounded-3xl border-t-5 border-t-[#4A2084] p-3 bg-gradient-to-tl from-[#2e0a51] via-[#0d0219] to-[rgb(34,6,64)]'>
                    <div className='grid sm:grid-cols-[40%_auto] grid-cols-1 lg:gap-10 gap-5 justify-items-center items-center'>
                        <div>
                            <img src="/yoga.png" alt="" className='object-contain w-full h-full' />
                        </div>
                    
                        <div>
                            <h2 className='text-3xl py-5'>FoodYoga</h2>
                            <p className='text-md text-gray-300'>FoodYoga (Official windows server website) built with Next.js and Tailwind CSS.</p>
                            <a href="https://foodyoga.vercel.app/" target='_blank'>
                            <button className='px-5 py-2 my-5 cursor-pointer  hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300 text-white rounded-md bg-gradient-to-r from-[#6D28D9] to-[#5B21B6]'>Live Demo</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
                </Tilt>
                

                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={1500}   glareEnable={false} >
                <motion.div initial={{x : -100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.6}} className='w-full  min-h-[300px] hover:shadow-[0_20px_50px_-10px_rgba(109,40,217,0.4)] rounded-3xl border-t-5 border-t-[#4A2084] p-3 bg-gradient-to-tl from-[#2e0a51] via-[#0d0219] to-[rgb(34,6,64)]'>
                    <div className='grid sm:grid-cols-[40%_auto] grid-cols-1 lg:gap-10 gap-5 justify-items-center items-center'>
                        <div>
                            <img src="/weather.png" alt="" className='object-contain h-full w-full' />
                        </div>
                        <div>
                            <h2 className='text-3xl py-5'>Weather App</h2>
                            <p className='text-md text-gray-300'>A Weather App built with React.js, Tailwind CSS, and integrated with a real-time Weather API. </p>
                           <a href="https://vinit-chawlaa.github.io/Weathersapp2/" target='_blank'>
                           <button className='px-5 py-2 my-5 cursor-pointer  hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300 text-white rounded-md bg-gradient-to-r from-[#6D28D9] to-[#5B21B6]'>Live Demo</button>
                           </a>
                        </div>
                    </div>
                </motion.div>
                </Tilt>

                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={1500} glareEnable={false}>
                <motion.div initial={{x : 100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.8}} className='w-full min-h-[300px]  hover:shadow-[0_20px_50px_-10px_rgba(109,40,217,0.4)] rounded-3xl border-t-5 border-t-[#4A2084] p-3 bg-gradient-to-tl from-[#2e0a51] via-[#0d0219] to-[rgb(34,6,64)]'>
                    <div className='grid sm:grid-cols-[40%_auto] grid-cols-1 lg:gap-10 gap-5 justify-items-center items-center'>
                        <div>
                            <img src="/man.png" alt="" className='object-contain h-full w-full' />
                        </div>
                        <div>
                            <h2 className='text-3xl py-5'>Portfolio website</h2>
                            <p className='text-md text-gray-300'>Portfolio website built with React.js , Framer Motion , Tailwind CSS and Shadcin Ui.</p>
                            <a href="/">
                            <button className='px-5 py-2 my-5 cursor-pointer  hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300 text-white rounded-md bg-gradient-to-r from-[#6D28D9] to-[#5B21B6]'>Live Demo</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
                </Tilt>
            </div>
        </div>
    )
}

export default Project