import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFolderOpen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import bg from "../public/assets/yellowWaves.svg";
import Navbar from "./Navbar";
import Footer from "./FixedFooter";
import Link from "next/link";
import Layout from "./Layout";

const Hero = () => {
  return (
    <Layout>
      <section className="bg-one overflow-hidden">
        <Navbar />
        <div className="w-full h-screen text-center pb-60">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
              <motion.h1
                animate={{ x: 0, opacity: 2 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{
                  duration: 0.75,
                  ease: "easeInOut",
                  colors: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                Blane
              </motion.h1>
              <motion.h1
                animate={{ x: 0, opacity: 2 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{
                  duration: 0.75,
                  ease: "easeInOut",
                }}
              >
                Steckline
              </motion.h1>

              <motion.div
                animate={{ x: 0, opacity: 2 }}
                initial={{ x: 0, opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 1.0,
                  ease: "easeInOut",
                }}
              >
                <h2 className="py-4">Full-Stack Developer</h2>
              </motion.div>
              <div className="flex justify-between items-center max-w-[240px] m-auto py-4">
                <motion.div
                  animate={{ x: 0, y: 0, opacity: 2 }}
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href="https://www.linkedin.com/in/blane-steckline-996602148/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-md button-bg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150">
                      <FaLinkedin />
                    </div>
                  </Link>
                </motion.div>
                <motion.div
                  animate={{ x: 0, y: 0, opacity: 2 }}
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.4,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href="https://github.com/BStecky"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-md button-bg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150">
                      <FaGithub />
                    </div>
                  </Link>
                </motion.div>
                <motion.div
                  animate={{ x: 0, y: 0, opacity: 2 }}
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  <Link href="/contact">
                    <div className="rounded-md button-bg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </motion.div>
                {/* <motion.div
                animate={{ x: 0, y: 0, opacity: 2 }}
                initial={{ x: 0, y: 50, opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 1.8,
                  ease: "easeInOut",
                }}
              >
                <div className="rounded-md button-bg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-150">
                  <BsFillPersonLinesFill />
                </div>
              </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
