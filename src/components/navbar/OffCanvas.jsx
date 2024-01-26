// OffCanvas.js
import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

const OffCanvas = ({ show, handleClose }) => {
  return (
    <div
      className={`off-canvas relative bg-white transition-transform duration-300 ease-in-out transform ${
        show ? "flex translate-x-0" : "hidden"
      }`}
    >
      
      <button
        className="absolute top-0 right-4 text-2xl cursor-pointer"
        onClick={handleClose}
      >
        &times;
      </button>

      
      <div className=" w-1/4">
        
        <ul className="">
          <li className="flex items-center w-full bg-slate-400">Home <IoIosArrowForward /></li>
          <li className="flex items-center w-full bg-slate-400">About</li>
          <li className="flex items-center w-full bg-slate-400">Media</li>
        </ul>
      </div>
    </div>
  );
};

OffCanvas.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
