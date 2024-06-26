"use client"
import { SiPowerbi } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import React ,{useEffect}  from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

 

const Batches = () => {
  
  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 1000,
      delay: 100,});
  },[])
    
 

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

  return <main className="bg-white pt-[70px] overflow-x-hidden">
    
    <section className="h-auto w-full pb-1">
      <div className="flex lg:h-[500px] md:h-[800px] h-[600px] relative">
        
        <Image
          src={"/img/background.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="object-cover lg:w-full blur-sm lg:h-[500px]"
        /> 
        <div className=" absolute flex lg:justify-evenly flex-col mx-8 my-8 py-8  z-40 top-0 bottom-0 left-0 right-0 lg:right-[45%]">
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

        
        <div data-aos="fade-down" className="absolute z-40 lg:ml-[55%] lg:h-[450px] h-[350px] md:top-[400px] top-[200px] lg:top-[0px]  left-0 right-0 lg:px-6 sm:px-12 px-4 lg:py-6 sm:py-12 py-4 overflow-y-scroll">
          
          {Data.map((Batches, index) => (
            <div key={index} className="h-auto w-auto my-4 flex sm:text-[18px] text-[13px] ">
              <div className="flex w-full">
                <div className="h-24 lg:w-[110px] w-[70px] px-2 py-2 flex items-center rounded-l-xl text-white md:text-[25px] text-[15px] bg-lime-400 dark:bg-lime-600">{Batches.date}</div>
                <div className="lg:w-[400px] justify-evenly w-full flex h-24 items-center rounded-r-xl text-black bg-white dark:text-gray-200 dark:bg-gray-900">
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


    <section>
        <hr />
        <div className="min-h-screen  flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white dark:bg-gray-800">
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <section className="font-sans text-black relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-50">
                  <div className="h-full " data-aos="fade-up"data-aos-offset="100">
                    <article className="h-full">
                      <div className="h-full">
                        <Image
                        
                          className="h-full object-cover"
                          src={"/img/Baches.png"}
                          alt=""
                          width={733}
                          height={412}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  </div>
                </div>
                <div className="py-6 px-8 bg-grey" data-aos="fade-left"data-aos-offset="100">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-4xl dark:text-white font-bold">
                    Establish constructive spaces.
                    </h2>
                    <p className="mt-4 dark:text-white" >
                    These spaces should encourage open communication, idea sharing, and mutual respect among team members. Constructive spaces provide a platform for diverse perspectives to be heard and valued, creating an environment where everyone feels empowered to contribute their best ideas. By cultivating a culture of constructive feedback and continuous improvement, these spaces promote accountability and drive positive change. </p>
                    
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

   
    <section className=" h-auto w-auto pb-6 bg-gray-50 dark:bg-gray-800">
      <hr />
    <div className="flex w-fit flex-col px-12 pt-6 ">
          <h2 className="font-bold text-2xl pb-2 text-black dark:text-gray-100">
            See our Ongoing Batche's
          </h2>
          <div className="border-2  border-sky-600 mb-3 text"></div>
        </div>
    
     <div className="flex flex-wrap justify-evenly h-auto w-auto bg-gray-50 dark:bg-gray-800 py-6 px-8 sm:py-8 gap-2">
     
    
        {Data.map((Batches,index)=><div
        key={index}
        data-aos="zoom-in"
        data-aos-offset="100"
        className="sm:h-[300px] h-[300px] sm:w-[400px] w-[260px] group relative cursor-pointer overflow-hidden bg-white dark:bg-black mb-5 py-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto max-w-sm rounded-lg px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 dark:bg-sky-800 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 dark:bg-sky-800 transition-all duration-300 group-hover:bg-sky-400 dark:group-hover:bg-sky-500">
        <p className="text-white text-[30px]"><Batches.logo/></p> 
            </span>
           
            <div
                className="space-y-6 pt-5 text-sm font-bold  leading-7 text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-white/90">
                
                <p><span className="sm:text-xl text-md">
                  {Batches.title}
                  </span> <br />
                <span>{Batches.date}</span>
                <span className="px-4 text-green-600 transition-all duration-300 group-hover:text-white">
                  {Batches.rutine}
                  </span></p>
                <p className="text-sky-500 transition-all duration-300 group-hover:text-white">
                  {Batches.time}
                  </p>
            </div>
           
        </div>
    </div>
        )}
   
      </div>
            
    </section>
   

    <section className="text-black dark:text-white  bg-white dark:bg-slate-800 ">
    <hr />
     <div className="px-12 py-24 max-w-full">

      <div className="text-4xl pb-6">
        <h1 className="w-fit">Student experience</h1>
      </div>

      <div className="text-[21px] py-6">
        <p className="w-fit">"Numerous students have successfully secured employment while effectively juggling their studies, professional commitments, and personal life, showcasing the remarkable balance achieved through Fusion Institute's batch programs."</p>
      </div>


      <div className="flex lg:flex-row flex-col items-center gap-6 py-6">
       <div
        data-aos="fade-left" 
        className="px-10 py-10 w-full  border rounded-md border-slate-800 dark:border-white">
         <div className="flex justify-center pb-[52px]">
                    <Image 
                        className="object-cover"
                        src={"/img/Screen1.png"}
                        alt=""
                        width={100}
                        height={100}
                        
                      />
            </div>
            <div className="flex justify-center font-bold">
              <p>Manage Time with Flexible Courses</p>
            </div>
            <div className="flex justify-center pt-4 text-[17px] text-red-500 hover:text-red-800">
              <p>Efficiently Navigate your Schedule</p>
            </div>
       </div>

       
       <div
        className="px-10 py-10 w-full  border rounded-md border-slate-800 dark:border-white">
         <div className="flex justify-center pb-12">
                    <Image 
                        className="object-cover"
                        src={"/img/Screen2.png"}
                        alt=""
                        width={100}
                        height={100}
                        
                      />
            </div>
            <div className="flex justify-center font-bold">
              <p>Use Robust Student Resources</p>
            </div>
            <div className="flex justify-center pt-4 text-[17px] text-red-500 hover:text-red-800">
              <p>Empower you with Tools & Support</p>
            </div>
       </div>

       <div 
        data-aos="fade-right" 
        className="px-10 py-10  sm:h-72 h-auto  w-full  border rounded-md border-slate-800 dark:border-white">
         <div className="flex justify-center pb-10">
                    <Image 
                        className="object-cover h-auto w-auto"
                        src={"/img/Screen3.png"}
                        alt=""
                        width={100}
                        height={100}
                        
                      />
            </div>
            <div className="flex justify-center font-bold">
              <p>Learn Online</p>
            </div>
            <div className="flex justify-center pt-4 text-[17px] text-red-500 hover:text-red-800">
              <p>Access to High-Quality Education</p>
            </div>
       </div>

      </div>

     </div>
    </section>
  </main>;
};


export default Batches;
