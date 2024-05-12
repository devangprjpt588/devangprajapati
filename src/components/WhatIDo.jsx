import React from 'react';
import { FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const WhatIDo = () => {
    return (
        <div name="whatido" className='bg-slate-100'>
            <div className='container mx-auto'>
                <div className='px-4 py-36 lg:py-64 md:w-10/12 mx-auto lg:h-screen items-stretch w-full'>
                    <div className='lg:h-full flex flex-col justify-center'>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h2 className="text-3xl text-slate-900 font-bold uppercase border-b-2 border-slate-900">What I Do</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='w-full lg:pr-8'>
                                <div className='text-justify flex justify-center text-xl'>
                                    <p className='pt-8 pb-4'>How I can help in your next project</p>
                                </div>
                                <div className='w-full'>
                                    <div className='flex flex-row flex-wrap pt-16 lg:pt-8'>
                                        <div className='w-1/3'>
                                            <div className='m-2 p-4'>
                                                <div className="flex flex-col items-center justify-center">
                                                    <FaPalette className='text-sky-600 text-6xl'/>
                                                    <p className='text-xl mt-4'>Years <strong>Experience</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/3'>
                                            <div className='m-2 p-4'>
                                                <div className="flex flex-col items-center justify-center">
                                                    <FaCode className='text-sky-600 text-6xl'/>
                                                    <p className='text-xl mt-4'>Years <strong>Experience</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/3'>
                                            <div className='m-2 p-4'>
                                                <div className="flex flex-col items-center justify-center">
                                                    <FaPalette className='text-sky-600 text-6xl'/>
                                                    <p className='text-xl mt-4'>Years <strong>Experience</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo