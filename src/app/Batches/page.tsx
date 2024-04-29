"use client"
import { title } from "process";
import { SiPowerbi } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";


const Batches = () => {
  
   const Data=[
    {
     id:1,
     logo:FaDatabase,
     title:"Data Science(Online Evening)",
     date:"19 April 2024",
     time:"07:00pm",
     rutine:"Daily"
    },
    {
      id:2,
      logo:BsBrowserChrome,
      title:"Web Development",
      date:"19 April 2024",
      time:"07:00pm",
      rutine:"Daily"
     },
     {
      id:2,
      logo:FaJava,
      title:"Java Fullstack Development(Offline Morning)",
      date:"19 April 2024",
      time:"07:00pm",
      rutine:"Daily"
     },
     {
      id:2,
      logo:PiFileSqlDuotone,
      title:"SQL/PLSQL",
      date:"19 April 2024",
      time:"07:00pm",
      rutine:"Daily"
     },
     {
      id:2,
      logo:SiPython,
      title:"Python Development",
      date:"19 April 2024",
      time:"07:00pm",
      rutine:"Daily"
     },
     {
      id:2,
      logo:SiPowerbi,
      title:"Power BI",
      date:"19 April 2024",
      time:"08:00 am",
      rutine:"Daily"
     }
  ]

  return <main className="bg-white pt-[90px]">
    
    <section className="h-auto w-full pb-1">
      <div className="flex lg:h-[500px] md:h-[800px] h-[600px] relative">
        
        <Image
          src={"/img/background.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="object-cover lg:w-full blur-sm lg:h-[500px]"
        /> 
        <div className=" absolute mx-8 my-8  z-40 top-0 bottom-0 left-0 right-0 lg:right-[45%]">
        <p className="text-white pl-2 md:text-[25px] sm:text-[15px] text-[10px]">OUR APPROACH</p>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 lg:py-2 pt-2 px-[15%] lg:px-1 md:text-[55px] sm:text-[35px] text-[20px]">
          <p>Batch Schedule for (2024)</p>
          </h1>
          <p className="text-white px-[13%] sm:text-[18px] text-[13px]">We Provides 100% Job Assistance :Cyber Success - A Trustworthy Classes in Pune</p>
          <p className="flex justify-between md:mt-20">
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 sm:mt-6 mt-2 lg:w-[150px] rounded w-full"
          >Book Demo</button>
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 sm:mt-6 mt-2 lg:w-[150px] rounded w-full"
          >Enquire Now</button>
          </p>
        </div>

        
        <div className="absolute z-40 lg:ml-[55%] lg:h-[450px] h-[350px] md:top-[400px] top-[200px] lg:top-[0px]  left-0 right-0 lg:px-6 sm:px-12 px-4 lg:py-6 sm:py-12 py-4 overflow-y-scroll">
          
          {Data.map((Batches, index) => (
            <div key={index} className="h-auto w-auto my-4 flex sm:text-[18px] text-[13px] ">
              <div className="flex w-full">
                <div className="h-24 lg:w-[110px] w-[70px] px-2 py-2 flex items-center text-white md:text-[25px] text-[15px] bg-lime-400">{Batches.date}</div>
                <div className="lg:w-[400px] justify-evenly w-full flex h-24 items-center text-black bg-white">
                  <p className="h-24 lg:w-52 md:w-96 place-content-center px-2">{Batches.title}</p>
                  <p className="sm:mr-6 mr-2 md:w-40 ">{Batches.date}</p>
                  <p className=" pr-2 md:w-40">{Batches.rutine}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="absolute z-10 w-full sm:mt-32 mt-44 sm:text-4xl text-3xl text-center text-black">
        <TypeAnimation
      sequence={[
       
        'Data Science',
        1000,
        'Python Development',
        1000,
        'Web Development',
        1000,
        'Power BI',
        1000,
      ]}
      speed={20}
      repeat={Infinity}
    />
        </div>

     <section className="h-[200px] w-full mt-1">
      <h1 className="h-[200px] w-full text-start absolute bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-violet-500 md:text-[80px] text-[60px]">ONG0ING BATCHES...</h1>
        <Image
          src={"/img/background1.png"}
          alt=""
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        /> 

     </section>


    <section className=" bg-slate-300 md:h-[630px] h-[550px] w-auto top-0 bottom-0 left-0 right-0 overflow-y-scroll">
      <div className="flex flex-col absolute z-0 sm:text-[200px] text-[100px] blur-sm mt-5 w-full h-full gap-5 text-white">
      <Image
          src={"/img/ongoingbatchbackground.png"}
          alt=""
          width={1000}
          height={1000}
          className="object-cover h-full w-full blur-sm"
        /> 
      </div>
      <div className="w-10/12 md:w-6/12 lg:6/12 mx-auto relative py-4">
    <div className="border-l-2 mt-10">
      
        {Data.map((Batches,index)=><div key={index} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          
          <div className="w-8 h-8 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
          <p className="text-white ml-2 mt-2">{<Batches.logo/>}</p></div>
          
          <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <div className="flex-auto">
            <h1 className="text-lg">{Batches.date}</h1>
            <h1 className="text-xl font-bold">{Batches.title}</h1>
            <h3>{Batches.rutine}</h3>
          </div>
          </div>
        )}
      </div>
      </div>
    </section>
    <hr />
  </main>;
};


export default Batches;
