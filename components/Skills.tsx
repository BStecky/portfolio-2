import React from "react";
import Image from "next/image";
import Link from "next/link";
import RustLogo from "../public/assets/skills/rust.png";
import PythonLogo from "../public/assets/skills/pythonlogo.png";
import Big3Logo from "../public/assets/skills/html-css-js-logo.png";
import TSLogo from "../public/assets/skills/typescript.png";
import AnchorLogo from "../public/assets/skills/anchor.png";
import SolanaLogo from "../public/assets/skills/solana.png";
import CplusplusLogo from "../public/assets/skills/cpluspluslogo.png";
import CsharpLogo from "../public/assets/skills/csharplogo.png";
import ReactLogo from "../public/assets/skills/react.png";
import NextLogo from "../public/assets/skills/nextlogo.png";

const Skills = () => {
  return (
    <section className="w-full h-auto lg:h-screen p-2 bg-two">
      <div className="max-w-[1240px] min-w-0 mx-auto flex flex-col justify-center h-full">
        <h1 className="text-center pb-10">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://www.rust-lang.org/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={RustLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">Rust</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={PythonLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">Python</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://developer.mozilla.org/en-US/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={Big3Logo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">
                    HTML JavaScript CSS
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={TSLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">TypeScript</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://www.anchor-lang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={AnchorLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">Anchor</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://docs.solana.com/developers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={SolanaLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">Solana</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://devdocs.io/cpp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={CplusplusLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">C++</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={CsharpLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">C#</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 lg:col-span-2 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={ReactLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">React.js</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-[60%] md:w-[100%] m-auto md:p-4 lg:p-6 lg:col-span-2 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="m-auto">
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="m-auto h-10 w-10 md:h-24 md:w-24"
                    src={NextLogo}
                    alt="/"
                    width="100"
                    height="64"
                  />
                  <h3 className="pt-2 text-sm md:text-lg">Next.js</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
