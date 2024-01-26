import React from "react";
import "./timeline.css";

const TimeLine = () => {
  return (
    <div className=" items-center mt-8 px-8 md:px-24 relative ">
      <p className="text-center text-3xl font-bold mb-8 md:mb-24 text-colorPrimary">KEY DATES</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="item flex-1 text-center mb-2">
          <p className="font-2xl text-colorBgVarient  font-bold">
            31 January 2023
          </p>
          <p className="">Registration Opens</p>
        </div>

        <div className="item flex-1 text-center mb-2">
          <p className="font-2xl text-colorBgVarient  font-bold">
            16 March 2023
          </p>
          <p className="">Judging Begins</p>
        </div>

        <div className="item flex-1  text-center mb-2">
          <p className="font-2xl text-colorBgVarient  font-bold">
            20 April 2023
          </p>
          <p className="">Notify Shortlisted</p>
        </div>

        <div className="item flex-1 text-center mb-2">
          <p className="font-2xl text-colorBgVarient  font-bold">8 May 2023</p>
          <p className="">Winner Announcement (Gala Dinner)</p>
        </div>
      </div>
      <div className="md:flex hidden items-center">
        <div className="line relative"></div>
        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>

        <div className="circle"></div>
        <div className="line "></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="item flex-1 text-center md:text-end mt-2">
          <p className="font-2xl text-colorBgVarient  font-bold">
            31 January 2023
          </p>
          <p className="">Registration Closes</p>
        </div>

        <div className="item flex-1 text-center   mt-2">
          <p className="font-2xl text-colorBgVarient  font-bold">
            15 April 2023
          </p>
          <p className="">Judging Ends</p>
        </div>

        <div className="item flex-1 text-center  md:text-start mt-2">
          <p className="font-2xl text-colorBgVarient  font-bold">8 May 2023</p>
          <p className="">
            Presentation + Q&A with Juries (IPAs Exhibition Booth)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
