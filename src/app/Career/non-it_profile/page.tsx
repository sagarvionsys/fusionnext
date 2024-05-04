"use client"
import Image from "next/image";
import nonIt from "@/Data/non-it";
import { RiTeamFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import Apply from "@/components/Apply";
import React ,{useEffect}  from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowDropright } from "react-icons/io";

const page = () => {

    useEffect(()=>{
        AOS.init({offset: 150,
          duration: 1000,
          delay: 10,});
      },[])

    return (
        <div>
            <div className="h-2 overflow-x-hidden"></div>
            <div className="overflow-hidden flex flex-col mx-auto bg-blue-50 dark:bg-gray-950">
                <Image className="w-full mt-8 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" width={1000} height={1000} src="/img/129657.jpg" alt="background image"></Image>
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="mx-auto p-10 rounded-md cursor-pointer flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-gray-600 dark:from-blue-950 dark:to-gray-800 opacity-10 text-gray-200" data-aos="fade-down">
                    <h1 className="flex items-center justify-center text-xl sm:text-2xl md:text-4xl ">Ignite Your Career: Fuel Your Ambition with Endless Possibilities</h1>
                    <p className="flex items-center justify-center text-xs sm:text-sm">We believe in fostering a culture where every individual's success is intertwined with the success of our team as a whole.</p>
                    <p className="flex items-center justify-center text-xs sm:text-sm md:text-xl ">because when our associate succeed we all do.</p>
                </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-20 md:mt-0 items-center justify-center border-b-2 bg-gray-100 dark:bg-gray-950">
                <div className="flex flex-col pb-10 lg:pb-0 pt-5 lg:pt-0 w-full md:w-2/5 mt-10 md:mt-0 px-5 sm:px-10 rounded-lg items-center justify-center">
                    <h2 className="flex text-2xl sm:text-3xl lg:text-4xl cursor-pointer bg-gradient-to-b from-purple-700 to-gray-900 bg-clip-text pb-3 lg:pb-10" data-aos="zoom-in-up"><span className="text-red-700 pr-2"><GiCursedStar/> </span> Why work with us?</h2>
                    <div>
                    <div className="flex flex-col gap-1 lg:gap-2 items-start justify-center scroll:scale-105">
                        <div  data-aos="zoom-in" className="flex flex-row items-center cursor-pointer hover:scale-105 transition duration-500">
                            <div className="text-green-600 rounded-full text-xl sm:text-3xl"><IoMdArrowDropright/></div>
                            <div className="text-l sm:text-xl font-semibold">Dynamic Work Environment</div>                           
                        </div>
                        <div data-aos="zoom-in" className="flex flex-row items-center cursor-pointer hover:scale-105 transition duration-500">
                            <div className="text-green-600 rounded-full text-xl sm:text-3xl"><IoMdArrowDropright/></div>
                            <div className="text-l sm:text-xl font-semibold">Opportunities for Growth</div>
                        </div>
                        <div data-aos="zoom-in" className="flex flex-row items-center cursor-pointer hover:scale-105 transition duration-500">
                            <div className="text-green-600 rounded-full text-xl sm:text-3xl"><IoMdArrowDropright/></div>
                            <div className="text-l sm:text-xl font-semibold">Impactful Work</div>                          
                        </div>
                        <div data-aos="zoom-in" className="flex flex-row items-center cursor-pointer hover:scale-105 transition duration-500">
                            <div className="text-green-600 rounded-full text-xl sm:text-3xl"><IoMdArrowDropright/></div>
                            <div className="text-l sm:text-xl font-semibold">Employee Development</div>                          
                        </div>
                        <div data-aos="zoom-in" className="flex flex-row items-center cursor-pointer hover:scale-105 transition duration-500">
                            <div className="text-green-600 rounded-full text-xl sm:text-3xl"><IoMdArrowDropright/></div>
                            <div className="text-l sm:text-xl font-semibold">Career Stability</div>                          
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex w-full md:w-3/5">
                    <Image className="object-contain rounded-lg" src="/img/2147656715.jpg" alt="image" width={1000} height={1000}></Image>
                </div>
            </div>

            <div className="bg-white dark:bg-black">
            <h1 className="flex flex-wrap items-center justify-center px-16 text-xl md:text-3xl pt-4 pb-5 underline underline-offset-4 font-semibold text-black dark:text-white">See Opportunities for you <span><IoMdArrowRoundForward/></span></h1>

            <div className="flex flex-wrap justify-evenly p-1 sm:px-4 md:px-6 lg:px-10 ">
                {nonIt.map((feat)=>
                {return(
                    <div  data-aos="slide-up" key={feat.id} className="flex p-3 md:p-6 w-full h-auto md:w-1/2 xl:w-1/3">
                        <div className="flex relative items-center justify-center w-full h-full cursor-pointer dark:text-white">
                            <div className="relative flex items-center justify-center border-2 border-gray-400 dark:border-gray-800 h-full rounded-md pl-4 p-3 md:p-6 bg-white dark:bg-[#110c10] hover:bg-violet-50 dark:hover:bg-[#11011c] hover:scale-105 transition duration-500">
                                <div>
                                <h2 className="text-xl text-violet-950 dark:text-violet-300 w-full h-[4rem] md:text-2xl font-semibold">{feat?.role}</h2>
                                <p className="text-sm md:text-md w-full md:h-[13rem] text-gray-900 dark:text-gray-200 py-4 leading-relaxed"><span className="font-bold">Role and Responsibilities : </span>{feat?.jobDescription}</p>
                                <p className="text-sm text-violet-950 dark:text-violet-300 w-full h-auto"><span className="font-semibold text-black dark:text-white">Education: </span>{feat?.education}</p>
                                <p className="text-sm text-violet-950 dark:text-violet-300 w-full h-auto"><span className="font-semibold text-black dark:text-white">Job type: </span>{feat?.job}</p>
                                <p className="text-sm text-violet-950 dark:text-violet-300 w-full h-auto"><span className="font-semibold text-black dark:text-white">Experience: </span>{feat?.experience}</p>
                                <div className="flex items-center w-full h-auto my-2 justify-center">
                                    <Apply/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                );}
                )}
            </div>
            </div>

            <div className="flex flex-wrap p-8 sm:p-16 md:p-24 justify-center bg-violet-50 dark:bg-gray-950">
                <div className="mx-auto max-w-6xl">
                    <section className="font-sans text-black">
                    <div className="lg:flex lg:items-center">
                        <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                        <div className="h-full">
                            <article className="h-full">
                            <div className="h-full">
                                <Image className="h-full object-cover cursor-pointer shadow-lg shadow-gray-500" src="/img/2147702117.jpg" width={733} height={412} alt="image" ></Image>
                            </div>
                            </article>
                        </div>
                        </div>
                        <div className="flex items-center justify-center text-center text-md sm:text-xl text-semibold cursor-pointer md:text-3xl text-blue-950 dark:text-gray-200 mt-10 lg:mt-0 p-8" data-aos="zoom-out">Embrace each day with enthusiasm and dedication, knowing that your passion and commitment are the driving forces behind our shared success.</div>
                    </div>
                    </section>
                </div>
            </div>

        </div>
    );
  };
  
  export default page;
  