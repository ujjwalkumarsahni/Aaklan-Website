import React from "react";
import { key } from "../assets/assets";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

const skills = [
  { title: "Logical Thinking", percent: 90, icon: key.oneOne },
  { title: "Confidence Level", percent: 85, icon: key.twoTwo },
  { title: "Perseverance", percent: 89, icon: key.threeThree },
  { title: "Creativity", percent: 86, icon: key.fourFour },
  { title: "Critical Thinking", percent: 90, icon: key.fiveFive },
  { title: "Communication", percent: 85, icon: key.sixSix },
  { title: "Problem Solving", percent: 89, icon: key.sevenSeven },
];

export default function WebDevKey() {
  return (
    <div className="text-center px-5 py-14 max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1b2b48] leading-snug">
        We Develop Key <span className="text-[#ff9f1c]">Skills</span> from
        Project Based <span className="text-[#ff9f1c]">Learning</span>
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mt-3 mb-10">
        Step into the world of futuristic courses, discovering a new passion and
        developing skills with project-based learning.
      </p>

      <Swiper
        modules={[FreeMode, Autoplay]}
        freeMode={true}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        loop={true}
        className="mt-10 pb-4"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="!w-[220px]">

            <div
              className="
                bg-white/20 
                backdrop-blur-xl 
                rounded-3xl 
                p-6 
                border border-white/30 
                shadow-[0_8px_25px_rgba(0,0,0,0.1)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                transition-all duration-300 
                hover:-translate-y-2 
                relative overflow-hidden
              "
            >

              {/* Neon Gradient Border */}
              <div
                className="
                  absolute inset-0 rounded-3xl p-[2px]
                  bg-gradient-to-br from-orange-400 via-yellow-300 to-amber-500
                  opacity-0 hover:opacity-100 transition duration-300
                "
              >
                <div className="w-full h-full bg-white/20 rounded-3xl"></div>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center">
                <div
                  className="
                    w-20 h-20 rounded-2xl 
                    bg-linear-to-br from-orange-200/80 to-yellow-200/80 
                    shadow-md 
                    flex items-center justify-center
                    transition duration-300 hover:scale-110
                  "
                >
                  <img src={skill.icon} alt="" className="w-12 h-12" />
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-[#1b2b48] mt-4">
                {skill.title}
              </h3>

              {/* Percentage */}
              <p className="relative z-10 mt-2 text-green-600 font-semibold text-lg tracking-wide">
                {skill.percent}% 
                <span className="text-green-500 ml-1">⬆</span>
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
