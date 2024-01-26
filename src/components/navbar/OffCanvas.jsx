// OffCanvas.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import "./offcanvas.css";
import AccordinComponent from "../widgets/AccordinComponent";

const MenuItem = ({ item, onItemClick }) => {
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  const handleItemClick = () => {
    if (hasSubMenu) {
      onItemClick(item.subMenu);
    }
  };

  return (
    <li
      className={`flex px-4 py-3 justify-between items-center text-lg hover:bg-transparentBgColor cursor-pointer ${
        hasSubMenu ? "relative" : ""
      }`}
      onClick={handleItemClick}
    >
      <p>{item.label}</p>
      {hasSubMenu && <IoIosArrowForward />}
    </li>
  );
};

const SubMenu = ({ items }) => {
  return (
    <div className="flex flex-col bg-slate-200-400  w-full p-4 gap-3">
      {items.map((subItem, index) => (
        <div
          key={index}
          className=" hover:bg-transparentBgColor cursor-pointer"
        >
          <p className="text-3xl font-medium">{subItem.title}</p>
          <ul>
            <li>{subItem.subtitle}</li>
            <li>{subItem.menuItem}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const OffCanvas = ({ show, handleClose }) => {
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);

  const dummyMenuItems = [
  

    {
      label: "About",
      subMenu: [
        { title: "About Us" },
        { subtitle: "lorem upsem" },
        { menuItem: <AccordinComponent /> },
      ],
    },
    {
      label: "AIM Congress 2024",
      subMenu: [
        { title: "AIM Congress 2024" },
        { subtitle: "lorem upsem" },
        { menuItem: <AccordinComponent /> },
      ],
    },
    {
      label: "AIM Startup",
      subMenu: [
        { title: "AIM Startup" },
        { subtitle: "lorem upsem" },
        { menuItem: <AccordinComponent /> },
      ],
    },
    { label: "Stand Builder" },
    { label: "Media" },
  ];

  const handleItemClick = (subMenu) => {
    setSelectedSubMenu(subMenu);
  };

  return (
    <div
      className={`off-canvas relative h-[100vh] grid grid-cols-4  bg-white  ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className=" sidebar text-white">
        <ul className="w-full  flex flex-col gap-3">
          {dummyMenuItems.map((item, index) => (
            <MenuItem key={index} item={item} onItemClick={handleItemClick} />
          ))}
        </ul>
      </div>

      <div className="col-span-3">
        <SubMenu items={selectedSubMenu} />
      </div>

      <button
        className="absolute top-0 right-4 text-2xl cursor-pointer"
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  );
};

OffCanvas.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
