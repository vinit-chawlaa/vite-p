import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import {motion} from 'framer-motion'

const Contact = () => {
  const [formdata, setFormdata] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlechange = (e) => {
    const { value, name } = e.target;
    const newdata = { ...formdata };
    newdata[name] = value;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormdata(newdata);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (
      formdata.first &&
      formdata.last &&
      formdata.email &&
      formdata.phone &&
      formdata.message
    ) {
      setSubmitted(true);
      setTimeout(() => {
        toast.success("Your message sent sucessfully!");
        setFormdata({first  : '' , last : '' , email : '' , phone : '' , message : ''})
        setSubmitted(false);
      }, 2000);
      
    }


  };

  return (
    <div className="w-full lg:px-20 px-5 py-10" id="contact">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:justify-items-center">
        <motion.div initial = {{x : -100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.3}} className="w-full bg-[#160730] rounded-3xl sm:p-10 p-5">
          <h1 className="text-5xl bg-gradient-to-r leading-[1.5] from-purple-800 via-purple-400 to-purple-100 bg-clip-text text-transparent font-extrabold">
            Let's work together!
          </h1>
          <p className="text-gray-400 py-4">
            I'm always open to new ideas, challenges, and collaborations. Drop a
            message — let’s make something meaningful.
          </p>

          <form  className="grid grid-cols-2 gap-5 py-5" onSubmit={handlesubmit} >
            <div className="col-span-2 sm:col-auto">
              <input
                type="text"
                className=" p-3 text-lg bg-black rounded-md outline-none w-full focus:ring-2 focus:ring-purple-500"
                placeholder="First Name"
                value={formdata.first}
                onChange={handlechange}
                name="first"
                required
              />
            </div>

            <div className="col-span-2 sm:col-auto">
              <input
                type="text"
                className=" p-3 text-lg bg-black rounded-md outline-none w-full focus:ring-2 focus:ring-purple-500"
                placeholder="Last Name"
                value={formdata.last}
                onChange={handlechange}
                name="last"
                required
              />
            </div>

            <div className="col-span-2 sm:col-auto">
              <input
                type="email"
                className=" p-3 text-lg bg-black rounded-md outline-none w-full focus:ring-2 focus:ring-purple-500"
                placeholder="Email"
                value={formdata.email}
                onChange={handlechange}
                name="email"
                required
              />
            </div>
            <div className="col-span-2 sm:col-auto">
              <input
                type="text"
                className=" p-3 text-lg bg-black rounded-md outline-none w-full focus:ring-2 focus:ring-purple-500"
                placeholder="Phone Number"
                value={formdata.phone}
                onChange={handlechange}
                name="phone"
                required
              />
            </div>
            <div className="col-span-2">
              <select className="p-3 text-lg bg-black text-white w-full cursor-pointer focus:ring-2 focus:ring-purple-500"  defaultValue="service">
                <option value="service" hidden>
                  Select a Service
                </option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
                <option value="ui-ux">UI/UX Design</option>
              </select>
            </div>
            <div className="col-span-2">
              <textarea
                className="w-full outline-none bg-black rounded-md p-3 text-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message.."
                rows={9}
                value={formdata.message}
                onChange={handlechange}
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`py-4 text-white rounded-full  hover:from-[#5B21B6] transition-all duration-300 min-w-[200px] ${
                submitted
                  ? "bg-gray-500 cursor-not-allowed"
                  : "cursor-pointer bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800"
              }`}
            >
              {submitted ? "sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div initial = {{x : 100 , opacity : 0}} viewport={{ once: true }} whileInView={{x : 0 , opacity : 1}} transition={{duration : 0.5 , delay : 0.3}} className="flex flex-col gap-10 lg:px-0 lg:py-0 py-10">
          <div className="flex flex-row items-start gap-5">
            <div>
              <a href="tel:9116494204">
                <PhoneCall
                  className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] p-3 rounded-full"
                  size={50}
                />
              </a>
            </div>
            <div className="max-w-[170px]">
              <p className="text-gray-400">Phone</p>
              <a
                href="tel:9116494204"
                className="lg:text-2xl md:text-xl text-lg"
              >
                +9116494204
              </a>
            </div>
          </div>

          <div className="flex flex-row  items-start gap-5">
            <div>
              <a href="mailto:chawlaavinit@gmail.com">
                <Mail
                  className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] p-3 rounded-full"
                  size={50}
                />
              </a>
            </div>
            <div className="max-w-[160px]">
              <p className="text-gray-400">Email</p>
              <a
                href="mailto:chawlaavinit@gmail.com"
                className="lg:text-2xl md:text-xl text-lg"
              >
                chawlaavinit@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-row  items-center gap-5">
            <div>
              <MapPin
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] p-3 rounded-full cursor-pointer"
                size={50}
              />
            </div>
            <div className="max-w-[160px]">
              <p className="text-gray-400">Address</p>
              <address className="lg:text-2xl md:text-xl not-italic text-lg">
                Udaipur,Rajasthan
              </address>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
