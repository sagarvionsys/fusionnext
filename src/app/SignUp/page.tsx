"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schema/signUpSchema";

type Inputs={
  userName:string
  email:string
  password:string
  confirmPassword:string
}

const SignUp = () => {
  
  const { register, handleSubmit,formState:{errors,isSubmitting}, reset } = useForm<Inputs>({
    defaultValues:{
      userName:"",
      email:"",
      password:"",
      confirmPassword:"",
    },
    resolver:zodResolver(SignUpSchema)
  });

  const onSubmit :SubmitHandler<Inputs>= (data) => {
    console.log(data); // Form data will be logged when submitted
    reset(); // Reset form fields after submission
  };

  // const [user, setUser] = useState({
  //   userName: "",
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

  // const handleCreateUser = (e: any) => {
  //   e.preventDefault();
  //   console.log(user);
  //   setUser({
  //     userName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // };

  return (
    <section className=" bg-white text-black pt-[70px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2">
        <div className="order-first border-4 border-black rounded-l-lg mb-2">
          <div className="md:mx-20 md:mt-4 mx-10 mt-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/SignIn"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline hover:text-gray-500"
          >
                Sign In
              </Link>
            </p>

            <form 
            onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="mt-8">
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      // name="userName"
                      id="userName"
                      disabled={isSubmitting}
                      {...register('userName')}
                      // value={user.userName}
                      // onChange={handleInputes}
                    />
                    {errors.userName && (
<div  className="text-red-500 text-xs">{errors.userName.message}</div>
)}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      disabled={isSubmitting}
                      // name="email"
                      {...register('email')}
                      // value={user.email}
                      // onChange={handleInputes}
                    />
                    {errors.email && (
<div className="text-red-500 text-xs">{errors.email.message}</div>
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
                  <div className="mt-1">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      disabled={isSubmitting}
                      // name="password"
                      {...register('password')}
                      // value={user.password}
                      // onChange={handleInputes}
                    />
                    {errors.password && (
<div  className="text-red-500 text-xs">{errors.password.message}</div>
)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Password"
                      className="text-base font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Confirm Password"
                      id="confirmpassword"
                      disabled={isSubmitting}
                      //name="confirmPassword"
                      {...register('confirmPassword')}
                      // value={user.confirmPassword}
                      // onChange={handleInputes}
                    />
                    {errors.confirmPassword && (
<div  className="text-red-500 text-xs">{errors.confirmPassword.message}</div>
)}
                  </div>
                </div>
                <div>
                  <button
                    // onClick={(e) => handleCreateUser(e)}
                    type="submit"
                    className=" relative inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-600 hover:to-blue-500"
                  >
                    Create Account
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
                Sign up with Google
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-end sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 lg:order-last mb-2">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover object-top rounded-r-lg"
              src="/img/MySignUp.jpg"
              alt=""
              layout="fill"
            />
          </div>
          <div className=" inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <h1 className="text-5xl font-bold from-purple-600 via-red-600  to-white bg-gradient-to-r bg-clip-text text-transparent ">
              Welcome To Fusion
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
      </div>
    </section>
  );
};

export default SignUp;
