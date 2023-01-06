import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Skills = () => {
  return (
    <section className='w-full lg:h-screen p-2 bg-two'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <h1 className='text-center pb-10'>Skills</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center'>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://www.rust-lang.org/learn' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/rust.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>Rust</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://docs.python.org/3/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/pythonlogo.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>Python</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://developer.mozilla.org/en-US/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/html-css-js-logo.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>HTML JavaScript CSS</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://www.typescriptlang.org/docs/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/typescript.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>TypeScript</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://www.anchor-lang.com/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/anchor.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>Anchor</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://docs.solana.com/developers' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/solana.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>Solana</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://devdocs.io/cpp/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/cpluspluslogo.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>C++</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://learn.microsoft.com/en-us/dotnet/csharp/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/csharplogo.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>C#</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 lg:col-span-2 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/react.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>React.js</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-6 lg:col-span-2 bg-[#eeeeee] dark:bg-[#29263a] shadow-xl rounded-md hover:scale-105 ease-in duration-150'>
                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                        <div className='m-auto'>
                            <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
                                <Image className='m-auto' src='/../public/assets/skills/nextlogo.png' alt='/' width='100' height='64'/>
                                <h3 className='pt-2'>Next.js</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills