import React from "react";
import verticalIcon from "../../assets/icons/vertical.svg";
import badge from "../../assets/icons/badge.svg";
import Announcement from "../../assets/icons/announce.svg";
import movie from "../../assets/icons/movie.svg";
import video from "../../assets/icons/video.svg";

const WhyResgister = () => {
  return (
    <div className="bg-colorBgVarient text-white  px-8 md:px-24 pt-8 pb-8 flex flex-col items-center">
  <p className="text-2xl md:text-4xl text-center font-bold w-full md:w-1/2 lg:w-1/2">
    Why Register for the AIM Congress 2024 Investment Awards?
  </p>

  <div className="flex flex-col md:flex-row gap-4 pt-8">
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={badge} alt="" className="w-16 md:w-20" />
        <p>The Winning IPA will be honored during AIM Congress 2024 Gala Dinner</p>
      </div>
    </div>
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={Announcement} alt="" className="w-16 md:w-20" />
        <p>Comprehensive Promotion and Marketing for the Winning IPA through AIM Social Media</p>
      </div>
    </div>
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={movie} alt="" className="w-16 md:w-20" />
        <p>1x Free Advertisement in AIM Congress 2024 e-Exhibition Catalogue</p>
      </div>
    </div>
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={video} alt="" className="w-16 md:w-20" />
        <p>Coverage in AIM Congress 2024 Post Show Report</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-4 pt-8 items-center justify-center">
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={badge} alt="" className="w-16 md:w-20" />
        <p>The Winning IPA will be honored during AIM Congress 2024 Gala Dinner</p>
      </div>
    </div>
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={Announcement} alt="" className="w-16 md:w-20" />
        <p>Comprehensive Promotion and Marketing for the Winning IPA through AIM Social Media</p>
      </div>
    </div>
    <div className="item flex gap-3">
      <img src={verticalIcon} alt="" />
      <div className="flex flex-col gap-0 justify-evenly">
        <img src={movie} alt="" className="w-16 md:w-20" />
        <p>1x Free Advertisement in AIM Congress 2024 e-Exhibition Catalogue</p>
      </div>
    </div>
  </div>

  <div className="mt-8 md:mt-16 lg:mt-24 flex flex-col md:flex-row gap-4 items-center">
    <button className="btn btn-primary">Register Your Interest</button>
    <button className="btn btn-primary">Download AIM CONGRESS Brochure</button>
  </div>
</div>

  );
};

export default WhyResgister;
