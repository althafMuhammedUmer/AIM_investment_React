import React from "react";
import "./criterias.css";
import bulb from "../../assets/icons/bulb.svg";

const Criterias = () => {
  return (
    <div className="criterias-container mt-24 px-24 pt-4 pb-16 ">
      <p className="text-center text-3xl p-8 text-white font-bold">
        2024 CRITERIAS
      </p>
      <div className="grid md:grid-cols-4 grid-col-1  gap-4">
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Innovation and Research Collaboration</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Global Competitiveness Enhancement</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Community and Social Impact</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Ease of Doing Busines </p>
        </div>

        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Diversification of Industries</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Investment Size</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Trade Balance Effects</p>
        </div>
        <div className="p-4 border border-white flex flex-col items-center text-center gap-4">
          <img src={bulb} alt="" className="w-24" />
          <p className="text-white">Sustainability and Local Linkages</p>
        </div>
      </div>
    </div>
  );
};

export default Criterias;
