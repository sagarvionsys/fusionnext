"use client"
import React, { useState } from "react";
import Image from "next/image";
import cources from "@/Data/cources";
import { message } from "antd";

const Demo = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[mobile,setMobile]=useState('');
  const[course,setCourse]=useState('');

  const logInputValue = () => {
    const data={name,email,mobile,course}
    console.log(data);
    message.success("Successfully booked demo class!");
    setName("");
    setEmail("");
    setMobile("");
    setCourse("");
  };

  return (
  <>
  <div className="bg-white px-4 py-4 md:px-20 md:py-20">
  <div className="relative flex felx-col-1 md:flex-col-2 items-center justify-center">
    <div className="flex-1 hidden lg:flex items-center justify-center w-1/2">
      <Image src="/img/demo.png" alt="book demo" width={900} height={1000}></Image>
    </div>
    <div className="flex-1 mt-10 sm:px-20 mb-10">
      <div className="text-center mb-10 mt-10">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-900">Book Demo Class</h1>
        <p>Enter your information</p>
      </div>
      <div >
        <form action="" method="post">
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Full Name</label>
            <div className="flex">
              <input type="text" id="Name" className="w-full bg-slate-100 -ml-15 pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Email Address</label>
            <div className="flex">
              <input type="email" className="w-full bg-slate-100 -ml-15 pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Mobile Number</label>
            <div className="flex">
              <input type="number" className="w-full bg-slate-100 -ml-15 pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter mobile number" pattern="[0-9]{10}" value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Select Course</label>
            <div className="flex">
                <select className="w-full bg-slate-100 -ml-15 pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" value={course} onChange={(e) => setCourse(e.target.value)}>
                  {cources.map((feat)=>{
                    return(
                      <option key={feat.id} value={feat.course}>{feat.course}</option>
                    );
                  }
                  )}
                </select>            
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 sm:px-3 sm:py-3 font-semibold" onClick={logInputValue}>BOOK DEMO</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  </>
  );
};

export default Demo;
