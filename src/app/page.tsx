"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
