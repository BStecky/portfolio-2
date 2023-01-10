import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Layout from "./Layout";
import photo from "../public/assets/me2.png";

const About = () => {
  return (
    <Layout>
      <section className="bg-two h-auto">
        <Navbar />
        <div
          id="about"
          className="w-full pb-60 md:h-screen p-2 flex items-center py-16"
        >
          <div className="max-w-[680px] m-auto flex flex-col">
            <div className="col-span-3 mb-10 h-auto">
              <div className="grid grid-cols-2 w-[100%] gap-1 items-center">
                <div>
                  <h1 className="">About Me</h1>
                  <h2 className="">
                    My name is <span className=" text-[#eeeeee]">Blane</span>
                  </h2>
                </div>
                <div className="rounded-md h-auto m-auto mt-4 shadow-sm shadow-gray-600 round-md flex items-center justify-center p-2 md:p-4 hover:scale-105 ease-in duration-100">
                  <Image
                    className="rounded-md w-32 h-32 md:h-auto md:w-auto"
                    src={photo}
                    alt="/"
                    width="250"
                    height="250"
                  />
                </div>
              </div>
              <p className="pt-4 text-md md:text-lg">
                When I graduated with my Computer Science degree, I wasn&apos;t
                sure if I wanted to jump straight into the industry. I ended up
                being a founding coach for PECO (Professional Esports Coaching
                Organization) and through personal lessons, recorded content,
                and live streams, taught Overwatch to thousands of different
                people around the world.
              </p>
              <p className="pt-2 text-md md:text-lg">
                As the Overwatch chapter of my life came to a close I decided to
                dust off the old code editor and get to work sharpening my
                skills again. I quickly found interest in web3 and the Solana
                blockchain and decided to dive in. Some of the things I&apos;ve
                done this past year are :
              </p>
              <ul className="pt-2 text-md md:text-lg list-disc pl-10">
                <li>Learnt Rust and the Anchor framework </li>
                <li>
                  Deployed 20+ Programs (Smart Contracts) to the Solana
                  Blockchain{" "}
                </li>
                <li>
                  Helped build responsive frontends in React.js / Next.js with
                  JavaScript / TypeScript and Tailwind CSS
                </li>
                <li>
                  Managed a team of 4, handling full-stack development, content
                  creation, and social media marketing for a Solana NFT project
                </li>
              </ul>
              <p className="pt-2 text-md md:text-lg">
                I&apos;m excited to see where my software development career
                will take me as I continue to develop my skills and myself as an
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
