import React, { useState, useRef, useEffect } from "react";
import { key } from "../assets/assets";
import { ChevronLeft, ChevronRight, Play, Pause, Target, TrendingUp, Sparkles } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

const skills = [
  { 
    title: "Logical Thinking", 
    percent: 90, 
    icon: key.oneOne,
    description: "Develop systematic approach to problem-solving",
    color: "from-blue-500 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50"
  },
  { 
    title: "Confidence Level", 
    percent: 85, 
    icon: key.twoTwo,
    description: "Build self-assurance through project completion",
    color: "from-green-500 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50"
  },
  { 
    title: "Perseverance", 
    percent: 89, 
    icon: key.threeThree,
    description: "Learn to overcome challenges and persist",
    color: "from-purple-500 to-pink-400",
    bgColor: "from-purple-50 to-pink-50"
  },
  { 
    title: "Creativity", 
    percent: 86, 
    icon: key.fourFour,
    description: "Unlock innovative thinking and imagination",
    color: "from-orange-500 to-red-400",
    bgColor: "from-orange-50 to-red-50"
  },
  { 
    title: "Critical Thinking", 
    percent: 90, 
    icon: key.fiveFive,
    description: "Analyze and evaluate information effectively",
    color: "from-indigo-500 to-blue-400",
    bgColor: "from-indigo-50 to-blue-50"
  },
  { 
    title: "Communication", 
    percent: 85, 
    icon: key.sixSix,
    description: "Express ideas clearly and collaborate effectively",
    color: "from-teal-500 to-green-400",
    bgColor: "from-teal-50 to-green-50"
  },
  { 
    title: "Problem Solving", 
    percent: 89, 
    icon: key.sevenSeven,
    description: "Develop solutions for complex challenges",
    color: "from-amber-500 to-yellow-400",
    bgColor: "from-amber-50 to-yellow-50"
  },
  { 
    title: "Problem Solving", 
    percent: 89, 
    icon: key.sevenSeven,
    description: "Develop solutions for complex challenges",
    color: "from-amber-500 to-yellow-400",
    bgColor: "from-amber-50 to-yellow-50"
  },
  { 
    title: "Problem Solving", 
    percent: 89, 
    icon: key.sevenSeven,
    description: "Develop solutions for complex challenges",
    color: "from-amber-500 to-yellow-400",
    bgColor: "from-amber-50 to-yellow-50"
  },
];

export default function WebDevKey() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navigateSlide = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (direction === 'prev') {
        swiperRef.current.swiper.slidePrev();
      } else {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  return (
    <div className="relative px-4 py-16 max-w-7xl mx-auto bg-linear-to-br from-slate-50 to-blue-50/30 rounded-3xl my-8">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-linear-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">Skill Development Roadmap</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Develop Key <span className="text-transparent bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text">Skills</span>
            <br />
            Through <span className="text-transparent bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text">Project-Based</span> Learning
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into the world of futuristic courses, discovering new passions and 
            developing essential skills through hands-on, project-based learning experiences.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Overall Skill Progress</h3>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-green-600">+87% Average</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-linear-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => navigateSlide('prev')}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={toggleAutoplay}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span className="font-semibold">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            
            <button
              onClick={() => navigateSlide('next')}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-12! pt-4!"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="w-[250px]! lg:w-[250px]!">
                <div
                  className={`
                    relative group cursor-pointer
                    bg-white rounded-3xl p-6
                    shadow-lg hover:shadow-2xl
                    border border-gray-100
                    transition-all duration-500
                    hover:-translate-y-3
                    ${activeIndex === index ? 'ring-2 ring-blue-500/50 scale-105' : ''}
                  `}
                >
                  {/* Progress Ring */}
                  <div className="absolute -top-4 -right-4 w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 * (1 - skill.percent / 100)}
                        className={`text-${skill.color.split('-')[1]}-500 transition-all duration-1000 ease-out`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700">{skill.percent}%</span>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className={`w-24 h-24 rounded-2xl bg-linear-to-br ${skill.bgColor} shadow-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center shadow-md`}>
                      <img src={skill.icon} alt={skill.title} className="w-10 h-10 filter brightness-0 invert" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>
                    <div className="flex justify-center items-center gap-2 text-sm font-semibold text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>+{skill.percent}% Mastery</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideToLoop(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-linear-to-r from-orange-500 to-amber-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-cyan-700">
            Start Your Learning Journey
          </button>
          <p className="text-gray-600 mt-4 text-sm">
            Join 10,000+ students developing essential skills through project-based learning
          </p>
        </div>
      </div>
    </div>
  );
}