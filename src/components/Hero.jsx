import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import Navbar from './Navbar';




const Hero = () => {
    return (
        <div >
            <div className=' w-full h-screen flex flex-col  items-center mx-auto ' >
                <motion.div animate={{ y: [100, 200, 0] }}>
                    <img src='https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/bit-profile.gif?raw=true' className='w-[300px] lg:w-[400px] mt- border-r border-l border-t border-b border-blue-600 px-4 py-4 lg:px-12 lg:py-12 rounded'></img>
                </motion.div>
                <motion.h1 animate={{ y: [-100, 200, 0] }} className='mt-8 font-roboto-fat italic lg:text-[50px]'>hi there,</motion.h1>
                <motion.h2 animate={{ y: [-100, 200, 0] }} className='font-playfair lg:text-[60px]'>I'm, Jay Kadam</motion.h2>
                <div>
                    <ReactTyped
                        strings={[
                            '<span class="font-roboto-fat text-[30px] lg:text-[80px] bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Full-Stack Developer</span>',
                            '<span class="font-gamify text-[30px] lg:text-[80px] bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Game Developer</span>',
                            '<span class="font-lora text-[30px] lg:text-[80px] bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Visual Computing</span>'
                        ]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </div>
            </div>
            <div className='absolute bottom-0 w-full overflow-hidden bg-white bg-opacity-15 '>
                <div className='marquee-container'>
                    <div className='marquee-content text-[20px] lg:text-[35px] font-bold bg-gradient-to-tr from-teal-200 to-emerald-600 bg-clip-text text-transparent'>
                        <span className='mx-2'>| Frontend | </span>
                        <span className='mx-2'>Backend | </span>
                        <span className='mx-2'>Database Management | </span>
                        <span className='mx-2'>DevOps | </span>
                        <span className='mx-2'>Game Mathematics | </span>
                        <span className='mx-2'>Game Physics | </span>
                        <span className='mx-2'>Unreal Engine | </span>
                        <span className='mx-2'>Computer Graphics | </span>
                        <span className='mx-2'>OpenGL | </span>
                        <span className='mx-2'>| Frontend | </span>
                        <span className='mx-2'>Backend | </span>
                        <span className='mx-2'>Database Management | </span>
                        <span className='mx-2'>DevOps | </span>
                        <span className='mx-2'>Game Mathematics | </span>
                        <span className='mx-2'>Game Physics | </span>
                        <span className='mx-2'>Unreal Engine | </span>
                        <span className='mx-2'>Computer Graphics | </span>
                        <span className='mx-2'>OpenGL | </span>
                        <span className='mx-2'>| Frontend | </span>
                        <span className='mx-2'>Backend | </span>
                        <span className='mx-2'>Database Management | </span>
                        <span className='mx-2'>DevOps | </span>
                        <span className='mx-2'>Game Mathematics | </span>
                        <span className='mx-2'>Game Physics | </span>
                        <span className='mx-2'>Unreal Engine | </span>
                        <span className='mx-2'>Computer Graphics | </span>
                    </div>
                </div>
            </div>
            <div className=' duration 500' >
                <div className='flex flex-col justify-center items-center bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50'>
                    <div className='banner relative bg-gradient-to-r from-red-500 to-orange-500 w-full lg:h-[400px]'>
                        <h1 className='text-[100px] lg:text-[200px] text-white font-lora px-4 lg:px-20'>About Me.</h1>
                    </div>
                    <div className='about-me flex flex-col text-end -translate-y-40 '>
                        <p className='text-center -translate-y--20 lg:mt-60 px-2 lg:px-28 text-[22px] lg:text-[30px] font-poppins'>
                            Currently, I am in Clemson, SC, pursuing an M.S. in Computer Science
                            <span className='font-lora font-bold'>💻</span> with a specialization in Visual Computing at
                            <span className='font-lora font-bold'> Clemson University</span> <span className='font-lora font-bold'>🎓</span>
                        </p>

                        <h1 className='text-center mt-20 lg:mt-40 font-poppins font-bold text-[30px] lg:text-[30px] px-10'>
                            When I am not Programming, I like Hiking 🏞️, Table Tennis 🏓, Cycling 🚴‍♂️, creating Games 🎮, and binge-watching TV-shows 🎬
                        </h1>

                        <p className='text-center italic underline lg:text-[30px] lg:mt-20'>My recent binge Arcane.</p>
                    </div>
                    <div className='disciplines bg-black w-full relative overflow-hidden'>
                        <h1 className='text-start font-poppins font-bold text-[45px] lg:text-[55px] text-white py-4 px-4 lg:py-16 lg:px-16'>My Disciplines.</h1>
                        <p className='text-white px-10 mt-10 text-[20px] lg:mt-28 lg:text-[35px] lg:px-60'>I have a deep passion for Game Development, Visual Computing, and Web Development. With a solid foundation in computer graphics and interactive design, I love creating immersive and visually stunning experiences. My journey in game development has been a source of both creativity and technical growth, while my work in visual computing lets me bring intricate details to life. In web development, I enjoy building dynamic, responsive, and user-friendly applications that explore new possibilities. By combining these disciplines, I aim to craft engaging and innovative digital experiences that captivate and inspire.</p>
                        <motion.div className=' w-full h-screen items-center mx-auto lg:mt-[120px]' >
                            <div className='w-full h-screen bg-black text-white'>
                                <h1 className='text-[45px] lg:text-[75px] font-poppins mt-4 px-4 lg:px-12 py-10'>Stay Connected.</h1>
                                <h3 className='text-[25px] font-lora px-4 lg:px-12 mb-10'>Have a Project Idea?</h3>
                                <div className='flex flex-col text-center'>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125  hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jayashishkadam/">LinkedIn</Link></a>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                                </div>
                                <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                                <div className='w-full h-[55%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                                    <h1 className='flex justify-center items-center text-[80px] lg:text-[160px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                                    <h3 className=' text-white flex justify-center items-center text-[20px] lg:text-[40px] ml-2 font-poppins'>2024 Portfolio</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Hero