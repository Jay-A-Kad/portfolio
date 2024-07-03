import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-20 mx-auto px-4 max-w-[1240px]'>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent'><Link to="/">Jay Kadam.</Link></h1>

            <ul className='hidden lg:flex'>
                <li className='p-4'><Link to="/about">About</Link></li>
                <li className='p-4'><Link to="/projects">Projects</Link></li>
                <li className='p-4'>Resume</li>
            </ul>
            <ul className='hidden lg:inline'>
                <li>Status:</li>
                <li>Available for internships</li>
            </ul>
            <ul className='hidden lg:inline'>
                <li>Location:</li>
                <li>Clemson, SC</li>
            </ul>
            <div onClick={handleNav} className=' block md:hidden'>
                {!nav ? <AiOutlineClose size={40} /> : <RiMenu4Line size={40} />}

            </div>
            <div className={!nav ? 'fixed left-0 top-[10%] w-[60%] h-full px-4 ease-in-out duration-500 bg-opacity-[100%] pt-[50%]' : 'fixed top-[-100%] bottom-[100%] bg-indigo-700 bg-opacity-100 '}>
                <div className='bg-white rounded'>
                    <ul className=' ml-4 uppercase ease-in-out duration-800'>
                        <li className='p-4 border-b  font-playfair hover:bg-black hover:text-white duration-500 hover:scale-110' ><Link to="/about">About</Link></li>
                        <li className='p-4 border-b hover:bg-black hover:text-white duration-500 font-playfair hover:scale-110' ><Link to="/projects">Projects</Link></li>
                        <li className='p-4 border-b hover:bg-black hover:text-white duration-500 font-playfair hover:scale-110'>Resume</li>


                    </ul>
                    <ul className='flex text-[12px] pt-[40%]  '>
                        <li className='p-4 border-r hover:bg-black hover:text-white duration-500'><Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link></li>
                        <li className='p-4 border-r hover:bg-black hover:text-white duration-500'><Link to="https://github.com/Jay-A-Kad">Github</Link></li>
                        <li className='p-4 hover:bg-black hover:text-white duration-500'><Link to="mailto:jaykad982@gmail.com">Email</Link></li>
                    </ul>
                    <ul className='text-[12px] mt-10 '>
                        <li className='p-4 '>jaykad982@gmail.com</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Navbar