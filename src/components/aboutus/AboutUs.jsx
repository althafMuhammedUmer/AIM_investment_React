import React from "react";
import "./aboutus.css";
import ytIcon from '../../assets/icons/youtube.svg'

const AboutUs = () => {
  return (
    <div className="bg-colorBgVarient flex flex-col h-auto  lg:flex-row p-8  md:p-24 gap-16">
      <div className="flex flex-col gap-4 ">
        <p className="md:text-4xl text-3xl aboutus-heading font-bold">
          Celebrating Global Excellence with the AIM Congress Investment Awards
          - Honouring Top FDI Projects Globally
        </p>
        <p className="text-white md:text-xl text-md">
          The AIM Congress Investment Awards aims to recognize the best FDI
          projects from each region of the world. The recognition of the winning
          countries and their respective Investment Promotion Agencies for their
          success in attracting significant and favourable Foreign Direct
          Investment is a testament that their efforts have greatly contributed
          to the growth and development of their countries, making a positive
          impact on their respective economies.
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-white">
          <button className=" btn-primary px-4 py-3 rounded-lg">Register Your Interest</button>
          <button className="btn-primary px-4 py-3 rounded-lg">View 2023 Winners</button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded flex items-center justify-center h-96   ">
        <img src={ytIcon} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
