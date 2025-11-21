import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { curriculum } from "../assets/assets.js";

const skills = [
  {
    title: "Coding",
    icon: curriculum.coding2,
    desc: "Introduce coding skills to young learners, promoting logical thinking and computational skills.",
  },
  {
    title: "Life Skills",
    icon: curriculum.life,
    desc: "Nurture holistic growth with engaging narratives and gamified learning.",
  },
  {
    title: "Finance & Entrepreneurship",
    icon: curriculum.finance,
    desc: "Teach financial literacy and entrepreneurial concepts for future innovation.",
  },
  {
    title: "Artificial Intelligence",
    icon: curriculum.life,
    desc: "Basic AI concepts to spark curiosity and technological understanding.",
  },
  {
    title: "Critical Thinking",
    icon: curriculum.math,
    desc: "Break down problems and foster logical reasoning and algorithmic thinking.",
  },
  {
    title: "Robotics",
    icon: curriculum.lg,
    desc: "Hands-on robotics courses to spark creativity.",
  },
];

const Curriculum = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Unique Skill Curriculum <br />
          <span className="text-orange-500">For Your School</span>
        </h2>

        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {skills.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white h-[350px] rounded-xl shadow-md border hover:shadow-lg transition p-5">
                  <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
