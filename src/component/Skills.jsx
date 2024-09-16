import React from 'react'
import skills from "./data/skills.json";
import htmlImg from "../assets/skills/html.png"
import cssImg from '../assets/skills/css.png';
import bootstrap from '../assets/skills/Bootstrap.png'
import tailwind from '../assets/skills/Tailwind.png'
import jsImg from '../assets/skills/javascript.png';
import reactImg from '../assets/skills/react.png';
import nodeImg from '../assets/skills/node.png';
import mongodbImg from '../assets/skills/mongodb.png';
import express from '../assets/skills/ExpressJS.png';
import python from '../assets/skills/python.png'
import sql from '../assets/skills/MySQL.png'
import clang from '../assets/skills/C.png'
import Tools from './Tools';



const images = {
    HTML: htmlImg,
    CSS: cssImg,
    BootStrap: bootstrap,
    Tailwind_Css: tailwind,
    JavaScript: jsImg,
    React: reactImg,
    Node: nodeImg,
    Express: express,
    MongoDB: mongodbImg,
    SQL: sql,
    Python: python,
    C_Language: clang
  };

const Skills = () => {
  return (
    
      <div className="container skills w-[900px] m-[auto]" id="skills">
      <h1 className=" text-5xl font-bold justify-center items-center mx-auto mt-10 mb-4">Skills</h1>
      <div className='items flex flex-wrap justify-center text-center mb-4 mt-10 m-auto relative '>
        {skills.map((data) => (
        <div className="item w-[calc(33.33%-40px)] bg-black m-5 text-center p-5 rounded-lg border border-yellow-400  " key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000">
       <div className='img w-[70px] justify-center items-center'>
       <img src={images[data.title]} alt=""/>
        <div className='text-xl text-center mt-5'>{data.title}</div>
    </div>
    </div>
        ))}
       </div> 
       <Tools/> 
      </div>
 
  );
};

export default Skills
