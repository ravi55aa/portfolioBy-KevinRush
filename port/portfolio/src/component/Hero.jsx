import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/kevinRushProfile.png";
const Hero = () => {
  let contain = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <div className=" border-b border-neutral-800 ">
      <div className=" flex flex-wrap ">
        <div className=" w-full lg:w-1/2 ">
          <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
              variants={contain(0.1)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Kelvin Rush
            </motion.h1>
            <motion.span
              variants={contain(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 
            to-purple-500 capitalize text-3xl bg-clip-text text-transparent tracking-tight"
            >
              Full stack developer
            </motion.span>
            <motion.p
              variants={contain(0.6)}
              initial="hidden"
              animate="visible"
              className="  my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <img src={ProfilePic} alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
