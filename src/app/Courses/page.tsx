<<<<<<< HEAD
import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { GoDot } from "react-icons/go";

const Courses = () => {
  const mycourseData = [
    {
      courseName: "AWS",
      imagesrc: "https://wallpapercave.com/wp/wp13498907.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "Top Selling",
      courseMod: "Online",
    },
    {
      courseName: "Salesforce",
      imagesrc:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4VHASVSF2FNDPMEZFMKW3IOVKE.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "Top tranding",
      courseMod: "",
    },
    {
      courseName: "Oracal-SQL/Pl-SQL",
      imagesrc:
        "https://redresscompliance.com/wp-content/uploads/2024/02/Future-Trends-of-Oracle-APEX-1024x585.webp",
      trainer: "Trainer-Led",
      duration: "3-Months",
      top: "",
      courseMod: "Offline",
    },
    {
      courseName: "Software Testing",
      imagesrc:
        "https://t4.ftcdn.net/jpg/05/02/87/73/360_F_502877373_AlMUM04NNNlztpjGLSWGfaPlcWEP7qT4.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "In demand",
      courseMod: "Online",
    },
    {
      courseName: "power-Bi",
      imagesrc:
        "https://fusion-institute.com/public/uploads/course/1659161547-maxresdefault.jpg",
      trainer: "Trainer-Led",
      duration: "3-Months",
      top: "",
      courseMod: "Offline",
    },
    {
      courseName: "RPA",
      imagesrc:
        "https://fusion-institute.com/public/uploads/course/1654431691-rpa.jpg",
      trainer: "Trainer-Led",
      duration: "4-Months",
      top: "Top tranding",
      courseMod: "Offline",
    },
  ];
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
    
    <div className="bg-white px-4 md:px-10 lg:px-20 py-6 md:py-10 lg:py-10 mb-20  ">
      
      <h1 className=" flex justify-center mx-0 text-3xl font-bold leading-tight text-black sm:text-4xl mb-6">Our Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
        {mycourseData.map((course, index) => (
          
          <div
            key={index}
            className="border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
          >
            <img
              src={course.imagesrc}
              alt="course_Image"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-lg font-semibold text-black ">
                  {course.courseName}
                </h1>
                {course.top && (
                  <span className="mt-1 px-1.5 py-0.5 text-xs font-medium bg-yellow-500 rounded-sm ring-1 ring-yellow-700/60 shadow-lg shadow-yellow-300">
                    {course.top}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-800 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis expedita ratione quae iste iusto quam eius ex quod
                enim tempore.
              </p>
              <hr className="border-t border-gray-500" />
              <div className="mt-2 flex justify-between">
                <span className="flex  py-1 text-xs font-semibold text-black">
                  <GoDot className="mt-[2px]" /> {course?.trainer}
                </span>
                {course.courseMod && (
                  <span className="flex  py-1 text-xs font-semibold text-black">
                    <GoDot className="mt-[2px]" /> {course?.courseMod}
                  </span>
                )}
                <span className="inline-flex items-center py-1 text-xs font-semibold text-black">
                  <CiClock1 className="mr-1" />
                  {course.duration}
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="text-white font-medium rounded-lg text-sm px-2 py-1 mr-1 bg-blue-800 hover:bg-red-500">
                  <Link href="#" className="text-alice-blue">
                    Know more
                  </Link>
                </button>
                <button className="text-white font-medium rounded-lg text-sm px-2 py-1 bg-red-500 hover:bg-blue-800">
                  <Link href="#" className="text-alice-blue">
                    Book demo
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
=======
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";


const Courses = () => {

    const mycourseData=[
      {
        courseName:"AWS/Devops",
        imagesrc:"https://cdn2.interfaz.io/wp-content/uploads/2023/06/Blog_AWS_cover-1.png",
        Trainer: "Trainer-Led",
        
        Duration:"5-Months",
      },

      {
        courseName:"Salesforce",
        imagesrc:"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4VHASVSF2FNDPMEZFMKW3IOVKE.jpg",
        Trainer: "Trainer-Led",
       
        Duration:"6-Months",
        top:"Top tranding"
      },
      {
        courseName:"Oracal-SQL/Pl-SQL",
        imagesrc:"https://redresscompliance.com/wp-content/uploads/2024/02/Future-Trends-of-Oracle-APEX-1024x585.webp",
        Trainer: "Trainer-Led",
       
        Duration:"3-Months",
        top:"In demand"
      },   
      {
        courseName:"power-Bi",
        imagesrc:"https://fusion-institute.com/public/uploads/course/1659161547-maxresdefault.jpg",
        Trainer: "Trainer-Led",
       
        Duration:"3-Months"
        
      },
      {
        courseName:"RPA",
        imagesrc:"https://fusion-institute.com/public/uploads/course/1654431691-rpa.jpg",
        Trainer: "Trainer-Led",
       
        Duration:"4-Months",
        top:"Top tranding"
      },
      
      
    ]
    
  return (
    <div className="p-5 mx-2 mb-10">             
      <h1 className=" flex justify-center mx-0 text-3xl font-bold leading-tight alice-blue sm:text-4xl mb-3">Our Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      { mycourseData.map((Courses)=>(

<div  key={Courses.courseName} className="flex flex-col md:flex-row p-3 my-4  rounded-lg  border-2 border-zinc-600	hover:bg-zinc-700  shadow-md shadow-gray-200">
  <div className="w-full md:w-1/2">
    <img
      src={Courses.imagesrc}
      alt="Course"
      className="h-full w-full rounded-lg  object-cover border-2 border-gray-400"
    />
  </div>

  <div>
    <div className="md:w-full md:pl-4">
      <div className='flex'>
    
      <div>
      <h1 className="text-lg font-semibold text-alice-blue">
      <Link
                href={"#"}
                title=""
                className="font-medium alice-blue transition-all duration-200 hover:text-gray-300 hover:underline text-alice-blue flex flex:col "
              >
                {Courses.courseName}
                <MdOutlineArrowOutward/>
      </Link>
      </h1>
        </div>
        
        <div className='ml-auto'>
      {Courses.top &&<span className=" rounded-md bg-transparent px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-600/60 shadow-md shadow-yellow-200">{Courses?.top}</span>}
      </div>
    </div>
                

      <p className="mt-3 text-sm text-gray-270">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores aliquid libero
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          Online + Offline
        </span>
        <br/>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          {Courses.Trainer}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-purple-500 px-3 py-1 text-[10px] font-semibold text-gray-200">
          {Courses.Duration}
        </span>
        <button type="button" className="text-White font-medium rounded-lg text-sm px-1 py-1 mr-1 bg-red-500 hover:underline ">Know more</button>
        <button type="button" className="text-White font-medium rounded-lg text-sm px-1 py-1 bg-red-500 hover:underline ">Book demo</button>
      </div>
    </div>
  </div>
</div>

    ))}

    </div>
    </div>
    
>>>>>>> 7c1297140f714efe3e51b13a8af3b8e18b7b9a61
  );
};

export default Courses;
