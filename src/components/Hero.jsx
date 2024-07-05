import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import About from './About';



const Hero = () => {
    return (
        <div >
            <div className=' w-full h-screen flex flex-col  items-center mx-auto ' >
                <motion.div animate={{ y: [100, 200, 0] }}>
                    <img src='bit-profile.gif' className='w-[300px] lg:w-[600px] mt- border-r border-l border-t border-b border-blue-600 px-4 py-4 lg:px-12 lg:py-12 rounded'></img>
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
            <motion.div className=' w-full h-screen items-center mx-auto ' >
                <h3 className='px-2 lg:px-8 font-lora lg:text-[60px]'>My Responsibility.</h3>
                <p className='px-2 lg:px-20 text-[30px] lg:text-[60px] font-playfair mt-8 lg:mt-32 mx-4 lg:mx-20 '>" As a game developer, full-stack developer, and visual computing enthusiast, my main responsibility is to put my heart and soul into every project. I’m dedicated to understanding my clients' needs and working closely with them to create something truly special. Whether I'm developing an immersive game, building a dynamic web application, or crafting beautiful visuals, I always aim to deliver work that is both technically sound and creatively inspiring. I want to make sure my clients are not just satisfied but genuinely thrilled with the final product, creating digital experiences that leave a lasting impact."</p>
                <p className='mt-8 lg:mt-32 mx-10 lg:mx-20 lg:px-20 lg:text-[40px]'>Additionally, I also have some experience in customer service which has provided me valuable insights into understanding diverse customer needs. Through my interactions with individuals from North America, Europe, Jamaica, and various Southeast Asian countries, I've honed my ability to address a wide range of IT requirements. These experiences have taught me the importance of empathy and effective communication in meeting client expectations and delivering solutions that truly resonate.</p>
                <a className=' flex justify-center underline mt-10 lg:mt-32 lg:text-[30px] hover:text-size[200px] hover:scale-125 hover: bg-gradient-to-tr from-violet-500 to-violet-600 bg-clip-text text-transparent hover:cursor-pointer' href='about'>Learn More About Me</a>
                <div className='h-px bg-gray-300 w-[100%] mt-20 lg:mt-32'></div>
                <div className=' w-full mx-auto h-screen '>
                    <h1 className='font-lora font-bold text-[30px] lg:text-[60px] mt-20 px-4 lg:px-8 lg:mt-32'>Some of the Projects which I enjoyed creating</h1>
                    <p className='mt-8 lg:mt-32 mx-10 lg:mx-20 lg:px-20 lg:text-[40px]'>These projects are personal to me, stemming from both my university days and personal endeavors. Each one is crafted with the intention of creating something meaningful and useful in my own life. If you have a moment, I’d be delighted to share them with you. you can have a peek👀...</p>
                    <a className=' flex justify-center underline mt-10 lg:mt-32 lg:text-[30px] lg:mb-48 hover:text-size[200px hover:scale-125 hover: bg-gradient-to-tr from-violet-500 to-violet-600 bg-clip-text text-transparent hover:cursor-pointer' href='projects'>Some More Projects</a>


                    <div className='flex flex-col justify-center items-'>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Detected-face.png' className='w-[70%] lg:w-[40%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <h1 className='text-[20px]  lg:text-[35px] mt-8 lg:mt-28 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/detecting_faces_using_haarcascades'>Dectecting faces using haarCascades</h1>
                            <ul className='inline-block  mb-28'>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>Python</span>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>OpenCV</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Computer Vision</span>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>haarCascades</span>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Git</span>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Space-Invader.gif' className='w-[70%] lg:w-[40%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <a className='text-[20px] lg:text-[35px] mt-8 lg:mt-28 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/spaceInvader'>Space Invaders using Pygame</a>
                            <ul className='inline-block  mb-28'>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>Python</span>
                                <span className='p-1 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>PyGame</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Git</span>

                            </ul>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Kelpie-blogs.gif' className='w-[70%] lg:w-[40%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <a className='text-[20px] lg:text-[35px] mt-8 lg:mt-28 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/myBlogs'>Kelpie Blogs Using MERN Stack</a>
                            <ul className='inline-block mb-28'>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>React.Js</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Express.Js</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Node.Js</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>MongoDB</span>
                                <span className='p-2 text-[12px] lg:text-[25px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Javascript</span>
                            </ul>
                        </div>
                    </div>

                    <div className='w-full h-screen bg-black text-white'>
                        <h1 className='text-[45px] lg:text-[75px] font-poppins mt-4 px-4 lg:px-12 py-10'>Stay Connected.</h1>
                        <h3 className='text-[25px] font-lora px-4 lg:px-12 mb-10'>Have a Project Idea?</h3>
                        <div className='flex flex-col text-center'>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125  hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                        </div>
                        <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                        <div className='w-full h-[55%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                            <h1 className='flex justify-center items-center text-[80px] lg:text-[160px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                            <h3 className=' text-white flex justify-center items-center text-[20px] lg:text-[40px] ml-2 font-poppins'>2024 Portfolio</h3>
                        </div>
                    </div>
                </div>


            </motion.div>

        </div>
    );
}

export default Hero