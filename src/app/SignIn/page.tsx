"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schema/signInSchema";

type Inputs={
  
  email:string
  password:string
  
}

const SignIn = () => {

  const { register, handleSubmit,formState:{errors,isSubmitting}, reset } = useForm<Inputs>({
    defaultValues:{
      email:"",
      password:"",
      
    },
    resolver:zodResolver(signInSchema)
  });

  const onSubmit :SubmitHandler<Inputs>= (data) => {
    console.log(data);
    reset(); 
  };


  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleInputes = (e: ChangeEvent<HTMLInputElement>) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const handleLoginUser = (e: any) => {
  //   e.preventDefault();
  //   console.log(user);
  //   setUser({
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // };

  return (
    <section className=" bg-white text-black pt-[70px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 min-h-[90vh]">
        <div className="relative flex items-end sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24  mb-2 lg:order-last">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover object-top rounded-l-lg"
              src="/img/MySignUp.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className=" inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <h1 className="text-5xl font-bold from-purple-600 via-red-600  to-white bg-gradient-to-r bg-clip-text text-transparent ">
              Welcome Back to Fusion
            </h1>
            <br />
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                aperiam!
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    100% Placement
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Live projects
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Mock interviews
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Doubt-clearing session
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-4 border-black rounded-r-lg mb-2 order-first lg:order-last pt-10">
          <div className="md:mx-20 md:mt-4 mx-10 mt-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign In
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?
              <Link
                href="/SignUp"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline hover:text-gray-500"
              >
                Sign Up
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="mt-8">
              <div className="space-y-10">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      // name="email"
                      // value={user.email}
                      // onChange={handleInputes}
                      disabled={isSubmitting}
                      {...register('email')}
                    />
                    {errors.email && (
                <div  className="text-red-500 text-xs">{errors.email.message}</div>
                  )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      //name="password"
                      // value={user.password}
                      // onChange={handleInputes}
                      disabled={isSubmitting}
                      {...register('password')}
                    />
                    {errors.password && (
              <div  className="text-red-500 text-xs">{errors.password.message}</div>
              )}
                  </div>
                </div>
                
                <div>
                  <button
                    // onClick={(e) => handleLoginUser(e)}
                    type="submit"
                    className=" relative inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-600 hover:to-blue-500"
                  >
                    Sign In
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-black transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-600 hover:to-blue-500 hover:text-white focus:text-black focus:outline-none"
              >
                <span className="mr-2 mt-[2px] inline-block">
                  <FcGoogle />
                </span>
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
