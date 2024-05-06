"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import python from '/public/img/python.jpg';
//import {Coursal} from './Coursal';
import hom  from  '/public/img/google.jpg';
import oracle from '/public/img/oracle.png';
import accenture from '/public/img/accenture.png';
import microsoft from '/public/img/microsoft.jpg';
import zoho from '/public/img/zoho.png';
import com from '/public/img/com_img.png';
import com1 from '/public/img/com_img1.png';
import com2 from '/public/img/com_img2.png';
import Link from 'next/link';
import VideoModal from "@/components/VideoModal";


//import { useMediaQuery } from 'react-responsive';
const work_fields = [{ id: 1, logo: python }];

const ShuffleHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '100px', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0', color: 'red' }}>{dots}</ul>
      </div>
    ),
  };



  const settingsm = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow: <></>,
    nextArrow: <></>,
  };

  const settingsmg = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow: <></>,
    nextArrow: <></>,
  };


 // const texts = [hom, "Second text", "Third text"];
 //const isMobile = useMediaQuery({ maxWidth: 640 }); // Define your mobile breakpoint

  const texts = [
    { id: 1, logo: accenture },
    { id: 2, logo: microsoft },
    { id: 3, logo: oracle },
    { id: 4, logo: zoho },
  ]

  const images_co = [
    { id: 1, logo: com },
    { id: 2, logo: com1 },
    { id: 3, logo: com2 },
  ]

  const [showModale, setShowModale] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="bg-gradient-to-r from-gray-200 to-gray-50 w-full md:h-screen px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mx-auto bg-cover bg-center">
         
         
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 ">
       <div className="slider-container p-4 w-full h-auto hidden sm:hidden md:block ">
          {/* Add your slider content here */}
        </div>

  

         
          <div>
            <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-bold">
              <h3 className="text-2xl text-black font-mono">Brighten Your Career</h3>
            </span>
            <h3 className="text-5xl md:text-5xl text-red-900 dark:text-red-700 font-serif">Fusion Software Institute</h3>
            <p className='text-gray-400 text-2xl'>
              Learn without limits brighten your <span className="text-indigo-500">Career</span>
            </p>
            <p className="text-base md:text-lg text-black my-4 md:my-6">
              5,000,000 careers advanced 1,500 live classes every month 85% report career benefits including promotion or a new job
            </p>





    <br />
<p className="font-medium">
    Est. 2010. Trusted by
+ 
 93,875
Students
</p><hr className="bg-red-400 h-1 border-0 w-80"></hr>

<br />

            <button className="bg-orange-500 text-white dark:text-gray-800 font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
              Freshers
            </button>
            <button className="bg-blue-500 text-white dark:text-gray-800 font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
              Professionals
            </button>
            <div className='justify-left text-left'>
            <h3 className="text-2xl text-black font-serif">Students hired by</h3>
            <div className='w-[200px] '>
            <Slider {...settingsm}>
            {texts.map((logo) => (
                  <div key={logo.id} className="flex justify-center ">
                  <Image
                    src={logo.logo}
                    alt="brand logo"
                    width={80}
                    height={100}
                    className='rounded-full bg-black'
                  />
                </div>
                ))}
              </Slider>
              </div>
              </div>
          </div>


        
 
 

</div>  


        </div>


        <div className="w-full min-h-screen px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
      {/* Slider */}
      <div className="md:hidden">
        <Slider {...settingsmg}>
          {images_co.map((logo) => (
            <div key={logo.id} className="relative">
              <Image
                src={logo.logo}
                alt="brand logo"
                className="bg-black p-1"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <Link
                  href="#"
                  onClick={() => setShowModale(true)}
                  className="play-btn inline-block w-12 h-12 bg-gradient-to-r from-pink-500 via-transparent to-transparent rounded-full shadow-lg"
                >
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-8 border-white"></span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {showModale && <VideoModal onClose={() => setShowModale(false)} />}
        <div className="flex justify-center mt-4">
          <button className="bg-black text-white font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
            DEMO
          </button>
          <button className="bg-black text-white font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
            BATCH SCHEDULE
          </button>
        </div>
      </div>

      {/* Course List */}
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div className=" p-4 w-full h-auto hidden md:block border-gray-300 shadow-lg p-6 ">
            <Slider {...settingsmg}>
              {images_co.map((logo) => (
                <div key={logo.id} className="relative">
                  <Image
                    src={logo.logo}
                    alt="brand logo"
                    className="bg-black  "
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Link
                      href="#"
                      onClick={() => setShowModale(true)}
                      className="play-btn inline-block w-12 h-12 bg-gradient-to-r from-pink-500 via-transparent to-transparent rounded-full shadow-lg"
                    >
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-8 border-white"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
            {showModale && <VideoModal onClose={() => setShowModale(false)} />}
            <button className="bg-black text-white font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
              DEMO
            </button>
            <button className="bg-black text-white font-medium py-2 px-4 m-3 rounded transition-all hover:bg-indigo-600 active:scale-95">
              BATCH SCHEDULE
            </button>
          </div>

          <div className="container mx-auto px-8 py-8">
            {/* Search bar */}
            <div className="flex items-center justify-center mb-8">
              <button
                onClick={toggleDropdown}
                className="flex mr-4 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600"
              >
                All Courses
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md">
                  <div className="py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Python
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      C++
                    </Link>
                    {/* Add more courses as needed */}
                  </div>
                </div>
              )}
              <input
                type="text"
                placeholder="Search..."
                className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Search
              </button>
            </div>

            {/* Main content */}
            <div>
              <p className="text-red-500 text-3xl justify-center text-center font-serif pb-4">
                Book Our Free Demo Class
              </p>
              <p className="text-black text-2xl m-1 pb-4">
                Leave your details & we will call you back.
              </p>

              {/* Buttons */}
              <div className="grid md:grid-cols-3 m-auto grid-cols-1 md:gap-4 gap-2">
                <div>
                  <ul className="list-disc pl-6 m-1 text-gray-500">
                    <li>Web Development</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Networking Fundamentals</li>
                    <li>Python</li>
                  </ul>
                </div>
                {/* List of courses */}
                <div>
                  <ul className="list-disc pl-6 m-1 text-gray-500">
                    <li>Cybersecurity</li>
                    <li>Cloud Computing</li>
                    <li>AWS</li>
                    <li>DevOps</li>
                    <li>Cybersecurity</li>
                    <li>Mobile App Development</li>
                    <li>C++</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6 m-1 text-gray-500">
                    <li>Cybersecurity</li>
                    <li>Cloud Computing</li>
                    <li>AWS</li>
                    <li>DevOps</li>
                    <li>Cybersecurity</li>
                    <li>Mobile App Development</li>
                    <li>C++</li>
                    <li>Java</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev custom-arrow" onClick={onClick} style={{ zIndex: 10, position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', cursor: 'pointer' }}>
      Previous
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next custom-arrow" onClick={onClick} style={{ zIndex: 10, position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', cursor: 'pointer' }}>
      Next
    </div>
  );
};

export default ShuffleHero;
