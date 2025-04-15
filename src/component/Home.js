import React, { useEffect, useRef } from "react";
// import hero from "../component/data/hero.json";
import rrr from "../component/data/hero.json";
import Typed from "typed.js";
import pdf from "../pdf/CVRohit.pdf";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Rohit Kumar",
        "I'm Front End Developer",
        "Web Developer (React Js)",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] m-10"
      id="home"
    >
      <div
        className="flex flex-col-reverse gap-14 md:flex-row lg:flex-row h-full w-full justify-between items-center space-y-8 md:space-y-0 px-0 md:px-24 lg:py-12"
        id="home"
      >
        <div className=" lg:min-w-[580px]  space-y-6 justify-center align-center text-center rounded-2xl border-2 border-yellow-300 p-10 shadow-custom-shadow bg-custom-bg">
          <h1
            ref={typedRef}
            className=" text-base lg:text-4xl font-medium"
          ></h1>
          <a
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-yellow-300 hover:text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            href={pdf}
            download="RohitWeb.pdf"
          >
            <span class="relative text-xs lg:text-xl px-2 py-2 transition-all ease-in duration-75 bg-custom-bg dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download Resume
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center">
          <img
            // src={`./assets/${hero.imgSrc}`}
            src={`./assets/${rrr.imgSrc}`}
            alt="Hero"
            className=" home-image h-[180px] w-[180px] lg:h-[240px] lg:w-[240px] rounded-full border-4 border-yellow-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
