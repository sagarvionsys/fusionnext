"use client"
import React, {useState} from "react";
import { TfiLocationArrow} from "react-icons/tfi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookF ,FaWhatsapp , FaInstagram ,FaLinkedinIn } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { footerSchema } from "@/schema/footerSchema";


type Inputs={
  name:string
  email:string
  subject:string
  messag:string
}


const Footer = () => {

  const { register, handleSubmit,formState:{errors,isSubmitting}, reset } = useForm<Inputs>({
    defaultValues:{
      email:"",
      subject:"",
      messag:"",
    },
    resolver:zodResolver(footerSchema)
  });

  const onSubmit :SubmitHandler<Inputs>= (data) => {
    console.log(data);
    reset(); 
  };



  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleInputChange = (e:any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
    // Here you can add your logic to send the form data to your backend or API
    // For now, we'll just log the form data to the console
  //};


     
  return <footer className="bg-black text-white w-[100%]">

    <main className="flex flex-wrap sm:text-[17px] text-[15px] justify-between pt-6 mx-6 ">

      <section className="px-2 py-2 flex  sm:flex-col flex-col" >

        <div className=" flex gap-2 flex-col sm:h-auto  w-auto ">
          <h1 className="sm:text-[22px] text-[18px] px-2">About Us</h1>
          <div className="pl-2 sm:w-52 w-auto text-slate-400 ">At Fusion Software Institute, we offer dynamic courses blending theory and hands-on training to prepare you for a successful career in IT. With expert instructors and state-of-the-art facilities, we equip you with the skills needed to thrive in IT industry</div>
        </div>
        
      </section>

      <section className="px-2 py-2 flex float-left md:flex-row flex-col " >

        <div className=" flex gap-2 flex-col sm:h-auto w-auto ">
          <h1 className="sm:text-[22px] text-[18px] px-2">Our Courses</h1>
          <div className="flex sm:flex-col sm:text-[17px] text-[15px] flex-col  h-auto w-auto">

            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0 ">Java fullstack Development</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Salesforce(Admin + Development)</Link>
            <Link href={"" } className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Data Science</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Data Analytices</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Power BI</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0 ">AWS with DevOps</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Microsoft Azure</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">React Js</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Software Testing</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">SAP MM / FICO</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Robotic Process Automation</Link>
            <Link href={""} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">.Net Development</Link>

          </div>
        </div>
      </section>


      <section className="px-2 py-2 flex md:flex-col flex-col">

      <div className=" flex gap-2 flex-col sm:h-auto w-auto ">
        <h1 className="sm:text-[22px] text-[18px] px-2">Quick Links</h1>
        <div className="flex flex-col sm:text-[17px] text-[15px] h-auto w-auto">

         <Link href={"/AboutUs"} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">About Us</Link>
         <Link href={"/Courses" } className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Courses</Link>
         <Link href={"/Batches"} className="text-slate-400 hover:text-sky-400 pl-2 pt-0 ">Batches</Link>
         <Link href={"/"} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">FAQs</Link>
         <Link href={"/"} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Testimonials</Link>
         <Link href={"/ContactUs"} className="text-slate-400 hover:text-sky-400 pl-2 pt-0">Contact Us</Link>
        
        </div>
        </div>
      </section>

      
      <section className="px-2 py-2 flex sm:flex-col flex-col" >

        <h1 className="sm:text-[22px] text-[18px] sm:px-4 px-2 pb-2">Contact Details</h1>
        <div className=" flex gap-2 sm:h-auto h-auto w-auto ">
          <div className="flex pt-2 md:pt-4"><TfiLocationArrow style={{ fontSize: '1.5rem' }} color="white"/></div>
          <div className="pl-2 sm:w-52 w-auto text-slate-400 ">Office 101, 01st Floor, Stellar Spaces, Kharadi South Main Road, opp. Zensar, IT Park, Kharadi, Pune, Maharashtra 411014</div>
        </div><br />

        <div className=" flex gap-2  sm:h-auto h-8  w-auto">
          <div className="flex pt-2"><MdOutlineAttachEmail style={{ fontSize: '1.5rem' }} color="white"/></div>
          <div className="pl-2 sm:w-52 w-auto text-slate-400">inquiry@fusion-institute.com</div>
        </div><br />

        <div className=" flex gap-2 sm:h-auto h-8  w-auto">
          <div className="flex pt-1"><CiMobile3 style={{ fontSize: '1.5rem' }} color="white" /></div>
          <div className=" sm::w-24 text-slate-400">7498992609, 7741817273</div>
        </div><br />

        <div className="flex sm:gap-4 gap-2 justify-center ">

          <div className="rounded-full bg-white hover:bg-zinc-200 h-8 w-8 place-content-center px-1  py-1"><a href={"https://www.facebook.com/people/Fusion-Software-Institute/100088395132564/?mibextid=ZbWKwL"}><FaFacebookF style={{ fontSize: '1.5rem' }} color="blue" /></a> </div>
          <div className="rounded-full bg-white hover:bg-zinc-200 h-8 w-8 place-content-center px-1  py-1"><a href={"https://api.whatsapp.com/send/?phone=7498992609&text=I+am+intersted+in+course+you+provide"}><FaWhatsapp style={{ fontSize: '1.5rem' }} color="#25D366"/></a></div>
          <div className="rounded-full bg-white hover:bg-zinc-200 h-8 w-8 place-content-center px-1  py-1"><a href={"https://www.instagram.com/fusion_institute_pune/"}><FaInstagram style={{ fontSize: '1.5rem' }} color="#e1306c"/></a></div>
          <div className="rounded-full bg-white hover:bg-zinc-200 h-8 w-8 place-content-center px-1  py-1"><a href={"https://www.linkedin.com/company/fusion-software-institute-kharadi/?originalSubdomain=in"}><FaLinkedinIn style={{ fontSize: '1.5rem' }} color= '#0077B5'/></a></div>
          <div className="rounded-full bg-white hover:bg-zinc-200 h-8 w-8 place-content-center px-1  py-1"><a href={"https://www.linkedin.com/company/fusion-software-institute-kharadi/?originalSubdomain=in"}><FaYoutube style={{ fontSize: '1.5rem' }} color= '#FF0000'/></a></div>

        </div>
       </section>

      <section className="flex sm:w-60 w-full px-2 py-2" >

       <div className="sm:w-52 w-full">
        <h2 className="sm:text-[22px] text-[18px] pb-2">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)}  noValidate>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              // name="name"
              // value={formData.name}
              // onChange={handleInputChange}
              disabled={isSubmitting}
                      {...register('name')}
              placeholder="Your Name"
              required
              className="border rounded text-black px-1 w-full"
            />
            {errors.name && (
                <div  className="text-red-500 text-xs">{errors.name.message}</div>
                )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              // name="email"
              // value={formData.email}
              // onChange={handleInputChange}
              
              disabled={isSubmitting}
                      {...register('email')}
              placeholder="Your Email"
              required
              className="border rounded text-black px-1 w-full"
            />
            {errors.email && (
                <div  className="text-red-500 text-xs">{errors.email.message}</div>
                )}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              // name="subject"
              // value={formData.subject}
              // onChange={handleInputChange}
              disabled={isSubmitting}
                      {...register('subject')}
              placeholder="Subject"
              required
              className="border rounded text-black px-1 w-full"
            />
            
           {errors.subject && (
<div  className="text-red-500 text-xs">{errors.subject.message}</div>
)}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              // name="message"
              // value={formData.message}
              // onChange={handleInputChange}
              disabled={isSubmitting}
                      {...register('messag')}
              placeholder="Message"
              required
              rows={2}
              className="border rounded text-black px-1 w-full"
            >
            </textarea>
            
            {errors.messag && (
          <div  className="text-red-500 text-xs">{errors.messag.message}</div>
)}

          </div>

          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 rounded w-full"
          >Send</button>

        </form>
      </div>
      </section>
    </main>
      <div className="md:text-[18px] text-[15px] sm:pl-10 pl-8"><h3>Privacy Policy | Terms of Service</h3></div>
      <div className="bg-slate-900 text-white md:text-[15px] text-[10px] md:h-[50px] h-auto flex justify-center md:pt-[15px]"><h3>2024 © All Rights Reserved | Designed and Developed by Fusion</h3></div>
  </footer>

};

export default Footer;
