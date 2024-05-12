import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Callout = () => {
  return (
    <div className='bg-sky-600'>
    <div className='container mx-auto'>
      <div className='px-4 py-16 lg:py-32 md:w-10/12 mx-auto w-full'>
        <div className='lg:h-full flex flex-col lg:flex-row items-center text-white'>
            <div className='w-full lg:w-2/3 text-center lg:text-left'>
                <p className='text-xl pb-2'>Ready to team up?</p>
                <h2 className="text-3xl lg:text-4xl mb-8 lg:mb-0">If you're impressed by my work and profile, let's turn that interest into action.</h2>
            </div>
            <div className='w-full md:w-1/3 flex justify-center md:justify-end'>
                <Link to="contact" smooth={true} duration={500} className="w-fit rounded-lg cursor-pointer border-2 border-sky-600 hover:border-white text-sky-600 text-2xl lg:text-4xl hover:text-white bg-white hover:bg-sky-600 px-4 py-2 flex justify-center items-center">
                    Hire Me<HiArrowNarrowDown className='ml-3' />
                </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Callout