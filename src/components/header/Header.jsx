import React from "react";
import "./header.css";
import logohead from "../../assets/logo/company-logo-head.svg";
import logofoot from "../../assets/logo/company-logo-foot.svg";
import supportedBy from "../../assets/logo/supported_by.png";
import leadPartnerLogo1 from "../../assets/logo/lead-partner-DED-logo.svg";
import leadPartnerLogo2 from "../../assets/logo/lead-partner-DED-logo-foot.svg";

const Header = () => {
  return (
    <header className="px-5 py-3 flex flex-col md:flex-row gap-4 justify-between w-full ">
      <div className="company-logo flex gap-4 items-center">
        <div className="logo flex flex-col justify-center items-center gap-2">
          <img src={logohead} alt="" className="md:w-14 w-12" />
          <img src={logofoot} alt="" className="md:w-28 w-24" />
        </div>
        <div className="border-l h-24 border-black"></div>
        <div className="font-bold ">
          <p className="text-md ">7 – 9 May 2024</p>
          <p className="text-md ">Abu Dhabi, United Arab Emirates</p>
        </div>
      </div>

      <p className="text-2xl font-bold text-colorPrimary flex  items-center md:w-64 text-center">
        The World’s Leading Investment Platform
      </p>
      <div className="partners hidden md:flex gap-4 ">
        <div className="supported_by flex flex-col items-center">
          <p className="text-colorPrimary text-sm font-medium">Supported by:</p>
          <img src={supportedBy} alt="" className="w-36" />
        </div>
        <div className="lead_partner flex flex-col items-center gap-2">
          <p className="text-colorPrimary text-sm font-medium">Lead Partner:</p>
          <img src={leadPartnerLogo1} alt="" className="w-11" />
          <img src={leadPartnerLogo2} alt="" className="w-36" />
        </div>
      </div>
    </header>
  );
};

export default Header;
