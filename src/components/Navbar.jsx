import React, { useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-20 lg:h-[160px] mx-auto px-4 z-50 relative'>
            <h1 className='text-[20px] lg:text-[65px] font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent'>
                <Link to="/">Jay Kadam.</Link>
            </h1>
            <ul className='hidden lg:flex lg:text-[30px] font-poppins'>
                <li className='p-4 mx-10 hover:bg-black hover:text-white duration-500 hover:scale-110'>
                    <Link to="/about">About</Link>
                </li>
                <li className='p-4 mx-10 hover:bg-black hover:text-white duration-500 hover:scale-110'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='p-4 mx-10 hover:bg-black hover:text-white duration-500 hover:scale-110'>
                    <Link to="/knowledgetree">Knowledge Tree</Link>
                </li>
                <li className='p-4 ml-10 hover:bg-black hover:text-white duration-500 hover:scale-110'>
                    <button>
                        <a href='CV_Jay Kadam.pdf' download="CV_Jay Kadam.pdf">Resume</a>
                    </button>
                </li>
            </ul>
            <ul className='hidden lg:inline'>
                <li className='lg:text-[30px] font-poppins'>Status:</li>
                <li className='font-lora text-[20px]'>Available for internships</li>
            </ul>
            <ul className='hidden lg:inline'>
                <li className='lg:text-[30px] font-poppins px-10'>Location:</li>
                <li className='px-10 font-lora text-[20px]'>Clemson, SC</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <RiMenu4Line size={40} /> : <AiOutlineClose size={40} />}
            </div>
            <div className={`fixed inset-0 ${nav ? 'bg-white bg-opacity-100 z-40' : 'bg-opacity-0 pointer-events-none'} ease-in-out duration-500`}>
                <div className={`fixed top-0 left-0 w-[90%] h-full bg-white shadow-3xl pt-10 z-50 ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex justify-end pr-4'>
                        <AiOutlineClose size={40} className='cursor-pointer' onClick={handleNav} />
                    </div>
                    <ul className='ml-4 uppercase ease-in-out duration-800 mt-20'>
                        <li className='p-4 border-b font-poppins hover:bg-black hover:text-white duration-500 hover:scale-95'>
                            <Link to="/" onClick={handleNav}>Home</Link>
                        </li>
                        <li className='p-4 border-b font-poppins hover:bg-black hover:text-white duration-500 hover:scale-95'>
                            <Link to="/about" onClick={handleNav}>About</Link>
                        </li>
                        <li className='p-4 border-b hover:bg-black hover:text-white duration-500 font-poppins hover:scale-95'>
                            <Link to="/projects" onClick={handleNav}>Projects</Link>
                        </li>
                        <li className='p-4 border-b hover:bg-black hover:text-white duration-500 font-poppins hover:scale-95'>
                            <Link to="/knowledgetree" onClick={handleNav}>Knowledge Tree</Link>
                        </li>
                        <li className='p-4 border-b hover:bg-black hover:text-white duration-500 font-poppins hover:scale-95'>
                            <button>
                                <a href='CV_Jay Kadam.pdf' download="CV_Jay Kadam.pdf">Resume</a>
                            </button>
                        </li>
                    </ul>
                    <ul className='flex text-[16px] pt-[30%]'>
                        <li className='p-6 border-r hover:bg-black hover:text-white duration-500'>
                            <Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link>
                        </li>
                        <li className='p-6 border-r hover:bg-black hover:text-white duration-500'>
                            <Link to="https://github.com/Jay-A-Kad">Github</Link>
                        </li>
                        <li className='p-6 hover:bg-black hover:text-white duration-500'>
                            <Link to="mailto:jaykad982@gmail.com">Email</Link>
                        </li>
                    </ul>
                    <ul className='text-[12px] mt-10'>
                        <li className='p-4'>jaykad982@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
