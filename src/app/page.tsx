"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

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
    <main className="pt-16">
      {/* hero section  */}
      <section></section>
      {/* box glowing pattern */}
      <section className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
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
      <section>
        <div className="flex flex-col items-center justify-center h-[25rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              <Link href={"/SignIn"}>SignIn</Link>
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              <Link href={"/SignUp"}>SignUp</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
