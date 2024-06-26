import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { GoDot } from "react-icons/go";
import Image from "next/image";

const Courses = () => {
  const mycourseData = [
    {
      courseName: "AWS",
      imagesrc: "https://media2.spaceref.com/wp-content/uploads/2023/09/13112723/AWS.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "Top Selling",
      courseMod: "Online",
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
      courseName: "Oracal-SQL/Pl-SQL",
      imagesrc:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/315035597/original/dcf49ad30116a98f47d8080b7c764f5fbe0c6a90/do-simple-to-complex-sql-queries-and-plsql-procedures.jpg",
      trainer: "Trainer-Led",
      duration: "3-Months",
      top: "Top tranding",
      courseMod: "Offline",
    },
    {
      courseName: "Salesforce",
      imagesrc:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4VHASVSF2FNDPMEZFMKW3IOVKE.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "Top Trending",
      courseMod: "Online/Offline",
    },
    
    {
      courseName: "RPA",
      imagesrc:
        "https://fusion-institute.com/public/uploads/course/1654431691-rpa.jpg",
      trainer: "Trainer-Led",
      duration: "4-Months",
      top: "",
      courseMod: "Offline",
    },
    {
      courseName: "Salesforce",
      imagesrc:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4VHASVSF2FNDPMEZFMKW3IOVKE.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "",
      courseMod: "Online/Offline",
    },
    
    {
      courseName: "AWS",
      imagesrc: "https://media2.spaceref.com/wp-content/uploads/2023/09/13112723/AWS.jpg",
      trainer: "Trainer-Led",
      duration: "6-Months",
      top: "",
      courseMod: "Online",
    }
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
    <div className="bg-white dark:bg-[#242121] pt-20 md:px-8 lg:px-10">
      <div className="flex justify-center items-center">
  <div className="relative inline-block text-center">
    <span className="text-2xl md:text-3xl font-bold">
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
            className="border hover:border-blue-800 dark:border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:bg-white dark:hover:bg-black transition-transform hover:scale-105 shadow-2xl"
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
                <h1 className="text-lg font-semibold text-black dark:text-white">
                  {course.courseName}
                </h1>
                {course.top && (
                  <span className="  mt-1 px-1.5 py-0.5 text-[9px] font-medium  bg-gradient-to-r from-red-500 via-orange-400 to-red-500 text-white shadow-sm  rounded-sm dark:text-black ">
                    {course.top}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-800 dark:text-gray-300 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis expedita ratione quae iste iusto quam eius ex quod
                enim tempore.
              </p>
              <hr className="border-t border-gray-500" />
              <div className="mt-2 flex justify-between">
                <span className="flex  py-1 text-xs font-semibold text-black dark:text-white">
                  <GoDot className="mt-[2px]" /> {course?.trainer}
                </span>
                {course.courseMod && (
                  <span className="flex  py-1 text-xs font-semibold text-black dark:text-white">
                    <GoDot className="mt-[2px]" /> {course?.courseMod}
                  </span>
                )}
                <span className="inline-flex items-center py-1 text-xs font-semibold text-black dark:text-white">
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
    </div>
  );
};

export default Courses;
