import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className=" h-screen bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
