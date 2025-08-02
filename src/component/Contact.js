import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto py-4" id="contact">
      <h1 className="text-xl lg:text-3xl font-bold lg:mb-2 ml-4 text-start">
        CONTACT ME
      </h1>
      <div
        className="flex flex-row justify-center items-center gap-4 h-[25vh]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <FaInstagram className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <CiFacebook className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/rohit-kumar-ba8868239/"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <CiLinkedin className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://www.google.com"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <FaSquareXTwitter className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://github.com/rkjicom95"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <FaGithubSquare className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="mailto:webdevmastery@gmail.com"
          target="_blank"
          className=" bg-black p-2 lg:p-4 rounded-full border-2 border-yellow-300 hover:shadow-custom-shadow"
        >
          <SiGmail className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
