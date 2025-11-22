import React, { useState, useRef, useEffect } from "react";
import { curriculum } from "../assets/assets";

const Curriculum = () => {
  const skills = [
    {
      title: "Coding",
      icon: curriculum.coding2,
      desc: "Introduce coding skills to young learners, promoting logical thinking and computational skills.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "blue"
    },
    {
      title: "Life Skills",
      icon: curriculum.life,
      desc: "Nurture holistic growth with engaging narratives and gamified learning.",
      color: "from-green-500 to-emerald-500",
      bgColor: "green"
    },
    {
      title: "Finance & Entrepreneurship",
      icon: curriculum.finance,
      desc: "Teach financial literacy and entrepreneurial concepts for future innovation.",
      color: "from-purple-500 to-pink-500",
      bgColor: "purple"
    },
    {
      title: "Artificial Intelligence",
      icon: curriculum.life,
      desc: "Basic AI concepts to spark curiosity and technological understanding.",
      color: "from-orange-500 to-red-500",
      bgColor: "orange"
    },
    {
      title: "Critical Thinking",
      icon: curriculum.math,
      desc: "Break down problems and foster logical reasoning and algorithmic thinking.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "indigo"
    },
    {
      title: "Robotics",
      icon: curriculum.lg,
      desc: "Hands-on robotics courses to spark creativity.",
      color: "from-teal-500 to-green-500",
      bgColor: "teal"
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >

       <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-[#DCE3EA]"
          ></path>
        </svg>
      </div>

      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-green-100 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-100 rounded-full opacity-20 animate-float delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Side by Side Layout */}
        <div className={`flex flex-col lg:flex-row items-start gap-12 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Content */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-blue-700 font-medium text-sm">Our Curriculum</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Unique <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Skill Curriculum</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Comprehensive learning pathways designed to equip students with essential 21st-century skills 
              through interactive and engaging methodologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-gray-600">Schools</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-4 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className={`w-15 h-15 rounded-2xl bg-gradient-to-br ${skills[activeCard].color} p-2 shadow-lg flex-shrink-0`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <img 
                      src={skills[activeCard].icon} 
                      alt={skills[activeCard].title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {skills[activeCard].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {skills[activeCard].desc}
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Learn More About {skills[activeCard].title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Grid - 2x3 Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border-2 border-gray-100 p-6 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeCard === index 
                  ? 'ring-4 ring-blue-500/20 shadow-xl scale-105 border-blue-300' 
                  : 'shadow-lg hover:shadow-xl hover:border-gray-300'
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => setActiveCard(index)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-1.5 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  activeCard === index ? 'scale-110' : ''
                }`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${
                  activeCard === index 
                    ? `bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`
                    : 'text-gray-900'
                }`}>
                  {skill.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-700">
                {skill.desc}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">Available</span>
                </div>
                
                <button className={`flex items-center space-x-1 text-xs font-medium transition-all duration-300 ${
                  activeCard === index 
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}>
                  <span>Explore</span>
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:w-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Centered */}
        <div className={`text-center mt-5 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform education?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of schools already using our innovative curriculum to prepare students for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started Free
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Curriculum;