import React from 'react'
import { assets } from '../assets/assets'

const OurBelivers = () => {
  return (
    <section className="w-full py-16 bg-white">
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
            className="w-32 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.ton} 
            alt="Believer Logo"
            className="w-32 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.MHS} 
            alt="Believer Logo"
            className="w-32 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

          <img 
            src={assets.gps} 
            alt="Believer Logo"
            className="w-32 mx-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />

        </div>

      </div>
    </section>
  )
}

export default OurBelivers
