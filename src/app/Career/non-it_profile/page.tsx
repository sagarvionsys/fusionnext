"use client"
import Image from "next/image";
import nonIt from "@/Data/non-it";
import { RiTeamFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";
import Apply from "@/components/Apply";

const page = () => {

    return (
        <div>
            <div className="h-2"></div>
            <div className=" md:hover:scale-105 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image className="w-full shadow-yellow-500 shadow-lg sm:rounded-bl-full mt-8 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-fit" width={1000} height={1000} src="/img/backImage2.jpeg" alt="background image"></Image>
                <div className="absolute inset-0 shadow-yellow-500 shadow-lg sm:rounded-bl-full mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900 opacity-10"></div>
                <div className="absolute inset-0  mx-auto mt-20 md:mt-10 cursor-pointer h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col md:p-10 justify-center pr-2 md:pr-20">
                    <h1 className="flex items-center justify-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">We're looking for</h1>
                    <h1 className="flex items-center justify-center font-bold text-xl md:text-2xl lg:text-4xl text-orange-500 opacity-90">talented individuals</h1>
                    <p className="flex items-center justify-center text-sm text-white ">who share our passion to be the</p>
                    <p className="flex items-center justify-center text-sm text-gray-200 ">best and achieve their full potential.</p>
                    <p className="flex items-center justify-center text-sm md:text-xl text-gray-200 font-semibold">because when our associate</p>
                    <p className="flex items-center justify-center text-sm md:text-xl text-gray-200 font-semibold">succeed we all do.</p>
                </div>
            </div>
            <div className="flex flex-col pb-6 px-5 mt-3 sm:px-10 md:px-0 w-full rounded-lg bg-gray-300 dark:bg-gray-950 items-center justify-center border-b-2 border-gray">
                <h2 className="text-2xl sm:text-3xl underline underline-offset-4 cursor-pointer bg-gradient-to-b from-yellow-700 to-gray-900 bg-clip-text font-bold md:mt-5 p-10 pb-20">Why work with us?</h2>
                <div className="flex  flex-wrap gap-10 items-center justify-center w-full scroll:scale-105">
                    <div className="flex  flex-col items-center justify-center rounded-full bg-gradient-to-bl from-orange-600 to-yellow-600 p-2 md:p-6 w-full md:w-1/4 border-2 border-white cursor-pointer hover:scale-105 transition duration-500">
                        <div className="bg-green-500 p-3 sm:p-4 rounded-full text-2xl sm:text-3xl -translate-y-8 md:-translate-y-14"><RiTeamFill/></div>
                        <div className="text-l sm:text-xl font-bold -mt-8">Dynamic Work</div>
                        <div className="text-l sm:text-xl font-bold"> Environment</div>
                    </div>
                    <div className="flex  flex-col items-center justify-center rounded-full bg-gradient-to-bl from-orange-600 to-yellow-600 p-2 md:p-6 w-full md:w-1/4 border-2 border-white cursor-pointer hover:scale-105 transition duration-500">
                        <div className="bg-green-500 p-3 sm:p-4 rounded-full text-2xl sm:text-3xl -translate-y-8 md:-translate-y-14"><GiGrowth/></div>
                        <div className="text-l sm:text-xl font-bold -mt-8">Opportunities </div>
                        <div className="text-l sm:text-xl font-bold"> for Growth</div>
                    </div>
                    <div className="flex  flex-col items-center justify-center rounded-full bg-gradient-to-bl from-orange-600 to-yellow-600 p-2 md:p-6 w-full md:w-1/4 border-2 border-white cursor-pointer hover:scale-105 transition duration-500">
                        <div className="bg-green-500 p-3 sm:p-4 rounded-full text-2xl sm:text-3xl -translate-y-8 md:-translate-y-14"><RiMedalFill/></div>
                        <div className="text-l sm:text-xl font-bold -mt-8">Impactful </div>
                        <div className="text-l sm:text-xl font-bold"> Work</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap p-1 sm:p-4 md:p-6 lg:p-10 xl:py-10 items-center justify-center">
                {nonIt.map((feat)=>
                {return(
                    <div key={feat.id} className="flex p-3 md:p-6 w-full md:h-[27rem] h-auto md:w-1/2 xl:w-1/3">
                        <div className="flex relative items-center justify-center w-full h-full cursor-pointer dark:text-white">
                            <span className="absolute top-0 left-0 w-full h-full rounded-md mt-1 ml-1 bg-yellow-400"></span>
                            <div className="relative flex items-center justify-center overflow-hidden h-full rounded-md pl-4 p-3 md:p-6 bg-white dark:bg-gray-600 border-2 border-orange-400 hover:scale-105 transition duration-500">
                                <div>
                                <h2 className="text-xl w-full h-auto md:text-2xl font-bold">{feat?.role}</h2>
                                <p className="text-sm md:text-md w-full h-auto text-gray-900 dark:text-gray-200 py-4 leading-relaxed"><span className="font-bold">Role and Responsibilities : </span>{feat?.jobDescription}</p>
                                <p className="text-sm w-full h-auto"><span className="font-semibold">Job type: </span>{feat?.job}</p>
                                <p className="text-sm w-full h-auto"><span className="font-semibold">Experience: </span>{feat?.experience}</p>
                                <div className="flex items-center w-full h-auto my-2 justify-center">
                                    <Apply/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                );}
                )}
            </div>

            <div className="flex flex-wrap p-8 sm:p-16 md:p-24 justify-center bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-6xl">
                    <section className="font-sans text-black">
                    <div className="lg:flex lg:items-center">
                        <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                        <div className="h-full">
                            <article className="h-full">
                            <div className="h-full">
                                <Image className="h-full object-cover rounded-br-full cursor-pointer shadow-lg shadow-yellow-500" src="/img/backImage.jpg" width={733} height={412} alt="image" ></Image>
                            </div>
                            </article>
                        </div>
                        </div>
                        <div className="text-lg cursor-pointer md:text-2xl dark:text-gray-200 mt-10 lg:mt-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsum dolor. Rem, expedita iure aspernatur earum facere quae non vero sint quod voluptas totam soluta minus corporis repellendus modi maiores?</div>
                    </div>
                    </section>
                </div>
            </div>

        </div>
    );
  };
  
  export default page;
  