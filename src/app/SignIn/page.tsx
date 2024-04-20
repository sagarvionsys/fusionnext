"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const SignIn = () => {
    const [user, setUser] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleInputes = (e: ChangeEvent<HTMLInputElement>) => {
      let name = e.target.name;
      let value = e.target.value;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const handleCreateUser = (e: any) => {
      e.preventDefault();
      console.log(user);
    };
  
  return (
    <section>
      <div className="signupform grid p-5 grid-cols-1 lg:grid-cols-2 ">
        <div>
          <div className="ml-4 xl:ml-40">
            <h2 className="text-3xl font-bold leading-tight alice-blue sm:text-4xl">
              Sign In
            </h2>

            <p className="mt-2 text-base alice-blue">
              Don't have an account ?
              <Link
                href={"/SignUp"}
                title=""
                className="font-medium alice-blue transition-all duration-200 hover:underline text-alice-blue "
              >
                Sign up
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium alice-blue"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      id="email"
                      value={user.email}
                      onChange={handleInputes}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium alice-blue"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      id="password"
                      value={user.password}
                      onChange={handleInputes}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Confirm password"
                      className="text-base font-medium alice-blue"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="C1password"
                      name="confirmPassword"
                      placeholder="Confirm your Password"
                      id="C2password"
                      value={user.confirmPassword}
                      onChange={handleInputes}
                      
                    />
                  </div>
                </div>
                <div>
                  <button
                     onClick={(e) => handleCreateUser(e)}
                    type="submit"
                    className="inline-flex h-full w-full items-center justify-center rounded-md bg-white/90 px-3.5 py-2.5 font-semibold leading-7 text-black hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-500"
                  >
                    Sign In
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="ml-2 mt-1 "
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <div className="flex items-center ">
                    <div className="w-full border-t border-gray-300"></div>
                    <div className="px-4">or</div>
                    <div className="w-full border-t border-gray-310"></div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-full w-full items-center justify-center rounded-md bg-white/90 px-3.5 py-2.5 font-semibold leading-7 text-black hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-500 mb-4"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-[18px] w-[18px] mt-[1px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 533.5 544.3"
                      >
                        <path
                          fill="#4285F4"
                          d="M533.5 278.7c0-18.5-1.5-36.5-4.4-54.3H272v103h143c-6.1 33.6-26.6 62.1-55.2 80.9v67h88.7c51.9-48.1 82.1-119 82.1-196.6z"
                        />
                        <path
                          fill="#34A853"
                          d="M272 544.3c74.1 0 136.3-24.2 181.4-65.9l-88.7-67c-24.7 16.7-56.7 26.6-92.7 26.6-71 0-131.2-47.9-152.8-112.1H27.6v70.1c46.1 91.6 140.3 152.3 244.4 152.3z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M119.2 326c-11.4-33.8-11.4-70.2 0-104.1V151H27.6a271.4 271.4 0 0 0 0 242c35.6 33.6 81.9 54.1 133.7 54.1 38.5 0 73.5-12.6 101.5-34l-47.6-36z"
                        />
                        <path
                          fill="#EA4335"
                          d="M272 106.2c39.3-.6 76.2 13.7 104.1 36L427.7 82c-45.7-43.4-105.8-70-171.7-70-104.1 0-198.3 60.7-244.4 155v70.1c21.6-64.2 81.8-112.1 152.7-112.1z"
                        />
                      </svg>
                    </span>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="hero">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              <span className="text-3xl">
                <h1 className="text-6xl border-x-4 border-indigo-500 mb-4">
                  Welcome back
                </h1>
                <div className="leading-tight">
                 Empowering mind's , Transforming future's
                <br/>
                The Gateway to Success with Fusion Institute.
                <br />
                </div>
              </span>
              <br />
              {""}
              <Highlight className="text-black dark:text-white">
                <span className="text-4xl">
                  Fusion Software Training Institute.
                </span>
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
