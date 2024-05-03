import React from "react";
import { Rate } from "antd";
import { LuActivity } from "react-icons/lu";

const work_field = [
  {
    id: 1,
    logo: LuActivity,
    title: "Publish Interactive Learning Platformings",
    desc: "A feature-rich platform that supports interactive teaching methods such as live video lectures, screen sharing, whiteboarding, and real-time Q&A sessions.",
  },
  {
    id: 2,
    logo: LuActivity,
    title: "Course Management",
    desc: "Tools for organizing and managing courses, including creating, editing, and scheduling classes, as well as tracking student progress and performance.",
  },
  {
    id: 3,
    logo: LuActivity,
    title: "Student Engagement",
    desc: "Features to foster student engagement and collaboration, such as discussion forums, group projects, and peer-to-peer learning communities.",
  },
];

const Features_home = () => {
  return (
    <main className="w-full flex p-3 py-9 flex-col md:flex-row text-black dark:text-gray-200 bg-[#F9F8FE] dark:bg-slate-950 ">
      <section className="the_ratings flex flex-col w-full md:w-[50%] px-0 md:px-[5%] ">
        <div className=" px-5 md:px-16">
          <h1 className="text-4xl font-bold text-red-500">
            Discover How We Deliver Exceptional Services with a Personal Touch
          </h1>
        </div>
        <div className="p-3 px-5 md:px-16">
          <p className="text-sm Navtext">
            we pride ourselves on delivering services that exceed expectations while providing a personalized experience tailored to each client's unique needs. Our approach to service delivery is characterized
          </p>
        </div>
        <div className="stars flex px-5 md:px-16 space-x-8 py-10">
          <span className="1st_start_scetion">
            <span className="start_symbol">

              <Rate disabled defaultValue={4} />

            </span>
            <p className="the_rating_text text-sm p-1">4.9 / 5 rating</p>
            <p className="the_client Navtext font-bold p-1">databriks</p>
          </span>
          <span className="2st_start_scetion">
            <span className="start_symbol">

              <Rate disabled defaultValue={4} />

            </span>
            <p className="the_rating_text text-sm p-1">4.8 / 5 rating</p>
            <p className="the_client Navtext font-bold p-1">Chainalysis</p>
          </span>
        </div>
      </section>

      <section className="the_work__area w-full md:w-[50%]">
        <div className="grid grid-cols-1 gap-4">
          {work_field.map((work) => {
            return (
              <div key={work.id} className="flex p-2 space-x-3">
                <span className="box w-9 p-2 h-8 items-center flex jusc'">
                  <work.logo />
                </span>
                <div className="flex flex-col justify-between">
                  <h1 className="font-bold text-xl">{work.title}</h1>
                  <p className="pr-5 md:pr-[30%] Navtext text-sm">
                    {work.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Features_home;
