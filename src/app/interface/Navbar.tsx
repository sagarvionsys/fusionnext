"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CareerLink, links } from "../../Data/Mylinks";

import { Ham } from "./Ham";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = (value: boolean) => {
    setShowNav(value);
  };

  return (
    <header className="flex gap-2 p-3 text-md bg-white dark:bg-black z-50 justify-between px-2 md:justify-evenly fixed w-full ">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src={"/img/fusion.png"}
            width={200}
            height={200}
            alt="fusionLogo"
          />
        </Link>
      </div>
      <span className="md:hidden">
        <Ham setshowNav={handleNav} showNav={showNav} />
      </span>
      <AnimatePresence>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Added transition
          className={`${
            showNav ? "visible" : "hidden"
          } md:visible nav flex flex-col md:flex-row text-black dark:text-gray-200 dark:bg-black items-center justify-center md:justify-end md:gap-6 absolute md:static top-20 bg-white w-full -left-[2px] md:w-auto md:flex md:items-center`}
        >
          <Link className=" p-2 rounded-xl font-bold" href={"/"}>
            Home
          </Link>
          <FlyoutLink href={"/Service-softDev"} FlyoutContent={CourseContent}>
            <Link
              href={"/Courses"}
              className=" p-2 rounded-xl font-bold text-black dark:text-gray-200"
            >
              Courses
            </Link>
          </FlyoutLink>
          <Link className=" p-2 rounded-xl font-bold" href={"/AboutUs"}>
            About Us
          </Link>
          <Link className=" p-2 rounded-xl font-bold" href={"/ContactUs"}>
            Contact Us
          </Link>
          <FlyoutLink href={"/Service-softDev"} FlyoutContent={CareerContent}>
            <Link
              href={"Career/it_profile"}
              className=" p-2 rounded-xl font-bold text-black dark:text-gray-200"
            >
              Career
            </Link>
          </FlyoutLink>
          <Link className=" p-2 rounded-xl font-bold" href={"/Batches"}>
            Batches
          </Link>
          <Link className=" p-2 rounded-xl font-bold" href={"/OurPlacement"}>
            Our Placements
          </Link>
          <Link className=" p-2 rounded-xl font-bold" href={"/SignIn"}>
            Sign In
          </Link>
        </motion.nav>
      </AnimatePresence>
    </header>
  );
};

interface FlyoutLinkProps {
  href: string;
  FlyoutContent?: React.FC; // Make FlyoutContent optional
  children: React.ReactNode;
}
const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link href={href} className="relative flex items-center text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[60%] top-[52px] z-50  md:top-[3.6rem] bg-white text-black"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CourseContent: React.FC = () => {
  return (
    <div className=" bg-white dark:bg-black overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-1 md:overflow-hidden flex flex-col p-4  shadow-lg rounded-lg">
      {links?.map((l, index) => (
        <div key={index} className="hover:bg-gray-200 dark:hover:bg-gray-900 rounded-xl p-2">
          <Link href={l?.link}>
            <h1 className="font-bold dark:text-gray-200 w-fit">{l?.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

const CareerContent: React.FC = () => {
  return (
    <div className=" bg-white  overflow-y-scroll h-fit md:h-full w-[21rem] gap-1 md:overflow-hidden flex flex-col p-4  shadow-lg rounded-lg">
      {CareerLink?.map((l, index) => (
        <div key={index} className="hover:bg-gray-200 rounded-xl p-2">
          <Link href={l?.link}>
            <h1 className="font-bold w-fit">{l?.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
