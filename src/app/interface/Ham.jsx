"use client";
import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export const Ham = (props) => {
  return (
    <div className="grid place-content-center text-black">
      <AnimatedHamburgerButton setnav={props} />
    </div>
  );
};

const AnimatedHamburgerButton = ({ setnav }) => {
  //   const [active, setActive] = useState(false);
  const { setshowNav, showNav } = setnav;
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={showNav ? "open" : "closed"}
        onClick={() => setshowNav((pv) => !pv)}
        className="relative h-20 w-10 rounded-full bg-white/0 transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-9 bg-black" // Set the icon color to white
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-9 bg-black" // Set the icon color to white
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-black" // Set the icon color to white
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
