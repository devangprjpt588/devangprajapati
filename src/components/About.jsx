import React from 'react';
import {Link} from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {HiArrowNarrowDown} from 'react-icons/hi';
import DownloadResume from '../assets/DevangPrajapati-Resume.pdf';

const About = () => {
  return (
    <div name="about" className='bg-sky-600'>
      <div className='container mx-auto'>
        <div className='px-4 pt-32 xl:w-10/12 mx-auto flex flex-col justify-start items-stretch w-full text-white'>
          <div className='h-screen'>
          <div className='flex flex-col justify-center items-center w-full relative'>
            <h2 className='text-6xl sm:text-8xl text-white/[0.2] uppercase'>About Me</h2>
            <p className='text-2xl sm:text-3xl absolute border-b-2'>Know Me More</p>
          </div>
          <div className='flex flex-col'>
              <div className='w-full'>
                <div className='text-center'>
                  <p className='pt-8 pb-4'>Holding 10+ years of professional experience in Web UX/UI Design and Development. A Skilled UI Developer with a flair for adopting new technologies and building UI in Web Development using UI technologies. Good exposure on each of the phases of Web Development and developing projects from stage of concept to full implementation. Always ready for new challenges.</p>
                  <p>I'm actively seeking new challenges where I can apply my expertise, expand my skills, and make meaningful contributions. If you have an exciting opportunity that aligns with my background, I'd love to hear from you!</p>
                </div>
                <div className='flex justify-center'>
                  <Link to="contact" smooth={true} duration={500} className="rounded-lg cursor-pointer border-2 border-white text-white hover:text-sky-600 hover:bg-white px-4 py-2 mt-8 flex justify-center items-center">
                    Contact Me<HiArrowNarrowRight className='ml-3'/>
                  </Link>
                  <a href={DownloadResume} target='_blank' className="rounded-lg cursor-pointer border-2 border-white text-sky-600 hover:text-white bg-white hover:bg-sky-600 px-4 py-2 mt-8 flex justify-center items-center ml-4">
                    Download CV<span className='animate-bounce'><HiArrowNarrowDown className='ml-3'/></span>
                  </a>
                </div>
              </div>
              <div className='w-full'>
                <div className='flex flex-row flex-wrap pt-8'>
                  <div className='w-1/2 sm:w-1/4'>
                    <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                      <div className="flex flex-col items-center justify-center">
                          <h3 className="mb-2 text-6xl font-extrabold text-sky-600">10+</h3>
                          <p className="text-slate-600">Years of Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 sm:w-1/4'>
                  <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                      <div className="flex flex-col items-center justify-center">
                          <h3 className="mb-2 text-6xl font-extrabold text-sky-600">80+</h3>
                          <p className="text-slate-600">Projects Done</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 sm:w-1/4'>
                  <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                      <div className="flex flex-col items-center justify-center">
                          <h3 className="mb-2 text-6xl font-extrabold text-sky-600">6+</h3>
                          <p className="text-slate-600">Got Awarded</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 sm:w-1/4'>
                  <div className='bg-white p-2 m-2 rounded-xl hover:-translate-y-1 duration-300 text-sky-600'>
                      <div className="flex flex-col items-center justify-center">
                          <h3 className="mb-2 text-6xl font-extrabold text-sky-600">4+</h3>
                          <p className="text-slate-600">Companies Worked</p>
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