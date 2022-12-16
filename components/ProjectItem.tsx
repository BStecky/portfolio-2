import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import akariStake from '../public/assets/projects/akaristake3.png'

const ProjectItem = ({title, backgroundImg, projectUrl} : {title : string; backgroundImg: any; projectUrl: any;}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md rounded-md p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-md group-hover:opacity-10' src={akariStake} alt='/'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'> 
            <h3 className='tracking-wider text-center text-white'>Solana Staking Contract</h3>
            <p className='text-center pb-4 pt-2 text-white'>Rust / Anchor with Typescript</p>
            <Link href='/'>
                <p className='text-center py-3 rounded-md bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Details</p>
            </Link>
        </div>   
    </div>
  )
}

export default ProjectItem