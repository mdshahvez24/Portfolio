import React, { useEffect } from 'react';
import Home from "./component/Home"
import About from "./component/About"
import Navbar from "./component/Navbar"
import Experience from './component/Experience';
import Skills from './component/Skills';
import  Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from './component/Footer';
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {

  useEffect(()=>{
 Aos.init();
  }, [])

  return (

    <>
    <Navbar />
    <div className="container">
      <Home />
      <About/>
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  </>
     

 
  );
}

export default App;
