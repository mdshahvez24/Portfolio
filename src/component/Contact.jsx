import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
      <h1 className="text-6xl font-bold text-center mb-8 mt-6 text-yellow-400">Contact Me</h1>

 <form className=" max-w-lg mx-auto"             data-aos="flip-right"
 data-aos-duration="1000">
          <div className="mb-4 form-shadow">
           <label htmlFor="name" className="block  text-yellow-400 font-semibold ">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border-2 border-yellow-300 rounded-lg bg-black"  />
          </div>
          <div className="mb-5 form-shadow">
            <label htmlFor="email" className="block text-left text-yellow-400 font-semibold">Email</label>
             <input type="email" id="email" name="email" className="w-full p-2 border-2 border-yellow-300 rounded-lg bg-black" />
           </div>
          <div className="mb-5 form-shadow">
            <label htmlFor="email" className="block text-left text-yellow-400 font-semibold">Phone No.</label>
             <input type="email" id="email" name="email" className="w-full p-2 border-2 border-yellow-300 rounded-lg bg-black" />
           </div>
           <div className="mb-4 form-shadow">
           <label htmlFor="message" className="block text-left text-yellow-400 font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border-2 border-yellow-300  bg-black rounded-lg"></textarea>
         </div>
         <button type="submit" className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">Send Message</button>
        </form>
        
      </div>
    </>
  );
};

export default Contact;



 