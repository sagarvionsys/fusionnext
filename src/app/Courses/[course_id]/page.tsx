import React from 'react';
import Image from 'next/image';
import { PiCertificate } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";



const Page = () => {
  return (
    <section className='pt-[70px] bg-white text-black'>

      <div className="mybgcurved ">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="currentColor" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,165.3C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        <div className="flex flex-col lg:flex-row items-center justify-start p-5 mt-5">
          
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0 ">
            <Image
              src="https://t4.ftcdn.net/jpg/03/04/86/25/360_F_304862510_Vyp8F7JKRbPId7ddnC3tFDoLbdSrhrH3.jpg"
              alt="image"
              width={600}
              height={600}
              className="rounded-lg border-4 border-white  shadow-2xl"
            />
          </div>
        
          <div className="lg:w-1/2 border-l-4 border-black mb-6 lg:mb-0 p-5">
            <h1 className='text-4xl p-2 font-bold'>What is <span className='text-black'>Software Testing ?</span></h1>
            <p className='text-xl p-4'>
            Software testing is the systematic process of evaluating software to identify defects or discrepancies between 
            expected and actual results. It involves executing programs or applications to find errors, ensuring that they meet 
            specified requirements and function correctly. The primary goal is to assess quality, reliability, and performance, 
            ultimately enhancing usability and user satisfaction.<br/>
            Ultimately, software testing is not just about ensuring compliance with technical specifications it's about delivering value to your customers.
            </p>
          </div>

        </div>
       
      </div>
      
  <section className="">
  <div className="container max-w-xl px-6 pb-6 mx-auto space-y-5 lg:px-8 lg:max-w-7xl">
  <h2 className="text-3xl font-bold text-center sm:text-4xl">Key Features</h2>
  <hr className="w-200 mx-auto mt-0 border-2 border-orange-600" />
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="space-y-5">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <GiTeacher className="w-7 h-7" />
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600">Expert Trainer</h4>
              <p className="mt-2 ">We are a team of 10+ Years of Industry Experienced Trainers, who conduct the training with real-time scenarios.
              The Trainers follow the Project-Based Learning Method in the Interactive sessions.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <FaRegHandshake className="w-8 h-8" />

                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi underline underline-offset-4  text-orange-600">Mock Interviews and Preparations.</h4>
              <p className="mt-2 ">Boost your confidence with mock interviews and thorough preparations, equipping you with the skills needed to ace your next job opportunity</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                
                <GoProjectSymlink className="w-7 h-7" />

                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600 ">Live Projects</h4>
              <p className="mt-2 ">Learning journey through real-life industry projects, sponsored by top companies across various sectors, ensuring hands-on experience that prepares you for success.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <PiCertificate className="w-7 h-7"  />
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600 ">Course Complition Certificate</h4>
              <p className="mt-2 ">After completing this course, receive a Fusion Training Institute certificate to boost your resume and advance your career!</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <Image
              src="https://img.freepik.com/premium-vector/wearable-technology-with-multimedia_118813-8890.jpg?w=900"
              alt="image"
              width={600}
              height={600}
              className="mx-auto"
            />
      </div>
    </div>
  </div>
</section>
<section className="pt-0">
  <div className='bg-orange-500 flex flex-col md:flex-row justify-between px-6 md:px-24 py-10  '>
    <div className="w-full md:w-3/5 mb-6 md:mb-0">
      <h2 className="text-2xl font-semibold mb-6 md:mb-10">Who can apply for the course?</h2>
      <div className="space-y-4 md:space-y-6">
        <ul className='text-white'>
          <li className="flex items-center mt-4">
            <FaCheck className="mr-2 text-black" />
            Aspiring Software developers who are interested in switching careers.
          </li>
          <li className="flex items-center mt-4">
            <FaCheck className="mr-2 text-black" />
            Graduate/post-graduate students wishing to pursue their careers in Software testing.
          </li>
          <li className="flex items-center mt-4">
            <FaCheck className="mr-2 text-black" />
            Professionals from non-IT backgrounds, who want to establish themselves in IT.
          </li>
          <li className="flex items-center mt-4">
            <FaCheck className="mr-2 text-black" />
            Candidates who would like to restart their career after a gap.
          </li>
          <li className="flex items-center mt-4">
            <FaCheck className="mr-2 text-black" />
            Software testing is a topic of interest to professionals.
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full md:w-2/5 flex justify-center">
      <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="side image" className="w-2/3 md:w-full rounded-full border-4 border-white" />
    </div>
  </div>
</section>

    </section>
  );
};

export default Page;




