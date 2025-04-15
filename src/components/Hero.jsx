"use client";

import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const elref = useRef(null);

  const defaultText = ["Web Developer", "UI UX Designer", "Problem Solver"];

  useEffect(() => {
    const options = {
      strings: defaultText,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      backDelay: 1000,
    };

    const typed = new Typed(elref.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div
      className="px-5 lg:px-20 py-30 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center w-full items-center"
      id="home"
    >
      <div className="lg:max-w-[600px]">
        <div className="flex flex-col gap-3">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl lg:text-left text-center"
          >
            Hello I'm
          </motion.h1>
          <motion.h1
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r lg:text-left text-center text-5xl from-purple-800 via-purple-500 to-purple-400 bg-clip-text text-transparent font-extrabold"
          >
            Vinit Chawla
          </motion.h1>
          <motion.h1
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="text-3xl lg:text-left text-center"
          >
            <span ref={elref}></span>
          </motion.h1>
        </div>
        <motion.p
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          className="py-5 lg:text-left text-center"
        >
          I craft high-performance, responsive web applications that blend
          aesthetics with functionality. With a focus on clean code and scalable
          architecture, I help brands thrive online.
        </motion.p>

        <motion.div
          variants={container(0.8)}
          initial="hidden"
          animate="visible"
          className="flex sm:flex-row flex-col gap-7 py-5 lg:justify-start justify-center items-center lg:items-start"
        >
          <div>
            <a href="/vinit_new.pdf" download target="_blank">
              <button className="px-5 py-2   text-white rounded-md cursor-pointer bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300">
                Downlaod CV{" "}
              </button>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/vinit-chawlaa" target="_blank">
              <Github
                className="cursor-pointer hover:rotate-360 border-purple-500 border-2 rounded-full p-2 transition-all duration-300"
                size={45}
              />
            </a>
            <a href="https://wa.me/9116494204" target="_blank">
              <FaWhatsapp
                className="cursor-pointer hover:rotate-360 border-purple-500 border-2 rounded-full p-2 transition-all duration-300"
                size={45}
              />
            </a>
  
           <a href="https://vercel.com/vinits-projects-c27651a5" target="_blank">
           <div className="border-2 border-purple-500 p-3 rounded-full cursor-pointer hover:rotate-[360deg] transition-all duration-300">
              <img
                src="https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg"
                alt="Vercel Logo"
                className="invert"
                style={{ width: 19, height: 19 }}
              />
            </div>
           </a>
            <a
              href="https://www.linkedin.com/in/vinit-chawlaa-4a351a346/"
              target="_blank"
            >
              <Linkedin
                className="cursor-pointer hover:rotate-360 border-purple-500 border-2 rounded-full p-2 transition-all duration-300"
                size={45}
              />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="py-5">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          src="/hero.jpeg"
          width={500}
          height={100}
          className="animate-[float_3s_ease-in-out_infinite] rounded-full shadow-[0_0_30px_20px_rgba(88,28,135,0.6)] transition duration-500 hover:shadow-[0_0_40px_20px_rgba(139,92,246,0.8)] border-5 border-purple-500 cursor-pointer"
          alt="not found"
        />
      </div>
    </div>
  );
};

export default Hero;
