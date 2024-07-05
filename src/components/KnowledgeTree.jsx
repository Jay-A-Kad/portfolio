import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Planet = ({ size }) => (
    <div className="relative w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-teal-200 to-teal-500 rounded-full lg:-translate-x-52 -translate-x-12 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform rotate-x-45 rotate-y-45"></div>
        <div className="absolute w-full h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform rotate-x-45 rotate-y-45 scale-150 animate-pulse"></div>
        <div className="absolute w-full h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform rotate-x-45 rotate-y-45 scale-125 animate-pulse"></div>
        <div className="absolute w-full h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform rotate-x-45 rotate-y-45 scale-100 animate-pulse"></div>
    </div>
);

const Ring = ({ ringSize, rotationSpeed, asteroids, textStyle }) => {
    const ringRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ringRef.current) {
                const currentRotation = (parseFloat(ringRef.current.style.transform.replace('rotate(', '').replace('deg)', '')) + rotationSpeed) % 360;
                ringRef.current.style.transform = `rotate(${currentRotation}deg)`;

                // Update text elements to negate rotation
                Array.from(ringRef.current.children).forEach((child, index) => {
                    child.style.transform = `rotate(-${currentRotation}deg)`;
                });
            }
        }, 1000 / 60); // 60 FPS

        return () => clearInterval(interval);
    }, [rotationSpeed]);

    return (
        <div
            ref={ringRef}
            className="absolute border border-gray-500 rounded-full"
            style={{
                width: `${ringSize}rem`,
                height: `${ringSize}rem`,
                transform: "rotate(0deg)",
            }}
        >
            {asteroids.map((asteroid, index) => (
                <div
                    key={index}
                    className="absolute flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: `${50 + 50 * Math.cos((2 * Math.PI * index) / asteroids.length)}%`,
                        top: `${50 + 50 * Math.sin((2 * Math.PI * index) / asteroids.length)}%`,
                    }}
                >
                    <div className={`${textStyle}`}>{asteroid}</div>
                </div>
            ))}
        </div>
    );
};

const KnowledgeTree = () => {
    const ringSizesDesktop = [35, 55, 75]; // Ring sizes for desktop
    const ringSizesMobile = [10, 17, 22];  // Ring sizes for mobile
    const rotationSpeeds = [0.08, 0.06, 0.04]; // Rotation speeds for each ring

    const asteroidLabels = [
        ["HTML5", "CSS3", "Golang", "Python", "C/C++", "Javascript"],
        ["Redux", "React.Js", "Node.Js", "Tailwind CSS", "Express.Js", "MongoDB", "PostgreSql", "Firebase", "JWT Authentication"],
        ["Computer Graphics", "Vim", "Docker", "Kubernetes", "Git", "OpenGL", "Django", "Flask", "Jenkins", "Service Now", "Unreal Engine", "PyGame"]
    ];

    const textStyle = "text-white text-[8px] lg:text-[22px] font-poppins"; // Custom Tailwind styles for the asteroid text

    const [ringSizes, setRingSizes] = React.useState(ringSizesDesktop);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Desktop
                setRingSizes(ringSizesDesktop);
            } else { // Mobile
                setRingSizes(ringSizesMobile);
            }
        };

        handleResize(); // Set initial sizes
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-gradient-to-r from-black via-indigo-900 to-indigo-800">
            <div className="w-full h-[320px] lg:h-[650px] bg-gradient-to-r from-indigo-400 to-cyan-400 lg:mb-10">
                <h1 className="text-white font-poppins text-[60px] lg:text-[300px] px-4 lg:px-8 ">Knowledge Tree.</h1>
                <p className="text-center text-white font-poppins text-[15px] lg:text-[40px] px-10 lg:px-20 mb-2">The idea of building a<span className="font-lora bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> "Knowledge Tree" </span>often comes from the desire to visually represent one's skills and expertise in a structured and engaging way.  </p>
            </div>
            <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-r from-black via-indigo-900 to-indigo-800 ">
                <div className='w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] rounded-full bg-white lg:translate-x-48 translate-x-12 blur-md lg:blur-xl'></div>
                <Planet size={10} />
                {ringSizes.map((ringSize, index) => (
                    <Ring
                        key={index}
                        ringSize={ringSize}
                        rotationSpeed={rotationSpeeds[index]}
                        asteroids={asteroidLabels[index]}
                        textStyle={textStyle}
                    />
                ))}
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
    );
};

export default KnowledgeTree;
