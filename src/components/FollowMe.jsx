import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const FollowMe = () => {
    return (
        <div className='fixed bg-white bottom-0 border-t-2 inset-x-0'>
            <div className='container mx-auto'>
                <ul className='flex text-lg justify-end items-center text-slate-600 p-4 space-x-4'>
                    <li>
                        Follow Me
                    </li>
                    <li>
                        <a href="https://in.linkedin.com/in/devangprajapati88" target='_blank'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/devangprjpt588/devangprajapati" target='_blank'>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://peerlist.io/devangprajapati" target='_blank'>
                            <SiPeerlist />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FollowMe