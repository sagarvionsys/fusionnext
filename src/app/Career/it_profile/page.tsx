"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Jobs } from "@/Data/It_Profiles";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import { Modal, message } from "antd";


const it_profile = () => {
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
    <main className="pt-[70px] bg-black">
      <section>
        <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-700 text-2xl md:text-6xl font-bold text-center">
              Work at{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-700">
                Fusion
              </span>
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Discover how you can make an impact: see our areas of work,
              locations and opportunities for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
              <Link
                href={"/ContactUs"}
                className="px-12 py-2 bg-blue-500 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              >
                Contact Us
              </Link>
            </div>
          </Vortex>
        </div>
      </section>

      <section className="h-[500px]">
        <div className="absolute z-20 flex justify-start w-11/12 h-[500px]">
          <div className="h-auto w-auto place-content-center">
            <div className="my-12 pl-12 h-auto w-auto">
              <p className="bg-teal-600 h-2 w-12 mb-4"></p>
              <h1 className="leading-tight md:text-5xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Welcome
                <p>to the future of work</p>
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute z-10 flex justify-end w-11/12 md:h-[500px]">
          <div className="h-auto  w-auto place-content-center ">
            <div className="md:mt-0 mt-20 h-auto w-auto">
              <Image
                src={"/img/tech.jpeg"}
                alt=""
                width={500}
                height={500}
                loading="lazy"
                className="object-cover md:h-[500px] h-[350px] md:w-[550px] w-[350px] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="h-[500px] blur-xl">
          <Image
            src={"/img/full-stack-dev.jpg"}
            alt=""
            width={1000}
            height={1000}
            loading="lazy"
            className="object-cover h-[500px] w-full"
          />
        </div>
      </section>

      <section className="h-full px-3 py-12 bg-orange-50">
        <div className="flex flex-col px-6 ">
          <h2 className="font-bold text-2xl pb-2 text-black">
            See our areas of Work & Opportunities for you
          </h2>
          <div className="border-2  border-blue-500 mb-3 text"></div>
        </div>

        <div className=" h-full bg-orange-50">
          <div className="flex justify-evenly flex-wrap">
            {Jobs.map((it_profile, index) => (
              <div
                key={index}
                className="border w-full max-w-sm bg-white mx-3 rounded-lg shadow-2xl mt-5 hover:shadow-xl hover:transform hover:scale-105 duration-300"
              >
                <div className="flex flex-col justify-evenly h-full">
                  <div className="flex flex-col h-full items-center md:items-start px-6 py-4">
                    <div className="flex flex-col ">
                      <h2 className="font-bold text-xl text-black">
                        {it_profile.position}
                      </h2>
                      <div className="border-2 border-blue-500 mb-3 text"></div>
                    </div>
                    <div className="text-gray-500 text-[15px] text-center md:text-start">
                      <p>{it_profile.jobDescription}</p>
                    </div>
                  </div>
                  <div className="flex flex-col h-auto w-auto items-center md:items-start bg-gray-100 px-6 py-3 rounded-lg">
                    <p className="text-gray-600 w-full h-auto ">
                      {it_profile.EmploymentType}
                    </p>
                    <p className="text-gray-600 w-full h-auto">
                      {it_profile.Experience}
                    </p>
                    <p className="text-gray-600 w-full h-auto">
                      {it_profile.education}
                    </p>
                    <p className="text-gray-600 w-full h-auto">
                      {it_profile.Location}
                    </p>
                    <button
                      className="bg-blue-600 px-6 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                      onClick={showModal}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal visible={isModalOpen} onCancel={handleCancel} footer={null}>
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

      <section>
        
        <div className="min-h-screen  flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-orange-50">
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <section className="font-sans text-black relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full ">
                    <article className="h-full">
                      <div className="h-full">
                        <Image
                          className="h-full object-cover"
                          src={"/img/Career.png"}
                          alt=""
                          width={733}
                          height={412}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  </div>
                </div>
                <div className="py-6 px-8 bg-grey">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-4xl font-bold">
                      Your career awaits.
                    </h2>
                    <p className="mt-4 ">
                      Republic is more than just a "tech job". We're making
                      real, lasting careers in the exciting world of technology,
                      helping people stay in touch in incredible new ways. Your
                      role is guaranteed to be fast-paced, but the experience
                      will last forever.
                    </p>
                    <p className="mt-4">Hiring awesome people daily.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default it_profile;
