"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "./Mylinks";
import { Ham } from "./Ham";
import Link from "next/link";
import Image from "next/image";

// Import your useClient hook here
// Change the import path accordingly

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = (value: boolean) => {
    setShowNav(value);
  };

  return (
    <header className="flex gap-5 p-2 text-lg bg-white z-50 justify-between px-2 md:justify-evenly fixed w-full ">
      <div className="logo">
        {/* <Link href={"/"}>
          <Image src={GTW} alt="GreatWay" />
        </Link> */}
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
          } md:visible nav flex flex-col md:flex-row text-black items-center justify-center md:justify-end md:gap-6 absolute md:static top-20 bg-white w-full -left-[2px] md:w-auto md:flex md:items-center`}
        >
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/"}
          >
            Home
          </Link>
          <FlyoutLink href={"/Service-softDev"} FlyoutContent={PricingContent}>
            <Link
              href={"/Courses"}
              className="hover:bg-gray-300 p-2 rounded-xl font-bold text-black"
            >
              Courses
            </Link>
          </FlyoutLink>
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/AboutUs"}
          >
            About Us
          </Link>
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/AboutUs"}
          >
            Contact Us
          </Link>
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/Career"}
          >
            Career
          </Link>
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/Batches"}
          >
            Batches
          </Link>
          <Link
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            href={"/SignIn"}
          >
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

const PricingContent: React.FC = () => {
  return (
    <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-3 md:overflow-hidden flex flex-col p-4  md:grid md:grid-cols-2 shadow-lg rounded-lg">
      {links.map((l, index) => (
        <div key={index} className="hover:bg-gray-200 rounded-xl p-2">
          <Link href={l.link}>
            <h1 className="font-bold w-fit">{l.name}</h1>
            <span className="text-xs">{l.desc}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
