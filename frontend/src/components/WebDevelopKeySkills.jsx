import React, { useState, useEffect, useRef } from "react";
import { key } from "../assets/assets";
import { ChevronLeft, ChevronRight, Play, Pause, Target, TrendingUp, Sparkles } from "lucide-react";

const skills = [
  { 
    title: "Logical Thinking", 
    percent: 90, 
    icon: key.oneOne,
    description: "Develop systematic approach to problem-solving",
    color: "from-blue-500 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  { 
    title: "Confidence Level", 
    percent: 85, 
    icon: key.twoTwo,
    description: "Build self-assurance through project completion",
    color: "from-green-500 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  { 
    title: "Perseverance", 
    percent: 89, 
    icon: key.threeThree,
    description: "Learn to overcome challenges and persist",
    color: "from-purple-500 to-pink-400",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200"
  },
  { 
    title: "Creativity", 
    percent: 86, 
    icon: key.fourFour,
    description: "Unlock innovative thinking and imagination",
    color: "from-orange-500 to-red-400",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200"
  },
  { 
    title: "Critical Thinking", 
    percent: 90, 
    icon: key.fiveFive,
    description: "Analyze and evaluate information effectively",
    color: "from-indigo-500 to-blue-400",
    bgColor: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200"
  },
  { 
    title: "Communication", 
    percent: 85, 
    icon: key.sixSix,
    description: "Express ideas clearly and collaborate effectively",
    color: "from-teal-500 to-green-400",
    bgColor: "from-teal-50 to-green-50",
    borderColor: "border-teal-200"
  },
  { 
    title: "Problem Solving", 
    percent: 89, 
    icon: key.sevenSeven,
    description: "Develop solutions for complex challenges",
    color: "from-amber-500 to-yellow-400",
    bgColor: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200"
  },
  { 
    title: "Collaboration", 
    percent: 87, 
    icon: key.sevenSeven,
    description: "Work effectively in team environments",
    color: "from-rose-500 to-pink-400",
    bgColor: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200"
  },
];

export default function WebDevKey() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedPercent, setAnimatedPercent] = useState({});
  const [visibleSkills, setVisibleSkills] = useState([]);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Calculate visible skills based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  // Initialize visible skills
  useEffect(() => {
    const count = getVisibleCount();
    setVisibleSkills(skills.slice(0, count));
    
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleSkills(skills.slice(currentIndex, currentIndex + newCount));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Animated percentages
  useEffect(() => {
    const timeouts = skills.map((skill, index) => 
      setTimeout(() => {
        setAnimatedPercent(prev => ({
          ...prev,
          [skill.title]: skill.percent
        }));
      }, index * 200)
    );

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    const visibleCount = getVisibleCount();
    setCurrentIndex(prev => 
      prev >= skills.length - visibleCount ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    const visibleCount = getVisibleCount();
    setCurrentIndex(prev => 
      prev === 0 ? skills.length - visibleCount : prev - 1
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get current visible skills
  const currentSkills = skills.slice(currentIndex, currentIndex + getVisibleCount());

  return (
    <div className="relative px-4 py-4 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl my-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">Skill Development Roadmap</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Develop Key <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">Skills</span>
            <br />
            Through <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Project-Based</span> Learning
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
                className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '87%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="relative" ref={containerRef}>
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </button>
            
            <button
              onClick={toggleAutoplay}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span className="font-semibold">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {currentSkills.map((skill, index) => (
              <div
                key={`${skill.title}-${currentIndex + index}`}
                className="relative group cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
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
                      strokeDashoffset={251.2 * (1 - (animatedPercent[skill.title] || 0) / 100)}
                      className={`text-${skill.color.split('-')[1]}-500 transition-all duration-1000 ease-out`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">
                      {animatedPercent[skill.title] || 0}%
                    </span>
                  </div>
                </div>

                {/* Icon Container */}
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${skill.bgColor} shadow-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.title} 
                      className="w-10 h-10 filter brightness-0 invert" 
                    />
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
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(skills.length / getVisibleCount()) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * getVisibleCount())}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / getVisibleCount()) === index
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-cyan-700">
            Start Your Learning Journey
          </button>
          <p className="text-gray-600 mt-4 text-sm">
            Join 10,000+ students developing essential skills through project-based learning
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}