import React from 'react'
import {Link} from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {FaAngleDoubleDown} from 'react-icons/fa';
import DevangPic from '../assets/devang.webp';

const Home = () => {
  return (
    <div name="home" className='container mx-auto'>
        <div className='p-4 md:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center w-full justify-center h-screen'>
            <div className='lg:w-2/3 flex flex-col'>
              <p className='text-xl xl:text-3xl text-slate-600'>Hi, I'm</p>
              <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold text-slate-900 pt-4'>Devang Prajapati</h1>
              <h2 className='text-3xl md:text-5xl xl:text-6xl text-slate-600 pt-4'>UI Developer</h2>
              <p className="py-8 md:w-3/4 text-xl text-slate-600">Passionate about crafting engaging user experiences through clean code and intuitive designs</p>
              <div className='flex'>
                <Link to="skills" smooth={true} duration={500} className='group cursor-pointer rounded-lg border-2 border-sky-600 text-sky-600 hover:text-white hover:bg-sky-600 px-4 py-2 flex justify-center items-center'>My Skills <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></Link>
                <Link to="about" smooth={true} duration={500} className='group cursor-pointer rounded-lg border-2 border-sky-600 text-white hover:text-sky-600 bg-sky-600 hover:bg-white px-4 py-2 flex justify-center items-center ml-4'>Scroll Down <span className='animate-bounce'><FaAngleDoubleDown className='ml-3'/></span></Link>
              </div>
            </div>
            <div className='lg:w-1/3'>
                <img src={DevangPic} alt="" className='w-48 md:w-96 xl:w-full object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Home