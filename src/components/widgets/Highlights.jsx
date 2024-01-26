import React from "react";
import bg from "../../assets//images/image_2.png";
import ytIcon from "../../assets/icons/youtube.svg";

const Highlights = () => {
  return (
    <div className="flex flex-col gap-12 p-8 lg:p-24">
      <p className="text-4xl font-bold text-center text-colorBgVarient">
        Highlights from 2023 Edition
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-4">
        <div className="img-card relative">
          <img
            src={ytIcon}
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12"
          />
          <img src={bg} alt="" />
        </div>
        <div className="img-card relative">
          <img
            src={ytIcon}
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12"
          />
          <img src={bg} alt="" />
        </div>
        <div className="img-card relative">
          <img
            src={ytIcon}
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12"
          />
          <img src={bg} alt="" />
        </div>
        <div className="img-card relative">
          <img
            src={ytIcon}
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12"
          />
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
