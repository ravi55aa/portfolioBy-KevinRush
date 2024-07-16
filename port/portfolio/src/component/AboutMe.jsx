import React from "react";
import { motion } from "framer-motion";
import aboutMe from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index";

const AboutMe = () => {
  return (
    <div className=" border-b border-neutral-800 pb-4">
      <h1 className="text-4xl text-center my-20">
        About
        <span className="text-neutral-400">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:p-8 lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img className=" rounded-xl" src={aboutMe} alt="AboutMe" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
