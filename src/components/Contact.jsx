import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
    return (
        <div name="contact" className='bg-slate-900'>
            <div className='container mx-auto'>
                <div className='px-4 py-36 lg:py-64 md:w-10/12 mx-auto lg:h-screen items-stretch w-full'>
                    <div className='lg:h-full flex flex-col justify-center'>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h2 className="text-3xl text-white font-bold uppercase border-b-2 border-white">Let's Talk</h2>
                        </div>
                        <div className='lg:w-full flex flex-col justify-center mx-auto pt-8 text-xl text-center text-white'>
                            <p>I enjoy discussing new projects and design challenges.</p>
                            <p>If you have a fitting opportunity, Let's get in touch!</p>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-row justify-center flex-wrap pt-16 text-white divide-y md:divide-y-0 md:divide-x'>
                                <div className='w-full md:w-1/2'>
                                    <a href="tel:+918390122902">
                                        <div className='text-center p-8 m-2'>
                                            <IoIosCall className='text-6xl mx-auto mb-2' />
                                            <p className="text-xl">
                                                +91 8390122902
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <a href="mailto:devangprjpt@gmail.com">
                                        <div className='text-center p-8 m-2'>
                                            <MdEmail className='text-6xl mx-auto mb-2' />
                                            <p className="text-xl">
                                                devangprjpt@gmail.com
                                            </p>
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