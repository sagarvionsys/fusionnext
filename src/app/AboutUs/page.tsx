import React from "react";
import features from "@/Data/features";
import numbers from "@/Data/numbers";
import { GiProgression } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";

const AboutUs = () => {
  return (
   <>
    <div className="">

      <section id="features"className=" px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-900 my-3 font-bold flex items-center justify-center uppercase tracking-wider">
            Why choose us ?
          </span>
          <h2
            className="block w-full bg-gradient-to-b from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-200 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl md:text-4xl">
            BECOME CERTIFIED AND JOB READY FOR CORPORATE WORLD!
          </h2>
          <p
            className="mx-auto my-4 w-full text-md max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800 dark:text-gray-300">
            The Fusion Software Institute is not a class or institute, it is a family who cares about every family members.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl hover:cursor-pointer border border-neutral-800 bg-gradient-to-br from-violet-950 to-gray-950 p-8 text-center shadow">
            <div className="flex items-center justify-center mx-auto h-16 w-16 text-4xl text-green-200 -translate-y-12 transform rounded-full bg:black dark:bg-slate-900"><SiTicktick/></div>
            <h3 className=" text-gray-200 text-2xl font-semibold transform transition duration-500 hover:scale-110">Updated Curriculum</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
             Learn latest industry trends and technologies.
            </p>
        </div>

        <div className="rounded-xl hover:cursor-pointer border border-neutral-800 bg-gradient-to-br from-violet-950 to-gray-950 p-8 text-center shadow">
            <div className="flex items-center justify-center mx-auto h-16 w-16 text-4xl text-blue-200 -translate-y-12 transform rounded-full bg-black dark:bg-slate-900"><GiProgression/></div>
            <h3 className=" text-gray-200 text-2xl font-semibold transform transition duration-500 hover:scale-110">Structured Learning Path</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
              Structured courses designed by experts in the field.
            </p>
        </div>


        <div className="rounded-xl hover:cursor-pointer border border-neutral-800 bg-gradient-to-br from-violet-950 to-gray-950 p-8 text-center shadow">
            <div className="flex items-center justify-center mx-auto h-16 w-16 text-4xl text-yellow-100 -translate-y-12 transform rounded-full bg-black dark:bg-slate-900"><FaLaptopCode/></div>
            <h3 className=" text-gray-200 text-2xl transform font-semibold transition duration-500 hover:scale-110">Hands-on Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
            work on projects and real-world scenarios.
            </p>
        </div>
      </div>

      <div className="relative flex felx-col-1 md:flex-col-2 items-center justify-center dark:bg-gray-950">
        <div className="flex-1">
        <div className="mt-20 md:px-30 md:py-5 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text dark:text-gray-200 font-bold text-transparent">What is Corporate Training?</h2>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-950 dark:text-violet-800">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl font-semibold text-gray-900 dark:text-gray-300">We defines training as partnering with students in a thought-provoking, challenging and creative process that inspires them to maximize their personal and professional potential.</p>
          </div>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-950 dark:text-violet-800">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl font-semibold text-gray-900 dark:text-gray-300">The process of traning often unlocks previously untapped sources of imagination, productivity and leadership quality of both students and trainers.</p>
          </div>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-950 dark:text-violet-800">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl font-semibold text-gray-900 dark:text-gray-300">We all have goals we want to reach, challenges we’re striving to overcome and times when we feel stuck. Partnering with a trainer can change your life, setting you on a path to greater personal and professional fulfillment.</p>
          </div>
        </div>
        </div>

        <div className="flex-1 hidden lg:flex items-center justify-center mt-20 mr-10">
          <Image className="rounded-xl mt-2 rounded-tl-3xl" src="/img/jobReady.jpg" alt="image" width={700} height={700}></Image>
        </div>
      </div>
      

      <div className="relative mt-10 sm:ml-10 sm:mr-10 sm:px-5 sm:py-5 mb-10 text-center dark:bg-slate-900">
      <div className="mt-5 px-5 py-5 md:py-5 md:px-5 mx-auto max-w-5xl text-center">
        <h2 className="block w-full bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent dark:text-gray-300 font-bold text-2xl sm:text-3xl">
        OUR KEY FEATURES
        </h2>
      </div>

      <div className="hover:cursor-pointer sm:px-6 sm:py-10 md:py-5 md:px-17 -mx-4 flex flex-wrap p-8">
       {features.map((feat)=>
        { return (<div key={feat.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 md:ml-8 md:mr-8 rounded-xl py-8 px-7 bg-gradient-to-br from-violet-950 to-black shadow shadow-gray-600 shadaow-md transition-all hover:shadow-gray-400 hover:shadow-md sm:p-9 lg:px-6 xl:px-9">
          <div className="flex items-center justify-center text-5xl"><feat.Icon color={feat?.color}/></div>
          <h3 className="flex items-center justify-center mb-4 text-xl text-gray-200">{feat?.title}</h3>
          </div>
        </div>);
        }
      )}
      </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 sm:grid-cols-2 dark:bg-gray-950">
        <div className="flex items-center justify-center">
          <Image className="h-full object-contain rounded-br-full" src="/img/vision.jpg" alt="vision" width={500} height={300}></Image>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 dark:from-gray-300 dark:to-blue-300 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
          OUR VISION
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-10 text-sm sm:text-l md:text-xl">Our vision is to provide optimal,</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl">job oriened and real time training</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 dark:from-gray-300 dark:to-blue-300 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
          OUR MISSION
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-10 text-sm sm:text-l md:text-xl ">Our Mission is to place students in IT industry</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl "> and make them financially strong,</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl "> productive and successful</p>
        </div>
        <div className="flex items-center justify-center">
          <Image className="h-full object-contain rounded-tl-full" src="/img/mission2.jpeg" alt="mission" width={500} height={300}></Image>
        </div>
      </div>
      </section>
      <section className="text-gray-300 body-font bg-gradient-to-br from-gray-950 to-violet-950">
        <div className="container py-13 pb-20 mx-auto">
          <div className="mt-5 px-5 py-5 md:py-5 md:px-5 mx-auto max-w-5xl text-center">
            <h2 className="block w-full text-gray-200 underline underline-offset-4 font-semibold text-2xl sm:text-3xl">
            Fusion In Numbers
            </h2>
          </div>   
          <div className="flex flex-wrap m-4 text-center">
            {numbers.map((feat)=>{
              return(
                <div key={feat.id} className="hover:cursor-pointer p-4 w-1/2 md:w-1/4 ">
                  <div className="border-2 border-black dark:border-0 bg-white dark:bg-gray-900 px-4 py-6 rounded-lg shadow-md shadow-gray-600 transform transition duration-500 hover:scale-110">          
                    <h2 className="title-font font-semibold text-xl text-gray-600 dark:text-gray-300 sm:text-4xl">{feat?.number}</h2>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300 font-semibold text-sm">{feat?.description}</p>
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
