import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiArrowNarrowDown } from 'react-icons/hi';
import DownloadResume from '../assets/DevangPrajapati-Resume.pdf';

const About = () => {
  return (
    <div name="about" className='container mx-auto'>
      <div className='px-4 pt-28 lg:pt-0 my-36 lg:mt-0 md:w-10/12 mx-auto lg:h-screen items-stretch w-full'>
        <div className='lg:h-full flex flex-col justify-center'>
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-3xl text-sky-600 font-bold uppercase border-b-2 border-sky-600">About Me</h2>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-3/4 lg:pr-8'>
            <div className='text-justify text-xl'>
              <p className='pt-8 pb-4'>Holding 10+ years of professional experience in Web UX/UI Design and Development. A Skilled UI Developer with a flair for adopting new technologies and building UI in Web Development using UI technologies. Good exposure on each of the phases of Web Development and developing projects from stage of concept to full implementation. Always ready for new challenges.</p>
              <p>I'm actively seeking new challenges where I can apply my expertise, expand my skills, and make meaningful contributions. If you have an exciting opportunity that aligns with my background, I'd love to hear from you!</p>
            </div>
            <div className='flex justify-start'>
              <Link to="contact" smooth={true} duration={500} className="rounded-lg cursor-pointer border-2 border-white hover:border-sky-600 text-white hover:text-sky-600 bg-sky-600 hover:bg-white px-4 py-2 mt-8 flex justify-center items-center">
                Contact Me<HiArrowNarrowRight className='ml-3' />
              </Link>
              <a href={DownloadResume} target='_blank' className="rounded-lg cursor-pointer border-2 border-sky-600 hover:border-white text-sky-600 hover:text-white bg-white hover:bg-sky-600 px-4 py-2 mt-8 flex justify-center items-center ml-4">
                Download CV<span className='animate-bounce'><HiArrowNarrowDown className='ml-3' /></span>
              </a>
            </div>
          </div>
          <div className='w-full lg:w-1/3'>
            <div className='flex flex-row flex-wrap pt-8'>
              <div className='w-full mb-4'>
                <div className='bg-white border-2 border-sky-600 p-4 rounded-xl shadow-lg shadow-sky-200'>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="mb-2 text-8xl font-extrabold text-sky-600">10+</h3>
                    <p className='text-lg'>Years <strong>Experience</strong></p>
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='mr-2'>
                  <div className='bg-white border-2 border-sky-600 p-4 rounded-xl shadow-lg shadow-sky-200'>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="mb-2 text-5xl font-extrabold text-sky-600">100+</h3>
                      <p className='text-sm'>Completed <strong>Projects</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='ml-2'>
                  <div className='bg-white border-2 border-sky-600 p-4 rounded-xl shadow-lg shadow-sky-200'>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="mb-2 text-5xl font-extrabold text-sky-600">04+</h3>
                      <p className='text-sm'>Companies <strong>Worked</strong></p>
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

export default About