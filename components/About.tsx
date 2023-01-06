import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

const About = () => {
  return (
    <section className='bg-two'>
      <Navbar/>
      <div id ='about' className='w-full h-full pb-60 md:h-screen p-2 flex items-center py-16'> 
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <h1 className=''>About Me</h1>
                  <h2 className='py-4'>My name is Blane</h2>
                  <p>I graduated</p>
              </div>
              <div className='rounded-md w-full h-auto m-auto shadow-md shadow-gray-600 round-md flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
                  <Image src="/../public/assets/me2.png" alt="/" width='150' height='150'/>
              </div>
          </div>
      </div>
    </section>
  )
}

export default About