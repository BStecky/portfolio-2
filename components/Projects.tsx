import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import akariStake from '../public/assets/projects/akaristake3.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='text-xl tracking-widest uppercase'>Projects</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Staking Contract' backgroundImg={akariStake} projectUrl='/akari'/>
            </div>
        </div>
    </div>
  )
}

export default Projects