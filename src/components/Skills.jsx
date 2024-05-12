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
        <div name="skills" className='bg-slate-100'>
            <div className='container mx-auto'>
                <div className='px-4 py-36 lg:py-64 md:w-10/12 mx-auto lg:h-screen items-stretch w-full'>
                    <div className='lg:h-full flex flex-col justify-center'>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h2 className="text-3xl text-slate-900 font-bold uppercase border-b-2 border-slate-900">My Skills</h2>
                        </div>
                        <div className='lg:w-full flex flex-wrap justify-center mx-auto pt-16 text-slate-900'>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaHtml5 className='text-6xl mx-auto mb-2' />
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaCss3Alt className='text-6xl mx-auto mb-2' />
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaBootstrap className='text-6xl mx-auto mb-2' />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <SiTailwindcss className='text-6xl mx-auto mb-2' />
                                    <p>TailwindCSS</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaSass className='text-6xl mx-auto mb-2' />
                                    <p>Sass</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <IoLogoJavascript className='text-6xl mx-auto mb-2' />
                                    <p>Javascript</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <DiJqueryLogo className='text-6xl mx-auto mb-2' />
                                    <p>jQuery</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaReact className='text-6xl mx-auto mb-2' />
                                    <p>React</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaAngular className='text-6xl mx-auto mb-2' />
                                    <p>Angular</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <FaFigma className='text-6xl mx-auto mb-2' />
                                    <p>Figma</p>
                                </div>
                            </div>
                            <div className='w-1/2 md:w-1/3 xl:w-1/6'>
                                <div className='shadow-lg text-center p-4 m-2'>
                                    <DiPhotoshop className='text-6xl mx-auto mb-2' />
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