import React from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact'className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <h2>Contact</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md rounded-md p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-md hover:scale-105 ease-in-out duration-150' src='/../public/assets/computer.jpeg' alt='/' width='600' height='100'></Image>
                        </div>
                        <div>
                            <h2 className='py-2'>Blane Steckline</h2>
                            <h3 className='py-2'>Full-Stack Developer</h3>
                            <p>I am open to any and all potential opportunities.</p>
                        </div>
                        <div className='flex items-center max-w-[330px] m-auto justify-between py-4'>
                            <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                                <FaLinkedin/>
                            </div>
                            <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                                <FaGithub/>
                            </div>
                            <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                                <AiOutlineMail/>
                            </div>
                            <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto shadow-md rounded-md lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Name
                                    </label>
                                    <input className='border-2 rounded-md p-3 flex' type='text'></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone Number
                                    </label>
                                    <input className='border-2 rounded-md p-3 flex' type='text'></input>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Email Address
                                </label>
                                <input className='border-2 rounded-md p-3 flex' type='email'></input>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Subject
                                </label>
                                <input className='border-2 rounded-md p-3 flex' type='text'></input>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Message
                                </label>
                                <textarea className='border-2 rounded-md p-3' rows={10}> </textarea>
                            </div>
                            <button className='w-full py-4 mt-4'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-md  shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150'>
                        <HiOutlineChevronDoubleUp/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact