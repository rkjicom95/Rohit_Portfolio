import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import experience from "../component/data/experience.json";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <div className="w-[90%] max-w-[900px] mx-auto py-8" id="experience" >
      <h1 className="lg:text-3xl text-xl font-bold mb-8 text-start">EXPERIENCE</h1>
      <div className="space-y-10">
        {experience.map((data) => (
          <div
            key={data.id}
            className="max-w-[800px] flex flex-col lg:flex-row justify-center lg:gap-8 items-center text-center p-6 rounded-lg border-2 border-yellow-300 shadow-custom-shadow bg-custom-bg"
            data-aos="zoom-in"
            data-aos-duration="1000" // Use this to override the default duration
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
              <img
                src={`/assets/${data.imageSrc}`}
                alt="Company Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-4 lg:mt-0">
              <h2 className=" text-lg lg:text-3xl font-medium">{data.role}</h2>
              <h5 className="text-base lg:text-xl font-medium text-[yellow]">
                {data.organisation}
              </h5>
              <h4 className="text-base lg:text-xl font-medium mt-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start">
                <span className="text-green-600">
                  {data.startDate} - {data.endDate}
                </span>
                <span className="block ml-1 text-[yellow]">
                  {data.location}
                </span>
              </h4>
              <h5 className="text-base lg:text-xl font-medium text-[yellow] mt-1">
                {data.experiences[0]}
              </h5>
              <h5 className=" lg:text-xl font-medium text-[yellow]">
                {data.experiences[1]}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
