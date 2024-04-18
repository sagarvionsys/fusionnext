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
                className="hover:bg-gray-900 p-2 rounded-xl font-semibold"
                href={link.url}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="hover:bg-gray-900 p-2 rounded-xl font-semibold"
            href={"/SignUp"}
          >
            SignUp
          </Link>
          <Link
            className="hover:bg-gray-900 p-2 rounded-xl font-semibold"
            href={"/SignIn"}
          >
            SignIn
          </Link>
        </motion.nav>
      </AnimatePresence>
    </header>
  );
};

// const FlyoutLink = ({ children, href, FlyoutContent }) => {
//   const [open, setOpen] = useState(false);
//   const showFlyout = FlyoutContent && open;

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       className="relative w-fit h-fit"
//     >
//       <a href={href} className="relative flex items-center text-white">
//         {children}
//         <span
//           style={{
//             transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
//           }}
//           className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
//         />
//       </a>
//       <AnimatePresence>
//         {showFlyout && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             style={{ translateX: "-50%" }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="absolute left-[60%] top-[52px] z-50  md:top-[3.6rem] bg-white text-black"
//           >
//             <FlyoutContent />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const PricingContent = () => {
//   return (
//     <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-3 md:overflow-hidden flex flex-col p-4  md:grid md:grid-cols-2 shadow-lg rounded-lg">
//       {links.map((l) => {
//         return (
//           <div key={l.id} className="hover:bg-gray-200 rounded-xl p-2">
//             <Link to={l.link}>
//               <h1 className="font-bold w-fit">{l.name}</h1>
//               <span className="text-xs">{l.desc}</span>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Navbar;
