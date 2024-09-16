import React from 'react';

const About = () => {
  
  return (
 <>
      <div className="container pl-[150px] text-center " 
      >
        <h1 className="text-4xl md:text-4xl font-bold  md:my-20  md:pt-5 text-center "id="about" >About</h1>
        <div className='py-50 px-100 my-10'>

        <h1 className='text-4xl md:text-4xl font-serif  md:my-5 pt-4 md:pt-5 text-center'>Introduction </h1>
        <div className="bg-black  text-yellow-500 font-semibold text-2xl px-20 py-20 mb-8 border-2 border-yellow-300 rounded-lg "style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}>
          <h1>Hi, I am Mohd Shahvez I am qualified Full Stack Web Developer. I have done B.Tech in Information Technology.</h1>
          </div>
        <p className="bg-black  text-yellow-500 font-semibold text-2xl px-20 py-20 border-2 border-yellow-300 rounded-lg " data-aos="zoom-in"
       data-aos-duration="1000" style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}>I am passionate about building user-friendly web applications in Full Stack Web Developer. I have Specialized in both the Front-end and Back-end technologies and
Database design allows me to buildcomplete and scalable applications. Familiar with UI/UX design. GoodLogical,
Analytical, and Communication Skills...</p>
        </div>
      
</div>

  </>
  );
}

export default About;
