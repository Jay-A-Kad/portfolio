import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React, { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import KnowledgeTree from "./components/KnowledgeTree";

function App() {
  const location = useLocation();
  const [showArrow, setShowArrow] = useState(true);

  const handleClick = () => {
    setShowArrow(false);
  };

  return (
    <div className="h-screen bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50">
      <div onClick={handleClick}>
        <Navbar />
      </div>

      {showArrow && (
        <div className="absolute top-24 left-4 lg:top-64 lg:left-4 flex flex-col items-center">
          <div className="animate-bounce text-[24px] md:text-[28px] lg:text-[62px] font-bold font-gamify text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Click my Name! Please
          </div>
          <svg
            className="w-40 h-40 lg:w-80 lg:h-80 text-red-500 animate-pulse"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 50 C30 30, 20 60, 10 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <polygon
              points="10,40 15,35 15,45"
              fill="currentColor"
            />
          </svg>
        </div>
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledgetree" element={<KnowledgeTree />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
