import React from "react";
import { futures } from "../assets/assets.js";

const FutureSkills = () => {
  const items = [
    { 
      name: "Coding - Graphical & Python", 
      image: futures.ProgrammingImg,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    { 
      name: "Artificial Intelligence", 
      image: futures.ProgrammingImg,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    { 
      name: "Machine Learning", 
      image: futures.ProgrammingImg,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    { 
      name: "Robotics", 
      image: futures.ProgrammingImg,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    { 
      name: "AR & VR Tech", 
      image: futures.ProgrammingImg,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50"
    },
    { 
      name: "Internet of Things (IoT)", 
      image: futures.ProgrammingImg,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    { 
      name: "Biomimetic Robot", 
      image: futures.ProgrammingImg,
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50"
    },
    { 
      name: "Advanced Robotics", 
      image: futures.ProgrammingImg,
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50"
    },
  ];

  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

  return (
    <section className="py-6 px-4 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Kids with the Right{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">
              Future Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With the hands-on approach to AI, Coding, Robotics, and STEM, we cultivate
            a generation of innovators by providing the 21st-century skills to unleash
            the true potential of young minds.
          </p>
        </div>

        {/* Two Row Grid Layout */}
        <div className="space-y-8">
          
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((item, index) => (
              <ImageSkillCard 
                key={item.name}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((item, index) => (
              <ImageSkillCard 
                key={item.name}
                item={item}
                index={index + 4}
              />
            ))}
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Students Trained</div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Skills Offered</div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Image-based Skill Card Component
const ImageSkillCard = ({ item, index }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full shadow-lg`}>
          Trending
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Comprehensive curriculum designed for young innovators aged 8-16
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Ages 8-16</span>
          <button className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FutureSkills;