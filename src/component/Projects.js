import React from "react";
import projects from "../component/data/projects.json";

const Projects = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto py-8" id="projects">
      <h1 className="text-xl lg:text-3xl font-bold mb-10 text-start ">
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 ">
        {projects.map((data) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center w-full sm:w-[45%] lg:w-[25%] border-2 border-yellow-300 p-6 rounded-lg shadow-custom-shadow"
          >
            <div className="border-2 border-yellow-300 rounded-xl">
              <img
                src={data.imageSrc}
                alt=""
                className="h-56 w-58 object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center flex-col items-center text-center mt-2 text-white">
              <h2 className="text-xl font-semibold">{data.title}</h2>
              <h4 className="text-md mt-2">{data.description}</h4>
            </div>
            <div className="flex flex-row gap-4 mt-2">
              <a
                href={data.demo}
                target="blank"
                class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Demo
              </a>
              <a
                href={data.source}
                target="blank"
                class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
