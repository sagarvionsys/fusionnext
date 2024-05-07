"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { Jobs } from "@/Data/It_Profiles";
import Link from "next/link";
import { Modal, message } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';


const it_profile = () => {
  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 1000,
      delay: 100,});
  },[])

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    position: "",
    workExperience: "",
    cv: null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    message.success("Your Application Submitted successfully");
    handleCancel();

    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      position: "",
      workExperience: "",
      cv: null,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="pt-[70px]">
      <section className="h-[500px]">
       
        <div className="absolute z-20 flex justify-start w-11/12 h-[500px]">
          <div className="h-auto w-auto place-content-center">
            <div className="my-12 pl-12 h-auto w-auto">
              <div className="bg-sky-600 h-2 w-12 mb-4">
                <div className="h-2 w-1 bg-white"></div>
              </div>
              <h1 className="leading-tight md:text-5xl text-4xl text-white font-bold">
              Join Our Dynamic Team <br /><span>Today!</span>
              </h1>
              <p className="leading-tight md:text-[22px] text-1xl text-white pt-8">
              Be Part of a Collaborative Environment <br />
              <span>Focused on Growth and Innovation.</span></p>
              <div className="flex flex-col sm:flex-row items-center pt-6">
              <Link
                href={"#jobCard"}
                className="px-6 py-2 bg-sky-600 hover:bg-sky-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              >
                Explore Opportunities
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-full">
                        <Image
                          className="h-[500px] lg:w-full object-cover"
                          src={"/img/mainCareer2.jpg"}
                          alt=""
                          width={1000}
                          height={1000}
                        />
                      </div>
          </section>

      <section className="overflow-x-hidden">
        <div className="min-h-screen  flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white dark:bg-[#1F2544]">
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <section className="font-sans relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full flex justify-center ">
                    <article className="h-full">
                      <div className="h-full">
                        <Image
                          className="h-full object-cover"
                          src={"/img/career.jpg"}
                          alt=""
                          width={600}
                          height={400}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  </div>
                </div>
                <div className="py-6 px-8 text-center">
                  <div className="leading-relaxed">
                    <h2 
                    data-aos="fade-left"
                    className="leading-tight md:text-4xl text-3xl dark:text-orange-50 text-sky-700 font-bold">
                      Your career awaits
                    </h2>
                    <p
                    data-aos="fade-left" 
                    className="mt-4 dark:text-gray-300">
                    Embark on a journey of growth and fulfillment with us! Join our dynamic team where innovation thrives, 
                    collaboration flourishes, and opportunities abound. 
                    We're committed to nurturing your potential, fostering creativity,
                     and empowering you to make a meaningful impact.
                    </p>
                    <p 
                    data-aos="fade-left"
                    className="mt-4 font-bold text-black hover:transform hover:scale-105 duration-300">
                      Seize the opportunity today!</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <hr />

      <section className=" bg-sky-800 overflow-x-hidden">
      <h2
      data-aos="zoom-in-up" 
      className="leading-tight md:text-5xl text-3xl py-12 px-4 flex justify-center dark:text-orange-50 text-white font-bold">
                    Life @ Fusion Institute
                    </h2><hr />
        <div data-theme="teal" className="mx-auto py-12 px-6">
            <section className="font-sans relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">

              <div className="py-8 px-8 text-center">
                  <div className="leading-relaxed">
                    
                    <h1 data-aos="fade-right" className="font-semibold text-3xl pb-4 text-white">Benefit's</h1> 
                    <p  data-aos="fade-right" className="pb-8 text-gray-200 ">
                    "We prioritizes the well-being and security of its workforce. Flexible work arrangements and professional development opportunities further enhance employee satisfaction and growth."
                    </p>

                    <h1 data-aos="fade-right" className="font-semibold text-3xl pb-4 text-white">Flexible work</h1>
                    <p data-aos="fade-right" className=" text-gray-200 pt-4">
                    "Fusion Software embraces flexible work arrangements, fostering a dynamic environment where employees can balance work and life commitments."
                    </p>

                  </div>
                </div>

                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full flex justify-center">
                    <article className="h-full">
                      <div className="h-full">
                        <Image
                          className="h-full rounded-3xl object-cover"
                          src={"/img/career2.jpg"}
                          alt=""
                          width={600}
                          height={400}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  </div>
                </div>
                
              </div>
            </section>
          </div>
          <hr />

          <div data-theme="teal" className="mx-auto py-12 px-6">
            <section className="font-sans relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full flex justify-center">
                    <article className="h-full">
                      <div className="h-full">
                        <Image
                          className="h-auto w-auto rounded-3xl object-cover"
                          src={"/img/career1.jpg"}
                          alt=""
                          width={600}
                          height={300}
                          
                        />
                      </div>
                    </article>
                  </div>
                </div>
                <div className="py-8 px-8 text-center">
                <div className="leading-relaxed">
                    
                   <h1 data-aos="fade-left" className="font-semibold text-3xl pb-4 text-white">Culture</h1>
                    <p  data-aos="fade-left" className="pb-16 text-gray-200 ">
                    "We thrive on collaboration, innovation, and inclusivity, fostering an environment where every voice is heard and valued."
                    </p>

                    <h1 data-aos="fade-left" className="font-semibold text-3xl pb-4 text-white">Career Development</h1>
                    <p data-aos="fade-left" className=" text-gray-200 pt-4">
                    "Offering tailored paths for growth through mentorship, training programs, and opportunities for advancement. we empower our team to grow professionally, fostering innovation and excellence in software solutions."
                    </p>

                  </div>
                </div>
              </div>
            </section>
          </div>
       
      </section>


      <section id="jobCard" className="h-full px-3 py-24 bg-white dark:bg-black">
        <div className="flex flex-col  px-6 ">
          <h2 className="font-bold text-2xl pb-2 text-black dark:text-white">
            See our areas of Work & Opportunities for you
          </h2>
          <div className="border-2  border-sky-600 mb-3 text"></div>
        </div>

        <div className=" h-full bg-white dark:bg-black">
          <div className="flex justify-evenly flex-wrap">
            {Jobs.map((it_profile, index) => (
              <div
              data-aos="flip-left"
              data-aos-offset="100"
                key={index}
                className="w-full max-w-sm bg-white dark:bg-[#180404] sm:mx-3 rounded-lg shadow-2xl mt-5 hover:shadow-xl"
              >
                <div className="flex flex-col justify-evenly h-full">
                  <div className="flex flex-col h-full items-center md:items-start px-6 py-4 hover:transform hover:scale-105 duration-300">
                    <div className="flex flex-col ">
                      <h2 className="font-bold text-xl text-black dark:text-white">
                        {it_profile.position}
                      </h2>
                      <div className="border-2 border-sky-600 mb-3 text"></div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-300 text-[15px] text-center md:text-start">
                      <p>{it_profile.jobDescription}</p>
                    </div>
                  </div>
                  <div className="flex flex-col h-auto max-w-full text-sm sm:text-base items-center md:items-start bg-white dark:bg-[#11162c] px-6 py-3 rounded-3xl">
                    <div className="hover:transform hover:scale-105 duration-300">
                    <p className="text-gray-600 dark:text-gray-300 max-w-full h-auto ">
                    <span className="text-black font-semibold">EmploymentType:</span>{it_profile.EmploymentType}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-full h-auto">
                    <span className="text-black font-semibold">Experience:</span>{it_profile.Experience}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-full h-auto">
                     <span className="text-black font-semibold">Education:</span>{it_profile.education}
                    </p>
                  <div className="max-w-full flex justify-center">
                    <button
                      className="bg-sky-600 px-6 py-2 mt-3 rounded font-semibold text-white hover:bg-sky-700 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                      onClick={showModal}
                    >
                      Apply
                    </button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <form className="max-w-lg mx-auto">
            <h1 className="text-center font-bold text-lg">Application</h1>
            <div className="grid grid-cols-1 gap-1">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full px-2 h-10 mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                  required
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full px-2 h-10 mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-2 h-10 mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                  required
                />
              </label>

              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  placeholder="Enter position"
                  value={formData.position}
                  onChange={handleChange}
                  className="block w-full px-2 h-10 mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                  required
                />
              </label>

              <label>
                Work Experience:
                <select
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="block w-full px-2 h-10 mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                >
                  <option value="">Please select</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </label>

              <label>
                CV:
                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  className="block w-full px-2 py-2 h-auto mt-1 text-black bg-slate-50 rounded-md border-gray-300 hover:transform hover:scale-105 duration-300"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-400 px-6 py-2 mt-3  rounded font-semibold text-white hover:bg-green-500 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </section>

     
    </main>
  );
};

export default it_profile;
