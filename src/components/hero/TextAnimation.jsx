import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SpringTextAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const springProps = useSpring({
    loop: { reverse: true },
    from: { translateY: 100, opacity: 0 },
    to: { translateY: 0, opacity: 1 },
    reset: true,
    config: { tension: 200, friction: 80 },

    onRest: () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    },
  });

  const texts = ["Sustainable", "Diversified", "Innovative"];

  return (
    <div className="">
      <p className="flex flex-col md:flex-row items-center md:text-2xl text-gray-100">
        An event that globally recognizes the
        <animated.div
          style={{

            opacity: springProps.opacity,
            transform: springProps.translateY.interpolate(
              (y) => `translateY(${y}px)`
            ),
          }}
          className="text-orange-400 flex text-bold text-xl md:text-2xl w-40 items-center justify-center"
        >
          
          {texts[currentIndex]}
        </animated.div>
        FDI projects.
      </p>
    </div>
  );
};

export default SpringTextAnimation;
