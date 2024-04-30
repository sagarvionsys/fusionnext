import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { Rate } from "antd";


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
              India’s Best Professional
              IT-Training Institute...
            </h2>

            <p className="mt-4 text-gray-700">
              Our Success lies in our student's Success Stories
              Read to those who have experienced the Magic...
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
              <div className="keen-slider__slide  bg-slate-400 p-5 rounded-lg border border-wheat-600">
                <blockquote className="testimonial">
                  <span className='flex'>
                    <Image style={{ borderRadius: '50%' }}
                      src="/img/ravi.jpg"
                      alt=""
                      width={80}
                      height={70} className='m-1 h-full'
                    />
                    <p className=''>
                      "Working at Vionsys has been an incredible experience. The work culture fosters collaboration, creativity, and continuous learning. The leadership team is supportive and truly values employee input. I couldn't ask for better place to grow my career in IT."
                    </p>
                  </span>
                  <footer className='font-bold text-black '>- Ravi Waghmare</footer>

                  <span className="start_symbol ">
                    <Rate disabled defaultValue={5} />
                  </span>
                  <p className="the_rating_text text-sm p-1">4.8 / 5 rating</p>
                </blockquote>
              </div>
              <div className="keen-slider__slide  bg-slate-400 p-5 rounded-lg border border-wheat-600">
                <blockquote className="testimonial">
                  <span className='flex'>
                    <Image style={{ borderRadius: '50%' }}
                      src="/img/shivam.jpg"
                      alt=""
                      width={80}
                      height={70}className='m-1 h-full'
                    />
                    <p className=''>
                      "Vionsys IT Solutions shares my positive experience and satisfaction with the services provided by the company. One of the key strengths of Vionsys IT Solutions is the depth of technical knowledge possessed by your professionals."
                    </p>
                  </span>
                  <footer className='font-bold text-black'>- Mohini Rokade</footer>

                  <span className="start_symbol">
                    <Rate disabled defaultValue={2} />
                  </span>
                  <p className="the_rating_text text-sm p-1">2.8 / 5 rating</p>
                </blockquote>
              </div>
              <div className="keen-slider__slide  bg-slate-400 p-5 rounded-lg border border-wheat-600" >
                <blockquote className="testimonial">
                  <span className='flex'>
                    <Image style={{ borderRadius: '50%' }} className='m-1 h-full'
                      src="/img/ravi.jpg"
                      alt=""
                      width={80}
                      height={70}
                    />
                    <p className=''>
                      "Vionsys IT Solution is recognized foe its good work culture and job stability. The organization provided me numerous opportunities to learn new things , to enhance my existing knowledge. That is all I felt. Greatful for being a part of Vionsys family."
                    </p>
                  </span>
                  <footer className='font-bold text-black '>- Vishnu Jadhav</footer>

                  <span className="start_symbol">
                    <Rate disabled defaultValue={4} />
                  </span>
                  <p className="the_rating_text text-sm p-1">4.1 / 5 rating</p>
                </blockquote>
              </div>
              {/* Add more testimonial slides as needed */}
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
