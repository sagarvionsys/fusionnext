"use client"
import React, {useEffect} from "react";
import features from "@/Data/features";
import numbers from "@/Data/numbers";
import { GiProgression } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 1000,
      delay: 50,});
  },[])

  return (
   <>
    <div className="overflow-x-hidden">
      <div className="flex mt-10 relative h-auto w-full items-end justify-end bg-blue-950">
        <Image className="object-contain h-auto max-w-full" src="/img/2149211103.jpg" alt="about us image" width={1000} height={1000}></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-violet-950 to-transparent opacity-100 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center">
            <h2 className="lg:pl-10 lg:pr-[36rem] pb-3 text-yellow-600 text-3xl sm:text-5xl md:text-6xl text-bold">Fusion Software Institute</h2>
            <h2 className="text-white text-xl md:text-2xl lg:pl-10 lg:pr-[36rem]">is not a class or institute, it is a family</h2>
            <h2 className="text-white text-xl md:text-2xl lg:pl-10 lg:pr-[36rem]">who cares about every family members.</h2>
        </div>
      </div>

      <section id="features" className=" bg- px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 ">
        <div className=" pb-10">
        <div data-aos="fade-down" className="relative mx-auto max-w-5xl text-center">
          <span className=" text-gray-900 dark:text-gray-300 text-2xl md:text-3xl font-semibold my-3 flex items-start justify-center uppercase tracking-wider">
            Why choose us ?
          </span>
          {/* <h2
            className="block w-full bg-gradient-to-b from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-200 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
            Become Certified And Job Ready For Corporate World!
          </h2> */}
          
        </div>

        <div data-aos="fade-down" className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl hover:cursor-pointer border border-neutral-800 bg-gradient-to-br from-violet-950 to-gray-950 p-8 text-center shadow">
            <div className="flex items-center justify-center mx-auto h-16 w-16 text-4xl text-green-200 -translate-y-12 transform rounded-full bg-black dark:bg-slate-900"><SiTicktick/></div>
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
      </div>
      </section>

      <div className="relative flex felx-col-1 lg:flex-col-2 pb-20 items-center justify-center bg-gradient-to-br from-violet-900 to-gray-900 dark:bg-gray-950">
        <div className="flex-1">
        <div className="flex items-start justify-center pt-10 max-w-5xl" >
          <h2 className=" pb-6 text-2xl md:text-4xl bg-gradient-to-b from-gray-100 to-gray-200 bg-clip-text font-bold text-transparent" data-aos="fade-right">What is Corporate Training?</h2>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-300" data-aos="fade-right">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl text-gray-200" data-aos="fade-right">We defines training as partnering with students in a thought-provoking, challenging and creative process that inspires them to maximize their personal and professional potential.</p>
          </div>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-300" data-aos="fade-right">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl text-gray-200" data-aos="fade-right">The process of traning often unlocks previously untapped sources of imagination, productivity and leadership quality of both students and trainers.</p>
          </div>
        </div>
        <div className="flex p-5">
          <div className="md:pl-10 flex justify-center text-2xl md:text-3xl text-violet-300" data-aos="fade-right">
          <MdDoubleArrow/>
          </div>
          <div>
          <p className="md:px-5 text-sm sm:text-xl text-gray-200" data-aos="fade-right">We all have goals we want to reach, challenges we’re striving to overcome and times when we feel stuck. Partnering with a trainer can change your life, setting you on a path to greater personal and professional fulfillment.</p>
          </div>
        </div>
        </div>

        <div className="flex-1 hidden lg:flex items-center justify-center mt-20 mr-10">
          <Image data-aos="fade-left" className="rounded-xl mt-2 object-fit h-auto w-auto" src="/img/16433.jpg" alt="image" width={1500} height={1001}></Image>
        </div>
      </div>
      

      <div className="relative lg:px-5 sm:py-5 mb-10 text-center bg-gray-300 dark:bg-slate-900">
      <div className="mt-20 px-5 py-5 md:py-5 md:px-5 mx-auto max-w-5xl text-center">
        <h2 className="block w-full bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent dark:text-gray-300 font-bold text-2xl sm:text-3xl">
        OUR KEY FEATURES
        </h2>
      </div>

      <div className="hover:cursor-pointer px-6 sm:py-10 md:py-5  -mx-4 flex flex-wrap p-8">
        
       {features.map((feat)=>
        { return (<div key={feat.id} data-aos="zoom-in-up" className="w-full px-6 mb-10 md:w-1/2 lg:w-1/3 hover:flip-90">
          <div className= "py-8 px-7 md:pl-8 md:pr-8 rounded-md bg-gradient-to-br from-violet-950 to-black transform duration-500 hover:scale-110 shadow shadow-gray-600 shadaow-md transition-all hover:shadow-gray-700 dark:hover:shadow-gray-400 hover:shadow-md  border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col md:pl-8 md:pr-8 w-full h-full">
            <div className="flex items-center justify-center text-5xl"><feat.Icon color={feat?.color}/></div>
            <h3 className="flex items-center justify-center h-20 text-xl text-gray-200">{feat?.title}</h3>
            </div>
          </div>
          </div>
          );
        }
      )}
      </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 bg-blue-100 dark:bg-gray-950">
        <div className="flex items-center justify-center">
          <Image className="h-full object-contain rounded-full" src="/img/891.jpg" alt="vision" width={500} height={300}></Image>
        </div>
        <div className="flex flex-col items-center justify-center" data-aos="fade-right">
          <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 dark:from-gray-300 dark:to-blue-300 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl ">
          OUR VISION
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-10 text-sm sm:text-l md:text-xl">Our vision is to provide optimal,</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl">job oriened and real time training</p>
        </div>
        <div className="flex flex-col items-center justify-center" data-aos="fade-left">
          <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 dark:from-gray-300 dark:to-blue-300 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
          OUR MISSION
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-10 text-sm sm:text-l md:text-xl ">Our Mission is to place students in</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl ">IT industry and make them financially</p>
          <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm sm:text-l md:text-xl ">strong, productive and successful</p>
        </div>
        <div className="flex items-center justify-center">
          <Image className="h-full object-contain rounded-full" src="/img/10330.jpg" alt="mission" width={500} height={300}></Image>
        </div>
      </div>      

      <section className="text-gray-300 body-font bg-gradient-to-br from-gray-950 to-violet-950">
        <div className="container py-13 pb-20 mx-auto">
          <div className="mt-5 px-5 py-5 md:py-5 md:px-5 mx-auto max-w-5xl text-center">
            <h2 className="block w-full text-gray-200  font-semibold text-2xl sm:text-4xl">
            Fusion In Numbers
            </h2>
          </div>   
          <div className="flex flex-wrap m-4 text-center">
            {numbers.map((feat)=>{
              return(
                <div key={feat.id} data-aos="zoom-out-up" className="hover:cursor-pointer p-4 w-1/2 md:w-1/4 ">
                  <div className="border-2 border-black dark:border-0 bg-gradient-to-br from-sky-400 to-fuchsia-800 dark:bg-gray-900 px-4 py-6 rounded-lg shadow-md shadow-gray-600 transform transition duration-500 hover:scale-110">          
                    <h2 className="title-font font-semibold text-xl text-white dark:text-gray-300 sm:text-4xl">{feat?.number}</h2>
                    <p className="leading-relaxed text-white dark:text-gray-300 font-semibold text-sm">{feat?.description}</p>
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
