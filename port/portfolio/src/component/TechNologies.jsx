import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const TechNologies = () => {
  let contain = (dura) => ({
    hidden: { y: -10 },
    visible: {
      y: [5, -5],
      transition: {
        duration: dura,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-300 via-slate-400 
                    to-purple-500 bg-clip-text text-transparent "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="py-8 flex flex-wrap justify-center items-center gap-6"
      >
        <motion.div
          variants={contain(2.45)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <FaHtml5 className="text-7xl rounded-2xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={contain(1.7)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <FaCss3Alt className="text-7xl rounded-2xl text-yellow-200" />
        </motion.div>
        <motion.div
          variants={contain(2.2)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <IoLogoJavascript className="text-7xl rounded-2xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={contain(1.8)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <FaReact className="text-7xl rounded-2xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={contain(2.5)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <FaBootstrap className="text-7xl rounded-2xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={contain(1.6)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <SiTailwindcss className="text-7xl rounded-2xl text-[#1d99ff]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechNologies;
