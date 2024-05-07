import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { Rate } from "antd";
import ravi from '/public/img/ravi.jpg';
import man from '/public/img/karl.jpg';
import shivam from '/public/img/shivam.jpg';

const work_fields = [
  { id: 1, logo: ravi, content: "Working at Fusion has been an incredible experience. The work culture fosters collaboration, creativity, and continuous learning. The leadership team is supportive and truly values employee input. The institute also offers career guidance I couldn't ask for a better place to grow my career in IT.", starval: 4, name: 'Ravi Waghmare', rating: "4.8 / 5 rating" },
  { id: 2, logo: man, content: "The quality of education at Fusion Institute is commendable. The instructors are knowledgeable and experienced professionals who provide comprehensive learning experiences. The curriculum is well-structured, The institute also offers career guidance covering both theoretical concepts and practical.", starval: 3, name: 'Jayesh Singh', rating: "3.1 / 5 rating" },
  { id: 3, logo: shivam, content: "Fusion Institute provides excellent support services to its students. From enrollment to graduation, students receive assistance from the administrative staff and faculty members.  The instructors are knowledgeable and experienced professionals  The institute also offers career guidances.", starval: 5, name: 'Mohit Ram', rating: "5 / 5 rating" }
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  let keenSlider: any = null;

  useEffect(() => {
    if (sliderRef.current) {
      keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
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
      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');
      const keenSliderPreviousMobile = document.getElementById('keen-slider-previous-mobile');
      const keenSliderNextMobile = document.getElementById('keen-slider-next-mobile');

      const clickHandler = () => keenSlider.next();

      keenSliderPrevious?.addEventListener('click', clickHandler);
      keenSliderNext?.addEventListener('click', clickHandler);
      keenSliderPreviousMobile?.addEventListener('click', clickHandler);
      keenSliderNextMobile?.addEventListener('click', clickHandler);

      return () => {
        keenSliderPrevious?.removeEventListener('click', clickHandler);
        keenSliderNext?.removeEventListener('click', clickHandler);
        keenSliderPreviousMobile?.removeEventListener('click', clickHandler);
        keenSliderNextMobile?.removeEventListener('click', clickHandler);
      };
    }
  }, [keenSlider]);

  return (
    
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold text-left tracking-tight text-gray-900 sm:text-4xl">
              India’s Best Professional IT-Training Institute...
            </h2>
            <p className="mt-4 text-gray-700">
              Our Success lies in our student's Success Stories. Read to those who have experienced the Magic...
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-2 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                Previous
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-2 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {work_fields.map((logo) => (
                <div key={logo.id} className="keen-slider__slide bg-slate-400 p-5 rounded-lg border border-wheat-600">
                  <blockquote className="testimonial flex items-center">
                    <Image
                      src={logo.logo}
                      alt=""
                      width={80}
                      height={70}
                      layout="fixed"
                      objectFit="cover"
                      className="rounded-full mr-4"
                    />
                    <p className="h-154 sm:h-auto">{logo.content}</p>

                  </blockquote>
                  <footer className="font-bold text-black flex justify-center items-end mt-auto sm:mt-0">- {logo.name}</footer>

                  <div className="flex items-center">
                    <span className="start_symbol">
                      <Rate disabled defaultValue={logo.starval} />
                    </span>
                    <p className="the_rating_text text-sm p-1">{logo.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          aria-label="Previous slide"
          id="keen-slider-previous-mobile"
          className="rounded-full border border-rose-600 m-4 p-2 text-rose-600 transition hover:bg-rose-600 hover:text-white lg:hidden"
        >
          Previous
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next-mobile"
          className="rounded-full border border-rose-600 m-4 p-2 text-rose-600 transition hover:bg-rose-600 hover:text-white lg:hidden"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
