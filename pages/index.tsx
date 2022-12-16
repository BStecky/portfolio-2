import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {

  return (
    <div>
        <Head>
          <title>BS Portfolio</title>
        </Head>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}
