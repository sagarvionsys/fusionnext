import React from "react";
import features from "@/Data/features";
import numbers from "@/Data/numbers";
import { GiProgression } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

const AboutUs = () => {
  return (
   <>
    <div className="bg-black">

      <section id="features"className=" px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2
            className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Become certified and job ready for Corporate world
          </h2>
          <p
            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            The Fusion Software Institute is not a class or institute, it is a family who cares about every family members.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md hover:cursor-pointer border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div className="flex items-center justify-center text-4xl text-green-200"><SiTicktick/></div>
            <h3 className="mt-6 text-gray-200 text-xl transform transition duration-500 hover:scale-110">Updated Curriculum</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
             Learn latest industry trends and technologies.
            </p>
        </div>

        <div className="rounded-md hover:cursor-pointer border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div className="flex items-center justify-center text-4xl text-blue-200"><GiProgression/></div>
            <h3 className="mt-6 text-gray-200 text-xl transform transition duration-500 hover:scale-110">Structured Learning Path</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Structured courses designed by experts in the field.
            </p>
        </div>


        <div className="rounded-md hover:cursor-pointer border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div className="flex items-center justify-center text-4xl text-yellow-100"><FaLaptopCode/></div>
            <h3 className="mt-6 text-gray-200 text-xl transform transition duration-500 hover:scale-110">Hands-on Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            work on projects and real-world scenarios.
            </p>
        </div>
      </div>

      <div className="mt-10 px-5 py-5 text-center border border-gray-600 bg-gradient-to-br from-black to-slate-900">
      <div className="mt-5 px-5 py-5 md:py-5 md:px-5 mx-auto max-w-5xl text-center">
        <h2 className="block w-full bg-gradient-to-b from-white to-green-200 bg-clip-text font-bold text-transparent text-3xl sm:text-3xl">
        Our Key Features
        </h2>
      </div>

      <div className="hover:cursor-pointer px-6 py-10 md:py-10 md:px-17 -mx-4 flex flex-wrap p-8">
       {features.map((feat)=>
        { return (<div key={feat.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 border border-gray-700 shadow shadow-green-200 shadaow-md transition-all hover:shadow-green-200 hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div className="flex items-center justify-center text-5xl text-white"><feat.Icon color={feat?.color}/></div>
          <h3 className="flex items-center justify-center mb-4 text-xl font-bold text-gray-300">{feat?.title}</h3>
          </div>
        </div>);
        }
      )}
      </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2">
        <div className="content-center p-4 text-center">
          <h1 className="block mt-6 w-full bg-gradient-to-b from-white to-red-200 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
          Our Vision
          </h1>
          <p className="text-gray-300 mt-6 text-sm sm:text-xl md:text-2xl">Our vision is to provide optimal, job oriened and real time training</p>
        </div>
        <div className="content-center p-4 text-center">
          <h1 className="block mt-6 w-full bg-gradient-to-b from-white to-red-200 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
          OUR MISSION
          </h1>
          <p className="text-gray-300 mt-6 text-sm sm:text-xl md:text-2xl ">Our Mission is to place students in IT industry and make them financially strong, productive and successful</p>
        </div>
      </div>
      </section>
      <section className="text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">   
          <div className="flex flex-wrap -m-4 text-center">
            {numbers.map((feat)=>{
              return(
                <div key={feat.id} className="hover:cursor-pointer p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">          
                    <h2 className="title-font font-medium text-4xl">{feat?.number}</h2>
                    <p className="leading-relaxed">{feat?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
   </div>
   
   </>
  )
};

export default AboutUs;
