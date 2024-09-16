import React from 'react';
import project from './data/projects.json';

const Project = () => {
  return (
    <div>
      <div className="container projects my-3" id="project">
        <h1 className="text-6xl font-bold justify-center text-center mb-4 mt-10">Projects</h1>

        <div className="flex flex-wrap justify-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-4 sm:w-1 md:w-1/2 lg:w-1/4 mx-4 px-8"
              style={{ flexBasis: 'calc(25% - 2rem)' }} // 4 items per row
            >
              <div
                className="card bg-gray-600 text-white pt-4"
                style={{
                  width: '20rem',
                  height: '26rem',
                  border: '2px solid yellow',
                  boxShadow: '5px 5px 10px 10px rgba(101,75,10,0.5)',
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img1 flex justify-center items-center">
                  <img
                    src={data.imageSrc}
                    className="card-img-top w-[250px] h-[250px] border-2 border-yellow-400 rounded-[10px]"
                    alt="..."
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title pt-2 font-semibold text-xl">{data.title}</h5>
                  <p className="card-text pt-2 mb-4">{data.description}</p>
                  <a
                    href={data.source}
                    className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mx-4"
                  >
                    Code
                  </a>
                  <a
                    href={data.visit}
                    className="bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mx-4"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;






