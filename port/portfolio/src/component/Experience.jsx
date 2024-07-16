import React from 'react';
import {EXPERIENCES} from '../constants/index'  
import { animate, motion } from "framer-motion";

const Experience = () => {
  return (
      <div className="border-b border-neutral-800 pb-16">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:0.5, delay:0.5}}
        className='my-20 text-center text-violet-400 text-3xl font-light capitalize'>
        experience
        </motion.h2 >
        {EXPERIENCES.map((ele,i)=>{
        return<> 
        <div key={i} className='mb-10 flex flex-wrap lg:justify-center'>
          <motion.div
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.5, delay:0.5}}
          className='w-full lg:w-1/4 mb-2 '>
            <p className='font-semibold text-sm opacity-60 text-purple-500'>{ele.year}</p>
          </motion.div>
          <div className='w-full max-w-xl text-lg lg:w-3/4'>
            <motion.h6 
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0, y:100}}
             transition={{duration:0.5, delay:0.5}}
            className='mb-2 text-md font-thin lg:text-lg'>{ele.role}   - 
            <span className='text-sm opacity-70 text-purple-200'> {ele.company}</span>
            </motion.h6>
            <motion.p 
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0, y:100}}
             transition={{duration:0.5, delay:0.5}}
            className='mb-2 opacity-70 text-sm tracking-tight font-light lg:text-xl'>
              {ele.description}
            </motion.p>
            {ele.technologies.map((tech,index)=>
              <motion.span 
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0, y:100}}
              transition={{duration:0.5, delay:0.5}}
              key={index} className="ml-2 px-2 py-1 mt-2 text-sm bg-neutral-800 text-purple-400 opacity-55 rounded-xl">
                {tech}
              </motion.span>
            )}
          </div>
        </div>
        </>
        })}
      </div>
  )
}
export default Experience