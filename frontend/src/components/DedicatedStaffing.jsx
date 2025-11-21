import { CheckCircle, PlayCircle, Users, Target, BarChart3, ArrowRight } from "lucide-react";
import { some } from "../assets/assets";
import { useState, useRef, useEffect } from "react";

export default function DedicatedStaffing() {
  const points = [
    {
      text: "School signs-up with Aaklan",
      icon: "🏫",
      description: "Simple onboarding process to get started"
    },
    {
      text: "Program Manager is assigned",
      icon: "👨‍💼",
      description: "Dedicated expert to oversee your program"
    },
    {
      text: "Teacher is recruited and trained",
      icon: "👩‍🏫",
      description: "Carefully selected and trained educators"
    },
    {
      text: "Teacher starts classes over tech platform",
      icon: "💻",
      description: "Seamless integration with our technology"
    },
    {
      text: "Regular audits of classes by Program Manager",
      icon: "📊",
      description: "Continuous quality monitoring and improvement"
    },
    {
      text: "School track progress over tech-platform",
      icon: "📈",
      description: "Real-time progress tracking and analytics"
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer
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

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % points.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, points.length]);

  const stats = [
    { icon: Users, value: "500+", label: "Schools Partnered" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: BarChart3, value: "50K+", label: "Students Impacted" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-6 lg:py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-5 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-sm mb-8">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-700 font-semibold text-base">Streamlined Process</span>
          </div>
          
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-8">
            Dedicated{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Staffing
            </span>
            <br />
            Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Complete responsibility for impeccable class delivery and student success 
            through our end-to-end staffing ecosystem.
          </p>
        </div>

        {/* New Structure: Image Top, Process Steps Bottom */}
        <div className="flex flex-col gap-16">
          {/* Top Section - Visual with Active Step */}
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Stats Cards - Left */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Visual - Center */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                <img
                  src={some.dedicatedStaffing}
                  alt="Teacher showing code on screen"
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Active Step Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">{points[activeStep].icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          Step {activeStep + 1}: {points[activeStep].text}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {points[activeStep].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Process Steps in Timeline Layout */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100/50">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Our 6-Step Success Process
              </h3>
              
              {/* Timeline Layout */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-indigo-200 transform -translate-x-1/2"></div>
                
                <div className="space-y-6">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start gap-6 p-3 rounded-2xl transition-all duration-500 cursor-pointer group ${
                        activeStep === index
                          ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                          : 'hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 scale-110 shadow-lg'
                          : 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md group-hover:scale-105'
                      }`}>
                        {activeStep === index ? (
                          <CheckCircle size={24} className="text-white" />
                        ) : (
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                            activeStep === index
                              ? 'text-blue-700'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                            {point.text}
                          </h4>
                          <span className="text-2xl ml-4">{point.icon}</span>
                        </div>
                        <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                          activeStep === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                        } overflow-hidden`}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Navigation */}
              <div className="flex items-center justify-between mt-8 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex space-x-2">
                    {points.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-blue-600 scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    Step {activeStep + 1} of {points.length}
                  </span>
                </div>
                
                <button className="px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-5 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your School?</h3>
            <p className="text-blue-100 mb-3 max-w-2xl mx-auto">
              Join hundreds of schools already benefiting from our comprehensive staffing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-3 py-2 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                <span>Start Your Journey</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-3 py-2 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}