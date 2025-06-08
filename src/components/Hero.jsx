import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50">

            {/* Hero Section */}
            <section className="w-full min-h-screen flex flex-col justify-center items-center py-10 px-4 sm:px-8 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center w-full gap-10">

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
                        <motion.div animate={{ y: [100, 200, 0] }}>
                            <img
                                src="https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/bit-profile.gif?raw=true"
                                className="w-48 sm:w-64 lg:w-[300px] border border-blue-600 p-4 rounded"
                                alt="Jay Kadam profile gif"
                            />
                        </motion.div>
                        <motion.h1 animate={{ y: [-100, 200, 0] }} className="text-lg sm:text-xl lg:text-2xl font-roboto-fat italic">
                            hi there,
                        </motion.h1>
                        <motion.h2 animate={{ y: [-100, 200, 0] }} className="text-2xl sm:text-3xl lg:text-4xl font-playfair">
                            I'm Jay Kadam
                        </motion.h2>
                        <div className="text-center">
                            <ReactTyped
                                strings={[
                                    '<span class="font-gamify text-[20px] sm:text-[28px] lg:text-[40px] bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Game Developer</span>',
                                    '<span class="font-lora text-[20px] sm:text-[28px] lg:text-[40px] bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">XR Developer</span>',
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </div>

                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 py-10">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold font-poppins">About Me</h2>
                        <p className="text-base sm:text-lg lg:text-xl font-poppins leading-relaxed">
                            I’m a game developer passionate about crafting interactive stories and immersive digital experiences—whether through games, XR, or embodied conversational agents (ECA)
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl font-poppins leading-relaxed">
                            Currently, I’m pursuing an M.S. in Computer Science with a specialization in Visual Computing at Clemson University 🎓, where I work as a Research Assistant at the Synthetic Personas Research Lab, designing intelligent virtual humans. I’m also a member of the university’s Game Development Club, where I collaborate on innovative gameplay concepts and prototypes
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl font-poppins leading-relaxed">
                            When I am not Programming, I enjoy building narrative-driven game worlds, hiking 🏞️, playing table tennis 🏓
                        </p>
                    </div>


                </div>
            </section>

            {/* Scrolling Skill Banner */}
            <section className="w-full overflow-hidden bg-white bg-opacity-15 py-2">
                <div
                    className="marquee text-base sm:text-lg font-bold bg-gradient-to-tr from-teal-200 to-emerald-600 bg-clip-text text-transparent"
                    style={{
                        display: 'flex',
                        width: 'max-content',
                        animation: 'scroll-left 30s linear infinite',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {Array(3).fill(
                        <>
                            <span className="mx-2">Unity3D |</span>
                            <span className="mx-2">ECA |</span>
                            <span className="mx-2">Game Physics |</span>
                            <span className="mx-2">Virtual Humans |</span>
                            <span className="mx-2">Rigging |</span>
                            <span className="mx-2">Computer Graphics |</span>
                            <span className="mx-2">OpenGL |</span>
                            <span className="mx-2">Virtual Reality |</span>
                        </>
                    )}
                </div>

                <style>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </section>


            {<div className="w-full bg-gray-100 px-6 lg:px-20 py-20">
                <h2 className="text-3xl lg:text-6xl font-bold text-center mb-20 font-poppins">Projects.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Mother 2D-game using Pygame",
                            description: "Mother is a 2D horror platformer combining story-rich dialogue, atmospheric pixel art, and responsive controls.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/mother.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/VirtualHumanProject",
                            demo: "https://www.youtube.com/watch?v=WvCSbRjaGr8",
                            tags: ["Pygame", "LibreSprite", "Narrative Design"]
                        },
                        {
                            title: "Lazy Light Generator for Unity3D",
                            description: "A Unity Editor tool for automatic light placement using Poisson sampling and scene geometry awareness.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/lazylight.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/LazyLightPackage",
                            demo: "",
                            tags: ["Unity Editor Tool", "Procedural Lighting", "Poisson Disk"]
                        },
                        {
                            title: "EmpoCop: Policing with Empathy",
                            description: "EmpoCop: Policing with Empathy is a Unity3D game-in-progress where you play as an officer responding to a home disturbance. Your dialogue choices affect metrics like empathy, bias, and community trust, leading to a dynamic cutscene that reflects your approach.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/Screenshot%202024-11-13%20at%201.50.53%E2%80%AFPM.png?raw=true",
                            github: "",
                            demo: "https://www.youtube.com/watch?v=V74prh-wY0c",
                            tags: ["Unity3D", "Plastic SCM", "MakeHuman", "Narrative-Driven"]
                        },
                        {
                            title: "Coin Rush: The Demon Curse",
                            description: "Coin Rush TDC, where a cursed explorer, transformed into a beast, must navigate a trap-filled temple and collect mystical coins to break the spell. As dark forces close in, every coin brings you closer to redemption or eternal doom.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/Screenshot%202025-06-08%20at%206.56.04%E2%80%AFPM.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/CoinRush",
                            demo: "https://www.youtube.com/watch?v=Je6-MBsY3f8",
                            tags: ["Unity3D", "Mixamo", "HDRP", "Event-Driven", "Third-Person POV"]
                        },
                        {
                            title: "Toon Shading using OpenGL",
                            description: "The project aims to implement a cel shading technique with a 4-channel stylized highlighting and edge detection, aiming to create visually appealing and illustrative rendering effects for 3D objects such as spheres, torus, and stylized pineapple which are rotating along their axis",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/toonshader.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/Toon-shading-using-OpenGL",
                            demo: "",
                            tags: ["Computer Graphics", "OpenGL", "HLSL"]
                        },
                        {
                            title: "SuperMarket Navigation",
                            description: "This mobile app simulates a virtual superstore with sections for groceries, clothing, and electronics. Users sign in via Firebase, add items to their cart, and are guided through the store using an A* algorithm for optimal pathfinding creating an efficient, immersive shopping experience",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/supermarket-navigation-2.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/SuperMarket-Navigation-User-App",
                            demo: "",
                            tags: ["Java", "JS", "Firebase", "Android Studio", "Unity3D", "Path-Finding"]
                        },
                        {
                            title: "Alien Showdown: The Global Warfare",
                            description: "The Moon is infested with Bleepblops an alien parasites threatening Earth. As the last astronaut of Project ExoPurge, you must destroy the hives before your oxygen runs out. Armed with a plasma rifle and limited supplies, it’s a race to cleanse the Moon and save humanity",
                            github: "https://github.com/Jay-A-Kad/Alien-Invasion-GW",
                            demo: "",
                            tags: ["Unity3D", "HDRP", "Unity Asset Store", "Game Physics", "Trail-Rendering"]
                        },
                        {
                            title: "Alien Showdown: Invasion of Bleep-Blops",
                            description: "Defend Earth from the relentless Bleep-Blops in this fast-paced space shooter. Battle alien swarms, navigate asteroid fields, and upgrade your arsenal to survive. Only your skill and strategy can stop the invasion and save humanity.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/Screenshot%202025-06-08%20at%206.55.26%E2%80%AFPM.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/alien-invasion-IOBB",
                            demo: "",
                            tags: ["Unity3D", "URP", "Unity Asset Store", "Game Physics"]
                        },
                        {
                            title: "Space Invader using Pygame",
                            description: "Space Invader, built with Pygame, is a modern take on the 1978 arcade classic. As a lone space soldier, you dodge enemy fire and shoot down waves of aliens before they reach Earth—blending timeless gameplay with fast-paced action.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/93020256-0b30-4ef1-ae1a-db4fc618933f.jpeg?raw=true",
                            github: "https://github.com/Jay-A-Kad/spaceInvader",
                            demo: "",
                            tags: ["Python", "Pygame"]
                        },
                        {
                            title: "PiRockPaperScissors",
                            description: "Experience the timeless game of Rock-Paper-Scissors on your Raspberry Pi, enhanced with machine learning. By harnessing camera input and classification algorithms, the system recognizes your hand gestures and responds accordingly, creating a dynamic, interactive twist on the classic showdown",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/6472b524-1e53-4493-a30f-e3382641d192.jpeg?raw=true",
                            github: "https://github.com/Jay-A-Kad/PiRockPaperScissors",
                            demo: "",
                            tags: ["Python", "Numpy", "CNN", "CV", "ML"]
                        },
                        {
                            title: "Detecting Faces using HaarCacades",
                            description: "This Python project uses OpenCV and Haar cascades to detect faces in images, outlining each with a green rectangle ideal for basic computer vision tasks",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/Detected-face.png?raw=true",
                            github: "https://github.com/Jay-A-Kad/spaceInvader",
                            demo: "",
                            tags: ["Python", "OpenCV", "Face Detection"]
                        },
                        {
                            title: "Retro Snake Using Js",
                            description: "A nostalgic Snake game with a retro background where a pixelated serpent grows with each meal. Simple mechanics and classic visuals capture the charm of the original arcade experience.",
                            image: "https://github.com/Jay-A-Kad/portfolio/blob/master/public/project-images/Retro-Snake.gif?raw=true",
                            github: "https://github.com/Jay-A-Kad/retro-snake",
                            demo: "",
                            tags: ["HTML5", "CSS3", "JS"]
                        },
                    ].map((project, index) => {
                        const isBlack = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`rounded-lg shadow-lg p-6 flex flex-col items-center ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`}
                            >
                                <img src={project.image} alt={project.title} className="mb-4 w-[200px] h-[120px] object-cover rounded" />
                                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                                <p className="text-center mb-2">{project.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-violet-200 text-violet-800 font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-4 py-2 rounded border ${isBlack ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition duration-300`}
                                    >
                                        Source Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-4 py-2 rounded border ${isBlack ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition duration-300`}
                                        >
                                            Play Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>}

            {<div className=' duration 500' >
                <div className='flex flex-col justify-center items-center bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50'>
                    <div className='disciplines bg-black w-full relative overflow-hidden'>
                        <motion.div className=' w-full h-screen items-center mx-auto lg:mt-[100px]' >
                            <div className='w-full h-screen bg-black text-white'>
                                <h1 className='text-[45px] lg:text-[75px] font-poppins mt-4 px-4 lg:px-12'>Stay Connected.</h1>
                                <h3 className='text-[25px] font-lora px-4 lg:px-12 mb-10'>Have a Project Idea?</h3>
                                <div className='flex flex-col text-center'>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125  hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jayashishkadam/">LinkedIn</Link></a>
                                    <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                                </div>
                                <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                                <div className='w-full h-[55%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                                    <h1 className='flex justify-center items-center text-[80px] lg:text-[160px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                                    <h3 className=' text-white flex justify-center items-center text-[20px] lg:text-[40px] ml-2 font-poppins'>2025 Portfolio</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>}


        </div >
    );
}

export default Hero