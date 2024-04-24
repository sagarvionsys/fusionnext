import React from "react";
import Image from "next/image";
import notion from "/public/svg/Notion.svg";
import Enquiry_home from "./Enquiry_home";
//svg around charlie image

//svg of collab brands

const Hero_Section = () => {
  interface Brands {
    id: number;
    logo: any;
    name: string;
  }

  const brands: Brands[] = [
    { id: 1, logo: notion, name: "Unsplash" },
    { id: 2, logo: notion, name: "Notion" },
    { id: 3, logo: notion, name: "INTERCOM" },
    { id: 4, logo: notion, name: "Descript" },
    { id: 5, logo: notion, name: "Grammarly" },
  ];

  return (
    <>
      <main>
        <section className="heading_text_and_img w-full bg-white flex flex-col md:flex-row px-4 md:px-2 xl:px-16 md:py-2">
          {/* the text and button area */}
          <div className="heading_text_ w-full md:w-1/2 flex justify-center md:p-8">
            <div>
              <h1 className="p-4 md:p-8 text-black text-4xl md:text-6xl font-bold ">
                Build awesome career with Fusion Institute.
              </h1>
              {/* <div className="md:w-full flex pl-6 w-[20rem]">
                <Image src={line} alt="enimate line" width={400} />
              </div> */}
              <p className="text-black font-bold text-sm md:py-8 p-4 md:p-8 md:px-10">
                We don't simply train, We shape careers!
              </p>
              <div className="buttons p-4 md:ml-5 flex space-x-4">
                <button className="bg-[#54BD95] rounded-xl p-2 text-white">
                  Book Demo
                </button>
                <button className="bg-[#54BD95] rounded-xl p-2 text-white">
                  Explore Programs
                </button>
                {/* <div className="flex space-x-1 items-center">
                  <Image src={play} alt="enimate line" width={20} />
                  <button className="text-[#54BD95]">View mode</button>
                </div> */}
              </div>
            </div>
          </div>

          {/* the image area */}
        </section>
        <section className="the Inqury form bg-slate-400">
          <Enquiry_home />
        </section>

        {/* pattaerns sectionn */}
        <section className="patterns_section">
          <div className="text-2xl flex justify-center font-bold p-3">
            <h1>More than 25,000 teams use Collabs</h1>
          </div>
          <div className="logos grid grid-cols-2 md:flex justify-center  space-x-5 p-5">
            {brands.map((brand) => {
              return (
                <span
                  key={brand.id}
                  className="flex justify-center items-center space-x-1 p-2 md:p-5"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={20}
                    color="#A6A6A6"
                  />
                  <h1 className="text-xl font-bold text-[#A6A6A6]">
                    {brand.name}
                  </h1>
                </span>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero_Section;
