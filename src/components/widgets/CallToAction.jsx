import React from "react";

const CallToAction = () => {
  return (
    <div className="call_to_action_container w-full flex lg:gap-24 md:gap-16 gap-4 justify-evenly items-center lg:p-24 p-8">
      <div className="lg:w-[400px]">
        <p className="lg:text-4xl md:text-2xl text-xl font-bold  text-white ">Call to action to book your spot</p>
      </div>

      <div>
        <button className="py-3 px-4 bg-slate-300 font-bold rounded-lg">Book Now</button>
      </div>
    </div>
  );
};

export default CallToAction;
