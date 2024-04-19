"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navLink } from "@/Data/navLinks";
import { Ham } from "./Ham";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const HandleNav = (value: boolean) => {
    setShowNav(value);
  };

  return (
    <header className="flex gap-5 p-3 z-100 bg-black items-center justify-between px-2 md:justify-evenly w-full ">
      <div className="logo p-2">
        <Link href={"/"}>
          <Image
            priority
            src="/img/fusion.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <span className="md:hidden">
        <Ham setshowNav={HandleNav} showNav={showNav} />
      </span>
      <AnimatePresence>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Added transition
          className={`${
            showNav ? "visible" : "hidden"
          } md:visible nav flex flex-col z-50 md:flex-row p-3 justify-center md:justify-end md:gap-6 absolute md:static top-20 bg-black w-full -left-[2px] md:w-auto md:flex md:items-center`}
        >
          {navLink.map((link) => {
            return (
              <Link
                key={link.id}
                className="hover:bg-gray-900 p-2 rounded-xl text-white font-semibold"
                href={link.url}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="hover:bg-gray-900 p-2 rounded-xl text-white font-semibold"
            href={"/SignUp"}
          >
            SignUp
          </Link>
          <Link
            className="hover:bg-gray-900 p-2 rounded-xl text-white font-semibold"
            href={"/SignIn"}
          >
            SignIn
          </Link>
        </motion.nav>
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
