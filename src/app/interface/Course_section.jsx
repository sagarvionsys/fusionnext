import React from 'react';

import Image from "next/image";

const CourseSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto bg-indigo-100 px-24 py-4">
      <h2 className="text-center text-2xl font-bold mt-8 mb-10 font-serif text-indigo-500">Featured Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* HTML Course */}
        
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200 shadow-md p-4 rounded-lg transform transition-transform hover:scale-105">
            <Image src={`https://source.unsplash.com/300x200/?html,code${index}`} alt={`HTML Course Image ${index}`} width={300} height={200} className="rounded-lg" />
            <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
            <p className="text-gray-700 ">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          More
        </button>
      </div>
    </div>
  );
};

export default CourseSection;
