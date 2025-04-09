import React from "react";
import { Link } from "react-scroll";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="w-full lg:px-20 px-5 py-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">
        <div>
          <h1 className="text-5xl">
            <span className="bg-gradient-to-r from-purple-800 via-purple-500 to-purple-400 bg-clip-text text-transparent font-extrabold">
              About
            </span>{" "}
            me
          </h1>
          <motion.p whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}} transition={{duration : 0.3}} className="text-md pt-10 pb-5 leading-8">
            I'm a passionate Full-Stack Web Developer skilled in HTML, CSS,
            JavaScript, along with modern tools like React.js, Next.js, Tailwind
            CSS, and Bootstrap for creating responsive and dynamic frontends. On
            the backend, I work with Node.js, Express.js, and MongoDB to build
            scalable and efficient web applications.
          </motion.p>

          <div className="pb-15 flex flex-col gap-4 pt-5">
  <motion.div whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}} transition={{duration : 0.5}} className="flex items-center gap-6">
    <h2 className="sm:min-w-32 min-w-25 font-medium">HTML & CSS</h2>
    <span className="flex-1 h-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 rounded-full"></span>
  </motion.div>
  <motion.div whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}} transition={{duration : 0.8}} className="flex items-center gap-6">
    <h2 className="sm:min-w-32 w-20 font-medium">React JS</h2>
    <span className="w-[60%] h-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 rounded-full"></span>
  </motion.div>
  <motion.div whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}} transition={{duration : 1}} className="flex items-center gap-6">
    <h2 className="sm:min-w-32 w-20 font-medium">JavaScript</h2>
    <span className="w-[65%] h-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300  rounded-full"></span>
  </motion.div>
  <motion.div whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}} transition={{duration : 1.2}} className="flex items-center gap-6">
    <h2 className="sm:min-w-32 w-20 font-medium">Next JS</h2>
    <span className="w-[50%] h-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300  rounded-full"></span>
  </motion.div>
</div>


         <Link to='contact' smooth={true} duration={500} offset={-70}>
         <motion.button whileInView={{opacity : 1 , x : 0}} initial={{x : -100, opacity : 0}}  transition={{duration : 0}} className="px-5 py-2 hover:bg-purple-600 text-white rounded-md cursor-pointer bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300">
            Contact Me
          </motion.button>
         </Link>
        </div>

        <div>
        <motion.img src='/hero.jpeg' whileInView={{opacity : 1 , x : 0}} initial={{x : 100, opacity : 0}} transition={{duration : 0.5}}  width={500} height={100} className='animate-[float_3s_ease-in-out_infinite] rounded-full shadow-[0_0_30px_20px_rgba(88,28,135,0.6)] transition duration-500 hover:shadow-[0_0_40px_20px_rgba(139,92,246,0.8)] border-5 border-purple-500 cursor-pointer' alt='not found'/>
        </div>
      </div>
    </div>
  );
};

export default About;
