import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Detecting Faces using HaarCacades",
        description: "This project detects still faces either single face or multiple faces with openCv using haarCascades The code detects number of faces in an image and also displays an overlay of green reactangle over those image and can also detect multiple faces in an image",
        tags: ["Python", "OpenCV", "Face Detection"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "Detected-face.png"
        ],
        code: "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Detected-face.png?raw=true"
    },
    {
        title: "Kelpie Blogs",
        description: "A personal blog to document your thoughts using react.js",
        tags: ["React.Js", "Express.Js", "Node.Js", "MongoDB", "HTML5", "CSS3", "Javascript"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "Kelpie-blogs.gif"
        ],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/Kelpie-blogs.gif?raw=true"
    },
    {
        title: "SuperMarket Navigation",
        description: "A modern approach towards traditional shopping experience , This App is a part of my final year project which simulates as an online shopping SuperStore with store categpry such as Groccery, Clothing and Electronics. The Authentication is done using fAuth and is stored inside firestore.",
        tags: ["Java", "C#", "HTML5", "CSS3", "Javascript", "Firebase", "Android Studio", "Unity3D", "Path Finding"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "dashbaord.gif"
        ],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/supermarket.gif?raw=true"
    },
    {
        title: "Space Invader using Pygame",
        description: "Space Invader a classic 1978 arcader shooter game released by Taito in Japan which was the first fixed shooter of it's kind which set the template for this genre. I made this game using pygame module.",
        tags: ["Python", "Pygame"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "Space-Invader.gif"
        ],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/Space-Invader.gif?raw=true"
    },
    {
        title: "Retro Snake Using Js",
        description: "Nostalgic snake game with retro bg , this code generates a snake with random food item when upon collision wil make the snake item grow.",
        tags: ["HTML5", "CSS3", "Javascript"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "Retro-Snake.gif"
        ],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/Retro-Snake.gif?raw=true"
    },

    {
        title: "Stoic Qutes App",
        description: "This app displays random stoic quotes as a daily reminder of the roman empire made using React.js + Tailwind CSS + Go .",
        tags: ["React.Js", "Tailwind CSS", "Golang", "Go Colly"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "stoic-app.gif"
        ],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/stoic-app.gif?raw=true"
    },
    {
        title: "PiRockPaperScissors",
        description: "Play the classic game of Rock Paper Scissors with your Raspberry Pi with Machine Learning.",
        tags: ["Numpy", "CNN", "Computer Vision", "Machine Learning"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/PiRockPaperScissors/blob/master/notebooks/model.png?raw=true"
        ],
        code: "https://github.com/Jay-A-Kad/PiRockPaperScissors?tab=readme-ov-file"
    },
    {
        title: "FitMe App",
        description: "This project is a Weight tracker app that takes current weight and stores inside firebase realtime Db with a unique hash id with weight and current timestamp and day as it's child and the greetings change according to the current time.",
        tags: ["Python", "Kivy", "Firebase", "Matplot lib"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://private-user-images.githubusercontent.com/80452034/244273169-99cdec08-4d19-4a42-9d54-a17de98412bd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAyNDYwNjIsIm5iZiI6MTcyMDI0NTc2MiwicGF0aCI6Ii84MDQ1MjAzNC8yNDQyNzMxNjktOTljZGVjMDgtNGQxOS00YTQyLTlkNTQtYTE3ZGU5ODQxMmJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA2VDA2MDI0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJiMjUxNGM0NzkyYWZkZGQwNzNlNWQ0ZWY5MzRhMDIxOTJkYWZiYWUzNTk3NTRlNjcwYTZkYjdiOGZmYjExYmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fskC31d1cAw0R59KY88EpR8fG4iNCEPfZJelsvQz08E"
        ],
        code: "https://github.com/Jay-A-Kad/Fitme"
    },


];

const Projects = () => {
    return (
        <div>
            <div className='bg-black py-10'>
                <h1 className='text-white font-poppins text-[60px] lg:text-[300px] px-4 lg:px-8 '>Projects.</h1>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`min-h-screen w-full flex items-center justify-center bg-${project.bgGradient}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mx-auto px-6 py-8 flex relative ">
                            <div className={`flex flex-col items-start justify-center space-y-4 lg:px-40 text-${project.text1}`}>
                                <h2 className={`text-[28px] lg:text-[40px] font-bold mb-4 text-${project.text1}`}>{project.title}</h2>
                                <p className={`text-[18px] lg:text-2xl  mb-4 lg:mt-10 text-${project.text1} `}>{project.description}</p>
                                <div className="flex flex-wrap space-x-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className={`bg-indigo-400 px-3 py-2 rounded-md text-[15px] lg:text-[20px] mt-2 text-black`}>{tag}</span>
                                    ))}
                                </div>
                                <button className={`absolute left-1/2 transform -translate-x-1/2 translate-y-40 h-12 lg:h-20  px-4 lg:py-2 hover:scale-110 duration-500 lg:mt-4 text-[15px] lg:text-[40px] bottom-8 lg:bottom-16 text-${project.text1}`}><a href={project.code}>Code</a></button>
                            </div>
                            <div className="absolute top-0 right-0 transform -translate-x-10 -translate-y-40 lg:-translate-x-10 lg:-translate-y-72">
                                {project.images.map((image, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="w-40 h-40 lg:w-96 lg:h-96 rounded-full overflow-hidden relative"
                                    >
                                        <img
                                            src={image}
                                            alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
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

export default Projects;
