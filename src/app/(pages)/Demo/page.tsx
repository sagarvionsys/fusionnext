"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";
import cources from "@/Data/cources";
import { message } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoSchema } from "@/schema/demoSchema";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  selectCourse: string;
};

const Demo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      selectCourse: "",
    },
    resolver: zodResolver(demoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    message.success("Successfully booked demo class!");
    reset();
  };

  return (
    <section>
      <div className="bg-white dark:bg-gray-950 px-4 py-4 md:px-20 md:py-20">
        <div className="relative flex felx-col-1 md:flex-col-2 items-center justify-center">
          <div
            className="flex-1 hidden lg:flex items-center justify-center w-1/2 dark:rounded-full dark:bg-gradient-to-b
      from-gray-900 to-gray-950"
          >
            <Image
              className="dark:rounded-full"
              src="/img/demo.png"
              alt="book demo"
              width={900}
              height={1000}
            ></Image>
          </div>
          <div className="flex-1 mt-10 sm:px-20 mb-10">
            <div className="text-center mb-10 mt-10">
              <h1 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-200">
                Book Demo Class
              </h1>
              <p>Enter your information</p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs md:text-sm font-semibold px-1">
                      Full Name
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-slate-100 dark:bg-slate-700 -ml-15 pl-10 pr-1
               py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter name" /*  value={name} onChange={(e) => setName(e.target.value)} */
                        disabled={isSubmitting}
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <div className="text-red-500 text-xs">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs md:text-sm font-semibold px-1">
                      Email Address
                    </label>
                    <div className="flex">
                      <input
                        type="email"
                        className="w-full bg-slate-100 dark:bg-slate-700 -ml-15 pl-10 pr-1 py-1 
              sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter email address" /* value={email} onChange={(e) => setEmail(e.target.value)} */
                        disabled={isSubmitting}
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <div className="text-red-500 text-xs">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs md:text-sm font-semibold px-1">
                      Mobile Number
                    </label>
                    <div className="flex">
                      <input
                        type="tel"
                        className="w-full bg-slate-100 dark:bg-slate-700 -ml-15 pl-10 pr-1 py-1 sm:pr-3 
              sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter mobile number"
                        id="phone" /* pattern="[0-9]{10}"  */ /* value={mobile} onChange={(e) => setMobile(e.target.value)} */
                        disabled={isSubmitting}
                        {...register("phone")}
                      />
                    </div>
                    {errors.phone && (
                      <div className="text-red-500 text-xs">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs md:text-sm font-semibold px-1">
                      Select Course
                    </label>
                    <div className="flex">
                      <select
                        typeof="selectCourse"
                        className="w-full bg-slate-100 dark:bg-slate-700 -ml-15 pl-10 pr-1 py-1 sm:pr-3 
                sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        id="selctCourse"
                        /* value={course} onChange={(e) => setCourse(e.target.value)} */

                        disabled={isSubmitting}
                        {...register("selectCourse")}
                      >
                        <option value="" disabled selected>
                          Select a course
                        </option>

                        {cources.map((feat) => {
                          return (
                            <option
                              key={feat.id}
                              value={
                                feat.course
                              } /* onChange={(e) => setCourse(e.target.value)}   */
                            >
                              {feat.course}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.selectCourse && (
                      <div className="text-red-500 text-xs">
                        {errors.selectCourse.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 
            sm:px-3 sm:py-3 font-semibold"
                    >
                      BOOK DEMO
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
