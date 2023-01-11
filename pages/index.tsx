import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FixedFooter from "../components/FixedFooter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BS Portfolio</title>
      </Head>
      <Hero />
      <FixedFooter />
    </div>
  );
}
