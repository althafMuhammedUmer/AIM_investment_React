import React from "react";
import TextAnimation from "./TextAnimation";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-gray-600 md:h-96 flex flex-col text-white justify-center gap-2 md:p-24  p-8">
      <div className="flex md:justify-start justify-center">
        <p className="md:text-6xl text-3xl font-bold ">AIM Investment Awards</p>
      </div>
      <TextAnimation />
      <div className="flex md:justify-start justify-center">
        <p className="md:text-2xl text-xl font-medium  ">
          7 May 2024 - Abu Dhabi, UAE
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <button className="btn btn-primary mt-3">Register Now</button>
      </div>
    </div>
  );
};

export default Hero;
