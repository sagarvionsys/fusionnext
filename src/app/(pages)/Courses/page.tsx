import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { GoDot } from "react-icons/go";
import Image from "next/image";
import { courseFeatures, mycourseData } from "@/Data/mycourseData";
import Course_partners from "@/app/interface/Course_partners";

const Courses = () => {
  const customSort = (a: any, b: any) => {
    if (a.top && !b.top) {
      return -1;
    } else if (!a.top && b.top) {
      return 1;
    } else {
      return 0;
    }
  };
  mycourseData.sort(customSort);

  return (
    <main className="bg-white pt-[5.2rem]">
      {/* hero__section */}
      <section className="section relative w-full h-[40rem] md:h-[40rem] overflow-hidden ">
        <div className="hero__video md:h-[100%] md:w-[100%] h-[100%] bg-black">
          <video
            src={"/videos/coursehero.mp4"}
            loop
            muted
            autoPlay
            className="w-full h-full object-cover opacity-45"
          ></video>
        </div>
        {/* second */}
        <div className="hero__text absolute top-20 pt-20 md:top-0 w-full left-0 md:p-4 p-4 gap-5 flex-col md:h-full h-[50%] flex justify-center items-center">
          <h1 className="text-white px-4 text-center font-extrabold text-[2rem] md:text-[3rem] max-w-[60rem]">
            Discover Your Path to Knowledge with Our Diverse Course Selection
          </h1>
          <p className="text-lg px-4 text-center text-white max-w-[60rem]">
            Welcome to our educational hub, where limitless learning
            possibilities await. Embark on a journey of discovery with our
            curated selection of courses.
          </p>
          <button className="border p-2">
            <Link href={"#cards__section"}>Explore Courses</Link>
          </button>
        </div>
      </section>

      {/* course features section */}
      <section className="bg-white">
        <div className="container px-4 py-4 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Explore Our Exciting Courses
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-[#daaa47] rounded-full"></span>
            <span className="inline-block w-32 h-1 ml-1 bg-[#daaa47] rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-[#daaa47] rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {courseFeatures?.map((feat) => {
                return (
                  <div key={feat?.id} className=" flex gap-2 items-center">
                    <span className="inline-block p-3 text-blue-500 bg-black rounded-xl">
                      <feat.icon size={30} color="#dbad4d" />
                    </span>

                    <h1 className="text-xl font-semibold text-black capitalize ">
                      {feat?.title}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[25rem] h-[25rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* course card section */}
      <section id="cards__section" className="cards__section pt-10 md:pt-20">
        <div className="flex justify-center items-center">
          <div className="relative inline-block text-center">
            <span className="text-2xl md:text-3xl font-bold text-black m-2">
              Our Courses
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
       p-10 "
        >
          {mycourseData.map((course, index) => (
            <div
              key={index}
              className="border hover:border-blue-800  rounded-lg overflow-hidden hover:shadow-lg hover:bg-white  transition-transform hover:scale-105 shadow-2xl"
            >
              <Image
                src={course.imagesrc}
                alt="course_Image"
                className="h-48 w-full object-cover"
                width={600}
                height={600}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-lg font-semibold text-black ">
                    {course.courseName}
                  </h1>
                  {course.top && (
                    <span className="  mt-1 px-1.5 py-0.5 text-[9px] font-medium  bg-gradient-to-r from-red-500 via-orange-400 to-red-500 text-white shadow-sm  rounded-sm  ">
                      {course.top}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-800 mb-2">
                  {course.description}
                </p>
                <hr className="border-t border-gray-500" />
                <div className="mt-2 flex justify-between">
                  <span className="flex  py-1 text-xs font-semibold text-black ">
                    <GoDot className="mt-[2px]" /> {course?.trainer}
                  </span>
                  {course.courseMod && (
                    <span className="flex  py-1 text-xs font-semibold text-black">
                      <GoDot className="mt-[2px]" /> {course?.courseMod}
                    </span>
                  )}
                  <span className="inline-flex items-center py-1 text-xs font-semibold text-black ">
                    <CiClock1 className="mr-1 mt-[2px]" />
                    {course.duration}
                  </span>
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="text-white font-medium rounded-lg text-sm px-2 py-1 mr-1  hover:bg-blue-100 bg-blue-800  hover:text-black border  hover:border-blue-800">
                    <Link href="#" className="text-alice-blue">
                      Know more
                    </Link>
                  </button>
                  <button className="text-white font-medium rounded-lg text-sm px-2 py-1  hover:bg-blue-100 hover:text-black  bg-blue-800  border  hover:border-blue-800 ">
                    <Link href="#" className="text-alice-blue">
                      Book demo
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* the placed compony list */}
      <Course_partners />
      {/* send an email button */}
      <section></section>
    </main>
  );
};

export default Courses;
