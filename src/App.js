import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-50">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
