import React from 'react'
import { assets } from '../assets/assets'

const OurBelivers = () => {
  return (
    <section className="relative w-full py-16 bg-white">
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
            className="fill-[#062241]"
          ></path>
        </svg>
      </div>
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
            className="fill-[#082046] "
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082046]">
            Our Believers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Your trust in our services motivates us and strengthens our connections.
            Alone we can do so little, together we can do so much.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          
          <img 
            src={assets.chhatrpati} 
            alt="Believer Logo"
            className="w-25 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.ton} 
            alt="Believer Logo"
            className="w-25 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.MHS} 
            alt="Believer Logo"
            className="w-25 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.gps} 
            alt="Believer Logo"
            className="w-25 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

        </div>

      </div>
    </section>
  )
}

export default OurBelivers
