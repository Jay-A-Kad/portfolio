import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <div >
            <div className='max-w-[1240px] w-full h-screen flex flex-col  items-center mx-auto ' >
                <div>
                    <img src='bit-profile.gif' className='w-[300px] mt-10 border-r border-l border-t border-b border-blue-600 px-4 py-4 rounded'></img>
                </div>
                <h1 className='mt-8 font-roboto-fat italic'>hi there,</h1>
                <h2 className='font-playfair'>I'm, Jay Kadam</h2>
                <div>
                    <ReactTyped
                        strings={[
                            '<span class="font-roboto-fat text-[30px]">Full-Stack Developer</span>',
                            '<span class="font-gamify text-[30px]">Game Developer</span>',
                            '<span class="font-lora text-[30px]">Visual Computing</span>'
                        ]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </div>
            </div>
            <div className='absolute bottom-0 w-full overflow-hidden bg-white bg-opacity-10 '>
                <div className='marquee-container'>
                    <div className='marquee-content text-[20px] font-bold bg-gradient-to-tr from-teal-200 to-emerald-600 bg-clip-text text-transparent'>
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
            <div className='max-w-[1240px] w-full h-screen items-center mx-auto'>
                <h3 className='px-2 font-lora'>My Responsibility.</h3>
                <p className='px-2 text-[30px] font-playfair mt-8 mx-4'>" I aim to put out my best work and ensure that clients that I work with passion and maximize the impact  are satisified with the product."</p>
                <p className='mt-8 mx-10'>Additionally, I also have some experience in the customer service , which helped me develope deep understanding of various accents</p>
                <a className=' flex justify-center underline mt-10 hover:text-size[200px hover:scale-125 hover: bg-gradient-to-tr from-violet-500 to-violet-600 bg-clip-text text-transparent hover:cursor-pointer'><Link to="/about">Learn More About Me</Link></a>
                <div className='h-px bg-gray-300 w-[100%] mt-20 '></div>
                <div className='max-w-[1240px] w-full mx-auto h-screen '>
                    <h1 className='font-lora font-bold text-[30px] mt-20 px-4'>Some of the Projects which I enjoyed creating</h1>
                    <p className='px-6 mt-4'>These projects are my personal projects and some are from my Uni days , I always strive to make projects which I intend to use. If you have some time, you can have a peek...</p>
                    <a className=' flex justify-center underline mt-10 hover:text-size[200px hover:scale-125 hover: bg-gradient-to-tr from-violet-500 to-violet-600 bg-clip-text text-transparent hover:cursor-pointer'><Link to="/projects">Some More Projects</Link></a>


                    <div className='flex flex-col justify-center items-'>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Detected-face.png' className='w-[70%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <h1 className='text-[20px] mt-8 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/detecting_faces_using_haarcascades'>Dectecting faces using haarCascades</h1>
                            <ul className='inline-block '>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>Python</span>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>OpenCV</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Computer Vision</span>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>haarCascades</span>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Git</span>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Space-Invader.gif' className='w-[70%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <a className='text-[20px] mt-8 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/spaceInvader'>Space Invaders using Pygame</a>
                            <ul className='inline-block '>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>Python</span>
                                <span className='p-1 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>PyGame</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Git</span>

                            </ul>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <img src='Kelpie-blogs.gif' className='w-[70%] mt-20 border-r border-l border-t border-b px-4 py-4 border-indigo-500 rounded'></img>
                            <a className='text-[20px] mt-8 font-poppins hover:cursor-pointer hover:scale-105 underline' href='https://github.com/Jay-A-Kad/myBlogs'>Kelpie Blogs Using MERN Stack</a>
                            <ul className='inline-block'>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent'>React.Js</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Express.Js</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Node.Js</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>MongoDB</span>
                                <span className='p-2 text-[12px] bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent '>Javascript</span>
                            </ul>
                        </div>
                    </div>
                    <div className='h-px bg-gray-300 w-[100%] mt-20 '></div>
                    <div className='w-full h-screen'>
                        <h1 className='text-[35px] font-playfair mt-20 px-4 py-10'>Stay Connected.</h1>
                        <h3 className='text-[25px] font-lora px-4 mb-10'>Have a Project Idea?</h3>
                        <div className='flex flex-col'>
                            <a className='text-[25px] font-gamify px-6 hover:scale-105 hover:bg-black hover:text-white hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-105 hover:bg-black hover:text-white hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link></a>
                            <a className='text-[25px] font-gamify px-6 hover:scale-105 hover:bg-black hover:text-white hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                        </div>
                        <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                        <div className='w-full h-[50%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                            <h1 className='flex justify-center items-center text-[80px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                            <h3 className=' text-white flex justify-center items-center text-[20px] ml-2 font-poppins'>2024 Portfolio</h3>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Hero