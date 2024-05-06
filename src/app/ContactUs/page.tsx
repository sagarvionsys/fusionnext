"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <>
      <div className="flex justify-center items-center py-16 bg-white dark:bg-black">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto dark:bg-gray-900 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit}>
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-black dark:text-slate-100">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-slate-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
                placeholder="First Name*"
              />
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
                placeholder="Last Name*"
              />
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Email*"
              />
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Phone*"
              />
            </div>
            <div className="my-4 hover:transform hover:scale-105 duration-300">
              <textarea
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="hover:transform hover:scale-105 duration-300 uppercase text-sm font-bold tracking-wide bg-blue-800 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
            </form>
          </div>

          <div className=" subcard bg-blue-900 w-full lg:-mt-96 lg:w-2/6 px-8 py-14 ml-auto rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400 dark:text-gray-300 w-full">
                    Office 101, 01st Floor, Stellar Spaces, Kharadi South Main
                    Road, opp. Zensar, IT Park, Kharadi, Pune, Maharashtra
                    411014
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400 dark:text-gray-300">Mob: 7498992609</p>
                  <p className="text-gray-400 dark:text-gray-300">Tel: 7741817273</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
