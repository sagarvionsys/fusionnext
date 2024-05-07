"use client";

import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import React, { useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Rate } from "antd";
import Image from "next/image";
import Images_logo from "@/Data/Images_logo";

const Placements = () => {
  const sliderRef = useRef(null);
  let keenSlider: any = null;

  useEffect(() => {
    if (sliderRef.current) {
      keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      return () => {
        if (keenSlider) {
          keenSlider.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (keenSlider) {
      const keenSliderPrevious = document.getElementById(
        "keen-slider-previous"
      );
      const keenSliderNext = document.getElementById("keen-slider-next");

      const keenSliderPreviousMobile = document.getElementById(
        "keen-slider-previous-mobile"
      );
      const keenSliderNextMobile = document.getElementById(
        "keen-slider-next-mobile"
      );

      const clickHandler = () => keenSlider.next();

      keenSliderPrevious?.addEventListener("click", clickHandler);
      keenSliderNext?.addEventListener("click", clickHandler);

      keenSliderPreviousMobile?.addEventListener("click", clickHandler);
      keenSliderNextMobile?.addEventListener("click", clickHandler);

      return () => {
        keenSliderPrevious?.removeEventListener("click", clickHandler);
        keenSliderNext?.removeEventListener("click", clickHandler);
        keenSliderPreviousMobile?.removeEventListener("click", clickHandler);
        keenSliderNextMobile?.removeEventListener("click", clickHandler);
      };
    }
  }, [keenSlider]);
  return (
    <>
      <div className="py-[5%]">
        <div className="bg-white text-black dark:bg-black dark:text-white">
          <div className="px-5 md:px-10 lg:px-20 py-6">
            {" "}
            {/* Add padding */}
            <div className="flex flex-col md:flex-row">
              {" "}
              {/* Use flex column for mobile, flex row for larger screens */}
              <div className="w-full md:w-1/2 flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                {" "}
                {/* Set width to 100% on mobile, 50% on larger screens */}
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={1900}
                  showIndicators={false}
                  className="custom-carousel p-3 m-3 rounded-lg"
                >
                  <div className=" ">
                    <img
                      className="w-80 h-80  rounded-lg border border-wheat-60"
                      src="https://plus.unsplash.com/premium_photo-1682787494863-177371a38ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </div>

                  <div>
                    <img
                      className="w-80 h-80 rounded-lg border border-wheat-60"
                      src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </div>

                  <div>
                    <img
                      className="w-80 h-80 rounded-lg border border-wheat-60"
                      src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </div>
                  <div>
                    <img
                      className="w-80 h-80  rounded-lg border border-wheat-60"
                      src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </div>

                  <div>
                    <img
                      className="w-80 h-80  rounded-lg border border-wheat-60"
                      src="https://plus.unsplash.com/premium_photo-1678914346886-c431f389db85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="w-full md:w-1/2 flex-shrink-0 p-5">
                {" "}
                {/* Set width to 100% on mobile, 50% on larger screens */}
                <h1 className="px-4 pt-8  text-lg text-[24px] text-indigo-700 dark:text-indigo-600 font-serif">
                  Placements @Fusion
                </h1>
                <p className="p-3 m-1 text-gray-500 dark:text-gray-300">
                  We understand that landing a job in the competitive IT
                  industry can be challenging, which is why we offer
                  comprehensive training programs that prepare our students for
                  the real-world demands of the industry. Our programs are
                  designed to provide hands-on experience in the latest
                  technologies and tools that are in high demand by leading IT
                  companies. Our experienced trainers work closely with our
                  students to ensure they have the necessary knowledge and
                  skills to excel in their careers. We cover a wide range of
                  topics, including programming languages, database management,
                  cloud computing, cybersecurity, and more.
                </p>
              </div>
            </div>
            <p className="p-3 text-gray-500 dark:text-gray-300 mb-12">
              Our Placement Cell works tirelessly to identify job openings and
              facilitate placements for our students. We conduct regular
              placement drives and job fairs, where our students get the
              opportunity to interact with prospective employers and showcase
              their skills. We have a proven students with a holistic learning
              experience that not only prepares them for their dream jobs but
              also equips them with the skills to grow and excel in their
              careers.
            </p>
            <div className="p-5 text-indigo-400">
              <p className="font-serif justify-center p-4 m-4 text-center  text-red-400 text-[40px] ">
                100% PLACEMENT ASSISTANCE
              </p>
              <p className="font-serif justify-center  p-4 m-4 text-center text-indigo-400 text-[20px]">
                Students Placed With Companies
              </p>
            </div>
            <Images_logo />
            <div className="bg-indigo-50 dark:bg-[#050025] p-3">
              <h1 className="justify-center text-center text-[26px] p-3 pt-10">
                WHAT OUR STUDENTS SAY'S
              </h1>

              <p className="p-4 m-2  text-gray-500 dark:text-gray-300">
                {" "}
                we understand that enrolling in IT certification courses is an
                investment in your future. Therefore, we offer top-notch
                training programs that increase your potential, capacity, and
                performance and also provide you with the skills necessary to
                succeed in the IT industry. If you enroll in training programs,
                you can jumpstart your IT career by learning from experienced
                and certified professionals at the best IT Training Institute in
                Pune.
              </p>
            </div>
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                  <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-3xl font-bold text-left tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                      India’s Best Professional IT-Training Institute...
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      Our Success lies in our student's Success Stories Read to
                      those who have experienced the Magic...
                    </p>

                    <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                      <button
                        aria-label="Previous slide"
                        id="keen-slider-previous"
                        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                      >
                        Previous
                      </button>

                      <button
                        aria-label="Next slide"
                        id="keen-slider-next"
                        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="-mx-6 lg:col-span-2 lg:mx-0">
                    <div ref={sliderRef} className="keen-slider">
                      <div className="keen-slider__slide  bg-slate-400 dark:bg-slate-700 p-5 rounded-lg">
                        <blockquote className="testimonial">
                          <span className="flex">
                            <Image
                              style={{ borderRadius: "50%" }}
                              className="m-1 h-24 w-24 rounded-full"
                              src="/img/ravi.jpg"
                              alt=""
                              width={80}
                              height={70}
                            />
                            <p className="m-1">
                              "Working at Vionsys has been an incredible
                              experience. The work culture fosters
                              collaboration, creativity, and continuous
                              learning. The leadership team is supportive and
                              truly values employee input. I couldn't ask for
                              better place to grow my career in IT."
                            </p>
                          </span>
                          <span className="justify-center text-center">
                            <footer className="font-bold m-1">
                              - Rahul Jadhav
                            </footer>
                            <div className="flex justify-center items-center">
                              <span className="start_symbol">
                                <Rate disabled defaultValue={4} />
                              </span>
                              <p className="the_rating_text text-sm p-1">
                                4.1 / 5 rating
                              </p>
                            </div>
                          </span>
                        </blockquote>
                      </div>
                      <div className="keen-slider__slide  bg-slate-400 dark:bg-slate-700 p-5 rounded-lg">
                        <blockquote className="testimonial">
                          <span className="flex">
                            <Image
                              style={{ borderRadius: "50%" }}
                              className="m-1 h-24 w-24 rounded-full"
                              src="/img/karl.jpg"
                              alt=""
                              width={80}
                              height={70}
                            />
                            <p className="m-1">
                              "Vionsys IT Solutions shares my positive
                              experience and satisfaction with the services
                              provided by the company. One of the key strengths
                              of Vionsys IT Solutions is the depth of technical
                              knowledge possessed by your professionals."
                            </p>
                          </span>
                          <span className="justify-center text-center">
                            <footer className="font-bold m-1">
                              - Vishnu Jadhav
                            </footer>
                            <div className="flex justify-center items-center">
                              <span className="start_symbol">
                                <Rate disabled defaultValue={2} />
                              </span>
                              <p className="the_rating_text text-sm p-1">
                                2.1 / 5 rating
                              </p>
                            </div>
                          </span>
                        </blockquote>
                      </div>
                      <div className="keen-slider__slide  bg-slate-400 p-5 rounded-lg border border-wheat-600">
                        <blockquote className="testimonial">
                          <span className="flex">
                            <Image
                              style={{ borderRadius: "50%" }}
                              className="m-1 h-24 w-24 rounded-full"
                              src="/img/shivam.jpg"
                              alt=""
                              width={80}
                              height={70}
                            />
                            <p className="m-1">
                              "Vionsys IT Solution is recognized foe its good
                              work culture and job stability. The organization
                              provided me numerous opportunities to learn new
                              things , to enhance my existing knowledge. That is
                              all I felt. Greatful for being a part of Vionsys
                              family."
                            </p>
                          </span>
                          <span className="justify-center text-center">
                            <footer className="font-bold text-black m-1">
                              - Sonam sharma
                            </footer>
                            <div className="flex justify-center items-center">
                              <span className="start_symbol">
                                <Rate disabled defaultValue={2} />
                              </span>
                              <p className="the_rating_text text-sm p-1">
                                2 / 5 rating
                              </p>
                            </div>
                          </span>
                        </blockquote>
                      </div>
                      {/* Add more testimonial slides as needed */}
                    </div>
                  </div>
                </div>
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-mobile"
                  className="rounded-full border border-rose-600 m-4 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white lg:hidden"
                >
                  Previous
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-mobile"
                  className="rounded-full border border-rose-600 m-4 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white lg:hidden"
                >
                  Next
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;
