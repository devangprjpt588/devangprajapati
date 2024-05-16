import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-20 p-4 bg-white z-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className='w-1/2'>
                        <Link to="home" smooth={true} duration={500}>
                            <span className='logo text-sky-600 cursor-pointer'>
                                DevangPrajapati
                            </span>
                        </Link>
                    </div>

                    {/* Menu */}
                    <ul className='navlinks hidden md:flex items-center text-slate-600'>
                        <li>
                            <Link to="home" smooth={true} duration={500}>
                                <FaHome/>
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <div onClick={handleClick} className='md:hidden z-10 text-white text-2xl'>
                        {!nav ? <FaBars style={{color: "rgb(2 132 199)"}} /> : <FaTimes/>}
                    </div>

                    {/* Mobile Menu */}
                    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-sky-600 text-white flex flex-col justify-center items-center'}>
                        <li className='my-6 text-4xl'>
                            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li className='my-6 text-4xl'>
                            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className='my-6 text-4xl'>
                            <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                                Skills
                            </Link>
                        </li>
                        <li className='my-6 text-4xl'>
                            <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar