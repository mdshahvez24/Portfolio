import React from "react";
import experience from "./data/experience.json";
import img from "../assets/company/google.png";
import pdf1 from "../pdf/MohdShahvez1.pdf"


const Experience = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 ex w-full md:w-[800px]" id="experience">
        <h1 className="text-3xl md:text-4xl font-bold my-12 md:my-20 pt-6 md:pt-8 text-center">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="ex-items flex flex-col md:flex-row m-4 md:m-5 p-4 md:p-5 w-full md:w-[800px] rounded-lg border border-yellow-400 text-center items-center my-8 md:my-12"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="left mb-4 md:mb-0 md:px-4">
                <img src={img} alt="" className="w-full h-auto max-w-[200px] mx-auto" />
              </div>
              <div className="right pl-10">
                <h2 className="font-bold text-lg md:text-2xl mx-auto">{data.role}</h2>
                <h4 className="text-xl md:text-base ">
                  <span className="text-[#36d207] font-semibold ">
                    {data.startDate} {data.endDate}
                  </span>{" "}
                  <span className="font-semibold text-orange-400">{data.location}</span>
                </h4>
                <div className="text-sm md:text-xl text-yellow-300">
                  <h5>{data.experiences[0]}</h5>
                  <h5>{data.experiences[1]}</h5>
                </div>
              </div>
            </div>
          );
        })}
        <div className="justify-center items-center text-center">
        <a href={pdf1} download="Mdshahvezresume.pdf" className="inline-block my-6 px-4 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold text-xl rounded hover:bg-yellow-500 hover:text-black transition duration-150 ease-in-out xs:text-base sm:text-lg md:text-xl lg:text-2xl">
    Download Internship Certificate
</a>
        </div>
      </div>
  
    </>
  );
}

export default Experience;




// "https://th.bing.com/th/id/OIP.iV7wWNX_KbOGz0nuFhfHowHaEB?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",