"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Hero_Section from "../interface/Hero_Section";
import Feature_home from "../interface/Features_home";

import SuffleHero from "../interface/SuffleHero";
import Enquiry_home from "../interface/Enquiry_home";
import Reviews_section from "../interface/Reviews_section";
import Course_section from "../interface/Course_section";
import Faq_section from "../interface/Faq_section";

const Home = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "career",
    },
    {
      text: "with",
    },
    {
      text: "Fusion Institute.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <main className="pt-16 bg-white dark:bg-black">
      {/* hero section  */}

      <section className="bg-white">
        <SuffleHero />

        {/* the image area */}
      </section>

      <br></br>
      <hr className="p-4 bg-dark" />
      <section className="the Inqury form h-50  bg-violet-300 ">
        <Enquiry_home />
      </section>
      <hr className="text-black-200 bg-black-200"></hr>
      <Course_section />
      {/* pattaerns sectionn */}

      <div className="w-full bg-blue-500">
        <div className="w-full flex justify-center text-center">
          <div className="">
            <Reviews_section />
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black justify-center text-center">
        <div className="">
          <Faq_section />
        </div>
      </div>
      <Hero_Section />

      <Feature_home />

      {/* box glowing pattern */}
      <section className=" bg-black h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Fusion Software Institute Pune | Top Software Training Institute Pune
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Pune &apos; s Top Institute for Quality IT Training Courses.100%
          Placement Record. Industry Focused Trainers. Software Testing.Java
          Development·Python-Data Science etc.
        </p>
      </section>

      {/* typewriting section */}
      <section className="bg-black">
        <div className="flex flex-col items-center justify-center h-[25rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
              <Link href={"/SignIn"}>SignIn</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
