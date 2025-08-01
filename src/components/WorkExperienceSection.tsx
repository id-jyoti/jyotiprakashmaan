// src/components/WorkExperienceSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import devyani from "../assets/DIL.jpg";
import desire from "../assets/DISPL.jpeg";
import inditex from "../assets/Inditex.jpg";
import rtu from "../assets/RTU.jpg";
import smcet from "../assets/SMCET.png";
import ehotspot from "../assets/EH.jpeg";
import police from "../assets/RP.webp";

const logos = [
  { src: devyani, alt: "Devyani International Ltd" },
  { src: desire, alt: "Desire Info Soft Pvt Ltd" },
  { src: inditex, alt: "Inditex" },
  { src: rtu, alt: "RTU Colleges" },
  { src: smcet, alt: "SMCET Jaipur" },
  { src: ehotspot, alt: "Engineering Hotspot" },
  { src: police, alt: "Rajasthan Police" },
];

export default function WorkExperienceSection() {
  return (
    <section id="work" className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
        Where I’ve Worked
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full bg-white shadow-md hover:scale-105 transition">
              <img
                src={logo.src}
                alt={logo.alt}
                className="rounded-full w-full h-full object-contain"
              />
            </div>
            <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
              {logo.alt}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
