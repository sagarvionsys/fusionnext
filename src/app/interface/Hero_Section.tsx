import React from "react";
import Image from "next/image";
import notion from "/public/svg/Notion.svg";

import Images_logo from "@/Data/Images_logo";

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

        <section className="patterns_section">
          <div className="text-2xl flex justify-center font-bold p-3">
            <h1 className="text-red-500 py-3">More than 25,000 teams use Collabs</h1>
          </div>
          {/* <div className="logos grid grid-cols-2 md:flex justify-center space-x-5 p-5">
  {brands.map((brand) => {
    return (
      <span
        key={brand.id}
        className="flex justify-center items-center space-x-1 p-2 md:p-5 overflow-hidden"
        style={{ whiteSpace: 'nowrap' }}
      >
        <Image
          src={brand.logo}
          alt={brand.name}
          width={20}
          className="mr-1 animate-marquee"
        />
        <h1 className="text-xl font-bold text-[#A6A6A6]">{brand.name}</h1>
      </span>
    );
  })}
</div> */}

          <p className="p-8 text-blue-500 mb-1">
            "Collabs has reached a significant milestone, with over 25,000 teams now utilizing our platform for streamlined collaboration. From remote teams to in-house departments, organizations across industries rely on Collabs to facilitate seamless communication, project management, and teamwork. Join the community of over 25,000 teams today and experience the benefits of efficient collaboration firsthand!"
          </p>


          <Images_logo />
        </section>
        


      </main>
    </>
  );
};

export default Hero_Section;
