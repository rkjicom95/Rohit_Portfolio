import React, { useEffect } from "react";
import skill from "../component/data/skills.json";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <div className="w-full max-w-[900px] mx-auto py-8" id="skills">
      <h1 className="text-xl lg:text-3xl font-bold mb-6 ml-4  text-start">SKILLS</h1>
      <div className="flex justify-center align-center  flex-wrap m-auto">
        {skill.map((item) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            key={item.id}
            className="flex  justify-center align-center text-center items-center flex-col m-5 p-5 w-[33%] bg-black rounded-lg border-2 border-yellow-300 shadow-custom-shadow"
          >
            <img src={`/assets/${item.imageSrc}`} alt="" className="w-[70px]" />
            <h3 className="text-xl font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
