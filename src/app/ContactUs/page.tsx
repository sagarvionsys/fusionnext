"use client"
import React, {useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const ContactUs = () => {
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    company: string;
    course: string;
    message: string;
  }

  const [user, setUser] = useState<User>({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    company:"" ,
    course:"",
    message:""
  });

  const handleInputs = (event: { target: { name: any; value: any; }; }) => {
    const newObj = {...user, [event.target.name]: event.target.value}
    setUser(newObj);
};

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(user);
    alert("Form Submitted Successfully");
  }

  return (
    <>
      <div className="bg-black  ">  {/* Complete */}
        <div className="inline-block px-[10%] my-[5%]">    {/* Heading */}
          <p className=" text-white uppercase font-bold	
          border-r-5 border-solid border-white w-1/2	whitespace-nowrap flex
          text-3xl md:text-7xl	
          	">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Get in touch_',
                1500,
                ""
              ]}
              repeat={Infinity}
            /></p>
        </div>
        <div className="px-[10%] w-[100%] pb-[10%]">
          <section className="size-4/5 w-full	 bg-white box-border rounded-3xl	px-[5%] py-[5%]">
            <section className="w-full justify-center	"	>
             {/* Body */}
                <form className="w-full grid	" action="" onSubmit={handleSubmit}>
                  <section>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black font-normal pb-1 mb-5	inline-block	absolute
                     cursor-default decoration-[#3d4045] required
                    ">FIRST NAME*</label>
                    <input className="w-full border-b  border-black	text-[15px] focus:outline-none " 
                    type="text" id="firstName" name="firstName"
                    value={user.firstName}
                    onChange={handleInputs}
                    />   
                  </div>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black pb-1 mb-5 font-normal	inline-block	absolute
                     cursor-default decoration-[#3d4045] required
                    ">LAST NAME*</label>
                    <input className="w-full border-b  border-black	text-[15px] focus:outline-none" 
                     type="text" id="lastName" name="lastName"
                     value={user.lastName}
                     onChange={handleInputs} 
                     />   
                  </div>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black pb-1 mb-5 font-normal	inline-block	absolute
                     cursor-default decoration-[#3d4045] required
                    ">EMAIL*</label>
                    <input className="w-full border-b  border-black	text-[15px] focus:outline-none" 
                      type="email" id="email" name="email"
                      value={user.email}
                      onChange={handleInputs} 
                       />   
                  </div>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black pb-1 mb-5 font-normal	inline-block	absolute
                     cursor-default decoration-[#3d4045] 
                    ">PHONE NUMBER</label>
                    <input className="w-full border-b  border-black	text-[15px] focus:outline-none" 
                      type="text" id="phoneNumber" name="phoneNumber"
                      value={user.phoneNumber}
                      onChange={handleInputs} 
                     />   
                  </div>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black pb-1 mb-5 font-normal	inline-block	absolute
                     cursor-default decoration-[#3d4045] 
                    ">COMPANY</label>
                    <input className="w-full border-b  border-black	text-[15px] focus:outline-none"
                    type="text" id="company" name="company"
                    value={user.company}
                    onChange={handleInputs}  
                     />   
                  </div>
                  </section>
                  
                  {/* partision */}
                  <section>
                  <div className="w-full min-h-[56px] items-end mb-[24px] pb-[1%] flex relative	">
                    <label className="text-black pb-1 mb-5 text-xs		inline-block	absolute
                     cursor-default decoration-[#3d4045] required
                    ">I AM INTERESTED IN:*</label>
                    <div className="w-full border-b  border-black	text-[15px] ">
                    <select className="w-[100%]  	text-[15px] focus:outline-none" 
                    id="course" name="course"
                    value={user.course}
                    onChange={handleInputs}
                    >
                    <option className=" font-normal" 
                    value="" >
                    Select 
                    </option>

                    <option className=" font-normal" 
                    value="Advance Software Testing (Manual+ Automation)" >
                    Advance Software Testing (Manual+ Automation)
                    </option>
                    <option className=" font-normal" value="Java Full Stack Development">
                    Java Full Stack Development
                    </option>
                    <option className=" font-normal" value="Python Development">
                    Python Development
                    </option>
                    <option className=" font-normal" value=".Net Full Stack Development">
                    .Net Full Stack Development
                    </option> 
                    <option className=" font-normal" value="RPA Development">
                    RPA Development
                    </option>
                    <option className=" font-normal" value="AWS/DevOps">
                    AWS/DevOps
                    </option>
                    <option className=" font-normal" value="Power BI">
                    Power BI
                    </option>
                    <option className=" font-normal" value="Salesforce">
                    Salesforce
                    </option>
                    <option className=" font-normal" value="SAP Material Management">
                    SAP Material Management
                    </option>
                    <option className=" font-normal" value="Data Science">
                    Data Science
                    </option>
                    <option className=" font-normal" value="SAP Fieldglass">
                    SAP Fieldglass
                    </option>
                    <option className=" font-normal" value="SAP FICO">
                    SAP FICO
                    </option>
                    <option className=" font-normal" value="Full Stack web development">
                    Full Stack web development
                    </option>
                    <option className=" font-normal" value="DevOps">
                    DevOps
                    </option>
                    <option className=" font-normal" value="Big Data Hadoop">
                    Big Data Hadoop
                    </option>
                    <option className=" font-normal" value="Sap SD">
                    Sap SD
                    </option>
                    <option className=" font-normal" value="Microsoft Azure">
                    Microsoft Azure
                    </option>
                    <option className=" font-normal" value="React JS">
                    React JS
                    </option>
                    <option className=" font-normal" value="Angular JS">
                    Angular JS
                    </option>
                    <option className=" font-normal" value="Oracle SQL &amp; PLSQL">
                    Oracle SQL &amp; PLSQL
                    </option>
                    <option className=" font-normal" value="Data Analyst">
                    Data Analyst
                    </option>
                    <option className=" font-normal" value="Fullstack Data Analyst">
                    Fullstack Data Analyst
                    </option>

                    </select>
                    </div>
                  </div>
                  <div>
                  <label className="	 text-black font-normal	inline-block	
                     cursor-default decoration-[#3d4045] 
                    ">MESSAGE</label>
                    {/* <div className="h-[5%] border-b  border-black	text-[15px] "> */}
                    <textarea className="w-full h-44 border 	border-[#3d4045]  text-[15px] 
                    px-[12px] py-[8px] "   
                    id="message" name="message"
                    value={user.message}
                    onChange={handleInputs}                 
                    >
                    </textarea>                    
                  </div>
                  <div>
                    <button className="bg-[#ED9B82] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border border-dark-salmon bg-dark-salmon text-black ml-auto
                
                text-center uppercase cursor-pointer rounded-full justify-center items-center px-5 py-3 font-Mabry text-lg font-bold hover:text-[#ED9B82] hover:bg-black transition-all duration-500 flex
                " type="submit" 


                >SUBMIT</button>
                  </div>
                  </section>
                </form>   
             </section>
         
              {/* second half */}

            <section className="w-full		">

            <div className="left ">
                {/* Where to find us */}
                <div className=" font-Mabry text-3xl leading-snug  font-bold mt-2 text-4xl	 leading-6">
                  <h4 className="text-[#3D4045]">Where to find us </h4>
                </div>
                {/* Map */}
                <div className="w-full	" >
                <iframe className="h-60 md:h-80		w-full py-[1%] my-[1%]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.266279781637!2d73.94106!3d18.550014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe631fc9f7f%3A0x40bae74e7709affa!2sFusion%20Software%20Institute%20Pune!5e0!3m2!1sen!2sin!4v1713520066611!5m2!1sen!2sin"  loading="lazy">
                </iframe> 

                </div>
                 {/* two  */}
                <div className="text-black flex flex flex-col md:flex-row md:space-x-8  justify-start my-[3%] ">
                  {/* 1st */}
                      <div className="items-start flex  mr-20 md:mr-2">
                        <div className="items-start flex mt-1 mr-2">
                        < FaLocationDot style={{fontSize: '1.25rem'}}/>
                        </div>       
                        <div className="	">
                          <h4 className="text-[#3D4045]  font-Mabry text-xl leading-snug font-bold text-xl leading-6">Address
                          </h4>
                          <p className="text-[#3D4045]">
                          Office 101, 01st Floor, Stellar Spaces,<br />
                          Kharadi South Main Road, opp. Zensar, IT Park,<br />
                          Kharadi, Pune, Maharashtra 411014
                          </p>  
                        </div>
                    </div>
                  {/* 2nd  */}
                    <div className="items-start flex mr-2">
                      <div className="items-start flex mt-1  mr-2">
                       <FaMobileAlt style={{fontSize: '1.25rem'}}/>
                      </div>
                      <div className="">
                        <h4 className="text-[#3D4045] mb-1 font-Mabry text-xl leading-snug font-bold text-xl leading-6">Contact Number
                        </h4>
                        <p className="text-[#3D4045]">
                        7498992609 <br/>
                        7741817273 <br/>
                        7719987273 <br />
                        </p>
                      </div>
                  </div>
                </div>
                 {/* email */}
                  <div className="items-start flex font-Mabry text-xl  font-bold text-xl leading-6">
                      <div className="mr-2">
                      <AiFillMail style={{fontSize: '1.25rem'}}/>
                      </div>
                       <a href="inquiry@fusion-institute.com" 
                      className="text-[#333333] hover:underline ">inquiry@fusion-institute.com
                      </a>
                  </div>

              </div>
            </section>

          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
