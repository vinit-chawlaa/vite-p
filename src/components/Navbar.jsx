import React, { useEffect, useState } from "react";
import { List } from "../lists/List";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleresize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  return (
    <div className="text-white flex bg-[#11071F] justify-between items-center shadow-sm shadow-gray-50 lg:px-20 px-5 py-6 fixed w-full z-[1000]">
      <div className="w-[100px] h-[50px] -mt-11 -ml-5">
        <img src="/vc1.png" alt="" className="object-cover"/>
      </div>

      <ul className="hidden md:flex flex-row justify-center items-center gap-5">
        {List.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            duration={500}
            smooth={true}
            offset={-70}
          >
            <li key={item.id} className="relative group cursor-pointer py-1">
              {item.name}{" "}
              <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          </Link>
        ))}
        <Link to="contact" smooth={true} duration={500} offset={-70}>
          <button className="px-5 py-2 mx-5   text-white rounded-md cursor-pointer bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#6D28D9] transition-all duration-300">
            Hire Me
          </button>
        </Link>
      </ul>

      <div className="md:hidden cursor-pointer" onClick={handletoggle}>
        {toggle ? <X size={35} /> : <img src="/hb.png" alt="" className="w-9 invert"/>}
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggle(false)}
      >
        <ul
          className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-[#11071F] shadow-md shadow-gray-800 p-6 transform transition-transform duration-300 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <X size={30} className="cursor-pointer" onClick={handletoggle} />
          </div>

          {List.map((item) => (
            <Link
              smooth={true}
              duration={500}
              key={item.id}
              to={item.url}
              offset={-70}
            >
              <li
                className="text-lg py-3 border-b border-gray-700 cursor-pointer transition-all"
                onClick={() => setToggle(false)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
