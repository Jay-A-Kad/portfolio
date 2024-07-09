import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Navbar from './Navbar';
import { motion } from 'framer-motion';


const About = () => {
    const webDevAnimation1 = {
        animate: {
            x: [0, -200, -500, 0], // Positions to animate to: original -> Visual Computing -> Game Development -> original
            y: [0, -300, 0, 0],
        },
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        }
    };
    const webDevAnimation2 = {
        animate: {
            x: [0, 300, -200, 0], // Positions to animate to: original -> Visual Computing -> Game Development -> original
            y: [0, 0, -300, 0],
        },
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        }
    };
    const webDevAnimation3 = {
        animate: {
            x: [0, -200, 300, 0], // Positions to animate to: original -> Visual Computing -> Game Development -> original
            y: [0, 300, 0, 0],
        },
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        }
    };


    return (
        <div>
            <div className=' duration 500' >
                <div className='flex flex-col justify-center items-center bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50'>
                    <div className='banner relative bg-gradient-to-r from-red-500 to-orange-500 w-full h-[50%] lg:h-[500px]'>
                        <h1 className='text-[100px] lg:text-[300px] text-white font-lora px-4 lg:px-20'>About Me.</h1>
                    </div>
                    <div className='about-me flex flex-col text-end -translate-y-40 '>
                        <h1 className='ml-20 px-2 font-poppins text-[40px] lg:text-[120px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent lg:-translate-y-40 lg:mr-10 '>Hello, I'm</h1>
                        <h1 className='ml-20 px-2 font-poppins text-[40px] lg:text-[120px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent lg:-translate-y-40 lg:mr-10'>Jay Kadam</h1>
                        <h1 className='ml-20 px-3 font-poppins text-[40px] lg:text-[120px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent lg:-translate-y-40 lg:mr-10'>from Mumbai, India</h1>
                        <p className='text-start -translate-y-5 px-2 lg:px-28 mr-28 lg:mr-96 text-[22px] lg:text-[58px] font-poppins'>
                            Currently, I am in Clemson, SC, pursuing an M.S. in Computer Science
                            <span className='font-lora font-bold'>💻</span> with a specialization in Visual Computing at
                            <span className='font-lora font-bold'> Clemson University</span> <span className='font-lora font-bold'>🎓</span>
                        </p>


                        <p className='px-6 mt-10 lg:mt-60 font-lora text-[20px] lg:text-[58px] lg:mr-10 lg:px-20'>My interests lie in computer graphics and the exploration of innovative visual techniques that captivate and connect with audiences. I dedicate much of my time to crafting immersive and engaging game experiences.</p>
                        <h1 className='text-center mt-20 lg:mt-60 font-poppins font-bold text-[30px] lg:text-[40px] px-10'>
                            When I am not Programming, I like Hiking 🏞️, Table Tennis 🏓, Cycling 🚴‍♂️, creating Games 🎮, and binge-watching TV-shows 🎬
                        </h1>

                        <p className='text-center italic underline lg:text-[30px] lg:mt-20'>My recent binge Sopranos.</p>
                    </div>
                    <div className='disciplines bg-black w-full h-screen relative overflow-hidden'>
                        <h1 className='text-start font-poppins font-bold text-[45px] lg:text-[95px] text-white py-4 px-4 lg:py-16 lg:px-16'>My Disciplines.</h1>
                        <p className='text-white px-10 mt-10 text-[20px] lg:mt-28 lg:text-[55px] lg:px-60'>I have a deep passion for Game Development, Visual Computing, and Web Development. With a solid foundation in computer graphics and interactive design, I love creating immersive and visually stunning experiences. My journey in game development has been a source of both creativity and technical growth, while my work in visual computing lets me bring intricate details to life. In web development, I enjoy building dynamic, responsive, and user-friendly applications that explore new possibilities. By combining these disciplines, I aim to craft engaging and innovative digital experiences that captivate and inspire.</p>

                        {/* <div className="relative w-full h-[400px] lg:h-[800px] flex justify-center items-center">
                        <div className="relative w-[300px] h-[300px]">
                            <div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] -translate-x-[50%] -translate-y-[0%] lg:-translate-x-[50%] lg:-translate-y-[100%]" style={{ top: 0, left: '50%' }}>
                                <span>Visual Computing</span>
                            </div>
                            <div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] -translate-x-[20%] -translate-y-[25%] lg:-translate-x-[100%] lg:-translate-y-[50%]" style={{ top: '100%', left: 0 }}>
                                <span>Game Development</span>
                            </div>
                            <div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] -translate-x-[80%] -translate-y-[25%] lg:translate-x-[0%] lg:-translate-y-[50%]" style={{ top: '100%', left: '100%' }}>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div> */}
                        <div className="relative w-full h-[400px] lg:h-[800px] flex justify-center items-center -translate-y-[100%] lg:-translate-y-3/4">
                            <div className="relative w-[300px] h-[300px]">
                                <motion.div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] -translate-x-[50%] lg:-translate-x-[50%] lg:-translate-y-[100%]" style={{ top: 0, left: '50%' }}
                                    animate={webDevAnimation3.animate}
                                    transition={webDevAnimation3.transition}>
                                    <span className='text-[15px] lg:text-[25px] px-2 lg:px-4 font-poppins'>Visual Computing</span>
                                </motion.div>
                                <motion.div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] lg:-translate-x-[100%] lg:-translate-y-[50%]" style={{ top: '100%', left: 0 }}
                                    animate={webDevAnimation2.animate}
                                    transition={webDevAnimation2.transition}>
                                    <span className='text-[15px] lg:text-[25px] font-poppins'>Game Development</span>
                                </motion.div>
                                <motion.div className="circle absolute flex justify-center items-center text-center text-white rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 w-[120px] h-[120px] lg:w-[250px] lg:h-[250px] lg:-translate-x-[50%] lg:-translate-y-[50%]" style={{ top: '100%', left: '100%' }}
                                    animate={webDevAnimation1.animate}
                                    transition={webDevAnimation1.transition}
                                >
                                    <span className='text-[15px] lg:text-[25px] px-2 lg:px-4 font-poppins'>Web Development</span>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                    <div className='journey flex flex-col'>
                        <h1 className='text-[20px] lg:text-[100px] px-4 mt-10 lg:mt-20 mb-10 lg:mb-20 font-poppins'>My Journey</h1>
                        <p className='text-[30px] lg:text-[50px] font-lora px-6'>"If there were already a path, it would have to be someone else’s; the whole point is to find your own way."</p>
                        <p className='text-[20px] lg:text-[30px] font-roboto-fat px-6 mt-10 lg:mt-20 mb-20 lg:mb-40'> -Joseph Campbell</p>
                        <div className="w-full flex justify-center items-center">
                            <VerticalTimeline lineColor='#44527C' className='w-full max-w-screen-xl mx-auto shadow-xl'>
                                <VerticalTimelineElement className='vertical-timeline-element-education'
                                    icon={<LiaUniversitySolid className='bg-white' />}
                                    date='2024-2026'>
                                    <h3 className='font-poppins'>Clemson University, SC</h3>
                                    <p className='font-poppins'>M.S, Computer Science</p>
                                    <p>Specialization: Visual Computing</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className='vertical-timeline-element-education'
                                    icon={<HiOutlineDesktopComputer className='bg-white' />}
                                    date='2023'>
                                    <h3 className='font-poppins'>Python Developer Intern, Kesari Tours Pvt. Ltd.</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className='vertical-timeline-element-education'
                                    icon={<HiOutlineDesktopComputer className='bg-white' />}
                                    date='2022'>
                                    <h3 className='font-poppins'>Associate Engineer, ATOS</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className='vertical-timeline-element-education'
                                    icon={<LiaUniversitySolid className='bg-white' />}
                                    date='2017-2021'>
                                    <h3 className='font-poppins'>Vidyalankar Institute of Technology, Mumbai</h3>
                                    <p className='font-poppins'>Bachelor's of Engineering in Information Technology - 7.96/10 GPA</p>
                                    <p>Final Year Project: Supermarket Navigation</p>
                                    <p>This App is a part of my final year project which simulates as an online shopping SuperStore with store category such as Groccery, Clothing and Electronics."
                                        Based on the user cart items the A* algorithm will generate the shortest path between the items selected and will diplay the path on Unity3D.</p>
                                    <p className='hover:cursor-pointer hover:text-red-500'><Link to="https://www.ijera.com/pages/v11no5.html#">[Publication]</Link></p>
                                    <p className='hover:cursor-pointer hover:text-red-500'><Link to="https://github.com/Jay-A-Kad/SuperMarket-Navigation-User-App">[Code]</Link></p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className='vertical-timeline-element-education'
                                    icon={<IoSchoolSharp className='bg-white' />}
                                    date='2015'>
                                    <h3 className='font-poppins'>Dadar Parsee Youths Assembly High School, Mumbai</h3>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>

                    </div>
                    <div className='h-px bg-gray-300 w-[100%] mt-20 '></div>
                    <div className='w-full h-screen bg-black text-white'>
                        <h1 className='text-[45px] lg:text-[65px] font-poppins mt-4 px-4 py-10 lg:px-16 lg:py-20'>Stay Connected.</h1>
                        <h3 className='text-[25px] lg:text-[35px] font-lora px-4 mb-10  lg:px-16 '>Have a Project Idea?</h3>
                        <div className='flex flex-col text-center'>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125  hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                        </div>
                        <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                        <div className='w-full h-[55%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                            <h1 className=' text-white flex justify-center items-center text-[80px] lg:text-[300px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                            <h3 className=' text-white flex justify-center items-center text-[20px] lg:text-[60px] ml-2 font-poppins'>2024 Portfolio</h3>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default About;
