import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className='w-full lg:h-screen p-2 bg-two'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase'>Skills</p>
            <div className='grid md:grid-cols2 lg:grid-cols-4 gap-8'>
                {/* Resize all logos to the same size, and determine what skills I'll put on here */}
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/python.png' alt='/' width='150' height='64'/>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto text-center'>
                            <Image src='/../public/assets/skills/rust.png' alt='/' width='100' height='64'/>
                            <p className='pt-2'>Rust</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/javascript.png' alt='/' width='150' height='64'/>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/big3logo.png' alt='/' width='1000' height='64'/>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/cplusplus.png' alt='/' width='150' height='64'/>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/nextjs.png' alt='/' width='150' height='64'/>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/anchor.png' alt='/' width='150' height='64'/>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='grid gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/python.png' alt='/' width='150' height='64'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills