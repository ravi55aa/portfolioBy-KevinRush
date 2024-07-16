import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-10">
      <h2 className="text-center my-20 text-3xl text-[#9ba9fcf4] font-medium opacity-85">
        Projects
      </h2>
      <div>
        {PROJECTS.map((ele, i) => {
          return (
            <>
              <div key={i} className="flex flex-wrap lg:justify-center mb-14">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lg:w-1/4 mb-2"
                >
                  <img
                    className="rounded-xl pb-2"
                    height={150}
                    width={150}
                    src={ele.image}
                    alt=""
                  />
                </motion.div>
                <div className="w-full max-w-xl lg:w-3/4 mb-2">
                  <motion.h4
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-2 tracking-tight text-lg font-medium"
                  >
                    {ele.title}
                  </motion.h4>
                  <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-4 text-neutral-400 tracking-tight text text-justify"
                  >
                    {ele.description}
                  </motion.p>
                  {ele.technologies.map((tec, i) => {
                    return (
                      <span
                        key={i}
                        className="ml-2 px-2 py-1 mt-2 text-sm bg-neutral-800 text-purple-400 opacity-55 rounded-xl"
                      >
                        {tec}
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
