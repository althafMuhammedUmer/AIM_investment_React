import React, { useState } from "react";
import "./nav.css";
import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import MultiDropDown from "./MutiDropDown";





const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <nav className="w-full  md:py-0  ">
        <div className="flex justify-between p-6 py-3 items-center gap-2">
          <img
            src={menuIcon}
            alt=""
            className="w-8 cursor-pointer"
            onClick={handleShow}
          />

          <ul className="lg:flex md:flex hidden text-white gap-4  ">
            <li
              className={`cursor-pointer ${
                activeItem === "Home" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex  ${
                activeItem === "About AIM" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("About AIM")}
            >
              About AIM
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex ${
                activeItem === "AIM GLOBAL 2023" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("AIM GLOBAL 2023")}
            >
              AIM GLOBAL 2023
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex ${
                activeItem === "AIM Startups" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("AIM Startups")}
            >
              AIM Startups
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex ${
                activeItem === "AIM FOURMS" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("AIM FOURMS")}
            >
              AIM FOURMS
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex ${
                activeItem === "AIM Awards" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("AIM Awards")}
            >
              AIM Awards
            </li>
            <li
              className={`cursor-pointer md:hidden lg:flex  ${
                activeItem === "Stand builder" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("Stand builder")}
            >
              Stand builder
            </li>
            <li
              className={`cursor-pointer ${
                activeItem === "Media" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("Media")}
            >
              Media
            </li>
            <li
              className={`cursor-pointer ${
                activeItem === "Contact us" ? "border-b-4 pb-1" : ""
              }`}
              onClick={() => handleItemClick("Contact us")}
            >
              Contact us
            </li>
          </ul>

          <div class=" bg-transparentBgColor rounded">
            <div class="relative">
              <input
                type="text"
                class="h-10 w-64 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-transparentBgColor placeholder-white"
                placeholder="Search..."
              />
              <div class="absolute top-2 right-2">
                <img src={searchIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MultiDropDown show={show} handleClose={handleClose}/>

    </>
  );
};

export default Navbar;
