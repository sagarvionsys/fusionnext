import React from "react";
import { TfiLocationArrow} from "react-icons/tfi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookF ,FaWhatsapp , FaInstagram ,FaLinkedinIn } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { CiMobile3 } from "react-icons/ci";
import { navLink } from "@/Data/navLinks";
import Link from "next/link";
import { RiFontSize } from "react-icons/ri";

const Footer = () => {
  return <><div className="bg-zinc-400 flex relative z-10 lg:ml-[200px] ml-0 md:h-[45px] sm:h-[25px] h-[45px] lg:w-[825px] mt-[-45px]"> </div> 

  <footer className="bg-black text-white relative sm:pt-10 md:pt-16 pt-[8px] w-[100%] z-30">

      <div className="bg-indigo-400 flex absolute lg:mx-[220px] items-center md:h-[80px] h-[40px] lg:w-[825px] justify-between w-full md:w-fit md:mt-[-90px] sm:mt-[-60px] mt-[-45px] z-50">
       <p className=" md:p-6 mt-[12px] pl-8 md:text-[18px] text-[12px] lg:w-[400px] text-white mb-4">We are here to upgrade you...</p>
       <button className="mr-8 bg-lime-800 hover:bg-lime-950 text-white md:text-[15px] text-[10px] md:h-12 h-8 md:ml-[400px] ml-0 md:w-[155px] w-[80px]">
        <Link href={"/ContactUs"}>Contact Us</Link>
       </button>
      </div>
  
    <main className="flex  flex-wrap justify-between lg:px-20 md:px-12 px-0 md:pt-8 py:0 mx-6">

      <section className="px-2 py-2 flex  float-left md:flex-row flex-col" >
        <a href=""><div className=" flex gap-2 sm:h-28 md:h-40 h-8 w-auto ">
          <div className="flex pt-2 md:pt-4"><TfiLocationArrow style={{ fontSize: '1.5rem' }} color="white"/></div>
          <div className="pl-2 md:w-40 sm:w-20 w-auto md:text-[15px] text-[10px] text-slate-400 ">Office 101, 01st Floor, Stellar Spaces, Kharadi South Main Road, opp. Zensar, IT Park, Kharadi, Pune, Maharashtra 411014</div>
        </div><br /></a>
      </section>

      <section className="px-2 py-2 flex float-left md:flex-row flex-col " >
        <a href=""><div className=" flex gap-2  sm:h-28 md:h-32 h-8  w-auto">
          <div className="flex pt-2 md:pt-4"><MdOutlineAttachEmail style={{ fontSize: '1.5rem' }} color="white"/></div>
          <div className="pl-2 md:w-32 sm:w-16 w-auto md:text-[15px] text-[10px] text-slate-400">inquiry@fusion-institute.com</div>
        </div><br /></a>
      </section>

      <section className="px-2 py-2 flex float-left md:flex-row flex-col" >
        <div className=" flex gap-2 sm:h-28 md:h-32 h-8  w-auto">
          <div className="flex pt-1 md:pt-4"><CiMobile3 style={{ fontSize: '1.5rem' }} color="white" /></div>
          <div className=" md:w-24 w-14 md:text-[15px] text-[10px] text-slate-400">7498992609, 7741817273, 7719987273</div>
        </div><br />
      </section>

      <section className="flex px-2 py-2 sm:justify-center sm:w-auto justify-center w-full">
        <div className="flex md:flex-col sm:flex-col flex-row md:w-24  sm:ml-8  sm:h-28 md:h-32 h-auto w-auto">
        {navLink.map((link) => {
            return (
              <Link
                key={link.id}
                className="text-slate-400 hover:text-sky-400 pl-2 pt-0 md:text-[15px] text-[10px]"
                href={link.url}
              >
               {link.label}
              </Link>
            );
         })}
        </div><br />
      </section>

      <section className="h-auto md:w-auto w-full px-2 py-2 flex  gap-4 float-left md:flex-row flex-col" >
        <div className="flex md:gap-4 sm:gap-4 gap-2 md:h-20 md:w-auto sm:h-auto sm:justify-center justify-center">

          <div className="rounded-full bg-indigo-500 hover:bg-indigo-700 md:h-10 h-8 md:w-10 w-8 place-content-center md:px-2 px-1 md:py-2 py-1"><a href={"https://www.facebook.com/people/Fusion-Software-Institute/100088395132564/?mibextid=ZbWKwL"}><FaFacebookF style={{ fontSize: '1.5rem' }} color="white" /></a> </div>
          <div className="rounded-full bg-indigo-500 hover:bg-indigo-700 md:h-10 h-8 md:w-10 w-8 place-content-center md:px-2 px-1 md:py-2 py-1"><a href={"https://api.whatsapp.com/send/?phone=7498992609&text=I+am+intersted+in+course+you+provide"}><FaWhatsapp style={{ fontSize: '1.5rem' }} color="white"/></a></div>
          <div className="rounded-full bg-indigo-500 hover:bg-indigo-700 md:h-10 h-8 md:w-10 w-8 place-content-center md:px-2 px-1 md:py-2 py-1"><a href={"https://www.instagram.com/fusion_institute_pune/"}><FaInstagram style={{ fontSize: '1.5rem' }} color="white"/></a></div>
          <div className="rounded-full bg-indigo-500 hover:bg-indigo-700 md:h-10 h-8 md:w-10 w-8 place-content-center md:px-2 px-1 md:py-2 py-1"><a href={"https://www.linkedin.com/company/fusion-software-institute-kharadi/?originalSubdomain=in"}><FaLinkedinIn style={{ fontSize: '1.5rem' }} color= 'white'/></a></div>

        </div>
      </section>

    </main>
       <div className="bg-slate-900 text-white md:text-[15px] text-[10px] md:h-[50px] h-auto flex justify-center md:pt-[15px]"><h3>2022 © All Rights Reserved | Designed and Developed by Fusion</h3></div>
  </footer></>;
};

export default Footer;
