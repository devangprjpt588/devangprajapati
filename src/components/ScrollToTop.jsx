import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowUp } from "react-icons/hi";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {isVisible && (
                <div className={`scroll-component ${isVisible ? 'visible' : ''}`}>
                    <div className='animate-[bounce_1s_ease-in-out_2] bg-sky-600 p-2 text-xl rounded-lg text-white bottom-20 right-4 fixed cursor-pointer z-10'>
                        <Link to="home" smooth={true} duration={500}>
                            <HiArrowNarrowUp />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default ScrollToTop