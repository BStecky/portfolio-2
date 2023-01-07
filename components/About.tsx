import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

const About = () => {
  return (
    <section className='bg-two'>
      <Navbar/>
      <div id ='about' className='w-full h-full pb-60 md:h-screen p-2 flex items-center py-16'> 
          <div className='max-w-[680px] m-auto sm:flex md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <h1 className=''>About Me</h1>
                  <h2 className='py-4'>My name is <span className=' text-[#eeeeee]'>Blane</span></h2>
                  <p className='pt-2 text-lg'>When I graduated with my Computer Science degree, I wasn't sure if I wanted to jump straight into the industry. 
                  I ended up being a founding coach for PECO (Professional Esports Coaching Organization) and through personal lessons, recorded content, and live streams, taught Overwatch to thousands of different people around the world. 
                  </p>
                  <p className='pt-2 text-lg'>
                    As the Overwatch chapter of my life came to a close I decided to dust off the old code editor and get to work sharpening my skills again. I quickly found interest in web3 and the Solana blockchain and decided to dive in. Some of the things I've done this past year are :
                  </p>
                  <ul className='pt-2 text-lg'>
                    <li>Learnt Rust and the Anchor framework </li>
                    <li>Deployed 20+ Programs (Smart Contracts) to the Solana Blockchain </li>
                    <li>Helped build responsive frontends in React.js / Next.js with JavaScript / TypeScript and Tailwind CSS</li>
                    <li>Managed a team of 4, handling full-stack development, content creation, and social media marketing for a Solana NFT project</li>
                  </ul>
                  <p className='pt-2 text-lg'>
                    I'm excited to see where my software development career will take me as I continue to develop my skills and myself as an individual. 
                  </p>
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