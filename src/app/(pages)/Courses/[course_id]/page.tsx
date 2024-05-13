"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiCertificate } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const Page = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 1000, delay: 100 });
  }, []);
  const handleDownload = () => {
    const pdfUrl =
      "https://res.cloudinar782/Course-Images/k6fsaqjy3epudyb60m5a.pdf";
    const fileName = pdfUrl.split("/").pop();

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.download = fileName || "";
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        toast.error("Error downloading the Brochure");
        // Handle error, e.g., display a message to the user
      });
  };

  return (
    <section className="pt-[70px] bg-white text-black overflow-x-hidden">
      <Toaster />
      <div className="fixed bottom-[70px] right-4 z-50">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:underline">
          <Link href="#">Book Demo</Link>
        </button>
      </div>

      <div className="mybgcurved pt-5">
        <div className="relative p-5 md:pt-5  z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl font-bold leading-tight mb-2">
            Software Testing (Manual+ Automation)
          </h1>
          <button
            className="bg-yellow-400 text-gray-900 hover:bg-w=yellow-300 py-2 
            px-6 rounded-full text-sm font-semibold transition duration-300 ease-in-out 
            transform hover:scale-105 hover:shadow-lg"
            onClick={handleDownload}
          >
            Download Brochure
          </button>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,165.3C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="flex flex-col lg:flex-row items-center justify-start mt-2">
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <Image
              src="/img/softwareTesting.jpg"
              alt="image"
              width={600}
              height={600}
              className="rounded-lg "
            />
          </div>

          <div className=" lg:w-1/2 lg:border-l-4 lg:border-black mb-6 lg:mb-0 p-5">
            <h1 className="text-4xl p-2 font-bold">
              What is <span className="text-black">Software Testing ?</span>
            </h1>
            <p className="text-lg p-4">
              Software Testing is evaluation of the software against
              requirements gathered from users and system specifications.
              Testing is conducted at the phase level in software development
              life cycle or at module level in program code. Software testing
              comprises of Validation and Verification. It involves executing
              programs or applications to find errors, ensuring that they meet
              specified requirements and function correctly. The primary goal is
              to assess quality, reliability, and performance, ultimately
              enhancing usability and user satisfaction.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container max-w-xl px-6  mx-auto space-y-5 lg:px-8 lg:max-w-7xl pb-12">
          <h2 className="text-3xl font-bold text-center sm:text-4xl">
            Key Features
          </h2>
          <hr className="w-200 mx-auto mt-0 border-2 border-orange-600" />
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div data-aos="zoom-in">
              <div className="space-y-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <GiTeacher className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600">
                      Expert Trainer
                    </h4>
                    <p className="mt-2 ">
                      We are a team of 10+ Years of Industry Experienced
                      Trainers, who conduct the training with real-time
                      scenarios. The Trainers follow the Project-Based Learning
                      Method in the Interactive sessions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <FaRegHandshake className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi underline underline-offset-4  text-orange-600">
                      Mock Interviews and Preparations.
                    </h4>
                    <p className="mt-2 ">
                      Boost your confidence with mock interviews and thorough
                      preparations, equipping you with the skills needed to ace
                      your next job opportunity
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <GoProjectSymlink className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600 ">
                      Live Projects
                    </h4>
                    <p className="mt-2 ">
                      Learning journey through real-life industry projects,
                      sponsored by top companies across various sectors,
                      ensuring hands-on experience that prepares you for
                      success.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <PiCertificate className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi underline underline-offset-4 text-orange-600 ">
                      Course Complition Certificate
                    </h4>
                    <p className="mt-2 ">
                      After completing this course, receive a Fusion Training
                      Institute certificate to boost your resume and advance
                      your career!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="mt-10 lg:mt-0"
              data-aos="flip-up"
            >
              <Image
                src="/img/imageFeatures.jpg"
                alt="image"
                width={600}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="relative w-full h-[360px] lg:w-[1562px]">
          <Image
            src="/img/CutImage.jpg"
            alt="side image"
            layout="fill"
            objectFit="cover"
            className="hidden lg:block"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start mt-2  ">
            <div className=" mybg w-full md:w-3/5 mb-2 md:mb-0 mx-full md:pl-[80px] px-2 bg-black lg:bg-transparent p-5">
              <h2 className=" text-white text-2xl font-semibold mb-2 md:mb-2">
                Who can apply for the course?
              </h2>
              <div className="space-y-4 md:space-y-6">
                <ul className="text-white text-md font-semibold">
                  <li className="flex items-center mt-4">
                    <FaCheck className="mr-2" />
                    Aspiring Software developers who are interested in switching
                    careers.
                  </li>
                  <li className="flex items-center mt-4">
                    <FaCheck className="mr-2" />
                    Graduate/post-graduate students wishing to pursue their
                    careers in Software testing.
                  </li>
                  <li className="flex items-center mt-4">
                    <FaCheck className="mr-2" />
                    Professionals from non-IT backgrounds, who want to establish
                    themselves in IT.
                  </li>
                  <li className="flex items-center mt-4">
                    <FaCheck className="mr-2" />
                    Candidates who would like to restart their career after a
                    gap.
                  </li>
                  <li className="flex items-center mt-4">
                    <FaCheck className="mr-2" />
                    Software testing is a topic of interest to professionals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white m-10">
        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto px-6 p-6 bg-white">
            <div className="mb-5 text-center ">
              <h3 className="text-2xl text-orange-500 font-bold tracking-wide underline">
                Course Offerings
              </h3>
            </div>

            <div className="flex flex-wrap mt-5  ">
              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-4 border-orange-500 hover:bg-gray-200"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Online + Offline Classes</div>
                </div>
              </div>

              <div
                className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-4 border-orange-500 hover:bg-gray-200"
                data-aos="zoom-in"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Course Duration : 5 months</div>
                </div>
              </div>

              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-4 border-orange-500 hover:bg-gray-200"
                data-aos="fade-left"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">24 x 7 Support</div>
                </div>
              </div>
              <div
                className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-4 border-orange-500 hover:bg-gray-200"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Effective Resume Building.</div>
                </div>
              </div>

              <div
                className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-4 border-orange-500 hover:bg-gray-200"
                data-aos="zoom-in"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Certificate of Completion</div>
                </div>
              </div>

              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4 border-orange-500 hover:bg-gray-200"
                data-aos="fade-left"
              >
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-800"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">100% Placement Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;

{
  /* <section>
<div className="bg-orange-500 flex flex-col md:flex-row justify-between">
  <div className="w-full md:w-3/5 mb-2 md:mb-0 mx-full py-5 md:px-[92px] px-2">
    <h2 className="text-2xl font-semibold mb-2 md:mb-2">
      Who can apply for the course?
    </h2>
    <div className="space-y-4 md:space-y-6">
      <ul className="text-white">
        <li className="flex items-center mt-4">
          <FaCheck className="mr-2 text-black" />
          Aspiring Software developers who are interested in switching
          careers.
        </li>
        <li className="flex items-center mt-4">
          <FaCheck className="mr-2 text-black" />
          Graduate/post-graduate students wishing to pursue their
          careers in Software testing.
        </li>
        <li className="flex items-center mt-4">
          <FaCheck className="mr-2 text-black" />
          Professionals from non-IT backgrounds, who want to establish
          themselves in IT.
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
  <div className=" md:w-2/5 flex justify-center">
    <img
      src="/img/whoCan.jpg"
      alt="side image"
      className="object-cover  h-[275px]"
    />
  </div>
</div>
</section> */
}
