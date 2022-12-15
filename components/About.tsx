import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id ='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='tracking-widest'>About</h1>
                <h2 className='py-4'>Hello</h2>
                <p>It's me. I've been wondering etc. etc.</p>
            </div>
            <div className='rounded-md w-full h-auto m-auto shadow-xl shadow-gray-400 round-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
                <Image src="/../public/assets/akari.png" alt="/" width='100' height='20'/>
            </div>
        </div>
    </div>
  )
}

export default About