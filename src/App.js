import React from "react";
import "./index.css";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Skill from "./components/skills"
import Projects from "./components/projects";
import Footer from "./components/footer"
function App() {
  return (
    <div>
     <div >
       <Navbar/>
       <Hero/>
       <About/>
       <Skill/>
       <Projects/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
