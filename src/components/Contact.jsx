import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
    return (
        <div name="contact" className='bg-slate-700'>
            <div className='container mx-auto'>
                <div className='px-4 pt-32 xl:w-10/12 mx-auto flex flex-col justify-center items-stretch w-full text-white'>
                    <div className='h-screen'>
                        <div className='flex flex-col justify-center items-center w-full relative'>
                            <h2 className='text-6xl sm:text-8xl text-white/[0.2] uppercase'>Contact</h2>
                            <p className='text-2xl sm:text-3xl absolute border-b-2'>Let's Talk</p>
                        </div>
                        <div className='lg:w-full flex flex-wrap justify-center mx-auto pt-16 text-center'>
                            <p>Exploring pathways to professional evolution, seeking roles where I can thrive, innovate, and contribute positively.</p>
                            <p>If you have a fitting opportunity, let's talk!</p>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-row justify-center flex-wrap pt-16'>
                                <div className='w-full md:w-2/4 xl:w-1/4'>
                                    <a href="mail:devangprjpt@gmail.com">
                                        <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                                            <div className="flex flex-col items-center justify-center">
                                                <MdEmail className='text-6xl mx-auto mb-2' />
                                                <p className="text-slate-600 text-lg">
                                                    devangprjpt@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='w-full md:w-2/4 xl:w-1/4'>
                                    <a href="tel:+918390122902">
                                        <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                                            <div className="flex flex-col items-center justify-center">
                                            <IoIosCall className='text-6xl mx-auto mb-2' />
                                                <p className="text-slate-600 text-lg">
                                                    +91 8390122902
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact