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
    <div className="bg-orange-50 pt-20 md:px-8 lg:px-10  mb-20  ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
       p-10 "
      >
        {mycourseData.map((course, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg hover:bg-white transition-transform hover:scale-105 shadow-2xl"
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
                  <span className="mt-1 px-1.5 py-0.5 text-[10px] font-medium bg-yellow-400 rounded-lg ">
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
                  <CiClock1 className="mr-1 mt-[2px]" />
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
  );
};

export default Courses;
