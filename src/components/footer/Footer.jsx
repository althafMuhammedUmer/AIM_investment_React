import React from "react";
import logo from "../../assets/logo/footer-company-logo.svg";

const Footer = () => {
  return (
    <div className="h-screen md:h-96 bg-colorBgVarient relative">
      <div className="p-4 md:p-8 lg:p-24 flex flex-col md:flex-row md:gap-12">
        <img src={logo} alt="" className="w-32" />

        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <p className="font-bold text-white">Brought you By</p>
          <p className="text-gray-300">AIM GLOBAL FOUNDATION</p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <p className="font-bold text-white">AIM Congress 2024</p>
          <p className="text-gray-300">About AIM Contact Us</p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <p className="font-bold text-white">Media</p>
          <p className="text-gray-300">Articles News Gallery</p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <p className="font-bold text-white">Contact</p>
          <p className="text-gray-300">info@aimcongress.com</p>
          <p className="text-gray-300">+971 4 328 2000</p>
          <p className="text-gray-300">United Arab Emirates</p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <p className="text-white font-medium">Subscribe to Our Newsletter</p>

          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparentBgColor px-4 py-2 rounded"
            />
            <button className="btn-secondary text-center rounded px-4 py-2 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray-300 px-4 md:px-24 pb-8 absolute bottom-0 text-sm">
        © Copyright AIM Foundation
      </p>
    </div>
  );
};

export default Footer;
