import React from 'react';
import tools from "./data/tools.json";

import vscode from '../assets/tools/VS.png'
import github from '../assets/tools/Github.png'
import postman from '../assets/tools/Postman.png'

const toolsImages = {
  Postman: postman,
  Vs_Code: vscode,
  Github: github
};

const Tools = () => {
  return (
    <div className="container tools">
      <h1 className="text-5xl font-bold justify-center items-center mt-10 mb-4">Tools</h1>
      <div className='items items flex flex-wrap justify-center items-center m-auto relative'>
        {tools.map((data) => (
          <div className="item w-[calc(33.33%-40px)] bg-gray-400 m-5 text-center p-5 rounded-lg border border-yellow-400" key={data.id}
          data-aos="flip-left"
          data-aos-duration="1000">
            <div className="img w-[70px] justify-center items-center text-black mt-4 text-xl">
              <img src={toolsImages[data.title]} alt="" />
              <div className="image-title">{data.title}</div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Tools;
