
"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { message } from "antd";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema} from "@/schema/contactUsSchema";

type Inputs = {
  firstName: string;
  lastName:string;
  email: string;
  phone: string;
  message: string;
};


const ContactUs = () => {
  const{
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
    reset,
  }=useForm<Inputs>({
    defaultValues:{
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      message:""
    },
    resolver:zodResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    message.success("Message Sent Successfully");
    reset();
  };

  
  return (

    <section>
      <div className="flex justify-center items-center py-16 bg-white dark:bg-black">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto dark:bg-gray-900 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-black dark:text-slate-100">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <div>
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-slate-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                id="firstName" 
                
                disabled={isSubmitting}
                        {...register("firstName")}
              
                placeholder="First Name*"
              />
              {errors.firstName && (
                      <div className="text-red-500 text-xs">
                        {errors.firstName.message}
                      </div>
                    )}
              </div>
              <div>
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                id="lastName" 
              
                disabled={isSubmitting}
                {...register("lastName")}
              
                placeholder="Last Name*"
              />
              {errors.lastName && (
                      <div className="text-red-500 text-xs">
                        {errors.lastName.message}
                      </div>
                    )}
              </div>
              <div>
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" 
                id="email" 
              
                disabled={isSubmitting}
                        {...register("email")}
            
                placeholder="Email*"
              />
              {errors.email && (
                      <div className="text-red-500 text-xs">
                        {errors.email.message}
                      </div>
                    )}
              </div>
              <div>
              <input
                className="hover:transform hover:scale-105 duration-300 w-full bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel" 
                id="phone" 
                
                disabled={isSubmitting}
                        {...register("phone")}
            
                placeholder="Phone*"
              />
              {errors.phone && (
                      <div className="text-red-500 text-xs">
                        {errors.phone.message}
                      </div>
                    )}
            </div>
            
            </div>
            
            <div className="my-4 hover:transform hover:scale-105 duration-300">
              <textarea
                id="message" 
                
                disabled={isSubmitting}
                        {...register("message")}
           
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              >
               
              </textarea>
              {errors.message && (
                      <div className="text-red-500 text-xs">
                        {errors.message.message}
                      </div>
                    )}
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
    </section>
  );
};

export default ContactUs;

