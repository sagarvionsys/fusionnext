import React from 'react';

const CourseSection = () => {
  return (
    <div className="md:max-w-screen-lg mx-auto  p-4">
      <h2 className="text-center text-2xl font-bold mt-8 mb-10 font-serif text-indigo-300">Featured Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 pb-9">
        {/* HTML Course */}
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>
        <div className=" bg-gradient-to-r from-cyan-800 via-indigo-300 to-indigo-200  shadow-md p-4 rounded transition-transform hover:-translate-y-1">
          <img src="https://source.unsplash.com/300x200/?html, code" alt="HTML Course Image" className="w-full rounded" />
          <h2 className="text-xl font-semibold my-2">HTML Basics</h2>
          <p className="text-gray-700">Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
        </div>



        {/* Add other courses similarly */}
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full">
          More
        </button>
      </div>
    </div>
  );
};

export default CourseSection;
