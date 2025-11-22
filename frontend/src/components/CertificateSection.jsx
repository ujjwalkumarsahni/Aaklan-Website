import React from 'react';

export default function CertificateSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating Certificate Icons */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/10 rounded-lg -rotate-6 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400/10 rounded-lg rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-red-400/10 rounded-lg -rotate-12 animate-float"></div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Learn to code and 
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"> get certificates</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
              Get certificates from prestigious global institutions and proudly show the world that you can code
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-yellow-400 hover:to-amber-400">
                Book a free lesson
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Certificates
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>Globally Recognized</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>Industry Validated</span>
              </div>
            </div>
          </div>
          
          {/* Certificate Visual */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main Certificate Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="border-4 border-yellow-400 rounded-xl p-6 text-center">
                  
                  {/* Certificate Header */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Achievement</h3>
                    <p className="text-gray-600">In recognition of successful completion</p>
                  </div>
                  
                  {/* Skills Badges */}
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Node.js</span>
                  </div>
                  
                  {/* Issuer */}
                  <div className="border-t pt-4">
                    <p className="text-gray-500 text-sm mb-2">Issued by</p>
                    <p className="font-semibold text-gray-900">Global Coding Institute</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full shadow-lg animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}