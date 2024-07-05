import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import KnowledgeTree from "./components/KnowledgeTree";

function App() {
  const location = useLocation();
  return (

    <div className=" h-screen bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledgetree" element={<KnowledgeTree />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
