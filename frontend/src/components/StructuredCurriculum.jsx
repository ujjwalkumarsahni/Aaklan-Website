import React from 'react';

export default function StructuredCurriculum() {
  return (
    <section className="w-full py-16 px-4 bg-white relative overflow-hidden">
      
      {/* Wave Background */}
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
            className="fill-[#0B234A] "
          ></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-orange-400"
          ></path>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Structured Curriculum &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI education designed for all age groups with global standards
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-lg">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-ping delay-700"></div>
              
              <img
                src="https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png"
                alt="Structured Curriculum"
                className="w-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              
              {/* Age Groups */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3 text-sm">
                    1-2
                  </span>
                  Early Learning Program (Grades 1 & 2)
                </h3>
                <p className="text-gray-700">
                  Unique foundation program introducing basic AI concepts through interactive activities and games.
                </p>
              </div>

              {/* Grade Levels */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 text-sm">
                    3-12
                  </span>
                  Structured Grade-wise Syllabus (Grades 3 to 12)
                </h3>
                <p className="text-gray-700">
                  Comprehensive curriculum building advanced skills in AI, robotics, and coding with progressive complexity.
                </p>
              </div>

              {/* Standards */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mr-3">
                    🌐
                  </span>
                  Global Standards Alignment
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['CBSE', 'IB', 'IGCSE', 'ICSE', 'CSTA', 'CIE'].map((standard) => (
                    <span 
                      key={standard} 
                      className="bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1 rounded-full text-sm font-medium text-purple-600 border border-purple-200 hover:scale-105 transition-transform duration-200"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explore AAKLAN Curriculum</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}