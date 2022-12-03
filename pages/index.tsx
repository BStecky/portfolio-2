import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <Head>
          <title>BS Portfolio</title>
        </Head>
        <Navbar/>
    </div>
  )
}
