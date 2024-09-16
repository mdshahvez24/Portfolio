import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="">
      <div className="text-center ">
        <div className="mb-6 mt-12 text-yellow-400 font-medium">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
      <div className="contact-icon flex justify-center items-center m-2 gap-12 h-[80px] mt-2 ">
        <a
          href="https://www.instagram.com/shah_ali011/"
          target="_blank"
          className="items  bg-white m-1
           w-[70px] h-[70px]  flex justify-center items-center rounded-full border-2 border-yellow-400"
          style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}
        >
          <FaInstagram className="icons text-5xl text-red-500" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="items bg-blue-700 m-1
           w-[70px] h-[70px]  flex justify-center items-center rounded-full border-2 border-yellow-400"
          style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}
        >
          <CiFacebook className="icons text-5xl " />
        </a>
        <a
          href="https://www.linkedin.com/in/md-shahvez431720193"
          target="_blank"
          className="items  bg-white m-1
           w-[70px] h-[70px]  flex justify-center items-center rounded-full border-2 border-yellow-400"
          style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}
        >
          <CiLinkedin className="icons text-5xl text-blue-400" />
        </a>
        <a
          href="https://github.com/mdshahvez24"
          target="_blank"
          className="items  bg-black m-1
           w-[70px] h-[70px]  flex justify-center items-center rounded-full border-2 border-yellow-400"
          style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}
        >
          <FaGithubSquare className="icons text-5xl" />
        </a>
        <a
          href="mailto:mdshahvez24@gmail.com"
          target="_blank"
          className="items bg-white m-1
           w-[70px] h-[70px] flex justify-center items-center rounded-full border-2 border-yellow-400"
          style={{ boxShadow: "5px 5px 10px 10px rgba(101,75,10,0.5)" }}
        >
          <SiGmail className="icons text-5xl text-red-600" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
