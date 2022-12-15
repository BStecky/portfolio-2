import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import bg from "../public/assets/yellowWaves.svg"

const Hero = () => {
  return (
    
    <div className='w-full h-screen text-center pb-60'> 
     {/* <div className='bg-cover bg-center bg-fixed bg-no-repeat'
             style={{
              backgroundImage: `url(${bg.src})`,
                 width: '100%',
                 height: '100%',
             }}> */}
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                    <motion.h1
                         animate={{ x: 0, opacity: 2 }}
                         initial={{ x: -100, opacity: 0 }}
                         transition={{
                             duration: 0.75,
                             ease: 'easeInOut',
                             colors: {
                             duration: 0.5,
                             ease: 'easeInOut',
                             }
                         }}>
                        Blane
                    </motion.h1>      
                    <motion.h1
                        animate={{ x: 0, opacity: 2 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{
                        duration: 0.75,
                        ease: 'easeInOut',
                        }}>
                        Steckline
                    </motion.h1>
          
                <motion.div
                    animate={{ x: 0, opacity: 2 }}
                    initial={{ x: 0, opacity: 0}}
                    transition={{
                        duration: 0.75,
                        delay: 1.0,
                        ease: 'easeInOut',
                        }}
                    >
                    <h2 className='py-4'>Full-Stack Developer</h2>
                </motion.div>
                    <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                        <motion.div
                        animate={{ x: 0, y: 0, opacity: 2 }}
                        initial={{ x: 0, y: 50, opacity: 0}}
                        transition={{
                            duration: 0.75,
                            delay: 1.2,
                            ease: 'easeInOut',
                            }}
                        >
                            <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                                <FaLinkedin/>
                            </div>
                        </motion.div>
                        <motion.div
                        animate={{ x: 0, y: 0, opacity: 2 }}
                        initial={{ x: 0, y: 50, opacity: 0}}
                        transition={{
                            duration: 0.75,
                            delay: 1.4,
                            ease: 'easeInOut',
                            }}
                        >
                        <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                            <FaGithub/>
                        </div>
                        </motion.div>
                        <motion.div
                         animate={{ x: 0, y: 0, opacity: 2 }}
                         initial={{ x: 0, y: 50, opacity: 0}}
                        transition={{
                            duration: 0.75,
                            delay: 1.6,
                            ease: 'easeInOut',
                            }}
                        >
                        <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                            <AiOutlineMail/>
                        </div>
                        </motion.div>
                        <motion.div
                        animate={{ x: 0, y: 0, opacity: 2 }}
                        initial={{ x: 0, y: 50, opacity: 0}}
                        transition={{
                            duration: 0.75,
                            delay: 1.8,
                            ease: 'easeInOut',
                            }}
                        >
                        <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                            <BsFillPersonLinesFill/>
                        </div>
                        </motion.div>
                    </div>
                
            </div>
        </div>
    </div>
    // </div>
  )
}

export default Hero