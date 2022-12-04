import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <motion.div
                    animate={{
                        overflow: 'visible',
                        opacity: 1,
                        y: 0,
                    }}
                    initial={{
                        overflow: 'visible',
                        opacity: 0,
                        y: -100,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}>
                    <motion.h1
                        animate={{ x: 0, opacity: 2 }}
                        initial={{ x: 0, opacity: 0 }}
                        transition={{
                        duration: 0.75,
                        ease: 'easeInOut',
                        }}>
                        Blane
                    </motion.h1>
                    <motion.h1
                        animate={{ x: 0, opacity: 2 }}
                        initial={{ x: -150, opacity: 0 }}
                        transition={{
                        duration: 0.75,
                        ease: 'easeInOut',
                        }}>
                        Steckline
                    </motion.h1>
                </motion.div>
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
                    <div className='flex justify-between items-center'>
                        <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaLinkedin/>
                        </div>
                        <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero