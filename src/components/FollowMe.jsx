import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className='fixed bg-white bottom-0 border-t-2 inset-x-0'>
        <div className='container mx-auto'>
            <div className='flex text-lg justify-end items-center text-slate-600 p-4'>
                <div className='pr-4'>Follow Me</div>
                <div className='pr-3'>
                    <a href="https://www.facebook.com/devang.prajapati.501" target='_blank'>
                        <FaFacebook/>
                    </a>
                </div>
                <div className='pr-3'>
                    <a href="https://in.linkedin.com/in/devang-prajapati-24a6033a" target='_blank'>
                        <FaLinkedin/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/devangprjpt588/devangprajapati" target='_blank'>
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowMe