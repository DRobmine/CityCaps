"use client";
import React, { useEffect, useRef } from "react";
import { Carousel } from "flowbite";

function Carusel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.querySelectorAll("[data-carousel-item]");
    const indicators = carouselRef.current.querySelectorAll(
      "[data-carousel-slide-to]"
    );
    const carouselItems = Array.from(items).map((el, index) => ({
      position: index,
      el,
    }));

    const options = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: Array.from(indicators).map((el, index) => ({
          position: index,
          el,
        })),
      },
    };

    const instanceOptions = {
      id: "carousel-example",
      override: true,
    };

    const carousel = new Carousel(carouselRef.current, carouselItems, options, instanceOptions);
    carousel.cycle();

    const prevBtn = carouselRef.current.querySelector("[data-carousel-prev]");
    const nextBtn = carouselRef.current.querySelector("[data-carousel-next]");

    prevBtn.addEventListener("click", () => carousel.prev());
    nextBtn.addEventListener("click", () => carousel.next());

    return () => {
      prevBtn.removeEventListener("click", () => carousel.prev());
      nextBtn.removeEventListener("click", () => carousel.next());
    };
  }, []);

  return (
    <div id="model" className="flex justify-center items-center">
    <div ref={carouselRef} id="default-carousel" className="relative w-200">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/1.png" className="absolute bg-cover h-full w-full" alt="Slide 1" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/2.png" className="absolute bg-center bg-cover h-full w-full" alt="Slide 2" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/3.png" className="absolute bg-center bg-cover h-full w-full" alt="Slide 3" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/4.png" className="absolute bg-center bg-cover h-full w-full" alt="Slide 4" />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      </div>
      
      <button type="button" className="absolute invisible top-0 start-0 z-30 flex items-center justify-center h-full px-4 group" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
          <svg className="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>
      <button type="button" className="absolute invisible top-0 end-0 z-30 flex items-center justify-center h-full px-4 group" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
          <svg className="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
    </div>
  );
}

export default Carusel;
