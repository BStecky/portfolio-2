import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsSun, BsFillMoonFill} from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {

  const [nav, setNav] = useState(false) 
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div className='w-[100%] h-20 z-[100] rounded-b-md ml-auto mr-auto shadow-md nav'> 
        <div className='flex justify-between text-center items-center w-full h-full px-2 2xl:px-16'>
          <Image src="/../public/assets/navLogo.png" alt="/" width='50' height='20'/>
          <div>
            <ul className='hidden md:flex'>
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-black'>Home</li>
              </Link>
              <Link href='/about'>
                  <li className='ml-10 text-sm uppercase hover:border-black'>About</li>
              </Link>
              {/* <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-black'>Projects</li>
              </Link> */}
              <Link href='/contact'>
                  <li className='ml-10 text-sm uppercase hover:border-black'>Contact</li>
              </Link>
     
            </ul>
            
          </div>
           {/* Mobile Button */}
           <div onClick={handleNav} className='md:hidden hover:cursor-pointer'>
              <AiOutlineMenu size={25}/>
            </div>
        </div>
        

        {/* Mobile Menu */}
        <div className= {nav ? 'fixed md:hidden left-0 top-0 w-full h-screen bg-black/70' : ''}>  
            <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen nav p-10 ease-in duration-500' 
                                : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
              <div className='flex w-full items-center justify-between'>
                <Image src='/../public/assets/navLogo.png' alt='/' width='40' height='20'/>
                <div onClick={handleNav} className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose/>
                </div>
              </div>
              <div className='flex py-4 flex-col border-t-4 dark:border-black mt-6'>
                <ul className='uppercase'>
                  <Link href='/'>
                      <li className='py-4 text-sm'>Home</li>
                  </Link>
                  <Link href='/'>
                      <li className='py-4 text-sm'>About</li>
                  </Link>
                  {/* <Link href='/'>
                      <li className='py-4 text-sm'>Projects</li>
                  </Link> */}
                  <Link href='/'>
                      <li className='py-4 text-sm'>Contact</li>
                  </Link>
                </ul>
                <div className='pt-10'>
                  <p className='uppercase tracking-widest'>Connect with me!</p>
                </div>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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

              </div>
            </div>
          </div> 
    </div>
  )
}

export default Navbar