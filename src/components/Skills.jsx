import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { FaAngular } from "react-icons/fa";


const Skills = () => {
    return (
        <div name="skills" className='bg-slate-800'>
            <div className='container mx-auto'>
                <div className='px-4 pt-32 xl:w-10/12 mx-auto flex flex-col justify-center items-stretch w-full text-white'>
                    <div className='h-screen'>
                        <div className='flex flex-col justify-center items-center w-full relative'>
                            <h2 className='text-6xl sm:text-8xl text-white/[0.2] uppercase'>Skills</h2>
                            <p className='text-2xl sm:text-3xl absolute border-b-2'>I Work With</p>
                        </div>
                        <div className='lg:w-full flex flex-wrap justify-center mx-auto pt-16'>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaHtml5 className='text-6xl mx-auto m-4' />
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaCss3Alt className='text-6xl mx-auto m-4' />
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaBootstrap className='text-6xl mx-auto m-4' />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <SiTailwindcss className='text-6xl mx-auto m-4' />
                                    <p>TailwindCSS</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaSass className='text-6xl mx-auto m-4' />
                                    <p>Sass</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <IoLogoJavascript className='text-6xl mx-auto m-4' />
                                    <p>Javascript</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <DiJqueryLogo className='text-6xl mx-auto m-4' />
                                    <p>jQuery</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaReact className='text-6xl mx-auto m-4' />
                                    <p>React</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaAngular className='text-6xl mx-auto m-4' />
                                    <p>Angular</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <FaFigma className='text-6xl mx-auto m-4' />
                                    <p>Figma</p>
                                </div>
                            </div>
                            <div className='w-1/3 sm:w-1/6'>
                                <div className='shadow-lg shadow-sky-600/[.2] text-center p-2 m-2'>
                                    <DiPhotoshop className='text-6xl mx-auto m-4' />
                                    <p>Photoshop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills