import React, { useRef, useEffect } from 'react';
import pdf from "../pdf/MdshahvezResume.pdf";
import img from "../assets/hero/img.jpg";
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile My name is Mohd Shahvez", 
        "I am MernStack/FullStack developer", 
        "Frontend developer (Web developer)"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <>
      <div className='container flex h-[80vh] justify-between items-center home gap-8 pl-[250px]'>
        
        {/* Left Section */}
        <div className="left w-[620px] p-6 rounded-lg border-2 border-yellow-300 flex flex-col gap-4"
          data-aos="fade-up-right"
          data-aos-duration="1000">
          
          {/* Animated Text */}
          <div className="text-center">
            <h1 ref={typedRef} className="text-2xl font-bold">
              I’m a web developer specializing in MernStack/FullStack.
            </h1>
          </div>
          
          {/* Fixed Download Button */}
          <div className="text-center">
            <a href={pdf} download="Mdshahvezresume.pdf" className="inline-block my-4 px-4 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold text-xl rounded hover:bg-yellow-500 hover:text-black transition duration-150 ease-in-out xs:text-base sm:text-lg md:text-xl lg:text-2xl">
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Right Section with Image */}
        <div className="right">
          <div className='img' data-aos="fade-up-left" data-aos-duration="1000">
            <img src={img} alt="" className='w-full h-auto max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
