import React, { useState } from "react";
import "./nav.css";
import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav className="w-full px-5 py-3 md:py-0  flex justify-between items-center ">
      <img
        src={menuIcon}
        alt=""
        className="w-8 cursor-pointer"
        onClick={handleShow}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <ul className="md:flex hidden text-white gap-4  ">
        <li
          className={`cursor-pointer ${
            activeItem === "Home" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("Home")}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "About AIM" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("About AIM")}
        >
          About AIM
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "AIM GLOBAL 2023" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("AIM GLOBAL 2023")}
        >
          AIM GLOBAL 2023
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "AIM Startups" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("AIM Startups")}
        >
          AIM Startups
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "AIM FOURMS" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("AIM FOURMS")}
        >
          AIM FOURMS
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "AIM Awards" ? "border-b-4 pb-1" : ""
          }`}
          onClick={() => handleItemClick("AIM Awards")}
        >
          AIM Awards
        </li>
        <li
          className={`cursor-pointer ${
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
    </nav>
  );
};

export default Navbar;
